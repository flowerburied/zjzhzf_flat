<template>
	<view class="public_sec_tabber">
		<scroll-view :style="{height: '80rpx' }" class="tab-bar" :scroll="false" :scroll-x="true"
			:show-scrollbar="false" :scroll-into-view="scrollInto">
			<view class="tabber_down_con">
				<view class="down_con_box" :style="{width: taberWidth+'px' }">
					<view class="con_box_add" id="con_box">
						<text @click="getitemTab(indextab)" :id="`ctsbox${indextab}`" class="con_box_text"
							:class="[indextab==tabIndex?'box_text_active':'']" v-for="(tab,indextab) in tabList"
							:key="indextab">{{tab.name}}</text>
					</view>
				</view>
				<view class="down_con_line" :style="{width: taberWidth+'px' }">
					<view class="con_line" :style="{ left: boxLeft+'px',width: boxwidth+'px'}">
					</view>
				</view>
			</view>
		</scroll-view>

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
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.gettaberWidth()
				this.getitemTab(0)
			})
		},
		methods: {
			gettaberWidth() {
				let info = uni.createSelectorQuery().in(this);
				info.select(`#con_box`).boundingClientRect().exec(res => {
					if (res[0]) {
						// console.log("ctsDome", res[0])
						this.taberWidth = res[0].width

						// console.log("this.taberWidth", this.taberWidth)
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
						this.boxwidth = res[0].width/2
						let addwidth=this.boxwidth/2
						this.boxLeft = res[0].left+addwidth - uni.upx2px(60)
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
	.public_sec_tabber {
		background-color: #9E1A31;
		height: 80rpx;

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

					.con_box_add {}

				
					.con_box_text {
						// background-color: #18BC37;
						margin-right: 84rpx;
						// padding-right: 84rpx;
						font-size: 28rpx;
						line-height: 28rpx;
						color: #F1F1F1;
					}
					.box_text_active {
						color: #FFFFFF;
					}
					
				}
			}
		}
	}
</style>
