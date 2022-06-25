<template>
	<view class="home">
		<!-- <view class="updataall">
			<lsj-upload ref="lsjUpload" childId="upload" width="100px" :height="height" :option="option" :size="size"
				:debug="debug" :instantly="instantly" @progress="onprogress" @change="onChange">
				<button type="primary">选择附件</button>
			</lsj-upload>
		</view>


		<view class="padding">
			<view v-for="(item,index) in files.values()" :key="index">
				<text>{{item.name}}</text>
				<text style="margin-left: 10rpx;">大小：{{item.size}}</text>
				<text style="margin-left: 10rpx;">状态：{{item.type}}</text>
				<text style="margin-left: 10rpx;">进度：{{item.progress}}</text>
				<text @click="clear(item.name)"
					style="margin-left: 10rpx;padding: 0 10rpx;border: 1rpx solid #007AFF;">删除</text>
			</view>
		</view> -->
		<upAllFile></upAllFile>
	</view>
</template>

<script>
	import upAllFile from '@/components/public/from/upAllFile.vue'
	export default {
		components: {
			upAllFile
		},
		data() {
			return {
				option: {},
				height: '20rpx',
				size: 10,
				debug: true,
				// 选择文件后是否立即自动上传
				instantly: false,
				files: new Map(),



				// 演示用
				tabIndex: 0,
				list: [],
			}
		},
		// mounted() {
		// 	let token = uni.getStorageSync('token')
		// 	this.option = {
		// 		// 上传服务器地址，此地址需要替换为你的接口地址
		// 		url: 'http://192.168.10.171:8088/jeecg-boot/sys/common/upload',
		// 		// 上传附件的key
		// 		name: 'file',
		// 		// 根据你接口需求自定义请求头
		// 		header: {
		// 			"X-Access-Token": token || 0,
		// 		},
		// 	};
		// 	console.log("初始化！！", this.option)
		// },
		// onReady() {

		// },
		methods: {
			// 上传进度回调
			onprogress(item) {
				this.files.set(item.name, item);
				this.$forceUpdate();
				console.log('打印对象', JSON.stringify(this.files.get(item.name)));




				// 演示判断是否所有文件均已上传成功
				let isAll = [...this.files.values()].find(item => item.type !== 'success');
				if (!isAll) {
					console.log('已全部上传完毕');
				} else {
					console.log(isAll.name + '待上传');
				}
			},
			// 文件选择回调
			onChange(files) {
				this.files = files;
				this.$forceUpdate();


			},
			// 手动上传
			upload() {
				console.log('手动')
				// name=指定文件名，不指定则上传所有type等于waiting和fail的文件
				this.$refs.lsjUpload.upload();
			},
			// 移除某个文件
			clear(name) {
				// name=指定文件名，不传name默认移除所有文件
				this.$refs.lsjUpload.clear(name);
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
	.home {

		position: relative;

	}
</style>
