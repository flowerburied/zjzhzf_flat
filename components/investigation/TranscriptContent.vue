<template>
	<view class="home_content">
		<view class="home_content_box" v-if="dataSource.length!=0">
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
				<view class="box_item_box">
					<text class="item_box_title">状态：</text>
					<text class="item_box_text">{{item.state_dictText}}</text>
				</view>
				<view class="box_line">

				</view>
				<view class="box_btn_add">
					<view class="box_btn" v-if="item.state != '2'">
						<button @click="Destruction(item)" type="default">销毁</button>
					</view>
					<view class="box_btn" v-if="$store.state.isAdmin">
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

		<nodata v-if="dataSource.length==0"></nodata>

	</view>
</template>

<script>
	import nodata from '@/components/public/noData.vue'
	import publicBtn from '@/components/public/publicBtn.vue'
	export default {
		props: {
			dataSource: {
				type: Array
			}
		},
		methods: {
			Destruction(val) {
				console.log("val", val)

				this.$emit("openPopup", val.id)
			},
			changeList(val) {
				console.log("val", val)
				uni.navigateTo({
					url: `/pages/investigation/TranscriptAdd?dataSource=${JSON.stringify(val)}`
				})
			},
			tolist(val) {
				console.log("34567", val)
				uni.navigateTo({
					url: `/pages/homePage/homeSecond/caseAdmin?dataSource=${JSON.stringify(val)}`
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
					const res = await this.api.fieldInvestigation.transcriptDelete(val)
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
			publicBtn,
			nodata
		}
	}
</script>

<style lang="scss">
	@import '@/commons/cardMy.scss'
</style>
