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

}
// 用户授权
export default publics
