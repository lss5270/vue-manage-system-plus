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
require('./mock')

const app = createApp(App)
installElementPlus(app)
app.config.globalProperties.$filters = filters
// 全局方法
app.config.globalProperties.$utils = {
	debounce,
	throttle,
}
// 全局 mixin
app.mixin(mixins)

app.use(store).use(router).mount('#app')