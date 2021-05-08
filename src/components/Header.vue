<template>
	<div class="header">
		<!-- 折叠按钮 -->
		<div
			class="collapse-btn"
			@click="collapseChage"
		>
			<i
				v-if="!collapse"
				class="el-icon-s-fold"
			/>
			<i
				v-else
				class="el-icon-s-unfold"
			/>
		</div>
		<div class="logo">
			后台管理系统
		</div>
		<div class="header-right">
			<div class="header-user-con">
				<!-- 消息中心 -->
				<div class="btn-bell">
					<el-tooltip
						effect="dark"
						:content="message?`有${message}条未读消息`:`消息中心`"
						placement="bottom"
					>
						<router-link to="/tabs">
							<i class="el-icon-bell" />
						</router-link>
					</el-tooltip>
					<span
						v-if="message"
						class="btn-bell-badge"
					/>
				</div>
				<!-- 用户头像 -->
				<div class="user-avator">
					<img src="../assets/img/img.jpg">
				</div>
				<!-- 用户名下拉菜单 -->
				<el-dropdown
					class="user-name"
					trigger="click"
					@command="handleCommand"
				>
					<span class="el-dropdown-link">
						{{ userInfo.nickName }}
						<i class="el-icon-caret-bottom" />
					</span>
					<template #dropdown>
						<el-dropdown-menu>
							<a
								href="https://github.com/lss5270/vue-manage-system-plus"
								target="_blank"
							>
								<el-dropdown-item>项目仓库</el-dropdown-item>
							</a>
							<el-dropdown-item
								divided
								command="loginout"
							>
								退出登录
							</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			fullscreen: false,
			message: 2
		};
	},
	computed: {
		userInfo() {
			let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
			return userInfo
		},
		collapse() {
			return this.$store.state.system.collapse;
		}
	},
	mounted() {
		if (document.body.clientWidth < 1500) {
			this.collapseChage();
		}
	},
	methods: {
		// 用户名下拉菜单选择事件
		async handleCommand(command) {
			if (command === 'loginout') {
				/* sessionStorage.clear();
				this.$router.push('/login'); */
				
				// 改成vuex登出模式，并且同时清除用户信息
				const res = await this.$store.dispatch('user/logout', {})
				// if (res){ 
				this.$router.push('/login');
				// }
			}
		},
		// 侧边栏折叠
		collapseChage() {
			this.$store.commit('system/hadndleCollapse', !this.collapse);
		}
	}
};
</script>
<style scoped>
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
}
.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
}
.header .logo {
    float: left;
    width: 250px;
    line-height: 70px;
}
.header-right {
    float: right;
    padding-right: 50px;
}
.header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
}
.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}
.btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}
.btn-bell .el-icon-bell {
    color: #fff;
}
.user-name {
    margin-left: 10px;
}
.user-avator {
    margin-left: 20px;
}
.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}
.el-dropdown-menu__item {
    text-align: center;
}
</style>
