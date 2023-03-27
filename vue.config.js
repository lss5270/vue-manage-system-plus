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
	parallel: false, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
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
			.end()
	}
}