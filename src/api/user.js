import http from '@/utils/request';

export const login = data => http.post('/v1/login', data)	// 登录

export const logout = data => http.post('/v1/logout', data)	// 登出

export const getUserInfo = data => http.post('/v1/getUserInfo', data)	// 获取用户信息，包含权限菜单PermissionMenu

