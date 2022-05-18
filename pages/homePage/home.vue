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
					<uni-data-picker style="height: 24rpx;" v-model="classes" :localdata="items" @change="onchange"
						@nodeclick="onnodeclick">
					</uni-data-picker>
				</view>
				<scroll-view :style="{height: $store.state.phoneInfo.BarHeightDown+'px' }" ref="tabbar1" id="tab-bar"
					class="tab-bar" :scroll="false" :scroll-x="true" :show-scrollbar="false"
					:scroll-into-view="scrollInto">
					<view class="tabber_down_con" :style="{ marginLeft:bothLeft +'rpx'}">
						<view class="down_con_box">
							<view class="con_box_add" v-for="(tab,indextab) in tabList" :key="indextab">
								<view class="box_add_num" :style="{ left: boxnumleft+'px'}">
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
						<homeContent :dataSource="getList"></homeContent>
						<SecurityBox></SecurityBox>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item ">
					<scroll-view @scrolltolower="scrolltolower" :style="{height:$store.state.phoneInfo.publicCon+'px'}"
						scroll-y="true" class="scroll-Y">
						<homeContent :dataSource="getList"></homeContent>
						<SecurityBox></SecurityBox>
					</scroll-view>
				</swiper-item>
			</swiper>

		</publicContent>
	</view>
</template>

<script>
	import SecurityBox from '@/components/public/SecurityBox.vue'
	import publicContent from '@/components/public/publicContent.vue'
	import homeContent from '@/components/homePage/homeContent.vue'
	export default {
		data() {
			return {

				tabList: [{
						name: "进行中",
						num: 8
					},
					{
						name: "已办结",
						num: 6
					},

				],
				scrollInto: "",
				tabIndex: 0,
				taberWidth: 1700,
				boxLeft: 0,
				boxwidth: 52,

				boxnumleft: null,

				// 数据
				classes: '2022',
				items: [{
						text: "2022",
						value: "2022"
					},
					{
						text: "2023",
						value: "2023"
					}
				],
				// addlist
				bothsides: '0 33rpx',
				bothLeft: 123,

				pageNo: 1,
				getList: [],
				caseState: 1,
				caseState1: true

			}
		},
		components: {
			SecurityBox,
			publicContent,
			homeContent

		},
		onLoad() {
			this.$nextTick(() => {
				this.getitemTab(0)
			})
			this.getlist()

		},
		methods: {
			scrolltolower(e) {
				console.log('e', e)
				if (this.caseState1) {
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
			async getlist() {

				try {
					uni.showLoading({
						title: '加载中'
					});
					let option = {
						pageNo: this.pageNo,
						pageSize: 8,
						case_state: this.caseState
					}
					console.log("option", option)
					const res = await this.api.myCaseHomePage.pagelist(option)
					// console.log("pagelist", res)
					const {
						code,
						message,
						result
					} = res
					if (code == 200) {
						if (result.records.length != 0) {
							for (var i = 0; i < result.records.length; i++) {
								this.getList.push(result.records[i])
							}
						} else {
							this.caseState1 = false
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
			onswiperchange(e) {
				this.getList = []
				this.getitemTab(e.detail.current)
				if (e.detail.current == 0) {
					console.log('进行中', e)
					this.caseState = 1
				} else {
					console.log('已办结', e)
					this.caseState = 2
				}
				this.caseState1 = true
				this.pageNo = 1
				this.getlist()
			},
			onnodeclick(e) {
				console.log(e);
			},
			onchange(e) {
				console.log('onchange:', e);
			},
			getitemTab(e) {
				// console.log('e', e)
				this.tabIndex = e
				let info = uni.createSelectorQuery().in(this);
				info.select(`#ctsbox${e}`).boundingClientRect().exec(res => {
					if (res[0]) {
						console.log("ctsDome", res[0])
						// this.boxwidth = res[0].width
						let firstwidth = res[0].width / 2
						this.boxwidth = firstwidth
						let secondwidth = firstwidth / 2
						let allleft = uni.upx2px(this.bothLeft, this.$store.state.phoneInfo.playerWidth)
						this.boxLeft = res[0].left - allleft + secondwidth
						if (!this.boxnumleft) {
							this.boxnumleft = res[0].left + res[0].width - allleft
						}
						// console.log("this.boxwidth", this.boxwidth)
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
