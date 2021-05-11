
module.exports = {
	publicPath: './',
	outputDir: 'dist',
	assetsDir: 'static',
	lintOnSave: process.env.NODE_ENV !== 'production',
	productionSourceMap: false,
	devServer: {
		overlay: { // eslint校验开启
			warnings: true,
			errors: true
		},
		/* proxy: {
			'/api': 'http://localhost:3000',
		}, */
	},
	css: {
		
	} 
}