import request from '../request.js'


let user = {
	// app登录接口
	appLogin(data) {
		return request.request({
			url: '/sys/login',
			method: 'POST',
			data: data
			
		})
	},
	// 运营商登录
	randomImage(data){
		return request.request({
			url:`/sys/randomImage/${data}`,
			method: 'GET',
			
		})
	}
}
// 用户授权
export default user