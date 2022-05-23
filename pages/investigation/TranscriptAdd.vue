<template>
	<view class="home">
		<view class="home_tabber"
			:style="{ width: $store.state.phoneInfo.playerWidth+'px',height:$store.state.phoneInfo.BarHeight }">
			<view
				:style="{ width: $store.state.phoneInfo.playerWidth+'px',height: $store.state.phoneInfo.statusBarHeight+'px' }">
			</view>
			<view class="home_tabber_down"
				:style="{ width: $store.state.phoneInfo.playerWidth+'px',height: $store.state.phoneInfo.BarHeightDown+'px' }">

				<view class="tabber_down_img" @click="goback">
					<image class="down_img_size" src="@/static/img/public/001.svg"></image>
				</view>
				<scroll-view :style="{height: $store.state.phoneInfo.BarHeightDown+'px' }" ref="tabbar1" id="tab-bar"
					class="tab-bar" :scroll="false" :scroll-x="true" :show-scrollbar="false"
					:scroll-into-view="scrollInto">
					<view class="tabber_down_con" :style="{ marginLeft:bothLeft +'rpx'}">
						<view class="down_con_box">
							<view class="con_box_add" v-for="(tab,indextab) in tabList" :key="indextab">

								<text :style="{ margin:bothsides }" :class="[indextab==tabIndex?'con_active_color':'']"
									@click="getitemTab(indextab)" :id="`ctsbox${indextab}`"
									class="con_box_text">{{tab.name}}</text>
							</view>
						</view>

					</view>
				</scroll-view>

			</view>
		</view>

		<TranscriptFrom v-model="model"></TranscriptFrom>

		<SecurityBox></SecurityBox>
	</view>
</template>

<script>
	import SecurityBox from '@/components/public/SecurityBox.vue'
	import publicContent from '@/components/public/publicContent.vue'

	import TranscriptFrom from '@/components/investigation/TranscriptFrom.vue'

	import upAllFile from '@/components/public/from/upAllFile.vue'
	export default {
		data() {
			return {
				tabList: [{
					name: "询问笔录",
				}, ],
				scrollInto: "",
				tabIndex: 0,
				taberWidth: 1700,
				boxLeft: 0,
				boxwidth: 52,
				getList: [],
				boxnumleft: null,

				// addlist
				bothsides: '0 12rpx',
				bothLeft: 34,
				model: {}
			}
		},

		components: {
			SecurityBox,
			publicContent,
			TranscriptFrom,
			upAllFile
		},
		onLoad(e) {
			console.log("e", e)
			this.$nextTick(() => {
				this.getitemTab(0)
			})
			if (e.dataSource) {
				let getrotuer = JSON.parse(e.dataSource)
				console.log("getrotuer", getrotuer)
				this.getlist(getrotuer)
			}

		},
		methods: {
			async getlist(getrotuer) {
				try {
					uni.showLoading({
						title: '加载中'
					});

					let option = {
						id: getrotuer.id,
					}
					console.log("option", option)
					const res = await this.api.prospect.queryById(option)
					console.log("queryById", res)
					const {
						code,
						message,
						result
					} = res
					if (code == 200) {
						//处理办案人

						this.model = result
						console.log("this.model", this.model)
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



			goback() {
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
					animationDuration: 200
				})
			},
			onswiperchange(e) {
				// console.log('onswiperchangee', e)
				this.getitemTab(e.detail.current)


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
						this.boxLeft = res[0].left - uni.upx2px(this.bothLeft) + secondwidth
						if (!this.boxnumleft) {

							this.boxnumleft = res[0].left + res[0].width - uni.upx2px(this.bothLeft)
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

<style lang="scss" scoped>
	.home {

		position: relative;




		.home_position_img {
			z-index: 1001;
			position: absolute;
			top: 55rpx;
			right: 77rpx;
			width: 117rpx;
			height: 76rpx;
			pointer-events: none;
		}

		.tab-view {
			display: flex;
			flex: 1;

			.swiper-item {
				display: flex;
				flex: 1;
				flex-direction: column;

				.second_view_add {
					border-top: 1px #D2D2D2 solid;
					background-color: #18BC37;
				}




			}
		}

		.test_updata {
			z-index: 1001;
			position: fixed;
			top: 200rpx;
			background-color: #ffffff;
		}

		.home_tabber {
			z-index: 1001;
			position: fixed;
			background-color: #ffffff;


			.home_tabber_down {
				position: relative;
				background-color: #ffffff;
				border-bottom: 1rpx solid #e5e5e5;

				.tabber_down_img {
					z-index: 1001;
					position: absolute;
					left: 8rpx;
					height: 100%;
					display: flex;
					align-items: center;

					.down_img_size {
						width: 18rpx;
						height: 18rpx;
					}
				}

				.tab-bar {
					flex-direction: row;

					.tabber_down_con {
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
								transition-timing-function: ease-in-out;
							}
						}

						.down_con_box {
							display: flex;
							flex-direction: row;
							align-items: center;

							.con_box_add {
								position: relative;
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
