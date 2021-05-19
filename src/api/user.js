import http from '@/common/request';

export const login = (data) => {
	http.post('/api/user/login', data).then(function(result){
		console.log('------------', result);
	})
}

export const logout = data => http.post('/v1/logout', data)	// 登出

export const getPermissionMenu = data => {
	http.post('/v1/getPermissionMenu', data).then(function(result){
		console.log('------------', result);
	})
}