<template>
	<div>
		<h2>{{ title }} -- 先用图片展示，后续再补上代码</h2>
		<div class="">
			<img
				src="@/views/org/readmeImg/userdep.jpg"
				alt=""
				style="width: 100%"
			>
		</div>
	</div>
</template>

<script>
import { reactive, onMounted, ref, toRefs } from 'vue'
export default {
	name: 'Userdep',
	title: '用户部门管理',
	setup(props, context) {
		const title = '用户部门管理'
		onMounted(() => {
			
		})
		return {
			title
		}
	}
}
</script>

<style>
</style>
