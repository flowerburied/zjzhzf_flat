import request from '../../request.js'


let myCaseHomePage = {
	// 
	pagelist(params) {
		return request.request({
			url: '/zhzf/caseManagement/pagelist',
			method: 'GET',
			params: params

		})
	},
	//id查询
	queryById(params) {
		return request.request({
			url: '/zhzf/caseManagement/queryById',
			method: 'GET',
			params: params
	
		})
	},
	//uni-data-checkbox数据
	queryUser(params) {
		return request.request({
			url: '/sys/user/queryUser',
			method: 'GET',
			params: params
	
		})
	},
}
// 用户授权
export default myCaseHomePage
