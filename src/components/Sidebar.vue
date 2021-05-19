<template>
	<div class="sidebar">
		<el-menu
			class="sidebar-el-menu"
			:default-active="currentPath"
			:collapse="collapse"
			background-color="#324157"
			text-color="#bfcbd9"
			active-text-color="#20a0ff"
			unique-opened
			router
		>
			<template v-for="item in menuItems">
				<template v-if="item.children">
					<el-submenu
						:key="item.path"
						:index="item.path"
					>
						<template #title>
							<i :class="item.icon" />
							<span>{{ item.title }}</span>
						</template>
						<template v-for="subItem in item.children">
							<!-- 二级菜单，含子菜单 -->
							<el-submenu
								v-if="subItem.children"
								:key="subItem.path"
								:index="subItem.path"
							>
								<template #title>
									{{ subItem.title }}
								</template>
								<!-- 三级菜单 -->
								<el-menu-item
									v-for="(threeItem, i) in subItem.children"
									:key="i"
									:index="threeItem.path"
								>
									{{ threeItem.title }}
								</el-menu-item>
							</el-submenu>
							<!-- 二级菜单，不含子菜单 -->
							<el-menu-item
								v-else
								:key="subItem.path"
								:index="subItem.path"
							>
								{{ subItem.title }}
							</el-menu-item>
						</template>
					</el-submenu>
				</template>
				<!-- 一级菜单 -->
				<template v-else>
					<el-menu-item
						:key="item.path"
						:index="item.path"
					>
						<i :class="item.icon" />
						{{ item.title }}
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<script>
import { reactive, onMounted, computed, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
	setup() {
	    const route = useRoute()
	    const store = useStore()
	    
		const currentPath = computed(() => {
			return 'route.path';
		})
		const collapse = computed(() => {
			return store.state.system.collapse;
		})
		const menuItems = computed(() => {
			return store.state.user.permissionMenu.body
		})
		
		onMounted(() => {
			getPermissionMenu()
		})
		
		// 获取当前用户权限菜单等（暂时放在组件内获取，不然刷新页面菜单会消失）
		const getPermissionMenu = async () => {
			// 动态获取菜单接口入参一般为token或者userId，因为采用mock模拟返回所以临时使用nickName作为角色入参，实际开发可根据接口差异修改入参
			let par = { username: JSON.parse(sessionStorage['userInfo']).username }
			const res = await store.dispatch('user/getPermissionMenu', par)
			if (res){ 
				console.log('接口返回的菜单数组为：', res)
			}
		}
		return {
		    currentPath,
			  collapse,
		    menuItems
		}
	}
	/* 
	// 2.0语法注释
	data() {
		return {
			// menuItems: []
		};
	},
	computed: {
		currentPath() {
			return this.$route.path;
		},
		collapse() {
			return this.$store.state.system.collapse
		},
		menuItems() {
			return this.$store.state.user.permissionMenu
		},
	},
	mounted() {
		// 用户每次刷新页面都会重新获取一遍菜单，防止store中的数据丢失
		this.getPermissionMenu()
	},
	methods: {
		// 获取当前用户权限菜单等（暂时放在组件内获取，不然刷新页面菜单会消失）
		async getPermissionMenu() {
			// 动态获取菜单接口入参一般为token或者userId，因为采用mock模拟返回所以临时使用nickName作为角色入参，实际开发可根据接口差异修改入参
			let par = { username: JSON.parse(sessionStorage['userInfo']).nickName }
			const res = await this.$store.dispatch('user/getPermissionMenu', par)
			if (res){ 
				console.log('接口返回的菜单数组为：', res)
				// this.menuItems = res
			}
		}
	} */
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
