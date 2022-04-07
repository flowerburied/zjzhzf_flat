import request from '../../request.js'


let schedule = {
	// 选择人员接口
	queryUserComponentData(params) {
		return request.request({
			url: '/sys/user/queryUserComponentData',
			method: 'GET',
			params: params

		})
	},
	// 新增日程接口
	sysWorkScheduleadd(params) {
		return request.request({
			url: '/portal/sysWorkSchedule/add',
			method: 'POST',
			data: params

		})
	},
	//日程列表接口
	sysWorkSchedulelist(params) {
		return request.request({
			url: '/portal/sysWorkSchedule/list',
			method: 'GET',
			params: params

		})
	},
}
// 用户授权
export default schedule
