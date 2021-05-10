const Mock = require('mockjs')
// 使用语法：1.Mock.mock( rurl, function( options ) ) , 2.Mock.mock( rurl, rtype, function( options ) )

// 登录（登录后需获取动态路由）
Mock.mock('/v1/login', 'post', (options) => {
	console.log(options)
	let par = JSON.parse(options.body)
	/* let resData = {
		loginCity: '广州',
		loginDate: '2021-3-3',
		headimg: 'http://www.master.ypzan.test.chaozhiit.com:880/Public/headImage/20210421/2104211400575741.jpg',
		mobile: '',
		nickName: JSON.parse(options.body).username,
		token: '5b21ca65059261c92b8e996669129783',
		uid: 139620
	} */
	let resData = {"error":0,"msg":"ok","body":{loginCity: '广州',loginDate: '2021-3-3',"token":"153eae3fe54315062d2151f9d1218f54","uid":139620,"nickName":JSON.parse(options.body).username,"mobile":"","fund":"24101.74","fund_lock":"955.00","gcoin":36,"headimg":"http:\/\/www.master.ypzan.test.chaozhiit.com:880\/Public\/headImage\/20210421\/2104211400575741.jpg"},"time":1620468008}
	let errorRes = {"error":70001,"msg":"账号不存在","time":1620467475}
	if(par.username === 'admin' && par.password === '123123'){
		return resData
	}else if(par.username === 'user' && par.password === '123123'){
		return resData
	}else{
		return errorRes
	}
	
})
// 登出
Mock.mock('/v1/logout', 'post', (options) => {
	console.log(options)
	let resData = {
		error: 0,
		msg: 'ok',
		body: '退出成功',
		time: 1620466240,
	}
	return resData
})
// 获取动态路由（模拟接口，根据options.body参数返回不同路由）
Mock.mock('/v1/getPermissionMenu', 'post', (options) => {
	console.log(options)
	let par = JSON.parse(options.body)
	
	let adminData = {
		error: 0,
		msg: 'ok',
		time: 1620466240,
		body: [
			{
				icon: 'el-icon-lx-home',
				index: 'dashboard',
				title: '系统首页'
			},
			{
				icon: 'el-icon-lx-cascades',
				index: 'table',
				title: '基础表格'
			},
			{
				icon: 'el-icon-lx-copy',
				index: 'tabs',
				title: 'tab选项卡'
			},
			{
				icon: 'el-icon-lx-calendar',
				index: '3',
				title: '表单相关',
				children: [
					{
						index: 'form',
						title: '基本表单'
					},
					{
						index: '3-2',
						title: '三级菜单',
						children: [
							{
								index: 'editor',
								title: '富文本编辑器'
							},
							{
								index: 'markdown',
								title: 'markdown编辑器'
							}
						]
					},
					{
						index: 'upload',
						title: '文件上传'
					}
				]
			},
			{
				icon: 'el-icon-lx-emoji',
				index: 'icon',
				title: '自定义图标'
			},
			{
				icon: 'el-icon-pie-chart',
				index: 'charts',
				title: 'schart图表'
			},
			{
				icon: 'el-icon-lx-global',
				index: 'i18n',
				title: '国际化功能'
			},
			{
				icon: 'el-icon-lx-warn',
				index: '7',
				title: '错误处理',
				children: [
					{
						index: '403',
						title: '403页面'
					},
					{
						index: '404',
						title: '404页面'
					}
				]
			},
			
		],
	}
	let userData = {
		error: 0,
		msg: 'ok',
		time: 1620466240,
		body: [
			{
				icon: 'el-icon-lx-home',
				index: 'dashboard',
				title: '系统首页'
			},
			{
				icon: 'el-icon-lx-cascades',
				index: 'table',
				title: '基础表格'
			},
			{
				icon: 'el-icon-lx-global',
				index: 'i18n',
				title: '国际化功能'
			},
			{
				icon: 'el-icon-lx-warn',
				index: '7',
				title: '错误处理',
				children: [
					{
						index: '403',
						title: '403页面'
					},
					{
						index: '404',
						title: '404页面'
					}
				]
			},
			
		],
	}
	if(par.username === 'admin'){
		return adminData
	}else{
		return userData
	}
})

// 获取表格数据
Mock.mock('/v1/getTableData', 'post', (options) => {
	console.log(options)
	let tableData = {
		error: 0,
		msg: 'ok',
		time: 1620466240,
		body: {
			'list': [
				{
					'id': 1,
					'name': '张三',
					'money': 123,
					'address': '广东省东莞市长安镇',
					'state': '成功',
					'date': '2019-11-1',
					'thumb': 'https://lin-xin.gitee.io/images/post/wms.png'
				},
				{
					'id': 2,
					'name': '李四',
					'money': 456,
					'address': '广东省广州市白云区',
					'state': '成功',
					'date': '2019-10-11',
					'thumb': 'https://lin-xin.gitee.io/images/post/node3.png'
				},
				{
					'id': 3,
					'name': '王五',
					'money': 789,
					'address': '湖南省长沙市',
					'state': '失败',
					'date': '2019-11-11',
					'thumb': 'https://lin-xin.gitee.io/images/post/parcel.png'
				},
				{
					'id': 4,
					'name': '赵六',
					'money': 1011,
					'address': '福建省厦门市鼓浪屿',
					'state': '成功',
					'date': '2019-10-20',
					'thumb': 'https://lin-xin.gitee.io/images/post/notice.png'
				}
			],
			'pageTotal': 40,
		}
	}
	return tableData
})




