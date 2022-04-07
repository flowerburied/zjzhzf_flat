import request from '../request.js'


let user = {
	// app登录接口
	appLogin(data) {
		return request.request({
			url: '/sys/appLogin',
			method: 'POST',
			data: data
			
		})
	},
	// 运营商登录
	// login(data) {
	// 	return request.request({
	// 		url: '/jeecg-system/sys/login',
	// 		method: 'POST',
	// 		data: data
			
	// 	})
	// },
}
// 用户授权
export default user