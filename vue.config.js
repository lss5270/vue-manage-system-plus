const marked = require("marked")
const renderer = new marked.Renderer()
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
		
	},
	/* configureWebpack: {
		module: {
			rules: [{
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",
            options: {
							pedantic: true,
              renderer
            }
          }
        ]
			}]
		}
	} */
	chainWebpack: config => {
		config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  	
		// config.module
		// 	.rule('md')
		// 	.test(/\.md$/)
		// 	.use('html-loader')
		// 	.loader('html-loader')
		// 	.end()
		// 	.use('markdown-loader')
		// 	.loader('markdown-loader')
		// 	.end()
	
		// config.module.rules.push({
		// 	test: /\.md$/,
		// 	use: [
		// 		{
		// 			loader: "html-loader"
		// 		},
		// 		{
		// 			loader: "markdown-loader",
		// 			options: {
		// 			}
		// 		}
		// 	]
		// })
	}
	
}