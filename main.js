import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
// 引入vuex
import store from './store/index'
Vue.config.productionTip = false
Vue.prototype.$store = store
// 引入api
import api from './utils/api/index.js'
Vue.prototype.api = api

const app = new Vue({
	store,
	api,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
