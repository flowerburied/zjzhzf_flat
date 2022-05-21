<template>
	<view>
		<!-- <button @click="open">打开弹窗</button> -->
		<uni-easyinput class="uni-mt-5" suffixIcon="search" v-model="value" placeholder="右侧图标" @iconClick="open">
		</uni-easyinput>
		<uni-popup ref="popup" type="bottom">
			<view class="table_padding_my">
				<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
					<uni-tr>
						<uni-th align="center">日期</uni-th>
						<uni-th align="center">姓名</uni-th>
						<uni-th align="center">地址</uni-th>
						<uni-th align="center">设置</uni-th>
					</uni-tr>
					<uni-tr v-for="(item, index) in tableData" :key="index">
						<uni-td>{{ item.date }}</uni-td>
						<uni-td>
							<view class="name">{{ item.name }}</view>
						</uni-td>
						<uni-td align="center">{{ item.address }}</uni-td>
						<uni-td>
							<view class="uni-group">
								<button class="uni-button" size="mini" type="primary">修改</button>
							</view>
						</uni-td>
					</uni-tr>
				</uni-table>
				<view class="uni-pagination-box">
					<uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total"
						@change="change" />
				</view>
			</view>

		</uni-popup>


	</view>
</template>

<script>
	import tableData from './tableData.js'
	export default {
		data() {
			return {
				searchVal: '',
				tableData: [],
				// 每页数据量
				pageSize: 10,
				// 当前页
				pageCurrent: 1,
				// 数据总量
				total: 0,
				loading: false

			}
		},
		mounted() {
			this.selectedIndexs = []
			this.getData(1)
		},
		// watch: {
		// 	datetimesingle1: {
		// 		handler(val, oldValue) {
		// 			if (val) {
		// 				this.datetimesingle = val;
		// 			}

		// 		},
		// 		//立刻执行handler
		// 		immediate: true,
		// 	},
		// },
		// model: {
		// 	prop: "datetimesingle1",
		// 	event: "change",
		// },
		// props: {
		// 	datetimesingle1: {
		// 		type: String,
		// 		default: "",
		// 	},
		// },
		methods: {
			iconClick(type) {
				uni.showToast({
					title: `点击了${type==='prefix'?'左侧':'右侧'}的图标`,
					icon: 'none'
				})
			},
			open() {
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				this.$refs.popup.open('center')
			},

			// 分页触发
			change(e) {
				this.$refs.table.clearSelection()
				this.selectedIndexs.length = 0
				this.getData(e.current)
			},
			// 搜索
			search() {
				this.getData(1, this.searchVal)
			},
			// 获取数据
			getData(pageCurrent, value = '') {
				this.loading = true
				this.pageCurrent = pageCurrent
				// this.request({
				// 	pageSize: this.pageSize,
				// 	pageCurrent: pageCurrent,
				// 	value: value,
				// 	success: res => {
				// 		// console.log('data', res);
				// 		this.tableData = res.data
				// 		this.total = res.total
				// 		this.loading = false
				// 	}
				// })
				this.getlist()
			},
			// 伪request请求
			request(options) {
				const {
					pageSize,
					pageCurrent,
					success,
					value
				} = options
				let total = tableData.length
				let data = tableData.filter((item, index) => {
					const idx = index - (pageCurrent - 1) * pageSize
					return idx < pageSize && idx >= 0
				})
				if (value) {
					data = []
					tableData.forEach(item => {
						if (item.name.indexOf(value) !== -1) {
							data.push(item)
						}
					})
					total = data.length
				}

				setTimeout(() => {
					typeof success === 'function' &&
						success({
							data: data,
							total: total
						})
				}, 500)
			},
			async getlist() {
				try {
					uni.showLoading({
						title: '加载中'
					});
					const res = await this.api.fieldInvestigation.TreeListlist()
					console.log("queryTreeList", res)
					const {
						code,
						message,
						result
					} = res
					if (code == 200) {} else {
						uni.showToast({
							icon: "none",
							title: message,
							duration: 2000
						});
					}
					uni.hideLoading();
				} catch (e) {
					console.log('try:e:', e)
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.table_padding_my {
		margin: 10rpx;
		padding: 10rpx;
		background-color: #FFFFFF;
	}
</style>
