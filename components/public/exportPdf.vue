<template>
	<view>
		<button :loading="loading" @click="exportPdfFun" type="primary">导出PDF</button>
	</view>
</template>

<script>
	export default {
		props: {
			model: {
				type: Object
			},
			excelConfigId: {
				type: String
			},
			pdfName: {
				type: String,
				default: "文件"
			}
		},
		data() {
			return {
				loading: false,
				url: "http://39.100.93.133:8088/jeecg-boot"
			}
		},
		methods: {
			async exportPdfFun() {
				try {
					this.loading = true
					const token = this.$store.state.token
					// let method = "get";
					// let httpurl =
					// 	`/zhzf/jointlySign/exportPdfs?id=${this.model.id}&token=${token}&excelConfigId=${this.excelConfigId}`;

					let option = {
						id: this.model.id,
						token: token,
						excelConfigId: this.excelConfigId
					}

					const res = await this.api.publics.exportPdfApi(option);
					const {
						code,
						message,
						result
					} = res;
					if (code == 0) {
						console.log("res", res.result);
						this.download(res.result)
						// uni.showToast({
						// 	icon: "none",
						// 	title: message,
						// 	duration: 2000
						// });
					} else {
						uni.showToast({
							icon: "none",
							title: message,
							duration: 2000
						});
					}
					this.loading = false
				} catch (err) {
					this.loading = false
					uni.showToast({
						icon: "none",
						title: "导出失败",
						duration: 2000
					});
					console.log("err", err);
				}
			},
			download(value) {

				let downUrl = this.url + '/' + value;

				let dtask = plus.downloader.createDownload(downUrl, {
						//本地路径开头使用file://，跟上手机文件本地目录storage/emulated/0，就是用户文件管理器能看到的了，之后我创建微垠作为文件夹，后缀是用于文件命名和格式修改，大家可以使用变量。
						filename: "file://storage/emulated/0/zjxf/" + `${this.pdfName}.pdf` //利用保存路径，实现下载文件的重命名
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

			},




		}
	}
</script>

<style>
</style>
