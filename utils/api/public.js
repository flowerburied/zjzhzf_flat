import request from '../request.js'


let publics = {
	// 基础数据
	upload(data) {
		return request.request({
			url: '/sys/common/upload',
			method: 'post',
			data: data
		})
	},

	exportPdfApi(params) {
		return request.request({
			url: '/zhzf/jointlySign/exportPdfs',
			method: 'GET',
			params: params
		})
	},

	queryDeptId(params) {
		return request.request({
			url: '/zhzf/transcriptQuestioning/queryDeptId',
			method: 'GET',
			params: params
		})
	},
	queryTreeList() {
		return request.request({
			url: '/sys/sysDepart/queryTreeList',
			method: 'GET',

		})
	},

	queryUserByDepId(params) {
		return request.request({
			url: '/sys/user/queryUserByDepId',
			method: 'GET',
			params: params

		})
	},

}
// 用户授权
export default publics
