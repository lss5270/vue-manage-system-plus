<template>
	<div>
		<!-- <h2>{{ title }} -- 先用图片展示，后续再补上代码</h2> -->
		<div class="page_wrapper">
			<div class="page_wrapper_lef">
				<div class="dep_box">
					<div class="dep_title">
						部门
						<span class="i_add el-icon-plus" />
					</div>
					<div class="dep_tree">
						<el-tree
							:data="depData"
							:props="defaultProps"
							@node-click="handleNodeClick" 
						/>
					</div>
				</div>
			</div>
			<div class="page_wrapper_right">
				<div class="table_filter">
					<el-input
						size="mini"
						placeholder="姓名/手机号码"
						style="width: 200px; margin-right: 10px;"
					/>
					<el-button
						size="mini"
						type="primary"
					>
						查询
					</el-button>
					<el-button
						size="mini"
					>
						重置
					</el-button>
					<el-button
						size="mini"
						type="primary"
						style="float: right;"
					>
						+&nbsp;新增用户
					</el-button>
				</div>
			</div>
		</div>
		<div class="">
			效果参考图片：
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
		const state = reactive({
			depData: [{
				label: '一级部门 1',
				children: [{
					label: '二级部门 1-1',
					children: [{
						label: '三级部门 1-1-1'
					}]
				}]
			}, {
				label: '一级部门 2',
				children: [{
					label: '二级部门 2-1',
					children: [{
						label: '三级部门 2-1-1'
					}]
				}, {
					label: '二级部门 2-2',
					children: [{
						label: '三级部门 2-2-1'
					}]
				}]
			}, {
				label: '一级部门 3',
				children: [{
					label: '二级部门 3-1',
					children: [{
						label: '三级部门 3-1-1'
					}]
				}, {
					label: '二级部门 3-2',
					children: [{
						label: '三级部门 3-2-1'
					}]
				}]
			}],
			defaultProps: {
				children: 'children',
				label: 'label'
			}
		})
		onMounted(() => {
			
		})
		return {
			...toRefs(state),
			title
		}
	}
}
</script>

<style lang="scss" scoped>
.page_wrapper{
	display: flex;
	&_lef{
		width: 200px;
		margin-right: 10px;
		background: #fff;
		.dep_box{
			border: 1px solid #dfdfdf;
			min-height: 300px;
		}
		.dep_title{
			padding: 5px 10px;
			border-bottom: 1px solid #dfdfdf;
			.i_add{
				font-size: 12px;
				color: #666;
				border: 1px solid #dfdfdf;
				padding: 3px;
				float: right;
				cursor: pointer;
			}
		}
		.dep_tree{
			padding: 10px 0;
		}
	}
	&_right{
		flex: 1;
		// background: #fff;
		border: 1px solid #dfdfdf;
		.table_filter {
			background: #fff;
			padding: 10px;
			v-deep .el-input__inner{
				width: 200px !important;
			}
		}
	}
}
</style>

