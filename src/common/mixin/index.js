/**
 * vue全局混入一些使用频率非常高的方法，全部vue示例都具有混入的方法
 * @description 可根据需要自己添加全局属性、方法（但是要注意与实例中的属性、方法命名冲突）
 * @Author lss 
 * @Date 2021-3-8
 */

export default {
	data(){
		return {
			// page: 0, // 页码
			// pageNum: 6, // 每页加载数据量
			// loadingType: 1, // 0加载前 1加载中 2没有更多
		}
	},
	mounted() {
	    // console.log(this.$route) // test
	},
	methods: {
		log(data) {
			console.log(JSON.parse(JSON.stringify(data)))
		},
		// 3.0已经去掉this.$router等属性，模拟一个能在3.0中使用的push方法
		$push(to) {
			this.$router.push(to);
		}
	}
}