<template>
	<view class="home_content">
		<view class="home_content_box">
			<view class="content_box_item" v-for="(item,index) in dataSource" :key="index">
				<view class="box_item_box" style="margin-top: 10rpx;">
					<text class="item_box_title">地点：</text>
					<text class="item_box_text">{{item.inquiryLocation}}</text>
				</view>
				<view class="box_item_box">
					<text class="item_box_title">案由：</text>
					<text class="item_box_text">{{item.causeAction}}</text>
				</view>
				<view class="box_item_box">
					<text class="item_box_title">被询问人：</text>
					<text class="item_box_text">{{item.personQuestioned}}</text>
				</view>
				<view class="box_item_box">
					<text class="item_box_title">开始时间：</text>
					<text class="item_box_text2">{{item.inquiryStarttime}}</text>
				</view>
				<view class="box_line">

				</view>
				<view class="box_btn_add">
					<view class="box_btn">
						<button @click="delList(item)" type="default">删除</button>
					</view>
					<view class="box_btn">
						<button @click="changeList(item)" type="primary">修改</button>
					</view>
				</view>
			</view>
			<!-- 	<view class="content_box_item" @click="tolist">
				1234
			</view>
			<view class="content_box_item">
				1234
			</view> -->
		</view>

	</view>
</template>

<script>
	import publicBtn from '@/components/public/publicBtn.vue'
	export default {
		props: {
			dataSource: {
				type: Array
			}
		},
		methods: {
			tolist(val) {
				console.log("34567", val)
				uni.navigateTo({
					url: `/pages/homePage/homeSecond/caseAdmin?dataSource=${JSON.stringify(val)}`
				})
			}
		},
		components: {
			publicBtn
		}
	}
</script>

<style lang="scss">
	.home_content {
		display: flex;
		align-items: center;
		justify-content: center;

		.home_content_box {
			margin: 0 0 0 -8rpx;
			width: 632rpx;
			// background-color: #007AFF;
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;

			.content_box_item {
				border-radius: 2rpx;
				margin: 8rpx 0 0 8rpx;
				width: 308rpx;
				height: 132rpx;
				display: flex;
				flex-direction: column;
				background-color: #ffffff;

				.box_line {
					margin: 6rpx 0 6rpx 0;
					width: 308rpx;
					height: 0.5rpx;
					background-color: #e5e5e5;

				}

				.box_btn_add {
					width: 308rpx;
					display: flex;
					flex-direction: row-reverse;

					.box_btn {
						margin-right: 16rpx;

					}
				}



				.box_item_box {
					margin-top: 6rpx;

					display: flex;
					flex-direction: row;

					.item_box_title {
						line-height: 150%;
						font-size: 10rpx;
						// line-height: 10rpx;
						margin-left: 10rpx;
						color: #909090;
					}

					.item_box_text {
						width: 230rpx;
						font-size: 11rpx;
						line-height: 150%;
						color: #505050;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						word-break: break-all;
					}

					.item_box_text2 {
						width: 230rpx;
						font-size: 10rpx;
						line-height: 150%;
						color: #909090;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						word-break: break-all;
					}
				}
			}
		}


	}
</style>
