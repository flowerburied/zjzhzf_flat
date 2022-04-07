import myfun from "../commons/js/debounce.js";
let MyUtil = {
	// 接口封装
	request(params) {
		// console.log("params接口封装", params)
		// uni.showLoading({
		// 	title: '加载中'
		// });
		return new Promise((resolve, reject) => {
			// this.getStorage("token").then(userid => {
			let token = uni.getStorageSync('token')
			// let tokenSec = uni.getStorageSync('tokenSec') || 0
			// console.log('tokenSec', tokenSec);
			uni.request({
				url: "http://61.160.89.90:11218" + params.url,
				method: params.method || "GET",
				header: {
					"X-Access-Token": token || 0,
				},
				data: params.data || params.params || null,
				success: res => {
					uni.hideLoading();
					// console.log("接口封装res", res)
					if (res.data.code == 1001) {
						this.logout()
					} else if (res.statusCode == 404) {
						uni.showModal({
							title: '提示',
							content: '404',
						});
					}

					resolve(res.data)
				},
				fail: err => {
					uni.hideLoading();
					if (err.errMsg) {
						console.log("err", err)
						uni.showModal({
							title: '提示',
							showCancel: false,
							content: '网络状况不佳',
							success: res => {
								if (res.confirm) {
									return
								} else if (res.cancel) {
									return
								}
							}
						});
						return
					}
					reject(err)
				}
			})
			// })
		})
	},
	// 缓存
	setStorage(key, userid) {
		return new Promise((resolve, reject) => {
			uni.setStorage({
				key,
				data: userid,
				success: res => {
					resolve()
				},
				fail: err => {
					reject()
				}
			})
		})
	},
	// 取出缓存
	getStorage(key) {
		return new Promise((resolve, reject) => {
			uni.getStorage({
				key,
				success: res => {
					resolve(res.data)
				},
				fail: () => {
					resolve()
				}
			});
		})
	},
	// 清除缓存
	removeStorage(key) {
		return new Promise((resolve, reject) => {
			uni.removeStorage({
				key: key,
				success: res => {
					resolve(res.data)
				}
			});
		})

	},
	// 提示
	Tips(error) {
		uni.showToast({
			title: error,
			icon: "none",
			duration: 2000
		});
	},
	back(i) { //返回
		uni.navigateBack({
			delta: i || 1
		});
	},
	logout: myfun.throttle(function() { //退出登录
		// this.$store.commit("CLEAR_TOKEN")
		uni.clearStorageSync();
		let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
		let curRoute = routes[routes.length - 1].route
		if (curRoute == 'pages/login/signup') {
			console.log("curRoute", curRoute)
		} else if (curRoute == 'pages/login/startpage') {
			console.log("curRoute", curRoute)
		} else {

			uni.showModal({
				title: '提示',
				content: '请重新登录',
				showCancel: false,
				success: res => {
					if (res.confirm) {

						uni.navigateTo({
							url: "/pages/login/signup"
						})


					} else if (res.cancel) {
						return
					}
				}
			});

		}




	}, 500),
	list(data) { //数据处理
		data.forEach(e => {
			e.profile.cover_image = JSON.parse(e.profile.cover_image);
		});
		return data
	},

	pay(resobj) { //微信支付
		let payInfo = {
			appid: resobj.appid,
			noncestr: resobj.noncestr,
			package: 'Sign=WXPay',
			partnerid: resobj.partnerid,
			prepayid: resobj.prepayid,
			signtype: 'MD5',
			timestamp: resobj.timestamp,
			sign: resobj.sign,
		}
		uni.requestPayment({
			provider: 'wxpay',
			orderInfo: payInfo, //微信订单数据（Object类型）
			success: res => {
				this.Tips('支付成功')
				uni.navigateTo({
					url: '../../ordersuccess/ordersuccess'
				});
				// setTimeout(() => {
				// 	this.back()
				// }, 2000)
				uni.hideLoading();
			},
			fail: err => {
				console.log('err', err)
				uni.hideLoading();
			}
		});
	},

	getLocalTime(nS) {
		return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
	},
	time(remain) { //计时
		var time = parseInt(remain / 1000)
		var h = parseInt(time / 60 / 60)
		var m = parseInt(time / 60)
		var s = time % 60
		var tt = h + ':' + m + ':' + s
		return tt
	},
	mobile(phone) { //手机号校验
		var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
		if (!myreg.test(phone)) {
			this.Tips('请输入正确的手机号')
		} else {
			console.log(true)
			return
		}
	},
	idcard(card) { //身份证校验
		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		if (reg.test(card) === false) {
			this.Tips('身份证输入有误，请重新输入')
			return
		}
	}
}

export default MyUtil
