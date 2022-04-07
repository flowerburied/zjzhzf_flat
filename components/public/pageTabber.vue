<template>
	<view class="tidings_tabber"
		:style="{ width: $store.state.phoneInfo.playerWidth+'px',height:$store.state.phoneInfo.BarHeight }">
		<view
			:style="{ width: $store.state.phoneInfo.playerWidth+'px',height: $store.state.phoneInfo.statusBarHeight+'px' }">
		</view>
		<view class="tidings_tabber_down"
			:style="{ width: $store.state.phoneInfo.playerWidth+'px',height: $store.state.phoneInfo.BarHeightDown+'px' }">
			<scroll-view @scroll="scroll" :style="{height: $store.state.phoneInfo.BarHeightDown+'px' }" ref="tabbar1"
				id="tab-bar" class="tab-bar" :scroll="false" :scroll-x="true" :show-scrollbar="false"
				:scroll-into-view="scrollInto">
				<view class="tabber_down_con">
					<view class="down_con_box" :style="{width: taberWidth+'px' }">
						<view class="con_box_add" id="con_box">
							<text @click="getitemTab(indextab)" :id="`ctsbox${indextab}`" class="con_box_text"
								v-for="(tab,indextab) in tabList" :key="indextab">{{tab.name}}</text>
						</view>
					</view>
					<view class="down_con_line" :style="{width: taberWidth+'px' }">
						<view class="con_line" :style="{ left: boxLeft+'px',width: boxwidth+'px'}">
						</view>
					</view>
				</view>
			</scroll-view>

		</view>
	</view>
</template>

<script>
	export default {
		props: {
			tabList: {
				type: Array,
			},
			tabIndex: {
				type: Number
			}
		},
		data() {
			return {
				boxLeft: 0,
				boxwidth: 30,
				taberWidth: 1700,
				scrollInto: "",
				scrollLeft: null
			}
		},
		mounted() {


			this.$nextTick(function() {
				// this.gettaberWidth()
				this.getitemTab(0)
			})
		},
		methods: {
			scroll(e) {
				// console.log("e", e)
				this.scrollLeft = e.detail.scrollLeft
			},
			gettaberWidth() {
				let info = uni.createSelectorQuery().in(this);
				info.select(`#con_box`).boundingClientRect().exec(res => {
					if (res[0]) {
						// console.log("ctsDome", res[0])
						this.taberWidth = res[0].width

						console.log("this.taberWidth", this.taberWidth)
					} else {
						console.log("错误")
					}
				})
			},
			getitemTab(e) {
				// console.log('e', e)
				// this.tabIndex = e
				this.$emit("changeTabIndex", e)
				let info = uni.createSelectorQuery().in(this);
				info.select(`#ctsbox${e}`).boundingClientRect().exec(res => {
					if (res[0]) {
						// console.log("ctsDome", res[0])
						this.boxwidth = res[0].width
						if (this.scrollLeft) {
							this.boxLeft = res[0].left + this.scrollLeft - uni.upx2px(60)
						} else {
							this.boxLeft = res[0].left - uni.upx2px(60)
						}

						// console.log("this.boxwidth", this.boxwidth)
					} else {
						console.log("错误")
					}
				})
			},


		}
	}
</script>

<style lang="scss">
	.tidings_tabber {
		z-index: 1011;
		position: fixed;

		.tidings_tabber_down {
			background-color: #9E1A31;

			.tab-bar {
				width: 750rpx;
				// height: 84rpx;
				flex-direction: row;

				// background-color: #3F536E;

				.tabber_down_con {
					margin-left: 60rpx;
					// width: 1750rpx;
					height: 100%;
					// background-color: #000000;
					display: flex;
					flex-direction: column;
					justify-content: center;

					.down_con_line {
						width: 100rpx;
						position: relative;
						left: 0;
						border-radius: 3rpx;

						.con_line {
							// z-index: 999;
							// border-radius: 6rpx;
							position: absolute;
							top: 5rpx;
							// left: 30rpx;
							width: 48rpx;
							height: 4rpx;
							background-color: #FFFFFF;
							transition-property: width, left, background-color;
							transition-duration: 0.3s;
							// transition-delay: 0.1s;
							transition-timing-function: ease-in-out;
						}
					}

					.down_con_box {
						width: 1700rpx;
						// background-color: #007AFF;
						display: flex;
						flex-direction: row;
						align-items: center;

						.con_box_add {

							// background-color: #303133;
						}

						.con_box_text {
							// background-color: #18BC37;
							margin-right: 84rpx;
							// padding-right: 84rpx;
							font-size: 28rpx;
							line-height: 28rpx;
							color: #FFFFFF;
						}
					}
				}
			}
		}
	}
</style>
