import request from '../../request.js'


let workbench = {
	// 土地资产表-分页列表查询
	assetsAssetsLand(params) {
		return request.request({
			url: '/asset/assetsAssetsLand/list',
			method: 'GET',
			params: params
			
		})
	},
	// 巡查问题表-分页列表查询
	assetsPatrolQuestion(params) {
		return request.request({
			url: '/asset/assetsPatrolQuestion/list',
			method: 'GET',
			params: params
			
		})
	},
}
// 用户授权
export default workbench