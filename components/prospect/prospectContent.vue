<template>
	<view class="home_content">
		<view class="home_content_box" v-if="dataSource.length!=0">
			<view class="content_box_item" v-for="(item,index) in dataSource" :key="index">
				<view class="box_item_box" style="margin-top: 10rpx;">
					<text class="item_box_title">工程名称：</text>
					<text class="item_box_text">{{item.projectName}}</text>
				</view>
				<view class="box_item_box">
					<text class="item_box_title">建设单位：</text>
					<text class="item_box_text">{{item.constructionUnit}}</text>
				</view>
				<view class="box_item_box">
					<text class="item_box_title">施工单位：</text>
					<text class="item_box_text">{{item.constructionCompany}}</text>
				</view>
				<view class="box_item_box">
					<text class="item_box_title">勘查时间：</text>
					<text class="item_box_text2">{{item.surveyTime}}</text>
				</view>
				<view class="box_item_box">
					<text class="item_box_title">状态：</text>
					<text class="item_box_text2">{{item.state=='0'?'草稿':item.state=='1'?'待审核':'已审核'}}</text>
				</view>
				<view class="box_line">

				</view>
				<view class="box_btn_add">
					<view class="box_btn" v-if="item.state == '1'">
						<button @click="examine(item)" type="default">审核</button>
					</view>
					<view class="box_btn" v-if="$store.state.isAdmin">
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
	import publicBtn from '@/components/public/publicBtn.vue'
	import nodata from '@/components/public/noData.vue'
	export default {
		props: {
			dataSource: {
				type: Array
			}
		},
		methods: {
			examine(val) {
				let that = this
				uni.showModal({
					title: '提示',
					content: '再次确认通过审核',
					success: function(res) {
						if (res.confirm) {
							that.examineTrue(val.id)
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			async examineTrue(val) {
				console.log("val", val);
				let httpurl = "/zhzf/siteSurvey/approved";
				let method = "post";
				let option = {
					id: val,
				};

				const res = await this.api.fieldInvestigation.TotolPostFun(option, httpurl, method)
				const {
					code,
					message,
					result,
					success
				} = res
				if (success) {
					console.log("res", res)
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

			},
			tolist() {
				// console.log("34567")
				uni.navigateTo({
					url: '/pages/homePage/homeSecond/caseAdmin'
				})
			},
			changeList(val) {
				console.log("val", val)
				uni.navigateTo({
					url: `/pages/prospect/prospectEdit?dataSource=${JSON.stringify(val)}`
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
					const res = await this.api.prospect.delete(val)
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

<style lang="scss" scoped>
	@import '@/commons/cardMy.scss'
</style>
