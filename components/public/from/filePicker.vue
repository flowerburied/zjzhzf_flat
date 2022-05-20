<template>
	<view>
		<uni-file-picker limit="5" @delete="deleteimg" @select="select" @success="success"
			:value="getAvatarView(imageValue)" :imageStyles="imageStyles" file-mediatype="image">
			<!-- <button>选择文件</button> -->
		</uni-file-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageValue: [

				],
				imageStyles: {
					width: 88,
					height: 88,
					border: {
						radius: '2rpx'
					}
				},
				url: 'http://172.16.0.54:8090/jeecg-boot'
			}
		},
		watch: {
			resultImg1: {
				handler(val, oldValue) {
					this.imageValue = val;
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
				type: Array,

			},
		},
		methods: {
			deleteimg(e) {
				console.log('this.imageValue', this.imageValue)
				console.log('e', e)
				let getindex = this.imageValue.indexOf(e.tempFile);
				// console.log('getindex', getindex)
				if (getindex != -1) {
					this.imageValue.splice(getindex, 1)
					// this.$emit("change", this.imageValue);
				}
			},
			getAvatarView(avatar) {

				if (avatar) {
					if (typeof avatar == "string") {
						avatar = avatar.split(",");
						let getarr = []
						for (let i = 0; i < avatar.length; i++) {
							let option = {
								name: "file.txt",
								extname: "txt",
								url: `${this.url}/${avatar[i]}`
							}
							getarr.push(option)
						}
						console.log('getarr', getarr)
						return getarr
					} else {
						let getarr = []
						for (let i = 0; i < avatar.length; i++) {
							let option = {
								name: "file.txt",
								extname: "txt",
								url: `${this.url}/${avatar[i]}`
							}
							getarr.push(option)
						}
						console.log('getarr', getarr)
						return getarr
					}
				} else {
					return []
				}

			},
			success(e) {
				console.log('esuccess', e)

			},
			async select(e) {

				console.log('eselect', e)
				let getArrayImg = []
				for (var i = 0; i < e.tempFiles.length; i++) {
					// let getimg = 
					this.updata(e.tempFiles[i].path)
					// await getArrayImg.push(getimg)
				}
				console.log('getArrayImg', getArrayImg)

			},
			updata(val) {
				console.log('val', val)
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
						console.log('getimg', getimg)
						// return getimg
						// this.resultImg = getimg.message
						// this.$emit("change", getimg.message);
						this.imageValue.push(getimg.message)
						this.$emit("change", this.imageValue);
					},
					complete: (e) => {
						console.log("e", e)
					}
				});
			}
		}
	}
</script>

<style>
</style>
