<template>
	<view>

		<view class="my_datatree_picker">
			<view class="datatree_picker_name" v-if="userNames">
				{{userNames}}
			</view>
			<button :disabled="disabled" class="mini-btn" type="primary" size="mini" @click="open">设置</button>
		</view>

		<!-- 	<uni-easyinput disabled class="uni-mt-5" suffixIcon="search" v-model="userNames" placeholder="右侧图标" @iconClick="open"> -->
		</uni-easyinput>
		<uni-popup ref="popup" type="bottom">
			<view class="table_padding_my">
				<scroll-view @scrolltolower="scrolltolower" :style="{height:200+'rpx'}" scroll-y="true"
					class="scroll-Y">

					<view class="second_view_box">
						<myCol>
							<myRow widthPercentage='1'>

							</myRow>
							<myRow widthPercentage='3'>
								<view class="public_text">
									用户账号
								</view>
							</myRow>
							<myRow widthPercentage='3'>
								<view class="public_text">
									用户姓名
								</view>
							</myRow>
							<myRow widthPercentage='3'>
								<view class="public_text">
									部门
								</view>
							</myRow>
						</myCol>
						<myCol v-for="(item, index) in tableData" :key="index">
							<myRow widthPercentage='1'>
								<checkbox-group @change="changeCheckbox(index)">
									<checkbox :value="item.ischeckBox" :checked="item.ischeckBox" />

								</checkbox-group>
							</myRow>
							<myRow widthPercentage='3'>
								<view class="public_text">
									{{ item.username }}
								</view>
							</myRow>
							<myRow widthPercentage='3'>
								<view class="public_text">
									{{ item.realname }}
								</view>
							</myRow>
							<myRow widthPercentage='3'>
								<view class="public_text">
									{{ item.orgCodeTxt }}
								</view>
							</myRow>
						</myCol>
					</view>
				</scroll-view>

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
	import myCol from "@/components/public/myRow/myCol.vue"
	import myRow from "@/components/public/myRow/myRow.vue"

	export default {
		data() {
			return {
				searchVal: '',
				tableData: [],
				// 每页数据量
				pageSize: 5,
				// 当前页
				pageCurrent: 1,
				// 数据总量
				total: 0,
				loading: false,
				valuePicker: "",
				userIds: "",
				userNames: "",
				selectionChangeList: [],

				// add
				getArray: [],
				pageNo: 1,
				ismore: true,
			}
		},
		components: {
			myCol,
			myRow,

		},
		mounted() {
			this.selectedIndexs = []

		},
		props: {
			value: {
				type: String,
				required: false
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		watch: {
			value: {
				handler(val, oldValue) {
					// console.log('watchj', val)
					// console.log('watchjiantin', oldValue)
					if (val) {
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
				}
			},
			async getlistEcho() {
				try {
					console.log("getlistEcho", this.userIds)
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
						console.log("res", res)


						let gethandleNames = this.handleuserNamesXX(result.records)
						this.userNames = gethandleNames
					}
				} catch (e) {
					console.log('try:e:', e)
				}
			},
			handleuserNamesXX(e) {
				let getNames = []
				for (var i = 0; i < e.length; i++) {
					getNames.push(e[i].realname)
				}
				// console.log('getNames', getNames)
				return getNames.join(",")
			},

			changeCheckbox(index) {
				// console.log("index", index)

				this.tableData[index].ischeckBox = !this.tableData[index].ischeckBox
				// console.log("tableData", this.tableData)
			},
			async changeSelect() {
				let gethandleNames = await this.handleuserNames(this.tableData)

				let gethandleIds = await this.handleusereIds(this.tableData)

				let that = this
				setTimeout(() => {

					that.userNames = gethandleNames
					// console.log("this.userNames", this.userNames)
					that.$emit("change", gethandleIds)
					that.closePopup()
				}, 500)
				// console.log("gethandleIds", gethandleIds)
				this.closePopup()

			},
			handleuserNames(e) {
				let getNames = []
				for (var i = 0; i < e.length; i++) {

					if (e[i].ischeckBox) {
						getNames.push(e[i].realname)
					}
				}
				console.log('getNames', getNames)
				return getNames.join(",")
				// console.log("this.userNames", getNames)
				// this.userNames = getNames.join(",")
			},
			handleusereIds(e) {
				let getIds = []
				for (var i = 0; i < e.length; i++) {
					if (e[i].ischeckBox) {
						getIds.push(e[i].username)
					}

				}
				// console.log('getIds', getIds)
				return getIds.join(",")
				// this.$emit("change", getIds.join(","))
			},
			scrolltolower(e) {
				// this.$emit("scrolltolower")
				console.log("scrolltolower", e)
				if (this.ismore) {
					this.pageNo += 1
					this.getlist()
				} else {
					uni.showToast({
						icon: "none",
						title: '没有数据了！',
						duration: 2000
					});
				}
			},
			closePopup() {
				this.$refs.popup.close()
			},
			open() {
				this.pageNo = 1
				this.getlist()
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				this.$refs.popup.open('center')
			},
			async getlist() {
				try {
					uni.showLoading({
						title: '加载中'
					});
					let option = {
						pageNo: this.pageNo,
						pageSize: 5
					}
					const res = await this.api.fieldInvestigation.TreeListlist(option)
					console.log("queryTreeList", res)
					const {
						code,
						message,
						result
					} = res
					if (code == 0) {

						// this.tableData = result.records
						// this.total = result.total
						// this.loading = false
						// this.tabList[0].num = result.total
						if (result.records.length != 0) {
							for (var i = 0; i < result.records.length; i++) {
								result.records[i].ischeckBox = false

								this.tableData.push(result.records[i])
							}
						} else {
							this.ismore = false
							uni.showToast({
								icon: "none",
								title: '没有数据了！',
								duration: 2000
							});
						}
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
	.my_datatree_picker {
		display: flex;
		flex-direction: row;
		align-items: center;

		.datatree_picker_name {
			border-radius: 5rpx;
			border: 1px solid #bdc3c7;
			padding: 5rpx 10rpx;
		}
	}

	.table_padding_my {
		margin: 10rpx;
		padding: 10rpx;
		background-color: #FFFFFF;

		.second_view_box {
			margin-top: 12rpx;
			width: 324rpx;
			display: flex;
			flex-wrap: wrap;
			border-left: 1px #D2D2D2 solid;
			border-top: 1px #D2D2D2 solid;

			.public_text {
				padding: 8rpx 16rpx;
				font-size: 12rpx;
				line-height: 150%;
				color: #707070;
			}

		}

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
