import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import store from '@/store'
import { whiteList } from '@/common/config'

// lss 2021/5/14。路由配置，改成自动读取views下文件动态配置，可解决多人开发时路由不易维护的难题（也可获取接口动态路由然后使用addRoutes注册）
const contextInfo = require.context( // 获取文件，自动挂载在router下
	'../views', // 其组件目录的相对路径
	true, 		// 是否查询其子目录
	/\.vue/,	// 匹配基础组件文件名的正则表达式
)
let dynamicItems = []
contextInfo.keys().forEach(fileName => {
	const pathConfig = contextInfo(fileName)
	let path = '/' + fileName.substring(2, fileName.length - 4)
	if (path === '/login' || path.indexOf('/modal/') !== -1) { // 过滤非嵌套和模态弹窗
		return
	}
	dynamicItems.push({
		path,
		name: pathConfig.default.name,
		meta: {
			title: pathConfig.default.title
		},
		component: pathConfig.default
	})
})

const routes = [
	{
		path: '/home',
		name: 'home',
		component: Home,
		children: dynamicItems
	},
	{
		path: '/login',
		name: 'login',
		meta: { title: '登录' },
		component: () => import ('@/components/Login.vue')
	},
	{ path: '/:pathMatch(.*)*', redirect: '/error/404', hidden: true } // 添加404重定向，防止用户随意敲链接
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

// 全局钩子
router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} | 物息院文档后台管理系统`;
	const token = sessionStorage.getItem('token');
	const permissionMenu = store.state.user.permissionMenu;
	if (!token && to.path !== '/login') { // 未登录重定向到登录（除了登录页，其他都需要登录后才能进入）
		next('/login');
	}
	else if (permissionMenu.length > 0 && JSON.stringify(permissionMenu).indexOf(to.path) === -1) { // 防止用户通过敲击路由的方式，进入未授权菜单
		// 进入未授权页面，假如在白名单内，直接进入
		if (whiteList.find((v) => v === to.path)) {
			next();
		}
		// 进入未授权页面，假如未在白名单内，重定向到403
		else {
			next('/error/403');
		}
	}
	else {
		next();
	}
	
	// 钩子内也可改成动态注册路由（router.addRoutes），可参考：https://www.cnblogs.com/amylis_chen/p/13112300.html
});

export default router;