import request from '../request.js'


let prospect = {
	// 基础数据
	siteSurveyList(params) {
		return request.request({
			url: '/zhzf/siteSurvey/list',
			method: 'GET',
			params: params

		})
	},

}
// 用户授权
export default prospect
