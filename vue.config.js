const path = require('path')
function resolve (dir) {
	return path.join(__dirname, dir)
}
module.exports = {
	publicPath: '/',
	devServer: {
		open: true,
		host: 'localhost',
		port: 8080,
		proxy: {
			'/api': { // 这里最好有一个 /
				target: 'http://192.168.130.120:8007', // 后台接口域名
				ws: false, // 如果要代理 websockets，配置这个参数
				changeOrigin: true, // 是否跨域
				pathRewrite: {
					'^$/api': ''
				}
			}
		}
	}
}