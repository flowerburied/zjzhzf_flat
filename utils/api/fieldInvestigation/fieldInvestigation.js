import request from '../../request.js'


let fieldInvestigation = {
	// 询问笔录列表
	transcriptpageList(params) {
		return request.request({
			url: '/zhzf/transcriptQuestioning/list',
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
	//询问笔录id查询
	TreeListqueryById(params) {
		return request.request({
			url: '/zhzf/transcriptQuestioning/queryById',
			method: 'GET',
			params: params

		})
	},

	//询问笔录添加
	TreeListlistadd(params) {
		return request.request({
			url: '/zhzf/transcriptQuestioning/add',
			method: 'POST',
			data: params

		})
	},
	//询问笔录修改
	TreeListlistedit(params) {
		return request.request({
			url: '/zhzf/transcriptQuestioning/edit',
			method: 'PUT',
			data: params

		})
	},
	//询问笔录删除
	transcriptDelete(params) {
		return request.request({
			url: `/zhzf/transcriptQuestioning/delete?id=${params}`,
			method: 'DELETE',
		})
	},

	//询问笔录id查询
	audioVisualqueryById(params) {
		return request.request({
			url: '/zhzf/audioVisualMaterials/queryById',
			method: 'GET',
			params: params

		})
	},
	// 视听资料列表
	audioVisualList(params) {
		return request.request({
			url: '/zhzf/audioVisualMaterials/list',
			method: 'GET',
			params: params

		})
	},
	// //视听资料添加
	// audioVisualadd(params) {
	// 	return request.request({
	// 		url: '/zhzf/audioVisualMaterials/add',
	// 		method: 'POST',
	// 		data: params

	// 	})
	// },
	// //视听资料修改
	// audioVisualedit(params) {
	// 	return request.request({
	// 		url: '/zhzf/audioVisualMaterials/edit',
	// 		method: 'PUT',
	// 		data: params

	// 	})
	// },

	//视听资料修改
	TotolPostFun(params, url, method) {
		return request.request({
			url: url,
			method: method,
			data: params

		})
	},
	//现场检查id查询
	TotolGetFun(params, url, method) {
		return request.request({
			url: url,
			method: method,
			data: params
	
		})
	},


	//视听资料删除
	audioVisualDelete(params) {
		return request.request({
			url: `/zhzf/audioVisualMaterials/delete?id=${params}`,
			method: 'DELETE',
		})
	},


	//现场检查id查询
	inspectionqueryById(params) {
		return request.request({
			url: '/zhzf/inspectionRecord/queryById',
			method: 'GET',
			params: params

		})
	},
	// 现场检查笔录列表
	inspectionList(params) {
		return request.request({
			url: '/zhzf/inspectionRecord/list',
			method: 'GET',
			params: params

		})
	},
	//现场检查笔录添加
	inspectionadd(params) {
		return request.request({
			url: '/zhzf/inspectionRecord/add',
			method: 'POST',
			data: params

		})
	},
	//现场检查笔录修改
	inspectionedit(params) {
		return request.request({
			url: '/zhzf/inspectionRecord/edit',
			method: 'PUT',
			data: params

		})
	},
	//现场检查笔录删除
	inspectionDelete(params) {
		return request.request({
			url: `/zhzf/inspectionRecord/delete?id=${params}`,
			method: 'DELETE',
		})
	},




	//视听资料销毁
	audioVisualupdate(params) {
		return request.request({
			url: '/zhzf/audioVisualMaterials/updateTranscriptId',
			method: 'GET',
			params: params

		})
	},
	//现场检查笔录销毁
	inspectionupdate(params) {
		return request.request({
			url: '/zhzf/inspectionRecord/updateTranscriptId',
			method: 'GET',
			params: params

		})
	},
	//现场检查笔录销毁
	transcriptupdate(params) {
		return request.request({
			url: '/zhzf/transcriptQuestioning/updateTranscriptId',
			method: 'GET',
			params: params

		})
	},

}
// 用户授权
export default fieldInvestigation
