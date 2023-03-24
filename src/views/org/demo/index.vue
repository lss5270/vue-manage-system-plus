<template>
	<div class="">
		<!-- <vue-markdown :source="mdSource" /> -->
		<markdown />
	</div>
</template>

<script>
import { reactive, onMounted, ref, toRefs } from 'vue'
// import VueMarkdown from 'vue-markdown'
import markdown from './README.md'
import 'highlight.js/styles/github.css'
import 'github-markdown-css'

export default {
	name: 'OrgDemo',
	title: '组织机构逻辑',
	components: {
		// VueMarkdown
		markdown
	},
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
