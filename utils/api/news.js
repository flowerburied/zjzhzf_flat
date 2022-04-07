import request from '../request.js'


let news = {
	// 获取栏目地址
	getLm(data) {
		return request.request({
			url: '/portal/sysNewsColumn/list',
			method: 'GET',
			data: data
		})
	},
	// 获取会议精神banner信息
	getBanner(data){
		return request.request({
			url:'/portal/sysNewsColumn/lmlist',
			method: 'GET',
			data: data
		})
	},
	// 获取文章
	sysNewsArticle(data){
		return request.request({
			url:'/portal/sysNewsArticle/list',
			method: 'GET',
			params: data
		})
	}
	
}
// 用户授权
export default news