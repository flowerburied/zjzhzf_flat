<template>
	<view class="list_content_search" :style="{background:backColor}">
		<view class="content_search_box">
			<view class="search_box_left">
				<image class="box_left_img" src="@/static/img/public/24.png"></image>
				<input @confirm="confirmfun" @input="inputfun" confirm-type="完成" class="box_left_input" type="text"
					placeholder="搜索" />
			</view>
			<image v-if="isfilter" class="box_left_right" src="@/static/img/public/25.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			isfilter: {
				type: Boolean,
				default: true
			},
			backColor: {
				type: String,
				default: "#9E1A31"
			}
		},
		methods: {
			confirmfun() {
				console.log("输入完成")
				this.$emit("confirmfun")
			},
			inputfun(e) {
				console.log("e", e)
				this.$store.commit("SET_SEARCH_CONTENT", e.target.value)
			}
		},




	}
</script>

<style lang="scss">
	.list_content_search {
		width: 100%;
		height: 80rpx;
		// background-color: #9E1A31;
		display: flex;
		align-items: center;
		justify-content: center;

		.content_search_box {
			background-color: #FFFFFF;
			width: 710rpx;
			height: 48rpx;
			border-radius: 10rpx;
			display: flex;
			align-items: center;
			flex-direction: row;
			justify-content: space-between;

			.box_left_right {
				margin-right: 28rpx;
				width: 28rpx;
				height: 28rpx;
			}

			.search_box_left {
				display: flex;
				align-items: center;
				flex-direction: row;

				.box_left_img {
					margin-left: 28rpx;
					width: 28rpx;
					height: 28rpx;
				}

				.box_left_input {
					margin-left: 28rpx;
					width: 510rpx;
					height: 36rpx;
					font-size: 28rpx;
					line-height: 28rpx;

				}
			}
		}
	}
</style>
