import { createStore } from 'vuex'
// 拆分后的模块，逐个引入
import user from './modules/user'
import system from './modules/system'

const modules = {
	user,
	system,
}
export default createStore({
	modules: modules
})

