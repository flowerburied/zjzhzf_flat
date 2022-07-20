<template>
	<view class="home_content">
		<view class="home_content_box" v-if="dataSource.length!=0">
			<view class="content_box_item" v-for="(item,index) in dataSource" :key="index">
				<view>
					<view class="box_item_box" style="margin-top: 10rpx;">
						<text class="item_box_title">当事人：</text>
						<text class="item_box_text">{{item.partyType=='1'?'单位':'个人'}}</text>
					</view>
					<view class="box_item_box" v-if="item.partyType==1">
						<text class="item_box_title">名称：</text>
						<text class="item_box_text">{{item.companyName}}</text>
					</view>

					<view class="box_item_box" v-if="item.partyType==2">
						<text class="item_box_title">姓名：</text>
						<text class="item_box_text">{{item.personalName}}</text>
					</view>
					<view class="box_item_box">
						<text class="item_box_title">案由：</text>
						<text class="item_box_text">{{item.caseDesc}}</text>
					</view>
					
					<view class="box_item_box">
						<text class="item_box_title">状态：</text>
						<text class="item_box_text">{{item.state_dictText}}</text>
					</view>
				</view>
				<!-- <view v-if="item.partyType==1">
					<view class="box_item_box" style="margin-top: 10rpx;">
						<text class="item_box_title">当事人：</text>
						<text class="item_box_text">个人</text>
					</view>
					<view class="box_item_box">
						<text class="item_box_title">项目名称：</text>
						<text class="item_box_text">{{item.companyName}}</text>
					</view>
				</view> -->

				<view class="box_line">

				</view>
				<view class="box_btn_add">

					<view class="box_btn" v-if="item.state != '2'">
						<button @click="Destruction(item)" type="default">销毁</button>
					</view>
					<view class="box_btn">
						<button @click="delList(item)" type="default">删除</button>
					</view>
					<view class="box_btn">
						<button @click="changeList(item)" type="primary">修改</button>
					</view>
				</view>
			</view>

		</view>

		<nodata v-if="dataSource.length==0"></nodata>

	</view>
</template>

<script>
	import nodata from '@/components/public/noData.vue'
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
					url: `/pages/investigation/InspectionAdd?dataSource=${JSON.stringify(val)}`
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
					const res = await this.api.fieldInvestigation.inspectionDelete(val)
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
			nodata
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/commons/cardMy.scss'
</style>
