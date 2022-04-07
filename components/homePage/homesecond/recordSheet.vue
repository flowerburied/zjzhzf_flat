<template>
	<view class="home_second_view">
		<view class="second_view_tips">
			<text class="view_tips_text">系统提示：该办件距离超期还剩 10 个工作日。</text>
		</view>

		<view class="second_view_title">
			建设工程消防验收备案抽查记录表
		</view>

		<view class="second_view_box">
			<myCol>
				<myRow widthPercentage='2'>23</myRow>
				<myRow widthPercentage='8'>3456</myRow>
			</myCol>
			<myCol>
				<myRow widthPercentage='2'>23</myRow>
				<myRow widthPercentage='3'>3456</myRow>
				<myRow widthPercentage='2'>23</myRow>
				<myRow widthPercentage='3'>3456</myRow>
			</myCol>
			<myCol>
				<myRow background="#f0f0f0" widthPercentage='2'>23</myRow>
				<myRow background="#f0f0f0" widthPercentage='3'>3456</myRow>
				<myRow background="#f0f0f0" widthPercentage='5'>23</myRow>

			</myCol>
			<myCol>
				<myRow>23</myRow>
				<myRow>3456</myRow>

			</myCol>

		</view>

		<view class="second_view_btn">
			<view class="view_btn_item add_color">
				关闭
			</view>
			<view class="view_btn_item">
				保存
			</view>
			<view class="view_btn_item">
				整改
			</view>
			<view class="view_btn_item">
				打印预览
			</view>

		</view>


	</view>
</template>

<script>
	import myCol from "@/components/public/myRow/myCol.vue"
	import myRow from "@/components/public/myRow/myRow.vue"
	export default {
		components: {

			myRow,
			myCol

		},
	}
</script>

<style lang="scss" scoped>
	.home_second_view {
		display: flex;
		flex-direction: column;
		// justify-content: center;
		align-items: center;

		.second_view_btn {
			width: 100%;
			display: flex;
			flex-direction: row-reverse;

			.view_btn_item {
				margin: 10rpx 8rpx;
				padding: 8rpx 16rpx;
				font-size: 10rpx;
				background-color: #118ee9;
				line-height: 150%;
				color: #ffffff;
				border-radius: 4rpx;
			}

			.add_color {
				color: #383838;
				background-color: #e5e5e5;
			}
		}

		.second_view_tips {
			width: 100%;
			display: flex;
			flex-direction: row;

			.view_tips_text {
				margin: 12rpx 0 0 8rpx;
				padding: 10rpx;
				font-size: 8rpx;
				background-color: #cae3ff;
				line-height: 150%;

				color: #505050;
				border-radius: 4rpx;
			}
		}

		.second_view_title {
			color: #505050;
			line-height: 150%;
			font-size: 13rpx;
			margin: 4rpx 0 12rpx 0;
		}

		.second_view_box {
			width: 624rpx;
			display: flex;
			flex-wrap: wrap;
			border-left: 1px #D2D2D2 solid;
			border-top: 1px #D2D2D2 solid;

		}

		.second_view_item {

			border-bottom: 1px #D2D2D2 solid;
			border-right: 1px #D2D2D2 solid;
		}
	}
</style>
