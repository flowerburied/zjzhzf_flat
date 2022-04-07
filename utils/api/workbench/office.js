import request from '../../request.js'


let woffice = {
	// 待办事项表-分页列表查询
	sysFlowTodo(params) {
		return request.request({
			url: '/sysFlow/sysFlowTodo/list',
			method: 'GET',
			params: params

		})
	},

	// 获取数据字典getAppFrom
	getAppFrom(params) {
		return request.request({
			url: '/actTask/getAppFrom',
			method: 'GET',
			params: params

		})
	},
	// todoList
	todoList(params) {
		return request.request({
			url: '/actTask/todoList',
			method: 'GET',
			params: params

		})
	},
	// 动态方法
	specialFun(params, url) {
		return request.request({
			url: url,
			method: 'GET',
			params: params

		})
	},
	// 通过流程定义id获取流程节点
	getProcessNode(data) {
		return request.request({
			url: '/activiti_process/getProcessNode',
			method: 'POST',
			data: data

		})
	},
	// 通过
	actTask(data) {
		return request.request({
			url: '/actTask/pass',
			method: 'POST',
			data: data

		})
	},
	// 获取驳回人
	getBackList(params) {
		return request.request({
			url: '/actTask/getBackList',
			method: 'GET',
			params: params

		})
	},
	// 获取驳回人
	actTaskback(params) {
		return request.request({
			url: '/actTask/back',
			method: 'GET',
			params: params
	
		})
	},
	


}
// 用户授权
export default woffice
