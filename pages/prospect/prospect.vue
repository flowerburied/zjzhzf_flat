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


		<publicContent>

			<prospectContent></prospectContent>
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
					}
				],

			}
		},
		components: {
			SecurityBox,
			publicContent,
			prospectContent

		},
		onLoad() {


		},
		methods: {

			onnodeclick(e) {
				console.log(e);
			},

			onchange(e) {
				console.log('onchange:', e);
			},
			toadd() {
				console.log('add');
				uni.navigateTo({
					url: '/pages/prospect/prospectEdit'
				})
			},
		}

	}
</script>

<style lang="scss">
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
