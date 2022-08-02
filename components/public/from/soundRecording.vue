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
			<view @click="download" class="record_right_down">
				{{fileName}}
			</view>
			<button :disabled="disabled" @click="delFile" class="record_right_btn" v-if="fileName"
				type="default">删除</button>
		</view>
		<view class="sound_record_right">
			<button v-if="fileName" type="primary" @tap="playVoice">播放录音</button>
			<!-- requestAndroidPermission
			startRecord -->
			<button :disabled="disabled" v-if="!isvoice" type="primary" @tap="requestAndroidPermission">开始录音</button>
			<button :disabled="disabled" v-if="isvoice" type="primary" @tap="endRecord">结束录音</button>
		</view>

	</view>
</template>

<script>
	import permision from "@/js_sdk/wa-permission/permission.js"
	// 录音
	const recorderManager = uni.getRecorderManager();
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = true;
	export default {
		props: {
			value: {
				type: String,
				required: false
			},
			disabled: {
				type: Boolean,
				default: false
			}
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
				url: 'http://39.100.93.133:8088/jeecg-boot'
			}
		},
		methods: {



			async requestAndroidPermission() {
				let permisionID = 'android.permission.RECORD_AUDIO'
				var result = await permision.requestAndroidPermission(permisionID)
				var strStatus
				if (result == 1) {
					strStatus = "已获得授权"
					this.startRecord()
				} else if (result == 0) {
					// strStatus = "未获得授权"
					// uni.showModal({
					// 	content: '录音' + strStatus,
					// 	showCancel: false
					// });
					uni.showModal({
						title: '录音未获得授权',
						content: '是否去打开权限',
						success: function(res) {
							if (res.confirm) {
								permision.gotoAppPermissionSetting()
								console.log('用户点击确定');
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				} else {
					// strStatus = "被永久拒绝权限"
					// uni.showModal({
					// 	content: '录音' + strStatus,
					// 	showCancel: false
					// });
					uni.showModal({
						title: '录音未获得授权',
						content: '是否去打开权限',
						success: function(res) {
							if (res.confirm) {
								permision.gotoAppPermissionSetting()
								console.log('用户点击确定');
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}

			},
			download() {

				let downUrl = this.url + '/' + this.fileName;

				let dtask = plus.downloader.createDownload(downUrl, {
						//本地路径开头使用file://，跟上手机文件本地目录storage/emulated/0，就是用户文件管理器能看到的了，之后我创建微垠作为文件夹，后缀是用于文件命名和格式修改，大家可以使用变量。
						filename: "file://storage/emulated/0/zjxf/" + "test.mp3" //利用保存路径，实现下载文件的重命名
					},
					function(d, status) {
						console.log("d", d)
						console.log("status", status)
						//d为下载的文件对象
						if (status == 200) {
							//下载成功,d.filename是文件在保存在本地的相对路径，使用下面的API可转为平台绝对路径
							let fileSaveUrl = plus.io.convertLocalFileSystemURL(d.filename);
							console.log('fileSaveUrl', fileSaveUrl)
							plus.runtime.openFile(d.filename); //选择软件打开文件
							uni.showToast({
								icon: "none",
								title: "保存成功",
								duration: 2000
							});

						} else {
							//下载失败
							plus.downloader.clear(); //清除下载任务
						}
					})
				dtask.start();
				// const downloadTask = uni.downloadFile({
				// 	url: downUrl, //仅为示例，并非真实的资源
				// 	success: (res) => {
				// 		if (res.statusCode === 200) {
				// 			console.log('下载成功', res);
				// 			const addstrin1 = plus.io.convertLocalFileSystemURL(res
				// 				.tempFilePath)
				// 			console.log('保存文件2', addstrin1);
				// 			uni.saveFile({
				// 				tempFilePath: addstrin1,
				// 				success: function(res1) {

				// 					console.log('保存文件', res1);
				// 				}
				// 			});
				// 		}
				// 	}
				// });
				// downloadTask.onProgressUpdate((res) => {
				// 	console.log('下载进度' + res.progress);

				// });
			},


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
				// uni.showLoading({
				// 	title: '加载中'
				// });

				this.isvoice = false
				console.log('录音结束');
				recorderManager.stop();
			},
			playVoice() {
				console.log('播放录音');

				if (this.fileName) {
					innerAudioContext.src = this.url + '/' + this.fileName;
					// this.updata()
					console.log("innerAudioContext.src", innerAudioContext.src)
					// console.log('getimg', getimg);
					innerAudioContext.play();
				}
			},
			updata(val) {
				uni.showLoading({
					title: '加载中'
				});
				console.log('updata上传', val)
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

			.record_right_down {
				color: #2ecc71;
				text-decoration: underline;
			}

			// width: 100rpx;
			.record_right_btn {
				margin: 10rpx;
			}
		}
	}
</style>
