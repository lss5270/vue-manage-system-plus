<template>
	<div class="sidebar">
		<el-menu
			class="sidebar-el-menu"
			:default-active="onRoutes"
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
						:key="item.index"
						:index="item.index"
					>
						<template #title>
							<i :class="item.icon" />
							<span>{{ item.title }}</span>
						</template>
						<template v-for="subItem in item.children">
							<!-- 二级菜单，含子菜单 -->
							<el-submenu
								v-if="subItem.children"
								:key="subItem.index"
								:index="subItem.index"
							>
								<template #title>
									{{ subItem.title }}
								</template>
								<!-- 三级菜单 -->
								<el-menu-item
									v-for="(threeItem, i) in subItem.children"
									:key="i"
									:index="threeItem.index"
								>
									{{ threeItem.title }}
								</el-menu-item>
							</el-submenu>
							<!-- 二级菜单，不含子菜单 -->
							<el-menu-item
								v-else
								:key="subItem.index"
								:index="subItem.index"
							>
								{{ subItem.title }}
							</el-menu-item>
						</template>
					</el-submenu>
				</template>
				<!-- 一级菜单 -->
				<template v-else>
					<el-menu-item
						:key="item.index"
						:index="item.index"
					>
						<i :class="item.icon" />
						<template #title>
							{{ item.title }}
						</template>
						<!-- <slot><span>{{ item.title }}</span></slot> -->
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<script>

export default {
	data() {
		return {
			menuItems: []
		};
	},
	computed: {
		onRoutes() {
			return this.$route.path.replace('/', '');
		},
		collapse() {
			return this.$store.state.system.collapse
		},
		// menuItems() {
		// 	return this.$store.state.user.permissionMenu
		// },
	},
	mounted() {
		this.getPermissionMenu()
	},
	methods: {
		// 获取当前用户权限菜单等（暂时放在该组件获取，不然刷新页面菜单会消失）
		async getPermissionMenu() {
			let par = { username: JSON.parse(sessionStorage['userInfo']).nickName }
			const res = await this.$store.dispatch('user/getPermissionMenu', par)
			if (res){ 
				console.log('接口返回的菜单数组为：', res)
				this.menuItems = res
				// sessionStorage['permissionMenu'] = JSON.stringify(res)
			}
		}
	}
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
