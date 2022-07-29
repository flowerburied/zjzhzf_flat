<template>
	<view class="launch_page">
		<image class="launch_page_img" src="@/static/logo.png" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		onShow() {
			this.judgeRouter()
		},
		methods: {
			judgeRouter() {
				uni.getStorage({
					key: "token",
					complete: (val) => {
						console.log(val);
						if (val.data) {
							uni.switchTab({
								url: '/pages/prospect/prospect'
							})

						} else {
							uni.reLaunch({
								url: '/pages/login/signin'
							})
							// this.handleChangeCheckCode()
						}
					}
				})


			}
		}
	}
</script>

<style lang="scss" scoped>
	.launch_page {
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;

		.launch_page_img {
			width: 100rpx;
			height: 100rpx;
			border-radius: 10rpx;
		}
	}
</style>
