import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import store from '@/store'

const routes = [
	{
		path: '/',
		redirect: '/dashboard'
	}, {
		path: '/',
		name: 'Home',
		component: Home,
		children: [
			{
				path: '/dashboard',
				name: 'dashboard',
				meta: {
					title: '系统首页'
				},
				component: () => import (
					/* webpackChunkName: "dashboard" */
					'../views/Dashboard.vue')
			}, {
				path: '/table',
				name: 'basetable',
				meta: {
					title: '表格'
				},
				component: () => import (
					/* webpackChunkName: "table" */
					'../views/BaseTable.vue')
			}, {
				path: '/charts',
				name: 'basecharts',
				meta: {
					title: '图表'
				},
				component: () => import (
					/* webpackChunkName: "charts" */
					'../views/BaseCharts.vue')
			}, {
				path: '/form',
				name: 'baseform',
				meta: {
					title: '表单'
				},
				component: () => import (
					/* webpackChunkName: "form" */
					'../views/BaseForm.vue')
			}, {
				path: '/tabs',
				name: 'tabs',
				meta: {
					title: 'tab标签'
				},
				component: () => import (
					/* webpackChunkName: "tabs" */
					'../views/Tabs.vue')
			},
			{
				path: '/permission',
				name: 'permission',
				meta: {
					title: '权限管理',
					permission: true
				},
				component: () => import (
					/* webpackChunkName: "permission" */
					'../views/Permission.vue')
			}, {
				path: '/i18n',
				name: 'i18n',
				meta: {
					title: '国际化语言'
				},
				component: () => import (
					/* webpackChunkName: "i18n" */
					'../views/I18n.vue')
			}, {
				path: '/upload',
				name: 'upload',
				meta: {
					title: '上传插件'
				},
				component: () => import (
					/* webpackChunkName: "upload" */
					'../views/Upload.vue')
			}, {
				path: '/icon',
				name: 'icon',
				meta: {
					title: '自定义图标'
				},
				component: () => import (
					/* webpackChunkName: "icon" */
					'../views/Icon.vue')
			}, {
				path: '/404',
				name: '404',
				meta: {
					title: '找不到页面'
				},
				component: () => import (/* webpackChunkName: "404" */
					'../views/404.vue')
			}, {
				path: '/403',
				name: '403',
				meta: {
					title: '没有权限'
				},
				component: () => import (/* webpackChunkName: "403" */
					'../views/403.vue')
			}
		]
	}, {
		path: '/login',
		name: 'Login',
		meta: {
			title: '登录'
		},
		component: () => import (
			/* webpackChunkName: "login" */
			'../views/Login.vue')
	},
	{ path: '/:pathMatch(.*)*', redirect: '/404', hidden: true } // 添加404重定向，防止用户随意敲链接
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

// 全局钩子
router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} | XX后台管理系统`;
	
	const token = sessionStorage.getItem('token');
	const permissionMenu = sessionStorage.getItem('permissionMenu') || '';
	// const permissionMenu = store.state.user.permissionMenu;
	let topath = to.path.replace('/', '');
	// console.log(permissionMenu, topath)
	if (!token && to.path !== '/login') { // 未登录重定向到登录
		next('/login');
	} 
	else if (to.path !== '/login' && to.path !== '/dashboard' && permissionMenu.length > 0 && permissionMenu.indexOf(topath) === -1) { // 防止用户敲击路由进入未授权菜单，直接重定向到403页面
		next('/403');
	}
	else {
		next();
	}
	
	// 钩子内也可改成动态注册路由（router.addRoutes），可参考：https://www.cnblogs.com/amylis_chen/p/13112300.html
});

export default router;