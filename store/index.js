import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './state.js'

const store = new Vuex.Store({
	state: {
		phoneInfo: null,
		token: "",
		userInfo: null,
		sysNewsArticle: null,
		searchContent: ""
	},

	mutations: {
		SET_SEARCH_CONTENT(state, step) {

			state.searchContent = step
		},
		SET_PHONE_INFO(state, step) {
			// console.log("phoneInfo", step)
			state.phoneInfo = step
		},
		SET_SYS_NEWS_ARTICLE(state, step) {
			state.sysNewsArticle = step
		},
		SET_USER_INFO(state, step) {
			state.userInfo = step
			uni.setStorage({
				key: "userInfo",
				data: step
			})
		},
		SET_TOKEN(state, step) {
			// console.log("执行了SET_TOKEN")
			state.token = step
			uni.setStorage({
				key: "token",
				data: step
			})
		},

	},
	actions: {
		getPhoneInfo({
			commit,
			state
		}, step) {
			uni.getSystemInfo({
				success: (res) => {
					let allheight = uni.upx2px(44, res.windowWidth)
					// let allheight = 50
					// console.log("uni.upx2px(44)", allheight)
					let option = {
						playerWidth: res.windowWidth,
						playerHeight: res.windowHeight,
						statusBarHeight: res.statusBarHeight,
						BarHeight: allheight + res.statusBarHeight,
						BarHeightDown: allheight,
						publicCon: res.windowHeight - allheight - res.statusBarHeight,
						securityTop: res.safeArea.top,
						// publicSecCon: res.windowHeight - uni.upx2px(248) - res.statusBarHeight,
						// publicSecTop: uni.upx2px(248) + res.statusBarHeight,
						allList: res,
						mineCon: res.windowHeight - res.statusBarHeight
					}
					// console.log("屏幕数据option", option)
					commit("SET_PHONE_INFO", option)
				}
			})
		},
	}
})
export default store
