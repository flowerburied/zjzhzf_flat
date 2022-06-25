<template>
	<view class="upallfile">


		<view class="sound_record_right">
			<view>
				{{fileName}}
			</view>
			<button @click="clear" class="record_right_btn" v-if="fileName" type="default">删除</button>
		</view>
		<!-- <view class="padding">
			<view>
				<text>{{fileName}}</text>
				
				<button v-if="fileName" @click="clear" type="default">删除</button>
				
			</view>
		</view> -->

		<lsj-upload ref="lsjUpload" childId="upload" width="100px" :height="height" :option="option" :size="size"
			:debug="debug" :instantly="instantly" @progress="onprogress" @change="onChange">
			<!-- <view class="btn">选择附件</view> -->
			<!-- :style="{height: height}" -->
			<button type="primary">选择附件</button>
		</lsj-upload>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				option: {},
				height: '40rpx',
				size: 10,
				debug: true,
				// 选择文件后是否立即自动上传
				instantly: true,
				files: new Map(),
				// 微信小程序Map对象for循环不显示，所以转成普通数组，不要问为什么，我也不知道
				wxFiles: [],


				// 演示用
				tabIndex: 0,
				list: [],
				// add
				fileName: ''
			}
		},
		watch: {
			resultFile1: {
				handler(val, oldValue) {
					// this.imageValue = val;
					// console.log('watchjiantin', val)
					// console.log('watchjiantin', oldValue)
					if (val) {
						// let option = {
						// 	file: {},
						// 	name: val,
						// 	size: 0,
						// 	progress: 100,
						// 	type: 'success',
						// 	responseText: ''
						// }
						// this.files.set(val, option);
						this.fileName = val
					}

				},
				//立刻执行handler
				immediate: true,
			},
		},
		model: {
			prop: "resultFile1",
			event: "change",
		},
		props: {
			resultFile1: {
				type: String,
				default: ''

			},
		},

		mounted() {
			let token = uni.getStorageSync('token')
			// console.log('附件上传！！！！')
			this.option = {

				// 上传服务器地址，此地址需要替换为你的接口地址
				url: 'http://192.168.10.171:8088/jeecg-boot/sys/common/upload',
				// 上传附件的key
				name: 'file',
				// 根据你接口需求自定义请求头
				header: {
					"X-Access-Token": token || 0,
				},
				// 根据你接口需求自定义body参数
				formData: {
					// 'orderId': 1000
				}
			};
			// console.log("初始化！！", this.option)
		},

		methods: {
			// 上传进度回调
			onprogress(item) {
				this.files.set(item.name, item);
				this.$forceUpdate();
				console.log('打印对象', JSON.stringify(this.files.get(item.name)));

				// 微信小程序Map对象for循环不显示，所以转成普通数组，不要问为什么，我也不知道
				// #ifdef MP-WEIXIN
				this.wxFiles = [...this.files.values()];
				// #endif


				// 演示判断是否所有文件均已上传成功
				let isAll = [...this.files.values()].find(item => item.type !== 'success');
				if (!isAll) {
					console.log('已全部上传完毕', item);

					let getlist = JSON.parse(item.responseText)
					this.$emit("change", getlist.message);
					// this.$emit("change", getlist);
				} else {
					console.log(isAll.name + '待上传');
				}
			},
			// 文件选择回调
			onChange(files) {
				this.files = files;
				this.$forceUpdate();

				// 微信小程序Map对象for循环不显示，所以转成普通数组，不要问为什么，我也不知道
				// #ifdef MP-WEIXIN
				this.wxFiles = [...this.files.values()];
				// #endif
			},
			// 手动上传
			upload() {
				console.log('手动')
				// name=指定文件名，不指定则上传所有type等于waiting和fail的文件
				this.$refs.lsjUpload.upload();
			},
			// 移除某个文件
			clear() {
				let that = this
				uni.showModal({
					title: '提示',
					content: '再次确认删除',
					success: function(res) {
						if (res.confirm) {
							that.fileName = ''
							that.$emit("change", '');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});

				// name=指定文件名，不传name默认移除所有文件
				// this.$refs.lsjUpload.clear(name);
			},


			/**
			 * 以下为演示
			 */
			// DOM重排演示，重排后组件内部updated默认会触发show方法,若特殊情况未能触发updated也可以手动调用一次show()
			// 什么是DOM重排？自行百度去~
			add() {
				this.list.push('DOM重排测试');
			},
			// 切换视图演示，APP端因为是webview，层级比view高，
			// 此时若不希望点击触发选择文件，需要手动调用hide()
			// 手动调用hide后，需要调用show()才能恢复触发面
			onTab(tabIndex) {
				this.tabIndex = tabIndex;

				if (tabIndex == 0) {
					this.$nextTick(() => {
						this.$refs.lsjUpload.show();
					})
				} else {
					this.$refs.lsjUpload.hide();
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.upallfile {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;

		.padding {
			padding: 10rpx;
		}

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
