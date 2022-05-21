import request from '../request.js'


let prospect = {
	// 基础数据
	siteSurveyList(params) {
		return request.request({
			url: '/zhzf/siteSurvey/pageList',
			method: 'GET',
			params: params

		})
	},
	// 基础数据
	queryById(params) {
		return request.request({
			url: '/zhzf/siteSurvey/queryById',
			method: 'GET',
			params: params

		})
	},
	// 基础数据
	edit(params) {
		return request.request({
			url: '/zhzf/siteSurvey/edit',
			method: 'put',
			data: params

		})
	},
	// 基础数据
	add(params) {
		return request.request({
			url: '/zhzf/siteSurvey/add',
			method: 'post',
			data: params

		})
	},
	// 基础数据
	submit(params) {
		return request.request({
			url: '/zhzf/siteSurvey/submit',
			method: 'post',
			data: params
	
		})
	},
}
// 用户授权
export default prospect
