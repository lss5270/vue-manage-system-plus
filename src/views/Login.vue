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
				<el-form-item prop="username">
					<el-input
						v-model="param.username"
						placeholder="username"
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
					Tips : 用户名和密码（admin 123123或者user 123123），admin具有全部菜单权限，user暂时返回4个菜单，可根据自己的需求自由分配菜单。
				</p>
			</el-form>
		</div>
	</div>
</template>

<script lang="ts">
import { reactive, onMounted, ref, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'	// 跟2.0中的this.$router和this.$route的相对应
import {
	useStore,
	// mapState,
	// mapMutations,
	// mapActions,
	// mapGetters
} from 'vuex'

import mixin3 from '@/common/mixin/mixin3' // test code
export default {
	// components: {},
	// 在初始 prop 解析之后立即调用，在 beforeCreate 钩子之前调用。setup 不是生命周期钩子函数！它只是基于 beforeCreate 运行，但函数内部无法通过 this 获取组件实例，setup中是没有this上下文的
	setup(props, context) {
		const { $push } = mixin3() 	// test code
		const router = useRouter()	// vue3.0已去掉this.$router
		// const route = useRoute()
		const store = useStore()	// vuex4.0已去掉this.$store
		const elmRefs = ref(null); 	// 获取真实dom ，vuex4.0已去掉this.$refs。所以使用过程有点非常曲折。。。
		
		// 方式一： 可传入任意类型的值，改变值的时候必须使用其value属性,例 refData.value = 2
		// const refData = ref(0)
		// 方式二： 只能传入引用类型的值
		const state = reactive({ // 创建响应式
			param: {
				username: 'admin',
				password: '123123'
			},
			rules: {
				username: [
					{ required: true, message: '请输入用户名', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
				]
			}
		})
		
		onMounted(() => {
			// this.$store.commit('system/clearTags');
			store.commit('system/clearTags');
			// console.log(elmRefs.value); // 得到一个 RefImpl 的对象, 通过 .value 访问到数据 
		})
		
		// 表单校验
		const submitForm = async () => {
			// this.$refs.refLogin.validate(valid => {
			elmRefs.value.validate(valid => {
				if (valid) {
					// 改成vuex登录模式，并且同时存储用户信息
					toLogin()
				} else {
					this.$message.error('请输入账号和密码');
					return false;
				}
			});
		}
		
		// 登录
		const toLogin = async () => {
			const res = await store.dispatch('user/login', state.param)
			if (res){
				// await getPermissionMenu()
				router.push('/');
				// $push('/'); // test code
			}
		}
		
		// 获取当前用户权限菜单等
		/* const getPermissionMenu = async () => {
			let par = { username: JSON.parse(sessionStorage['userInfo']).nickName }
			const res = await store.dispatch('user/getPermissionMenu', par)
			if (res){
				console.log('接口返回的菜单数组为：', res)
			}
		} */
		
		// 暴露给tmp
		return {
			...toRefs(state), // ref和原始property已经“链接”起来了，每个property都是指向原始对象相应 property 的 ref。
			submitForm,
			elmRefs,
		}
	}
	
	/* 
	// 旧版2.0语法注释
	data() {
		return {
			param: {
				username: 'admin',
				password: '123123'
			},
			rules: {
				username: [
					{ required: true, message: '请输入用户名', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
				]
			}
		};
	},
	created() {
		this.$store.commit('system/clearTags');
	},
	methods: {
		// 表单校验
		submitForm() {
			this.$refs.login.validate(valid => {
				if (valid) {
					// this.$message.success('登录成功');
					// localStorage.setItem('ms_username', this.param.username);
					// this.$router.push('/');
					
					// 改成vuex登录模式，并且同时存储用户信息
					this.toLogin()
				} else {
					this.$message.error('请输入账号和密码');
					return false;
				}
			});
		},
		// 登录
		async toLogin() {
			const res = await this.$store.dispatch('user/login', this.param)
			if (res){
				this.$router.push('/');
			}
			else {
				this.$message.error(res.msg);
			}
		},
		
	} */
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