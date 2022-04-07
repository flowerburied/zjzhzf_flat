<template>
	<view class="worldchat-tabber"
		:style="{ width: $store.state.phoneInfo.playerWidth+'px',height:$store.state.phoneInfo.BarHeight }">
		<view
			:style="{ width: $store.state.phoneInfo.playerWidth+'px',height: $store.state.phoneInfo.statusBarHeight+'px' }">
		</view>
		<view class="worldchat-tabber-down"
			:style="{ width: $store.state.phoneInfo.playerWidth+'px',height: $store.state.phoneInfo.BarHeightDown+'px' }">
			<view class="tabber-down-home" @click="goBack">
				<image class="down-home-img" src="@/static/img/public/03.png"></image>
			</view>

			<view class="tabber-down-text">
				<text class="down-text" :style="{color:titleColor }">{{title}}</text>
			</view>
			<view class="tabber-down-right">
				<view class="down-right-box" @click="showMore">
					<view class="right-box-spot"></view>
					<view class="right-box-spot"></view>
					<view class="right-box-spot"></view>
				</view>
				<view class="down-right-line">
				</view>
				<image @click="clearAll" class="down-right-img" src="@/static/img/public/02.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: '管理'
			}
		},
		data() {
			return {
				titleColor: '#FFFFFF',
				// title: "管理首页"
			}
		},
		onLoad() {
			console.log("this.$store.state.phoneInfo", this.$store.state.phoneInfo)
		},
		methods: {
			clearAll() {
				console.log('clearAll')
			},
			showMore() {
				console.log('showMore')
			},
			goBack() {
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
					animationDuration: 200
				})
				console.log('goback')
			}
		}

	}
</script>

<style lang="scss">
	.worldchat-tabber {
		z-index: 1011;
		position: fixed;
		background-color: #FFFFFF;

		.worldchat-tabber-down {
			// background-color: #9E1A31;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			.tabber-down-home {
				width: 170rpx;
				align-items: center;
				display: flex;

				.down-home-img {
					padding: 20rpx 20rpx 20rpx 40rpx;
					width: 17rpx;
					height: 32rpx;
				}
			}

			.tabber-down-text {
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;

				.down-text {
					font-size: 32rpx;
					line-height: 32rpx;
					color: #3C251C;
				}
			}

			.tabber-down-right {
				width: 170rpx;

				display: flex;
				align-items: center;
				flex-direction: row;
				justify-content: space-between;

				.down-right-box {
					padding: 30rpx 0;
					display: flex;
					align-items: center;
					flex-direction: row;

					.right-box-spot {
						margin-right: 6rpx;
						border-radius: 50%;
						width: 6rpx;
						height: 6rpx;
						background-color: #FFFFFF;
					}
				}

				.down-right-line {
					width: 2rpx;
					height: 28rpx;
					background-color: #F2F3F7;
				}

				.down-right-img {
					padding: 20rpx 20rpx 20rpx 0;
					margin-right: 40rpx;
					width: 32rpx;
					height: 32rpx;
				}
			}
		}
	}
</style>
