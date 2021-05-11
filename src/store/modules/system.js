/**
 * 状态管理--系统配置（刷新页面会消失，要兼容浏览器需要本地存一份）
 * @description 系统配置相关的数据全部存于该文件
 * @Author lss 
 * @Date 2021-3-8
 */

const state = {
	tagsList: [],		// 标签页数组
	collapse: false,	// 是否折叠收起菜单
}

const mutations = {
	delTagsItem(state, data) {
		state
	        .tagsList
	        .splice(data.index, 1);
	},
	setTagsItem(state, data) {
	    state
	        .tagsList
	        .push(data)
	},
	clearTags(state) {
	    state.tagsList = []
	},
	closeTagsOther(state, data) {
	    state.tagsList = data;
	},
	closeCurrentTag(state, data) {
	    for (let i = 0, len = state.tagsList.length; i < len; i++) {
	        const item = state.tagsList[i];
	        if (item.path === data.$route.fullPath) {
	            if (i < len - 1) {
	                data
	                    .$router
	                    .push(state.tagsList[i + 1].path);
	            } else if (i > 0) {
	                data
	                    .$router
	                    .push(state.tagsList[i - 1].path);
	            } else {
	                data
	                    .$router
	                    .push('/');
	            }
	            state
	                .tagsList
	                .splice(i, 1);
	            break;
	        }
	    }
	},
	// 侧边栏折叠
	hadndleCollapse(state, data) {
	    state.collapse = data;
		// sessionStorage['collapse'] = data;
	}
}

const actions = {
	
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}