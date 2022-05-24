<template>
	<view class="home_content">
		<view class="home_content_box">
			<view class="content_box_item" v-for="(item,index) in dataSource" :key="index">
				<view class="box_item_box" style="margin-top: 10rpx;">
					<text class="item_box_title">项目编号：</text>
					<text class="item_box_text">{{item.itemNo}}</text>
				</view>
				<view class="box_item_box">
					<text class="item_box_title">项目名称：</text>
					<text class="item_box_text">{{item.itemNo}}</text>
				</view>
				<view class="box_item_box">
					<text class="item_box_title">当事人：</text>
					<text class="item_box_text">{{item.caseYear}}</text>
				</view>
				<view class="box_item_box">
					<text class="item_box_title">案件类型：</text>
					<text class="item_box_text2">{{item.ajlx}}</text>
				</view>
				<view class="box_line">

				</view>
				<!-- <view class="box_btn_add" @click="tolist(item)">
					<publicBtn >进入</publicBtn>
				
				</view> -->
				<view class="box_btn_add">

					<view class="box_btn">
						<button @click="tolist(item)" type="primary">进入</button>
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

<style lang="scss" scoped>
	@import '@/commons/cardMy.scss'
</style>
