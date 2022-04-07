<template>
	<view class="home_second_view">
		<view class="second_view_tips">
			<text class="view_tips_text">系统提示：该办件距离超期还剩 10 个工作日。</text>
		</view>
		<view class="second_view_address">
			无锡高新区（新吴区）住房和城乡建设局
		</view>
		<view class="second_view_title">
			建设工程消防验收备案抽查记录表
		</view>


		<!-- 	<view class="recti_popup_canvas">

		</view> -->
		<view class="second_view_box">
			<myCol>
				<myRow widthPercentage='2'>23</myRow>
				<myRow widthPercentage='8'>3456</myRow>
			</myCol>
			<myCol>
				<myRow widthPercentage='2'>23</myRow>
				<myRow widthPercentage='3'>3456</myRow>
				<myRow widthPercentage='2'>23</myRow>
				<myRow widthPercentage='3'>3456</myRow>
			</myCol>
			<myCol>
				<myRow background="#f0f0f0" widthPercentage='2'>23</myRow>
				<myRow background="#f0f0f0" widthPercentage='3'>3456</myRow>
				<myRow background="#f0f0f0" widthPercentage='5'>23</myRow>

			</myCol>
			<myCol>
				<myRow>23</myRow>
				<myRow>3456</myRow>

			</myCol>

		</view>



		<view class="second_view_btn" style="flex-direction: row;">
			<view class="view_btn_item " @click="open">
				新增
			</view>


		</view>

		<view class="second_view_btn">
			<view class="view_btn_item add_color">
				关闭
			</view>
			<view class="view_btn_item">
				保存
			</view>
			<view class="view_btn_item" @click="download">
				整改
			</view>
			<view class="view_btn_item" @click="openpdf">
				打印预览
			</view>

		</view>


		<uni-popup ref="popup" type="center">
			<view class="recti_popup">



				<view class="recti_popup_first">
					<view class="popup_first_title">
						<text class="first_title_text">新增</text>
						<view class="first_title_line">

						</view>
					</view>
					<image @click="closepopup" class="popup_first_img" src="@/static/img/public/003.svg"></image>
				</view>

				<view class="recti_popup_line">

				</view>

				<view class="recti_popup_box">
					<text class="popup_box_must">*</text>
					<text class="popup_box_text">抽查内容</text>
					<view class="popup_box_input">
						<uni-easyinput type="textarea" placeholder="请输入内容">
						</uni-easyinput>
					</view>

				</view>
				<view class="recti_popup_box">
					<text class="popup_box_must">*</text>
					<text class="popup_box_text">抽查内容</text>
					<uni-file-picker limit="1" :value="fileLists" :imageStyles="imageStyles" file-mediatype="image">
					</uni-file-picker>
					<text class="popup_box_text1">（请上传jpeg/png格式图片）</text>
				</view>

				<view class="recti_popup_btn">
					<view class="view_btn_item add_color">
						关闭
					</view>
					<view class="view_btn_item">
						保存
					</view>
				</view>

			</view>

		</uni-popup>

	</view>
</template>

<script>
	import myCol from "@/components/public/myRow/myCol.vue"
	import myRow from "@/components/public/myRow/myRow.vue"
	export default {

		data() {
			return {
				imageStyles: {
					width: 88,
					height: 88,
					border: {
						radius: '2rpx'
					}
				},
				fileLists: []
			}
		},

		methods: {


			download() {


				var url = "http://www.pwithe.com/Public/Upload/download/20170211/589ebf8e5bb13.pdf"
				let dtask = plus.downloader.createDownload(url, {
						//本地路径开头使用file://，跟上手机文件本地目录storage/emulated/0，就是用户文件管理器能看到的了，之后我创建微垠作为文件夹，后缀是用于文件命名和格式修改，大家可以使用变量。
						filename: "file://storage/emulated/0/zjxf/" + "test.pdf" //利用保存路径，实现下载文件的重命名
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
						} else {
							//下载失败
							plus.downloader.clear(); //清除下载任务
						}
					})
				dtask.start();



				// uni.downloadFile({
				// 	url: 'http://www.pwithe.com/Public/Upload/download/20170211/589ebf8e5bb13.pdf', //仅为示例，并非真实的资源
				// 	success: (res) => {
				// 		if (res.statusCode === 200) {
				// 			console.log('下载成功');
				// 		}
				// 	}
				// });
				const downloadTask = uni.downloadFile({
					url: 'http://www.pwithe.com/Public/Upload/download/20170211/589ebf8e5bb13.pdf', //仅为示例，并非真实的资源
					success: (res) => {
						if (res.statusCode === 200) {
							console.log('下载成功', res);

							// plus.io.convertLocalFileSystemURL(res.tempFilePath, (ressucc) => {
							// 	console.log("ressucc", ressucc)
							// }, (err) => {
							// 	console.log("err", err)
							// })
							const addstrin1 = plus.io.convertLocalFileSystemURL(res
								.tempFilePath)
							console.log('保存文件2', addstrin1);
							uni.saveFile({
								tempFilePath: addstrin1,
								success: function(res1) {
									// var savedFilePath = res.savedFilePath;

									console.log('保存文件', res1);
									// uni.getSavedFileList({
									// 	success: function(res2) {
									// 		console.log('res2.fileList', res2
									// 			.fileList);

									// 		plus.io.convertLocalFileSystemURL(res2
									// 			.fileList,
									// 			(res3) => {
									// 				console.log('res3', res3);
									// 			}, (e) => {
									// 				console.log('e.message', e)
									// 			}
									// 		);
									// 	}
									// });
								}
							});
						}
					}
				});
				downloadTask.onProgressUpdate((res) => {
					console.log('下载进度' + res.progress);
					// console.log('已经下载的数据长度' + res);
					// console.log('预期需要下载的数据总长度' + res.totalBytesExpectedToWrite);

					// 满足测试条件，取消下载任务。
					// if (res.progress > 50) {
					// 	downloadTask.abort();
					// }
				});
			},
			openpdf() {
				uni.downloadFile({
					url: 'http://www.pwithe.com/Public/Upload/download/20170211/589ebf8e5bb13.pdf',
					success: function(res) {
						var filePath = res.tempFilePath;
						uni.openDocument({
							filePath: filePath,
							showMenu: true,
							success: function(res) {
								console.log('打开文档成功');
							}
						});
					},
					complete: function(res) {
						console.log('打开文档', res);
					}
				});
			},
			closepopup() {
				console.log("关闭")
				this.$refs.popup.close()
			},
			open() {
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				this.$refs.popup.open('center')
			}
		},
		components: {

			myRow,
			myCol

		},
	}
</script>

<style lang="scss">
	.home_second_view {
		display: flex;
		flex-direction: column;
		// justify-content: center;
		align-items: center;

		.recti_popup {
			width: 500rpx;
			height: 305rpx;
			border-radius: 4rpx;
			background-color: #ffffff;
			display: flex;
			flex-direction: column;



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

			.recti_popup_box {
				margin-top: 16rpx;
				display: flex;
				flex-direction: row;

				.popup_box_must {
					margin: 10rpx 0 0 12rpx;
					color: #d43030;
					font-size: 10rpx;
					line-height: 150%;

				}

				.popup_box_text {
					margin: 10rpx 13rpx 0 4rpx;
					color: #505050;
					font-size: 10rpx;
					line-height: 150%;
				}

				.popup_box_input {
					width: 408rpx;
					height: 90rpx;
				}

				.popup_box_text1 {
					margin: 65px 0 0 13rpx;
					color: #505050;
					font-size: 7rpx;
					line-height: 150%;
				}
			}

			.recti_popup_line {
				width: 100%;
				height: 1rpx;
				background-color: #e5e5e5;
			}

			.recti_popup_first {
				height: 34rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.popup_first_title {
					margin-left: 16rpx;
					display: flex;
					flex-direction: column;

					.first_title_text {
						font-size: 12rpx;
						line-height: 150%;
						color: #118ee9;
					}

					.first_title_line {
						width: 25rpx;
						height: 2rpx;
						background-color: #118ee9;
					}
				}

				.popup_first_img {
					width: 18rpx;
					height: 18rpx;
					margin-right: 15rpx;
				}
			}

		}

		.recti_popup_canvas {
			width: 304rpx;
			height: 304rpx;
			background-color: #FFFFFF;
			border: 1rpx solid #e5e5e5;
		}


		.second_view_btn {
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

		.second_view_tips {
			width: 100%;
			display: flex;
			flex-direction: row;

			.view_tips_text {
				margin: 12rpx 0 0 8rpx;
				padding: 10rpx;
				font-size: 8rpx;
				background-color: #cae3ff;
				line-height: 150%;

				color: #505050;
				border-radius: 4rpx;
			}
		}

		.second_view_address {
			letter-spacing: 4px;
			color: #505050;
			line-height: 150%;
			font-size: 10rpx;
			margin: 18rpx 0 6rpx 0;
		}

		.second_view_title {
			color: #505050;
			line-height: 150%;
			font-size: 13rpx;
			margin: 4rpx 0 12rpx 0;
		}

		.second_view_box {
			width: 624rpx;
			display: flex;
			flex-wrap: wrap;
			border-left: 1px #D2D2D2 solid;
			border-top: 1px #D2D2D2 solid;

		}

		.second_view_item {

			border-bottom: 1px #D2D2D2 solid;
			border-right: 1px #D2D2D2 solid;
		}
	}
</style>
