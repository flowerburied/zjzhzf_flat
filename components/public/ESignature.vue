<template>
	<div>
		<!-- v-if="!isshowimg" -->
		<image class="public_img" :src="getAvatarView(resultImg)"></image>
		<text class="public_text active_text" @click="openpopup">
			签名
		</text>

		<uni-popup ref="popup" type="center">
			<view class="recti_popup">
				<view class="recti_popup_canvas">
					<drawing-board @touchmove222="touchmove222" ref="drawingBoard" canvasWidth="500rpx"
						canvasHeight="225rpx">
					</drawing-board>
				</view>
				<view class="recti_popup_btn">
					<view class="view_btn_item add_color" @click="closepopup">
						关闭
					</view>
					<view class="view_btn_item" @click="save">
						保存
					</view>
				</view>
			</view>
		</uni-popup>
	</div>
</template>

<script>
	import drawingBoard from "@/components/qiao-drawingBoard/drawingBoard.vue"
	export default {

		data() {
			return {
				// 画板
				isshowimg: false,
				isdraw: false,
				resultImg: "",
				url: 'http://39.100.93.133:8088/jeecg-boot'
			}
		},
		watch: {
			resultImg1: {
				handler(val, oldValue) {
					this.resultImg = val;
				},
				//立刻执行handler
				immediate: true,
			},
		},
		model: {
			prop: "resultImg1",
			event: "change",
		},
		props: {
			resultImg1: {
				type: String,
				default: "",
			},
		},
		components: {
			drawingBoard
		},
		methods: {
			getAvatarView: function(avatar) {
				return this.url + '/' + avatar;
			},
			save() {
				if (this.isdraw) {
					this.$refs['drawingBoard'].save((res) => {
						console.log('res', res)

						let token = uni.getStorageSync('token')
						console.log("token", token)
						uni.uploadFile({
							url: this.url + '/sys/common/upload', //仅为示例，非真实的接口地址
							filePath: res.tempFilePath,
							header: {
								"X-Access-Token": token || 0,
							},
							name: 'file',
							success: (uploadFileRes) => {
								console.log(uploadFileRes.data);
								let getimg = JSON.parse(uploadFileRes.data)
								this.resultImg = getimg.message
								this.$emit("change", getimg.message);

							},
							complete: (e) => {
								console.log("e", e)
							}
						});
						this.$refs.popup.close()
					})
				} else {

					uni.showToast({
						icon: "none",
						title: '请签字',
						duration: 2000
					});
				}

			},

			touchmove222() {
				// console.log("hual")

				this.isdraw = true
			},
			openpopup() {
				this.$refs.popup.open('center')
			},
			closepopup() {
				console.log("关闭")
				this.$refs.popup.close()
			},
		}
	}
</script>

<style lang="scss">
	.recti_popup {
		width: 600rpx;
		// height: 305rpx;
		border-radius: 4rpx;
		background-color: #ffffff;
		display: flex;
		flex-direction: column;
		align-items: center;

		.recti_popup_canvas {
			margin-top: 20rpx;
			width: 500rpx;
			height: 225rpx;
			border: 1rpx solid #cccccc;
		}

		.recti_popup_btn {
			margin-top: 20rpx;
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
	}

	.public_text {
		padding: 8rpx 16rpx;
		font-size: 12rpx;
		line-height: 150%;
		color: #707070;
	}

	.public_padding {
		padding: 8rpx 16rpx;
	}

	.public_updata {
		width: 100%;
		display: flex;
		flex-direction: row;
		padding: 8rpx 16rpx;
	}

	.public_img {
		padding: 8rpx 16rpx;
		width: 60rpx;
		height: 27rpx;
	}

	.active_text {
		text-decoration: underline;
		color: #118ee9;
	}
</style>
