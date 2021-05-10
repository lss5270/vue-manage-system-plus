import axios from 'axios';
import { ElMessage } from 'element-plus'
// import { Router, useRouter, useRoute } from 'vue-router' // Router 是TS中的接口 js可以不管它
import router from '@/router'
// MD5
import { getSignString, md5 } from './tools'
import { baseUrl, requstParams } from '@/common/config/config'

const service = axios.create({
	// process.env.NODE_ENV === 'development' 来判断是否开发环境
	// easy-mock服务挂了，暂时不使用了
	// baseURL: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128', //baseUrl
	timeout: 5000
});

service.interceptors.request.use(
	config => {
		// lss 2021/5/10 新增ajax请求的公共入参封装 ==============================
		// config.baseUrl = baseUrl
		/* config.params = { ...requstParams() }
		
		const newAllPar = { ...config.params, ...config.data }
		config.header['x-sign'] = md5(md5(getSignString(newAllPar)) + md5('73069389154442C614BE8D8202FDD054532C28D5412DD75BF975FB951C740A30'))
		 */
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
			// return response.data;
			// lss 2021/5/10 新增ajax回参统一处理 ==============================
			// 0成功状态
			if (response.data.error === 0){
				return response.data.body
			}
			// tonken失效等，重定向到登录页。10010 10011 
			else if (response.data.error === 10010 || response.data.error === 10011){
				ElMessage.error(response.data.msg)
				sessionStorage.clear()
				router.push('/login')
			}
			// 特殊情况，部分返回码返回整个response.data，用于页面做逻辑处理
			/* else if(response.data.error ===  || response.data.error === ){
				return response.data
			} */	
			// 其他情况统一弹出信息框，避免业务代码中出现一大堆信息框的冗余代码
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
