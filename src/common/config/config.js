/**
 * 存放一些常用的公共配置
 * @description 暂时提供： appid、接口前缀、白名单页面、请求公共入参
 * @Author lss 
 * @Date 2021-3-9
 */
export const appid = process.env.NODE_ENV === 'development' ? 10001 : 10001 // 10005

export const wechatId = 'wx50e92e0f0a318a15' // 公司公众号：wxeb8f03dbe32285xx 个人号测试：wx50e92e0f0a318a15

export const baseUrl = process.env.NODE_ENV === 'development' ? 'http://api.story_1146.xxx.test.xxx.com/v1' : 'http://api.story_1146.xxx.test.xxx.com/v1'// 'http://api.xxx.com/v1'

// 白名单页面(移动端)
export const publicPages = [
	'/pages/tabBar/home/home',
	'/pages/tabBar/goodsConfluence/goodsConfluence',
	'/pages/tabBar/inviteRewards/inviteRewards',
	'/pages/help/agree',
	'/pages/help/sellerAgree',
]

export const PLATFORM = process.env.UNI_PLATFORM || process.env.VUE_APP_PLATFORM // h5、mp-weixin、mp-alipay、mp-baidu、mp-toutiao、mp-qq

// 请求公共入参
export const requstParams = () => {
	let par = {
		appid: appid, 								// 应用分配的APPID
		token: sessionStorage['token'],				// 登陆状态下传递的登陆认证TOKEN，需要登陆状态的接口，此值为必填
		_platform: PLATFORM === 'h5' ? 3 : 5,		// 请求的平台参数，PC:1; APP:2; H5:3; wechat:4; 小程序:5
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
