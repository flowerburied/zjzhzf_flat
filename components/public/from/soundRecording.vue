<template>
	<view class="sound_record">
		<!-- 	<text v-if="voicePath" class="public_text">
			录音文件
		</text> -->
		<!-- <text class="public_text" @tap="startRecord">
			开始录音
		</text>
		<text class="public_text" @tap="endRecord">
			停止录音
		</text> -->
		<!-- <text class="public_text" @tap="playVoice">
			播放录音
		</text> -->
		<view class="sound_record_right">
			<view>
				{{fileName}}
			</view>
			<button @click="delFile" class="record_right_btn" v-if="fileName" type="default">删除</button>
		</view>
		
		<view class="sound_record_right">

			<button v-if="!isvoice" type="primary" @tap="startRecord">开始录音</button>
			<button v-if="isvoice" type="primary" @tap="endRecord">结束录音</button>
		</view>

	</view>
</template>

<script>
	// 录音
	const recorderManager = uni.getRecorderManager();
	const innerAudioContext = uni.createInnerAudioContext();

	export default {
		props: {
			value: {
				type: String,
				required: false
			},
		},
		watch: {
			value: {
				handler(val, oldValue) {
					if (val) {
						this.fileName = val
					}
				},
				immediate: true
			}
		},
		model: {
			prop: 'value',
			event: 'change'
		},
		data() {
			return {
				// 录音
				fileName: '',
				voicePath: '',
				isvoice: false,
				url: 'http://192.168.10.171:8090/jeecg-boot'
			}
		},
		methods: {
			delFile() {
				let that = this
				uni.showModal({
					title: '提示',
					content: '再次确认删除',
					success: function(res) {
						if (res.confirm) {
							that.fileName = ''
							that.$emit("change", '')
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});

			},
			startRecord() {
				console.log('开始录音');
				this.isvoice = true
				recorderManager.start();
			},
			endRecord() {
				uni.showLoading({
					title: '加载中'
				});

				this.isvoice = false
				console.log('录音结束');
				recorderManager.stop();
			},
			playVoice() {
				console.log('播放录音');

				if (this.voicePath) {
					innerAudioContext.src = this.voicePath;
					// this.updata()
					console.log('getimg', getimg);
					innerAudioContext.play();
				}
			},
			updata(val) {
				// console.log('val', val)
				let token = uni.getStorageSync('token')
				uni.uploadFile({
					url: this.url + '/sys/common/upload', //仅为示例，非真实的接口地址
					filePath: val,
					header: {
						"X-Access-Token": token || 0,
					},
					name: 'file',
					success: (uploadFileRes) => {
						console.log(uploadFileRes.data);
						let getimg = JSON.parse(uploadFileRes.data)
						console.log('getimg', getimg);
						this.$emit("change", getimg.message)
						this.fileName = getimg.message
					},
					complete: (e) => {
						uni.hideLoading();
						console.log("e", e)
					}
				});
			}
		},
		mounted() {
			let self = this;
			recorderManager.onStop(function(res) {
				console.log('recorder stop', res);
				self.voicePath = res.tempFilePath;
				if (res.tempFilePath) {
					self.updata(res.tempFilePath)
				}

			});
		}
	}
</script>

<style lang="scss" scoped>
	.sound_record {
		// background-color: #000000;
		width: 100%;
		// height: 50rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		.sound_record_right {
			padding: 10rpx;
			display: flex;
			flex-direction: row;
			align-items: center;

			// width: 100rpx;
			.record_right_btn {
				margin: 10rpx;
			}
		}
	}
</style>
