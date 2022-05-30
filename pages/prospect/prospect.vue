<template>

	<view class="home">
		<view class="home_tabber"
			:style="{ width: $store.state.phoneInfo.playerWidth+'px',height:$store.state.phoneInfo.BarHeight }">
			<view
				:style="{ width: $store.state.phoneInfo.playerWidth+'px',height: $store.state.phoneInfo.statusBarHeight+'px' }">
			</view>
			<view class="home_tabber_down"
				:style="{ width: $store.state.phoneInfo.playerWidth+'px',height: $store.state.phoneInfo.BarHeightDown+'px' }">

				<view class="tabber_down_checken">
					<uni-data-picker style="height: 24rpx;" v-model="classes" :localdata="items" @change="onchange"
						@nodeclick="onnodeclick">
					</uni-data-picker>
				</view>

				<image @click="toadd" class="tabber_down_img" src="@/static/img/public/005.svg"></image>


			</view>
		</view>


		<publicContent @scrolltolower="scrolltolower">

			<prospectContent @callbackCon="callbackCon" :dataSource="getList"></prospectContent>
			<SecurityBox></SecurityBox>

		</publicContent>







	</view>
</template>

<script>
	import SecurityBox from '@/components/public/SecurityBox.vue'
	import publicContent from '@/components/public/publicContent.vue'
	import prospectContent from '@/components/prospect/prospectContent.vue'
	export default {
		data() {
			return {
				// 数据
				classes: '2022',
				items: [{
						text: "2022",
						value: "2022"
					},
					{
						text: "2023",
						value: "2023"
					},
					{
						text: "2024",
						value: "2024"
					},
					{
						text: "2025",
						value: "2025"
					},
				],

				pageNo: 1,
				getList: [],
				caseState: 1,
				ismore: true,




			}
		},
		components: {
			SecurityBox,
			publicContent,
			prospectContent

		},

		onShow() {
			this.getList = []
			this.ismore = true
			this.pageNo = 1
			this.getlist()
		},
		

		methods: {
			callbackCon() {
				this.getList = []
				this.ismore = true
				this.pageNo = 1
				this.getlist()
			},

			onnodeclick(e) {
				this.getList = []
				this.ismore = true
				this.pageNo = 1
				this.getlist()
				console.log(e);
			},

			onchange(e) {
				console.log('onchange:', e);
			},
			toadd() {
				console.log('add');
				uni.navigateTo({

					// url: '/pages/prospect/testindex'
					url: '/pages/prospect/prospectEdit'
				})
			},
			scrolltolower(e) {
				console.log('e', e)
				if (this.ismore) {
					this.pageNo += 1
					this.getlist()
				} else {
					uni.showToast({
						icon: "none",
						title: '没有数据了！',
						duration: 2000
					});
				}

			},
			async getlist() {

				try {
					uni.showLoading({
						title: '加载中'
					});
					let option = {
						pageNo: this.pageNo,
						pageSize: 8,
						year: this.classes

					}
					console.log("option", option)
					const res = await this.api.prospect.siteSurveyList(option)
					console.log("pagelist", res)
					const {
						code,
						message,
						result
					} = res
					if (code == 200) {
						if (result.records.length != 0) {
							for (var i = 0; i < result.records.length; i++) {
								this.getList.push(result.records[i])
							}
						} else {
							this.ismore = false
							uni.showToast({
								icon: "none",
								title: '没有数据了！',
								duration: 2000
							});
						}
						uni.hideLoading();
						console.log("this.getList", this.getList)
					} else {
						uni.showToast({
							icon: "none",
							title: message,
							duration: 2000
						});
					}
				} catch (e) {
					uni.hideLoading();
					console.log('try:e:', e)
				}
			},
		}

	}
</script>

<style lang="scss">
	.padding {
		padding-top: 30rpx;
		padding-left: 30rpx;
		padding-bottom: 50rpx;
	}

	.home {

		.tab-view {
			display: flex;
			flex: 1;

			.swiper-item {
				display: flex;
				flex: 1;
				flex-direction: column;

				// background-color: #000000;


			}
		}

		.home_tabber {
			z-index: 1011;
			position: fixed;
			background-color: #ffffff;

			.home_tabber_down {
				position: relative;
				background-color: #ffffff;

				.tabber_down_img {
					top: 10rpx;
					width: 24rpx;
					height: 24rpx;
					position: absolute;
					right: 8rpx;
					z-index: 1011;

				}

				.tabber_down_checken {
					width: 66rpx;
					height: 24rpx;
					position: absolute;
					top: 10rpx;
					left: 8rpx;
					z-index: 1001;
					font-size: 9rpx;
					// background-color: #000000;

					.input-value {
						height: 24rpx;
					}
				}


			}
		}
	}
</style>
