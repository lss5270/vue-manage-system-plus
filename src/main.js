import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from '@/plugins/element'
import '@/assets/css/icon.css'
import filters from '@/common/filter'
import mixins from '@/common/mixin'
import {
	debounce,
	throttle,
} from '@/common/utils'
// if (process.env.NODE_ENV !== 'production') {	// 开发环境使用mock进行http请求拦截，实际开发时注释该代码块即可
require('./mock')
// }

const app = createApp(App)
installElementPlus(app)

// 全局过滤器（采用全局方法形式模拟实现vue2.0的语法）
app.config.globalProperties.$filters = filters

// 全局方法
app.config.globalProperties.$utils = {
	debounce,
	throttle,
}

// 全局 mixin
app.mixin(mixins)

app.use(store).use(router).mount('#app')