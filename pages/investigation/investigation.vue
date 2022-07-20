<template>
	<view class="home">
		<view class="home_tabber"
			:style="{ width: $store.state.phoneInfo.playerWidth+'px',height:$store.state.phoneInfo.BarHeight }">
			<view
				:style="{ width: $store.state.phoneInfo.playerWidth+'px',height: $store.state.phoneInfo.statusBarHeight+'px' }">
			</view>
			<view class="home_tabber_down"
				:style="{ width: $store.state.phoneInfo.playerWidth+'px',height: $store.state.phoneInfo.BarHeightDown+'px' }">

				<view class="tabber_down_checken">
					<uni-data-picker style="height: 24rpx;" v-model="particularYear" :localdata="items"
						@change="onchange" @nodeclick="onnodeclick">
					</uni-data-picker>
				</view>
				<image @click="toadd" class="tabber_down_img" src="@/static/img/public/005.svg"></image>
				<scroll-view :style="{height: $store.state.phoneInfo.BarHeightDown+'px' }" ref="tabbar1" id="tab-bar"
					class="tab-bar" :scroll="false" :scroll-x="true" :show-scrollbar="false"
					:scroll-into-view="scrollInto">
					<view class="tabber_down_con" :style="{ marginLeft:bothLeft +'rpx'}">
						<view class="down_con_box">
							<view class="con_box_add" v-for="(tab,indextab) in tabList" :key="indextab">
								<view class="box_add_num" v-if="tab.num" :style="{ left: tab.boxnumleft+'px'}">
									{{tab.num}}
								</view>
								<text :style="{ margin:bothsides }" :class="[indextab==tabIndex?'con_active_color':'']"
									@click="getitemTab(indextab)" :id="`ctsbox${indextab}`"
									class="con_box_text">{{tab.name}}</text>
							</view>
						</view>
						<view class="down_con_line">
							<view class="con_line" :style="{ left: boxLeft+'px',width: boxwidth+'px'}">
							</view>
						</view>
					</view>
				</scroll-view>

			</view>
		</view>


		<publicContent>
			<swiper :style="{height:$store.state.phoneInfo.publicCon+'px'}" class="tab-view" ref="swiper1"
				id="tab-bar-view" :current="tabIndex" :duration="300" @change="onswiperchange">
				<swiper-item class="swiper-item ">
					<scroll-view @scrolltolower="scrolltolower" :style="{height:$store.state.phoneInfo.publicCon+'px'}"
						scroll-y="true" class="scroll-Y">
						<TranscriptContent @openPopup="openPopup" @callbackCon="callbackContranscript"
							:dataSource="tranList">
						</TranscriptContent>
						<SecurityBox></SecurityBox>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item ">
					<scroll-view @scrolltolower="scrolltolower" :style="{height:$store.state.phoneInfo.publicCon+'px'}"
						scroll-y="true" class="scroll-Y">
						<AudioVisualContent @openPopup="openPopup" @callbackCon="callbackContranscript"
							:dataSource="audioList">
						</AudioVisualContent>
						<SecurityBox></SecurityBox>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item ">
					<scroll-view @scrolltolower="scrolltolower" :style="{height:$store.state.phoneInfo.publicCon+'px'}"
						scroll-y="true" class="scroll-Y">
						<InspectionContent @openPopup="openPopup" @callbackCon="callbackContranscript"
							:dataSource="inspectionList">
						</InspectionContent>
						<SecurityBox></SecurityBox>
					</scroll-view>
				</swiper-item>
			</swiper>
		</publicContent>

		<uni-popup ref="popup" type="center">
			<uni-section title="销毁" type="line">
				<uni-card :is-shadow="false" is-full>

					<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
						<uni-forms-item label="销毁理由" required name="reason">
							<uni-easyinput v-model="valiFormData.reason" placeholder="请输入销毁理由" />
						</uni-forms-item>
					</uni-forms>

					<view class="investigation_popup">
						<button type="primary" @click="closePopup">取消</button>
						<button type="primary" @click="submit('valiForm')">提交</button>

					</view>

				</uni-card>
			</uni-section>
		</uni-popup>

		<!-- 		<uni-popup ref="inputDialog" type="dialog">
			<uni-popup-dialog ref="inputClose" mode="input" title="输入内容" value="对话框预置提示内容!" placeholder="请输入内容"
				@confirm="dialogInputConfirm"></uni-popup-dialog>
		</uni-popup> -->


	</view>
</template>

<script>
	import SecurityBox from '@/components/public/SecurityBox.vue'
	import publicContent from '@/components/public/publicContent.vue'
	import homeContent from '@/components/homePage/homeContent.vue'
	import TranscriptContent from '@/components/investigation/TranscriptContent.vue'

	import AudioVisualContent from '@/components/investigation/AudioVisualContent.vue'
	import InspectionContent from '@/components/investigation/InspectionContent.vue'
	export default {
		data() {
			return {
				// 校验规则
				rules: {
					reason: {
						rules: [{
							required: true,
							errorMessage: '销毁理由不能为空'
						}]
					},
				},
				// 校验表单数据
				valiFormData: {
					reason: '',
					id: ""
				},
				// 页面数据
				tabList: [{
						name: "询问笔录",
						num: 0,
						boxnumleft: 1
					},
					{
						name: "视听资料",
						num: 0,
						boxnumleft: 1
					},
					{
						name: "现场检查笔录",
						num: 0,
						boxnumleft: 1
					},
				],
				scrollInto: "",
				tabIndex: 0,
				taberWidth: 1700,
				boxLeft: 0,
				boxwidth: 52,
				getList: [],
				boxnumleft: null,

				// 数据
				// classes: '2022',
				particularYear: '2022',
				items: [{
						text: "2022",
						value: "2022"
					},
					{
						text: "2023",
						value: "2023"
					},
					{
						text: "2024",
						value: "2024"
					},
					{
						text: "2025",
						value: "2025"
					},
				],
				// addlist
				bothsides: '0 33rpx',
				bothLeft: 123,

				ismore: true,
				tranList: [], //询问笔录
				audioList: [], //视听资料
				inspectionList: [], //现场检查
				selectForm: {
					roleId: "",
					roleType: ""
				}
			}
		},
		components: {
			SecurityBox,
			publicContent,
			homeContent,
			TranscriptContent,
			AudioVisualContent,
			InspectionContent

		},
		onShow() {
			this.ismore = true
			this.pageNo = 1
			this.queryDeptId()
			// console.log('onswiperchangee', e)

		},
		onLoad() {

			this.$nextTick(() => {
				this.getitemTab(0)
				this.getnumwidth()
			})

		},
		methods: {
			submit(ref) {
				this.$refs[ref].validate().then(res => {
					console.log('success', this.valiFormData);
					// uni.showToast({
					// 	title: `校验通过`
					// })
					this.ismore = true
					this.pageNo = 1
					let option = {
						id: this.valiFormData.id,
						state: 2,
						reason: this.valiFormData.reason,
					}
					if (this.tabIndex == 0) {
						this.transcriptupdateFun(option)
					} else if (this.tabIndex == 1) {

						this.audioVisualupdateFun(option)
					} else if (this.tabIndex == 2) {

						this.inspectionupdateFun(option)
					}
				}).catch(err => {
					console.log('err', err);
				})
			},
			openPopup(val) {
				this.valiFormData.id = val
				this.valiFormData.reason = ""
				console.log("openPopup", val)
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				this.$refs.popup.open('center')
			},
			closePopup() {
				this.$refs.popup.close()
			},

			async transcriptupdateFun(option) {
				try {
					const res = await this.api.fieldInvestigation.transcriptupdate(option)
					const {
						code,
						message,
						result
					} = res
					if (code == 200) {
						uni.showToast({
							icon: "none",
							title: message,
							duration: 2000
						});
						this.tranList = []
						this.transcriptpageList()
					} else {
						uni.showToast({
							icon: "none",
							title: message,
							duration: 2000
						});
					}
					this.closePopup()
				} catch (e) {
					console.log('try:e:', e)
				}
			},
			async audioVisualupdateFun(option) {
				try {
					const res = await this.api.fieldInvestigation.audioVisualupdate(option)
					const {
						code,
						message,
						result
					} = res
					if (code == 200) {
						uni.showToast({
							icon: "none",
							title: message,
							duration: 2000
						});
						this.audioList = []
						this.audioVisualList()
					} else {
						uni.showToast({
							icon: "none",
							title: message,
							duration: 2000
						});
					}
					this.closePopup()
				} catch (e) {
					console.log('try:e:', e)
				}
			},
			async inspectionupdateFun(option) {
				try {
					const res = await this.api.fieldInvestigation.inspectionupdate(option)
					const {
						code,
						message,
						result
					} = res
					if (code == 200) {
						uni.showToast({
							icon: "none",
							title: message,
							duration: 2000
						});
						this.inspectionList = []
						this.inspectionListFun()
					} else {
						uni.showToast({
							icon: "none",
							title: message,
							duration: 2000
						});
					}
					this.closePopup()
				} catch (e) {
					console.log('try:e:', e)
				}
			},


			async queryDeptId() {
				try {
					let option = {
						id: this.$store.state.token,
					}
					const res = await this.api.publics.queryDeptId(option)
					console.log("queryDeptId", res)
					const {
						code,
						message,
						result
					} = res
					if (code == 200) {
						this.selectForm.roleId = result.roleId;
						this.selectForm.roleType = result.roleType;
						if (this.tabIndex == 0) {
							this.tranList = []
							this.transcriptpageList()
						} else if (this.tabIndex == 1) {
							this.audioList = []
							this.audioVisualList()
						} else if (this.tabIndex == 2) {
							this.inspectionList = []
							this.inspectionListFun()
						}
					} else {
						uni.showToast({
							icon: "none",
							title: message,
							duration: 2000
						});
					}
					console.log("this.selectForm", this.selectForm)
				} catch (e) {
					console.log('try:e:', e)
				}
			},


			scrolltolower(e) {
				console.log('e', e)
				if (this.ismore) {
					this.pageNo += 1
					if (this.tabIndex == 0) {
						this.transcriptpageList()
					} else if (this.tabIndex == 1) {
						this.audioVisualList()
					} else if (this.tabIndex == 2) {
						this.inspectionListFun()
					}
				} else {
					uni.showToast({
						icon: "none",
						title: '没有数据了！',
						duration: 2000
					});
				}

			},

			callbackContranscript() {
				this.ismore = true
				this.pageNo = 1
				// console.log('onswiperchangee', e)
				if (this.tabIndex == 0) {
					this.tranList = []
					this.transcriptpageList()
				} else if (this.tabIndex == 1) {
					this.audioList = []
					this.audioVisualList()
				} else if (this.tabIndex == 2) {
					this.inspectionList = []
					this.inspectionListFun()
				}
			},
			async inspectionListFun() {
				try {
					uni.showLoading({
						title: '加载中'
					});
					let option = {
						pageNo: this.pageNo,
						pageSize: 8,
						year: this.particularYear,
						roleId: this.selectForm.roleId,
						roleType: this.selectForm.roleType,
						column: "createTime",
						order: "desc",
					}
					// console.log("option", option)
					const res = await this.api.fieldInvestigation.inspectionList(option)
					console.log("pagelist", res)
					const {
						code,
						message,
						result
					} = res
					if (code == 200) {
						this.tabList[2].num = result.total
						if (result.records.length != 0) {
							for (var i = 0; i < result.records.length; i++) {
								this.inspectionList.push(result.records[i])
							}
						} else {
							this.ismore = false
							uni.showToast({
								icon: "none",
								title: '没有数据了！',
								duration: 2000
							});
						}
						uni.hideLoading();
						// console.log("this.getList", this.getList)
					} else {
						uni.showToast({
							icon: "none",
							title: message,
							duration: 2000
						});
					}
				} catch (e) {
					uni.hideLoading();
					console.log('try:e:', e)
				}
			},
			async audioVisualList() {
				try {
					uni.showLoading({
						title: '加载中'
					});
					let option = {
						pageNo: this.pageNo,
						pageSize: 8,
						year: this.particularYear,
						roleId: this.selectForm.roleId,
						roleType: this.selectForm.roleType,
						column: "createTime",
						order: "desc",
					}
					console.log("option", option)
					const res = await this.api.fieldInvestigation.audioVisualList(option)
					console.log("pagelist", res)
					const {
						code,
						message,
						result
					} = res
					if (code == 200) {
						this.tabList[1].num = result.total
						if (result.records.length != 0) {
							for (var i = 0; i < result.records.length; i++) {
								this.audioList.push(result.records[i])
							}
						} else {
							this.ismore = false
							uni.showToast({
								icon: "none",
								title: '没有数据了！',
								duration: 2000
							});
						}
						uni.hideLoading();
						// console.log("this.getList", this.getList)
					} else {
						uni.showToast({
							icon: "none",
							title: message,
							duration: 2000
						});
					}
				} catch (e) {
					uni.hideLoading();
					console.log('try:e:', e)
				}
			},

			async transcriptpageList() {
				try {
					uni.showLoading({
						title: '加载中'
					});
					let option = {
						pageNo: this.pageNo,
						pageSize: 8,
						year: this.particularYear,
						roleId: this.selectForm.roleId,
						roleType: this.selectForm.roleType,
						column: "createTime",
						order: "desc",
					}
					console.log("option", option)
					const res = await this.api.fieldInvestigation.transcriptpageList(option)
					console.log("pagelist", res)
					const {
						code,
						message,
						result
					} = res
					if (code == 200) {
						this.tabList[0].num = result.total
						if (result.records.length != 0) {
							for (var i = 0; i < result.records.length; i++) {
								this.tranList.push(result.records[i])
							}
						} else {
							this.ismore = false
							uni.showToast({
								icon: "none",
								title: '没有数据了！',
								duration: 2000
							});
						}
						uni.hideLoading();
						// console.log("this.getList", this.getList)
					} else {
						uni.showToast({
							icon: "none",
							title: message,
							duration: 2000
						});
					}
				} catch (e) {
					uni.hideLoading();
					console.log('try:e:', e)
				}
			},

			toadd() {
				console.log('add', this.tabIndex);
				if (this.tabIndex == 0) {
					uni.navigateTo({
						url: '/pages/investigation/TranscriptAdd'
					})
				} else if (this.tabIndex == 1) {
					uni.navigateTo({
						url: '/pages/investigation/AudioVisualAdd'
					})
				} else if (this.tabIndex == 2) {
					uni.navigateTo({
						url: '/pages/investigation/InspectionAdd'
					})
				}
				// uni.navigateTo({
				// 	url: '/pages/investigation/investigationEdit'
				// })
			},
			onswiperchange(e) {
				this.ismore = true
				this.pageNo = 1
				console.log('onswiperchangee', e)
				this.getitemTab(e.detail.current)
				if (e.detail.current == 0) {
					this.tranList = []
					this.transcriptpageList()
				} else if (e.detail.current == 1) {
					this.audioList = []
					this.audioVisualList()
				} else if (e.detail.current == 2) {
					this.inspectionList = []
					this.inspectionListFun()
				}


			},
			onnodeclick(e) {
				console.log(e);
				this.ismore = true
				this.pageNo = 1
				// console.log('onswiperchangee', e)
				if (this.tabIndex == 0) {
					this.tranList = []
					this.transcriptpageList()
				} else if (this.tabIndex == 1) {
					this.audioList = []
					this.audioVisualList()
				} else if (this.tabIndex == 2) {
					this.inspectionList = []
					this.inspectionListFun()
				}
			},

			onchange(e) {
				console.log('onchange:', e);
			},

			getnumwidth() {


				let c = 0
				for (var i = 0; i < this.tabList.length; i++) {
					// this.tab[i]
					// console.log("iiiii", i)
					let that = this
					let infoxx = uni.createSelectorQuery().in(this);
					infoxx.select(`#ctsbox${i}`).boundingClientRect().exec(res => {
						if (res[0]) {


							c++
							// getlist[i].boxnumleft = 
							// getlist.push(res[0].left + res[0].width - uni.upx2px(this.bothLeft))
							// console.log("this.this", res[0])
							let allleft = uni.upx2px(33, this.$store.state.phoneInfo.playerWidth)

							that.tabList[c - 1].boxnumleft = res[0].width + allleft
							// console.log("getlist",i)
							// console.log("this.this.tabList[i]", that.tabList)
						} else {
							console.log("错误")
						}
					})
				}


				// console.log("getlist", getlist)

			},
			getitemTab(e) {
				// console.log('e', e)
				this.tabIndex = e
				let info = uni.createSelectorQuery().in(this);
				info.select(`#ctsbox${e}`).boundingClientRect().exec(res => {
					if (res[0]) {
						// console.log("ctsDome", res[0])
						// this.boxwidth = res[0].width
						let firstwidth = res[0].width / 2
						this.boxwidth = firstwidth
						let secondwidth = firstwidth / 2

						let allleft = uni.upx2px(this.bothLeft, this.$store.state.phoneInfo.playerWidth)

						this.boxLeft = res[0].left - allleft + secondwidth
						if (!this.boxnumleft) {

							this.boxnumleft = res[0].left + res[0].width - allleft
							// console.log("this.boxnumleft", this.boxnumleft)
						}


					} else {
						console.log("错误")
					}
				})
			}
		}

	}
</script>

<style lang="scss">
	.home {

		.investigation_popup {
			display: flex;
			flex-direction: row;
			align-items: center;
		}

		.tab-view {
			display: flex;
			flex: 1;

			.swiper-item {
				display: flex;
				flex: 1;
				flex-direction: column;

				// background-color: #000000;


			}
		}

		.home_tabber {
			z-index: 1011;
			position: fixed;
			background-color: #ffffff;

			.home_tabber_down {
				position: relative;
				background-color: #ffffff;

				.tabber_down_img {
					top: 10rpx;
					width: 24rpx;
					height: 24rpx;
					position: absolute;
					right: 8rpx;
					z-index: 1011;

				}

				.tabber_down_checken {
					width: 66rpx;
					height: 24rpx;
					position: absolute;
					top: 10rpx;
					left: 8rpx;
					z-index: 1001;
					font-size: 9rpx;
					// background-color: #000000;

					.input-value {
						height: 24rpx;
					}
				}

				.tab-bar {
					// width: 100%;
					flex-direction: row;

					.tabber_down_con {

						// margin-left: 123rpx;
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: center;

						.down_con_line {
							width: 50rpx;
							position: relative;
							left: 0;
							border-radius: 3rpx;

							.con_line {
								position: absolute;
								top: 10rpx;
								width: 25rpx;
								height: 2rpx;
								background-color: #118ee9;
								transition-property: width, left, background-color;
								transition-duration: 0.3s;
								// transition-delay: 0.1s;
								transition-timing-function: ease-in-out;
							}
						}

						.down_con_box {
							// width: 1700rpx;
							display: flex;
							flex-direction: row;
							align-items: center;

							.con_box_add {
								position: relative;
								// background-color: #303133;
							}

							.box_add_num {
								position: absolute;
								top: 0;
								width: 10rpx;
								height: 10rpx;
								background-color: #d43030;
								color: #ffffff;
								border-radius: 50%;
								font-size: 7rpx;
								line-height: 7rpx;
								display: flex;
								align-items: center;
								justify-content: center;
							}

							.con_box_text {
								// margin: 0 33rpx;
								font-size: 12rpx;
								line-height: 12rpx;

								color: #909090;
							}

							.con_active_color {
								color: #118ee9;
							}
						}
					}
				}
			}
		}
	}
</style>
