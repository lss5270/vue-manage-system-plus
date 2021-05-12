import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
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
				component: () => import ('@/views/Dashboard.vue')
			}, {
				path: '/table',
				name: 'basetable',
				meta: {
					title: '表格'
				},
				component: () => import ('@/views/BaseTable.vue')
			}, {
				path: '/charts',
				name: 'basecharts',
				meta: {
					title: '图表'
				},
				component: () => import ('@/views/BaseCharts.vue')
			}, {
				path: '/form/baseform',
				name: 'baseform',
				meta: {
					title: '表单'
				},
				component: () => import ('@/views/BaseForm.vue')
			}, {
				path: '/form/upload',
				name: 'upload',
				meta: {
					title: '文件上传'
				},
				component: () => import ('@/views/Upload.vue')
			}, {
				path: '/tabs',
				name: 'tabs',
				meta: {
					title: 'tab标签'
				},
				component: () => import ('@/views/Tabs.vue')
			}, {
				path: '/permission',
				name: 'permission',
				meta: {
					title: '权限管理',
					permission: true
				},
				component: () => import ('@/views/Permission.vue')
			}, {
				path: '/i18n',
				name: 'i18n',
				meta: {
					title: '国际化语言'
				},
				component: () => import ('@/views/I18n.vue')
			}, {
				path: '/icon',
				name: 'icon',
				meta: {
					title: '自定义图标'
				},
				component: () => import ('@/views/Icon.vue')
			}, {
				path: '/error/404',
				name: '404',
				meta: {
					title: '找不到页面'
				},
				component: () => import (/* webpackChunkName: "404" */
					'@/views/404.vue')
			}, {
				path: '/error/403',
				name: '403',
				meta: {
					title: '没有权限'
				},
				component: () => import (/* webpackChunkName: "403" */
					'@/views/403.vue')
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
			'@/views/Login.vue')
	},
	{ path: '/:pathMatch(.*)*', redirect: '/error/404', hidden: true } // 添加404重定向，防止用户随意敲链接
];

const router = createRouter({
	// history: createWebHistory(process.env.BASE_URL),
	// history: createWebHistory('/vue-manage-system-plus-demo/'),	// 托管文件夹名称，https://lss5270.github.io/vue-manage-system-plus-demo/
	// history: createWebHashHistory('/vue-manage-system-plus-demo/'),	// 给出的网址为 `https://example.com/vue-manage-system-plus-demo#`
	history: createWebHashHistory(),
	routes
});

const whiteList = ['/login', '/error/403', '/error/404'];	// 无需授权的白名单
// 全局钩子
router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} | XX后台管理系统`;
	
	const token = sessionStorage.getItem('token');
	const permissionMenu = sessionStorage.getItem('permissionMenu') || '';
	// const permissionMenu = store.state.user.permissionMenu;
	let topath = to.path.replace('/', '');
	// console.log(permissionMenu, topath)
	
	if (!token && to.path !== '/login') { // 未登录重定向到登录（除了登录页，其他都需要登录后才能进入）
		next('/login');
	}
	else if (permissionMenu.length > 0 && permissionMenu.indexOf(topath) === -1) { // 防止用户通过敲击路由的方式，进入未授权菜单
		// 进入未授权页面，假如在白名单内，直接进入
		if (whiteList.indexOf(to.path) !== -1) {
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