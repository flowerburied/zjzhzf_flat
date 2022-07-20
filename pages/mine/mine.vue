<template>
	<view class="mine">

		<view class="mine_tabber"
			:style="{ width: $store.state.phoneInfo.playerWidth+'px',height:$store.state.phoneInfo.statusBarHeight }">
		</view>

		<view class="mine_content"
			:style="{ top: $store.state.phoneInfo.statusBarHeight+'px',height:$store.state.phoneInfo.mineCon+'px',width:$store.state.phoneInfo.playerWidth+'px' }">
			<scroll-view @scrolltolower="scrolltolower" :style="{height:$store.state.phoneInfo.mineCon+'px'}"
				scroll-y="true" class="scroll-Y">

				<view class="mine_content_view">

					<view class="content_view_list"
						:style="{ top: $store.state.phoneInfo.statusBarHeight+'px',height:$store.state.phoneInfo.mineCon+'px'}">
						<image class="view_list_img" v-if="$store.state.userInfo.avatar"
							:src="`${avatarurl+$store.state.userInfo.avatar}`"></image>
						<text class="view_list_name">姓名：{{$store.state.userInfo.realname}}</text>
					</view>

					<view class="content_view_other">
						<view class="view_other_box" v-if="infotype==0">
							<view class="other_box_bao" @click="infoclick(1)">
								<text class="box_bao_text">个人信息</text>
								<image class="box_bao_img" src="@/static/img/public/004.svg"></image>
							</view>
							<view class="other_box_bao" @click="infoclick(2)">
								<text class="box_bao_text">系统设置</text>
								<image class="box_bao_img" src="@/static/img/public/004.svg"></image>
							</view>
						</view>

						<view class="view_other_box" v-if="infotype==1">
							<view class="other_box_bao1" @click="infoclick(0)">
								<image class="box_bao_img" src="@/static/img/public/back001.svg"></image>
								<text class="box_bao_text">返回</text>
								<!-- <view class="box_bao_right">
									<image class="box_bao_img" src="@/static/img/public/004.svg"></image>
								</view> -->
							</view>
							<view class="other_box_bao">
								<text class="box_bao_text">姓名</text>
								<view class="box_bao_right">
									<text class="box_bao_text">{{$store.state.userInfo.realname}}</text>
									<!-- <image class="box_bao_img" src="@/static/img/public/004.svg"></image> -->
								</view>

							</view>

							<view class="other_box_bao">
								<text class="box_bao_text">部门</text>
								<view class="box_bao_right">
									<text class="box_bao_text">{{$store.state.userInfo.orgCodeTxt}}</text>
									<!-- <image class="box_bao_img" src="@/static/img/public/004.svg"></image> -->
								</view>

							</view>
							<view class="other_box_bao">
								<text class="box_bao_text">手机号</text>
								<view class="box_bao_right">
									<text class="box_bao_text">{{$store.state.userInfo.mobile}}</text>
									<!-- <image class="box_bao_img" src="@/static/img/public/004.svg"></image> -->
								</view>
							</view>
							<view class="other_box_bao">
								<text class="box_bao_text">执法证号</text>
								<view class="box_bao_right">
									<text class="box_bao_text">{{$store.state.userInfo.enforcementCertificate}}</text>
									<!-- <image class="box_bao_img" src="@/static/img/public/004.svg"></image> -->
								</view>

							</view>

						</view>
						<view class="view_other_box" v-if="infotype==2">
							<view class="other_box_bao1" @click="infoclick(0)">
								<image class="box_bao_img" src="@/static/img/public/back001.svg"></image>
								<text class="box_bao_text">返回</text>
								<!-- 	<view class="box_bao_right">

									<image class="box_bao_img" src="@/static/img/public/004.svg"></image>
								</view> -->
							</view>
							<view class="other_box_bao">
								<text class="box_bao_text">版本号</text>
								<view class="box_bao_right">
									<text class="box_bao_text">1.0.1</text>
									<!-- <image class="box_bao_img" src="@/static/img/public/004.svg"></image> -->
								</view>
							</view>


						</view>


						<view class="view_other_btn" @click="outsign">
							退出登录
						</view>




					</view>
				</view>


			</scroll-view>
		</view>
	</view>
</template>

<script>
	import drawingBoard from "@/components/qiao-drawingBoard/drawingBoard.vue"

	export default {

		components: {
			drawingBoard
		},
		data() {
			return {
				infotype: 0,
				avatarurl: "http://39.100.93.133:8088/jeecg-boot/"
			}
		},

		methods: {
			infoclick(val) {
				this.infotype = val
			},
			touchmove222() {
				console.log("hual")
			},
			outsign() {
				let that = this
				uni.showModal({
					title: '提示',
					content: '再次确认退出',
					success: function(res) {
						if (res.confirm) {
							that.$store.commit("SET_USER_INFO", null)
							uni.clearStorage();
							uni.reLaunch({
								url: '/pages/login/signin'
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});

			},
			scrolltolower(e) {
				// this.$emit("scrolltolower")
				console.log("scrolltolower", e)
			}
		}
	}
</script>

<style lang="scss">
	.mine {
		.mine_tabber {
			z-index: 1011;
			position: fixed;
			background-color: #FFFFFF;

		}

		.mine_content {
			position: fixed;
			background-color: #F7F6F7;

			// background-color: #000000;
			.mine_content_view {
				display: flex;
				// align-items: center;
				flex-direction: row;

				// justify-content: center;
				.content_view_other {
					display: flex;
					flex-direction: column;
					flex: 1;
					// background-color: #000000;
					align-items: center;

					.view_other_btn {
						margin-top: 153rpx;
						font-size: 12rpx;
						color: #FFFFFF;
						line-height: 150%;
						padding: 8rpx 90rpx;
						background-color: #118ee9;
					}

					.view_other_canvas {
						width: 300rpx;
						height: 300rpx;
						background-color: #FFFFFF;
					}

					.view_other_box {
						width: 424rpx;
						display: flex;
						flex-direction: column;
						margin-top: 16rpx;

						// border-radius: 5rpx;
						.other_box_bao1 {
							height: 32rpx;
							width: 424rpx;
							display: flex;
							flex-direction: row;
							align-items: center;
							margin-top: 1rpx;

							.box_bao_img {
								width: 16rpx;
								height: 16rpx;

							}

							.box_bao_text {
								margin-left: 5rpx;
								font-size: 10rpx;
								color: #505050;
								line-height: 150%;
							}
						}



						.other_box_bao {
							height: 32rpx;
							width: 424rpx;
							display: flex;
							flex-direction: row;
							align-items: center;
							justify-content: space-between;
							margin-top: 1rpx;
							background-color: #FFFFFF;

							.box_bao_text {
								margin-left: 16rpx;
								font-size: 10rpx;
								color: #505050;
								line-height: 150%;

								margin-right: 16rpx;
							}

							.box_bao_img {
								width: 16rpx;
								height: 16rpx;
								margin-right: 12rpx;
							}

							.box_bao_right {
								display: flex;
								flex-direction: row;
								align-items: center;
							}
						}

					}
				}

				.content_view_list {
					width: 200rpx;

					background-color: #FFFFFF;
					display: flex;
					align-items: center;
					flex-direction: column;

					.view_list_img {
						width: 50rpx;
						height: 50rpx;
						border-radius: 50%;
						margin-top: 60rpx;
					}

					.view_list_name {
						color: #505050;
						font-size: 11rpx;
						line-height: 150%;
						margin-top: 24rpx;
					}
				}
			}
		}
	}
</style>
