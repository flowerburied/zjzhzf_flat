<template>
	<view>
		<!-- <button @click="open">打开弹窗</button> -->
		<uni-easyinput disabled class="uni-mt-5" suffixIcon="search" v-model="userNames" placeholder="右侧图标" @iconClick="open">
		</uni-easyinput>
		<uni-popup ref="popup" type="bottom">
			<view class="table_padding_my">
				<uni-table @selection-change="selectionChange" type="selection" ref="table" :loading="loading" border
					stripe emptyText="暂无更多数据">
					<uni-tr>
						<uni-th align="center">用户账号</uni-th>
						<uni-th align="center">用户姓名</uni-th>
						<uni-th align="center">部门</uni-th>
						<!-- <uni-th align="center">设置</uni-th> -->
					</uni-tr>
					<uni-tr v-for="(item, index) in tableData" :key="index">
						<uni-td>{{ item.username }}</uni-td>
						<uni-td>
							<view class="name">{{ item.realname }}</view>
						</uni-td>
						<uni-td align="center">{{ item.orgCodeTxt }}</uni-td>
						<!-- <uni-td>
							<view class="uni-group">
								<button @click="selectuser(item)" class="uni-button" size="mini"
									type="primary">选中</button>
							</view>
						</uni-td> -->
					</uni-tr>
				</uni-table>
				<view class="uni-pagination-box">
					<uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total"
						@change="change" />
				</view>
				<view class="padding_my_box">
					<button @click="changeSelect" class="my_box_btn" type="primary">确定</button>
					<button @click="closePopup" class="my_box_btn" type="default">取消</button>
				</view>
			</view>

		</uni-popup>



	</view>
</template>

<script>
	// import tableData from './tableData.js'
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
				loading: false,
				valuePicker: "",
				userIds: "",
				userNames: "",
				selectionChangeList: []
			}
		},
		mounted() {
			this.selectedIndexs = []
			// this.getData(1)
			// this.getlist(1)
		},
		props: {
			value: {
				type: String,
				required: false
			},
		},
		watch: {
			value: {
				handler(val, oldValue) {
					// console.log('watchj', val)
					// console.log('watchjiantin', oldValue)
					if (oldValue === undefined) {
						this.userIds = val
						this.initUserNames()
					}

				},
				immediate: true
			}
		},
		model: {
			prop: 'value',
			event: 'change'
		},

		methods: {
			initUserNames() {
				if (this.userIds) {
					// 这里最后加一个 , 的原因是因为无论如何都要使用 in 查询，防止后台进行了模糊匹配，导致查询结果不准确
					this.getlistEcho()
				} else {
					// JSelectUserByDep组件bug issues/I16634
					// this.$emit('initComp', '')
				}
			},
			async getlistEcho() {
				try {
					let values = this.userIds.split(',') + ','
					let option = {
						pageNo: 1,
						pageSize: values.length,
						username: values
					}
					const res = await this.api.fieldInvestigation.TreeListlist(option)
					const {
						code,
						message,
						result
					} = res
					if (code == 0) {
						// console.log('数据回显', result)

						// let getobject = this.selectedItems(result.records)
						// console.log('getobject', getobject)
						// this.selectionChangeList = result.records
						let gethandleNames = this.handleuserNames(result.records)
						this.userNames = gethandleNames

					}
				} catch (e) {
					console.log('try:e:', e)
				}
			},


			changeSelect() {
				console.log("点击确定", this.selectionChangeList)
				// this.selectionChangeList
				let gethandleNames = this.handleuserNames(this.selectionChangeList)
				console.log("点击确定", gethandleNames)
				let gethandleIds = this.handleusereIds(this.selectionChangeList)
				console.log("gethandleIds", gethandleIds)
				this.userNames = gethandleNames
				this.$emit("change", gethandleIds)
				this.closePopup()
			},
			handleuserNames(e) {
				let getNames = []
				for (var i = 0; i < e.length; i++) {
					getNames.push(e[i].realname)
				}
				// console.log('getNames', getNames)
				return getNames.join(",")
			},
			handleusereIds(e) {
				let getIds = []
				for (var i = 0; i < e.length; i++) {
					getIds.push(e[i].username)
				}
				// console.log('getIds', getIds)
				return getIds.join(",")
			},
			closePopup() {
				this.$refs.popup.close()
			},
			// 多选处理
			selectedItems(e) {
				return e.map(i => this.tableData[i])
			},
			// 多选
			selectionChange(e) {
				console.log('e', e)
				// console.log(e.detail.index)
				// this.selectedIndexs = e.detail.index
				let getobject = this.selectedItems(e.detail.index)
				console.log('getobject', getobject)
				this.selectionChangeList = getobject
			},
			selectuser(e) {
				console.log('e', e)
				// this.userIds =
			},
			iconClick(type) {
				uni.showToast({
					title: `点击了${type==='prefix'?'左侧':'右侧'}的图标`,
					icon: 'none'
				})
			},
			open() {
				this.getlist(1)
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				this.$refs.popup.open('center')

			},

			// 分页触发
			change(e) {
				console.log('e', e)
				// this.$refs.table.clearSelection()
				// this.selectedIndexs.length = 0
				// this.getData(e.current)
				this.getlist(e.current)
			},
			// 搜索
			search() {
				this.getData(1, this.searchVal)
			},
			// 获取数据
			getData(pageCurrent) {
				// , value = ''
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
			async getlist(val) {
				try {
					uni.showLoading({
						title: '加载中'
					});
					let option = {
						pageNo: val,
						pageSize: 10
					}
					const res = await this.api.fieldInvestigation.TreeListlist(option)
					console.log("queryTreeList", res)
					const {
						code,
						message,
						result
					} = res
					if (code == 0) {

						this.tableData = result.records
						this.total = result.total
						this.loading = false

					} else {
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

		.padding_my_box {
			margin-top: 10rpx;
			display: flex;
			flex-direction: row-reverse;
			align-items: center;

			.my_box_btn {
				// margin-right: 10rpx;
			}
		}
	}
</style>
