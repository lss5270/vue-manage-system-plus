<template>
	<div class="">
		<p>组织机构逻辑展示--md文件显示暂未完成。如有需要请自行阅览org下的md文件</p>
		<vue-markdown :source="mdSource" />
	</div>
</template>

<script>
import { reactive, onMounted, ref, toRefs } from 'vue'
// import VueMarkdown from 'vue-markdown'
/* import readme from './README.md'
console.log(readme) */
export default {
	name: 'OrgDemo',
	title: '组织机构逻辑',
	/* components: {
		VueMarkdown
	}, */
	data() {
		return {
			mdSource: '# 组织机构org逻辑梳理',
		}
	},
	mounted() {
		
	}
	/* setup(props, context) {
		const mdSource = '# 组织机构org逻辑梳理'
		onMounted(() => {
			
		})
		return {
			mdSource
		}
	} */
}
</script>

<style>
</style>
