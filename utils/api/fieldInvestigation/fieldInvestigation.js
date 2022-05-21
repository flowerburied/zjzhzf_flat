import request from '../../request.js'


let fieldInvestigation = {
	// 询问笔录列表
	transcriptpageList(params) {
		return request.request({
			url: '/zhzf/transcriptQuestioning/pageList',
			method: 'GET',
			params: params

		})
	},
	//调查询问人 树查询
	queryTreeList(params) {
		return request.request({
			url: '/sys/sysDepart/queryTreeList',
			method: 'GET',
			params: params

		})
	},
	//调查询问人 树查询
	TreeListlist(params) {
		return request.request({
			url: '/sys/user/list',
			method: 'GET',
			params: params

		})
	},


}
// 用户授权
export default fieldInvestigation
