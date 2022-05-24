<template>
	<view class="home_content">
		<view class="home_content_box">
			<view class="content_box_item" v-for="(item,index) in dataSource" :key="index">
				<view class="box_item_box" style="margin-top: 10rpx;">
					<text class="item_box_title">收集地点：</text>
					<text class="item_box_text">{{item.collectionLocation}}</text>
				</view>
				<view class="box_item_box">
					<text class="item_box_title">收集方式：</text>
					<text class="item_box_text">{{item.collectionMethod}}</text>
				</view>
				<view class="box_item_box">
					<text class="item_box_title">收集时间：</text>
					<text class="item_box_text">{{item.collectionTime}}</text>
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
			changeList(val) {
				console.log("val", val)
				uni.navigateTo({
					url: `/pages/investigation/AudioVisualAdd?dataSource=${JSON.stringify(val)}`
				})
			},

			delList(val) {
				console.log("val", val)
				let that = this
				uni.showModal({
					title: '提示',
					content: '再次确认删除',
					success: function(res) {
						if (res.confirm) {
							that.deleteTrue(val.id)
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			async deleteTrue(val) {
				try {
					const res = await this.api.fieldInvestigation.audioVisualDelete(val)
					console.log("edit", res)
					const {
						code,
						message,
						result
					} = res
					if (code == 200) {

						uni.showToast({
							icon: "none",
							title: message,
							duration: 2000
						});
						this.$emit("callbackCon")
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

		},
		components: {
			publicBtn
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/commons/cardMy.scss'
</style>
