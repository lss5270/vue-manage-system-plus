import http from '@/utils/request';

export const login = data => http.post('/v1/login', data)	// 登录

export const logout = data => http.post('/v1/logout', data)	// 登出

export const getPermissionMenu = data => http.post('/v1/getPermissionMenu', data)	// 获取用户权限菜单

