<template>
	<div class="login-wrap">
		<div class="ms-login">
			<div class="ms-title">
				XX后台管理系统
			</div>
			<el-form
				ref="elmRefs"
				:model="param"
				:rules="rules"
				label-width="0px"
				class="ms-content"
			>
				<el-form-item prop="userName">
					<el-input
						v-model="param.userName"
						placeholder="userName"
						@keyup.enter="submitForm()"
					>
						<template #prepend>
							<el-button icon="el-icon-user" />
						</template>
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input
						v-model="param.password"
						type="password"
						placeholder="password"
						@keyup.enter="submitForm()"
					>
						<template #prepend>
							<el-button icon="el-icon-lock" />
						</template>
					</el-input>
				</el-form-item>
				<div class="login-btn">
					<el-button
						type="primary"
						@click="submitForm()"
					>
						登录
					</el-button>
				</div>
				<p class="login-tips">
					Tips : 用户名和密码（admin 123123或者user
					123123），admin具有全部菜单权限，user暂时返回4个菜单，可根据自己的需求自由分配菜单。
				</p>
			</el-form>
		</div>
	</div>
</template>

<script lang="ts">
import { reactive, onMounted, ref, toRefs } from 'vue';
import { useRouter, useRoute } from 'vue-router'; // 跟2.0中的this.$router和this.$route的相对应
import {
	useStore,
	// mapState,
	// mapMutations,
	// mapActions,
	// mapGetters
} from 'vuex';
export default {
	name: 'Login',
	title: '登录', // 动态注册路由时采用name作为title
	// components: {},
	// 在初始 prop 解析之后立即调用，在 beforeCreate 钩子之前调用。setup 不是生命周期钩子函数！它只是基于 beforeCreate 运行，但函数内部无法通过 this 获取组件实例，setup中是没有this上下文的
	setup(props, context) {
		const router = useRouter();
		const store = useStore();
		const elmRefs = ref(null);
		const rules = {
			userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
			password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
		};
		const state = reactive({
			param: {
				userName: 'tom3',
				password: '123123',
			},
		});

		onMounted(() => {
			store.commit('system/clearTags');
		});

		// 表单校验
		const submitForm = async () => {
			elmRefs.value.validate((valid) => {
				if (valid) {
					toLogin()
				} else {
					this.$message.error('请输入账号和密码');
					return false;
				}
			});
		};

		// 登录
		const toLogin = async () => {
			const res = await store.dispatch('user/login', state.param);
			console.log(res);
			if (res) {
				await getPermissionMenu()
				router.push('/dashboard');
			}
		};

		// 获取当前用户权限菜单等
	  const getPermissionMenu = async () => {
			let par = { userName: JSON.parse(sessionStorage['userInfo']).nickName }
			const res = await store.dispatch('user/getPermissionMenu', par)
			if (res){
				console.log('接口返回的菜单数组为：', res)
			}
		}

		// 暴露给tmp
		return {
			...toRefs(state), // ref和原始property已经“链接”起来了，每个property都是指向原始对象相应 property 的 ref。
			rules,
			submitForm,
			elmRefs,
		};
	}
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(~@/assets/img/login-bg.jpg);
  background-size: 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>