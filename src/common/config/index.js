/**
 * 存放一些常用的公共配置
 * @description 暂时提供： appid、接口前缀、白名单页面、请求公共入参
 * @Author lss 
 * @Date 2021-3-9
 */
export const appid = process.env.NODE_ENV === 'development' ? 10001 : 10001 // 10005

export const wechatId = 'wx50e92e0f0a318a15' // 公司公众号：wxeb8f03dbe32285xx 个人号测试：wx50e92e0f0a318a15

export const baseUrl = process.env.NODE_ENV === 'development' ? 'http://192.168.130.120:8007' : 'http://192.168.130.120:8007'// 'http://api.xxx.com/v1'

export const whiteList = ['/login', '/error/403', '/error/404'];	// 无需授权的白名单

export const PLATFORM = process.env.UNI_PLATFORM || process.env.VUE_APP_PLATFORM // h5、mp-weixin、mp-alipay、mp-baidu、mp-toutiao、mp-qq

// 请求公共入参
export const requstParams = () => {
	let par = {
		token: sessionStorage['token'],				// 登陆状态下传递的登陆认证TOKEN，需要登陆状态的接口，此值为必填
		t: parseInt(new Date().getTime() / 1000), 	// 当前时间的时间戳，系统最大允许误差为前后3分钟
	}
	if (!par.token){
		// 防止token传false回去，造成签名失败
		delete par.token
	}
	return par
}
/* module.exports = {
	publicPages,
	baseUrl
}; */
