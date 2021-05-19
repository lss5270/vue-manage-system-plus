import axios from 'axios';
import { ElMessage } from 'element-plus'
// import { Router, useRouter, useRoute } from 'vue-router' // Router 是TS中的接口 js可以不管它
import router from '@/router'
// MD5
import { getSignString, md5 } from './tools'

import { baseUrl, requstParams } from '@/common/config'

const service = axios.create({
	withCredentials: true, // send cookies when cross-domain requests
	timeout: 5000
});

service.interceptors.request.use(
	config => {
		config.params = { ...requstParams() };
		// const newAllPar = { ...config.params, ...config.data }
		// config.header['x-sign'] = md5(md5(getSignString(newAllPar)) + md5('73069389154442C614BE8D8202FDD054532C28D5412DD75BF975FB951C740A30'))
		config.headers.Authorization = sessionStorage['token']; // 根据实际情况自行修改
		
		return config;
	},
	error => {
		console.log(error);
		return Promise.reject();
	}
);

service.interceptors.response.use(
	response => {
		if (response.status === 200) {
			if (response.data.code === 0){
				return response.data
			}
			else if (response.data.error === 10010 || response.data.error === 10011){
				ElMessage.error(response.data.msg)
				sessionStorage.clear()
				router.push('/login')
			}
			else {
				ElMessage.error(response.data.msg)
			}
		} else {
			Promise.reject();
		}
	},
	error => {
		console.log(error);
		return Promise.reject();
	}
);

export default service;
