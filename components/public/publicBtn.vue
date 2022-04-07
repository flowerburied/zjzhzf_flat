<template>
	<view class="public_mybtn" :style="{backgroundColor:backColor,color:textColor}">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			backColor: {
				type: String,
				default: '#118ee9'
			},
			textColor: {
				type: String,
				default: '#ffffff'
			}
		},

	}
</script>

<style lang="scss" scoped>
	.public_mybtn {
		margin: 0 8rpx;
		padding: 8rpx 16rpx;
		font-size: 10rpx;
		background-color: #118ee9;
		// line-height: 150%;
		color: #ffffff;
		border-radius: 4rpx;
	}
</style>
