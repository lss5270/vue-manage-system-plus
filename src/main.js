import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import './assets/css/icon.css'

// if (process.env.NODE_ENV !== 'production') {	// 开发环境使用mock进行http请求拦截，实际开发时注释该代码块即可
require('./mock')
// }

const app = createApp(App)
installElementPlus(app)
app
	.use(store)
	.use(router)
	.mount('#app')