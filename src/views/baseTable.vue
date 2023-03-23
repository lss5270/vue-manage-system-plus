<template>
	<div>
		<div class="crumbs">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item>
					<i class="el-icon-lx-cascades" /> 基础表格
				</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container">
			<div class="handle-box">
				<el-button
					type="primary"
					size="small"
					icon="el-icon-delete"
					class="handle-del mr10"
					@click="delAllSelection"
				>
					批量删除
				</el-button>
				<el-select
					v-model="query.address"
					placeholder="地址"
					size="small"
					class="handle-select mr10"
				>
					<el-option
						key="1"
						label="广东省"
						value="广东省"
					/>
					<el-option
						key="2"
						label="湖南省"
						value="湖南省"
					/>
				</el-select>
				<el-input
					v-model="query.name"
					placeholder="用户名"
					size="small"
					class="handle-input mr10"
				/>
				<el-button
					type="primary"
					size="small"
					icon="el-icon-search"
					@click="handleSearch"
				>
					搜索
				</el-button>
			</div>
			<el-table
				ref="multipleTable"
				:data="tableData"
				border
				class="table"
				:height="800"
				header-cell-class-name="table-header"
				@selection-change="handleSelectionChange"
			>
				<el-table-column
					type="selection"
					width="55"
					align="center"
				/>
				<el-table-column
					prop="id"
					label="ID"
					width="55"
					align="center"
				/>
				<el-table-column
					prop="name"
					label="用户名"
				/>
				<el-table-column label="账户余额">
					<template #default="scope">
						￥{{ scope.row.money }}
					</template>
				</el-table-column>
				<el-table-column
					label="头像(查看大图)"
					align="center"
				>
					<template #default="scope">
						<el-image
							class="table-td-thumb"
							:src="scope.row.thumb"
							:preview-src-list="[scope.row.thumb]"
						/>
					</template>
				</el-table-column>
				<el-table-column
					prop="address"
					label="地址"
				/>
				<el-table-column
					label="状态"
					align="center"
				>
					<template #default="scope">
						<el-tag
							:type="
								scope.row.state === '成功'
									? 'success'
									: scope.row.state === '失败'
										? 'danger'
										: ''
							"
						>
							{{ scope.row.state }}
						</el-tag>
					</template>
				</el-table-column>

				<el-table-column
					prop="date"
					label="注册时间"
				/>
				<el-table-column
					label="操作"
					width="180"
					align="center"
				>
					<template #default="scope">
						<el-button
							type="text"
							icon="el-icon-edit"
							@click="handleEdit(scope.$index, scope.row)"
						>
							编辑
						</el-button>
						<el-button
							type="text"
							icon="el-icon-delete"
							class="red"
							@click="handleDelete(scope.$index, scope.row)"
						>
							删除
						</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="pagination">
				<el-pagination
					background
					layout="total, prev, pager, next"
					:current-page="query.pageIndex"
					:page-size="query.pageSize"
					:total="pageTotal"
					@current-change="handlePageChange"
				/>
			</div>
		</div>

		<!-- 编辑弹出框 -->
		<el-dialog
			v-model="editVisible"
			title="编辑"
			width="30%"
		>
			<el-form
				ref="form"
				:model="form"
				label-width="70px"
			>
				<el-form-item label="用户名">
					<el-input v-model="form.name" />
				</el-form-item>
				<el-form-item label="地址">
					<el-input v-model="form.address" />
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="editVisible = false">取 消</el-button>
					<el-button
						type="primary"
						@click="saveEdit"
					>确 定</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script>
import { getTableData } from '@/api/index';
export default {
	name: 'BaseTable',
	title: '表格',
	data() {
		return {
			query: {
				address: '',
				name: '',
				pageIndex: 1,
				pageSize: 10
			},
			tableData: [],
			multipleSelection: [],
			delList: [],
			editVisible: false,
			pageTotal: 0,
			form: {},
			idx: -1,
			id: -1
		};
	},
	created() {
		this.getData();
	},
	methods: {
		// 获取表格数据
		async getData() {
			const res = await getTableData(this.query)
			console.log('接口返回数据为：', res);
			this.tableData = res.list;
			this.pageTotal = res.pageTotal || 50;
			/* getTableData(this.query).then(res => {
                console.log('接口返回数据为：', res);
                this.tableData = res.list;
                this.pageTotal = res.pageTotal || 50;
            }); */
		},
		// 触发搜索按钮
		handleSearch() {
			// this.$set(this.query, 'pageIndex', 1); // this.$set在3.0已废弃。用 proxy 实现双向绑定不会出现不更新的问题
			this.query.pageIndex = 1;
			this.getData();
		},
		// 删除操作
		handleDelete(index) {
			// 二次确认删除
			this.$confirm('确定要删除吗？', '提示', {
				type: 'warning'
			}).then(() => {
				this.$message.success('删除成功');
				this.tableData.splice(index, 1);
			}).catch(() => {});
		},
		// 多选操作
		handleSelectionChange(val) {
			this.multipleSelection = val;
		},
		delAllSelection() {
			const length = this.multipleSelection.length;
			let str = '';
			this.delList = this.delList.concat(this.multipleSelection);
			for (let i = 0; i < length; i++) {
				str += this.multipleSelection[i].name + ' ';
			}
			this.$message.error(`删除了${str}`);
			this.multipleSelection = [];
		},
		// 编辑操作
		handleEdit(index, row) {
			this.idx = index;
			this.form = row;
			this.editVisible = true;
		},
		// 保存编辑
		saveEdit() {
			this.editVisible = false;
			this.$message.success(`修改第 ${this.idx + 1} 行成功`);
			// this.$set(this.tableData, this.idx, this.form);
			this.tableData[this.idx] = this.form;
			// this.$forceUpdate();
		},
		// 分页导航
		handlePageChange(val) {
			// this.$set(this.query, 'pageIndex', val);
			this.query.pageIndex = val;
			this.getData();
		}
	}
};
</script>

<style scoped>
/deep/ .el-pagination .el-icon{
	display: inline-block !important;
}
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
		height: calc(100vh - 320px) !important;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
</style>
