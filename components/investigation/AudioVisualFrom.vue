<template>
	<view class="prospect_edit" :style="{paddingTop:$store.state.phoneInfo.BarHeight+'px' }">
		<uni-forms ref="form" :modelValue="model" :rules="rules">
			<view class="second_view_box">

				<myCol>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							收集时间
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="collectionTime">
								<datetimePicker :disabled="isdisabled" v-model="model.collectionTime"
									dateType="datetime">
								</datetimePicker>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text ">

							收集方式
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="collectionMethod">
								<uni-easyinput :disabled="isdisabled" v-model="model.collectionMethod"
									placeholder="请输入记录人">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>

				<myCol>
					<myRow widthPercentage='1.66' background="#f0f0f0">
						<view class="public_text">

							收集地点
						</view>
					</myRow>
					<myRow widthPercentage='8.34'>
						<view class="public_input">
							<uni-forms-item name="collectionLocation">
								<uni-easyinput :disabled="isdisabled" type="textarea"
									v-model="model.collectionLocation" placeholder="请输入案由!">
								</uni-easyinput>
							</uni-forms-item>
						</view>

					</myRow>
				</myCol>

				<myCol>
					<myRow widthPercentage='1.66' background="#f0f0f0">
						<view class="public_text">

							资料路径
						</view>
					</myRow>
					<myRow widthPercentage='8.34'>
						<view class="public_input">
							<uni-forms-item name="informationUrl">

								<filePicker :disabled="isdisabled" v-model="model.informationUrl">
								</filePicker>
								<!-- <upAllFile :disabled="isdisabled" v-model="model.informationUrl"></upAllFile> -->
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>

				<myCol>
					<myRow widthPercentage='1.66' background="#f0f0f0">
						<view class="public_text">

							资料说明
						</view>
					</myRow>
					<myRow widthPercentage='8.34'>
						<view class="public_input">
							<uni-forms-item name="informationDescription">
								<uni-easyinput :disabled="isdisabled" type="textarea" autoHeight
									v-model="model.informationDescription">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>
				<myCol>
					<myRow widthPercentage='1.66' background="#f0f0f0">
						<view class="public_text">

							录音
						</view>
					</myRow>
					<myRow widthPercentage='8.34'>
						<view class="public_input">
							<uni-forms-item name="informationDescription">
								<soundRecording :disabled="isdisabled" v-model="model.soundrecordingUrl">
								</soundRecording>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>

			</view>
			<view class="prosp_from_btn">
				<view>
					<exportPdf pdfName="视听资料" :model="model" excelConfigId="695848109943812096"></exportPdf>
				</view>
				<view>
					<button :loading="loading" :disabled="isdisabled" class="from_btn" @click="submitForm(false)"
						type="primary">保存</button>
				</view>
				<view>
					<button v-if="model.state!='1'" :loading="loading" :disabled="isdisabled" class="from_btn"
						@click="handleOkupdata" type="primary">提交</button>
				</view>

			</view>






			<!-- 签名模块 -->
			<view class="second_view_box">
				<myCol>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							当事人签名
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="signatureQuestioned">


								<ESignature :disabled="isdisabled" v-model="model.signatureQuestioned">
								</ESignature>
								<datetimePicker :disabled="isdisabled" v-model="model.signatureQuestionedTime"
									dateType="datetime">
								</datetimePicker>
								<!-- 						<uni-datetime-picker :disabled="isdisabled" type="datetime"
									v-model="model.signatureQuestionedTime" /> -->
							</uni-forms-item>
						</view>

					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text ">
							收集人签名
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="collectorInquirer">
								<ESignature :disabled="isdisabled" v-model="model.collectorInquirer"></ESignature>
								<datetimePicker :disabled="isdisabled" v-model="model.collectorInquirerTime"
									dateType="datetime">
								</datetimePicker>
								<!-- <uni-datetime-picker :disabled="isdisabled" type="datetime"
									v-model="model.collectorInquirerTime" /> -->
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>


			</view>
		</uni-forms>



	</view>
</template>

<script>
	import myCol from "@/components/public/myRow/myCol.vue"
	import myRow from "@/components/public/myRow/myRow.vue"

	import datetimePicker from '@/components/public/from/datetimePicker.vue'
	import ESignature from '@/components/public/ESignature.vue'
	import filePicker from '@/components/public/from/filePicker.vue'

	import upAllFile from '@/components/public/from/upAllFile.vue'

	import dataTreePicker from '@/components/public/from/dataTreePicker.vue'

	import soundRecording from '@/components/public/from/soundRecording.vue'
	import requiredText from '@/components/public/requiredText.vue'

	import exportPdf from '@/components/public/exportPdf.vue'
	export default {
		watch: {
			resultList: {
				handler(val, oldValue) {
					if (val.id) {
						console.log("valllllll", val)
						this.model = val;
						if (this.model.state == '1' || this.model.state == '2') {
							this.isdisabled = true
						}
					}

				},
				//立刻执行handler
				immediate: true,
			},
		},
		model: {
			prop: "resultList",
			event: "change",
		},
		props: {
			resultList: {
				type: Object,

			},
		},

		data() {
			return {
				isdisabled: false,

				sexlocaldata: [{
					text: '男',
					value: '1'
				}, {
					text: '女',
					value: '2'
				}, ],
				testfile: '2022-05-15_log_1653014036228.txt',
				fileLists: [],
				// addlist
				bothsides: '0 12rpx',
				bothLeft: 34,

				model: {
					collectionTime: "",
					informationDescription: "拍摄时间:\r\n拍摄地点:\r\n拍摄内容:\r\n拍摄张数:\r\n拍摄人:\r\n"
				},
				rules: {
					collectionTime: {
						rules: [{
							required: true,
							errorMessage: "请选择收集时间!",
							trigger: "change"
						}]
					},
					collectionMethod: {
						rules: [{
							required: true,
							errorMessage: '请选择记录人',

						}, ]
					},
					collectionLocation: {
						rules: [{
							required: true,
							errorMessage: '请输入收集地点',

						}, ]
					},


				},

				loading: false,
				getModelId: ""

			}
		},
		components: {
			myCol,
			myRow,
			datetimePicker,
			ESignature,
			filePicker,
			upAllFile,
			dataTreePicker,
			requiredText,
			soundRecording,
			exportPdf
		},


		methods: {
			async submitexamine() {
				try {
					uni.showLoading({
						title: '加载中'
					});
					let option = {
						id: this.model.id
					}
					const res = await this.api.prospect.submit(option)
					console.log("edit", res)
					const {
						code,
						message,
						result
					} = res
					if (code == 200) {

						uni.showToast({
							icon: "none",
							title: message,
							duration: 2000
						});
					} else {
						uni.showToast({
							icon: "none",
							title: message,
							duration: 2000
						});
					}
					uni.hideLoading();
				} catch (e) {
					console.log('try:e:', e)
				}
			},
			goBack() {
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
					animationDuration: 200
				})
				// console.log('goback')
			},


			// 触发提交表单
			handleOkupdata() {
				if (this.model.id) {
					this.handleOkupdataTrue(this.model.id);
				} else {
					if (this.getModelId) {
						this.handleOkupdataTrue(this.getModelId);
					} else {
						this.submitForm(true);
					}
				}
			},

			async handleOkupdataTrue(value) {
				let httpurl = "/zhzf/audioVisualMaterials/updateTranscriptId";
				let option = {
					id: value,
					state: 1,
					reason: "",
				};
				let method = "GET"

				const res = await this.api.fieldInvestigation.TotolGetFun(option, httpurl, method)

				if (res.success) {
					uni.navigateBack({
						delta: 1,
						animationType: 'pop-out',
						animationDuration: 200
					})


				} else {

					uni.showToast({
						icon: "none",
						title: res.message,
						duration: 2000
					});
				}

			},
			submitForm(isSubmit) {

				this.$refs.form.validate().then(res => {
					console.log('表单数据信息：', res);
					this.submitFormvalidate(isSubmit)

				}).catch(err => {
					console.log('表单错误信息：', err);
				})




			},
			async submitFormvalidate(isSubmit) {
				try {
					this.loading = true
					uni.showLoading({
						title: '加载中'
					});
					let getModel = JSON.parse(JSON.stringify(this.model))
					let url = ""
					let method = ""
					if (getModel.id) {
						url = "/zhzf/audioVisualMaterials/edit"
						method = "PUT"
					} else {
						url = "/zhzf/audioVisualMaterials/add"
						method = "POST"
					}
					if (getModel.informationUrl) {
						if (typeof getModel.informationUrl == "object") {
							getModel.informationUrl = getModel.informationUrl.join(",");
						}
					}
					console.log("getModel", getModel)
					const res = await this.api.fieldInvestigation.TotolPostFun(getModel, url, method)
					console.log("audioVisualTotol", res)
					const {
						code,
						message,
						result
					} = res
					if (code == 200) {
						this.getModelId = result
						if (isSubmit) {
							this.handleOkupdata();
						} else {
							if (!this.model.id) {
								uni.navigateBack({
									delta: 1,
									animationType: 'pop-out',
									animationDuration: 200
								})
							}
						}
						uni.showToast({
							icon: "none",
							title: message,
							duration: 2000
						});
					} else {
						uni.showToast({
							icon: "none",
							title: message,
							duration: 2000
						});
					}
					uni.hideLoading();
					this.loading = false
				} catch (e) {
					this.loading = false
					console.log('try:e:', e)
				}
			},


			// async submitFormAdd() {
			// 	try {
			// 		uni.showLoading({
			// 			title: '加载中'
			// 		});

			// 		let getModel = JSON.parse(JSON.stringify(this.model))

			// 		if (getModel.informationUrl) {
			// 			if (typeof getModel.informationUrl == "object") {
			// 				getModel.informationUrl = getModel.informationUrl.join(",");
			// 			}
			// 		}
			// 		console.log("getModel", getModel)
			// 		const res = await this.api.fieldInvestigation.audioVisualadd(getModel)
			// 		console.log("add", res)
			// 		const {
			// 			code,
			// 			message,
			// 			result
			// 		} = res
			// 		if (code == 200) {
			// 			uni.showToast({
			// 				icon: "none",
			// 				title: message,
			// 				duration: 2000
			// 			});

			// 			uni.navigateBack({
			// 				delta: 1,
			// 				animationType: 'pop-out',
			// 				animationDuration: 200
			// 			})
			// 		} else {
			// 			uni.showToast({
			// 				icon: "none",
			// 				title: message,
			// 				duration: 2000
			// 			});
			// 		}
			// 		uni.hideLoading();
			// 	} catch (e) {
			// 		console.log('try:e:', e)
			// 	}
			// },





		}

	}
</script>

<style lang="scss" scoped>
	.prospect_edit {

		display: flex;
		flex-direction: column;
		align-items: center;

		.prosp_from_btn {
			margin-top: 12rpx;
			width: 624rpx;
			display: flex;
			flex-direction: row-reverse;
			align-items: center;

			.from_btn {
				// background-color: #000000;
				margin-right: 15rpx;
			}
		}

		.second_view_box {
			margin-top: 12rpx;
			width: 624rpx;
			display: flex;
			flex-wrap: wrap;
			border-left: 1px #D2D2D2 solid;
			border-top: 1px #D2D2D2 solid;

			.public_text {
				padding: 8rpx 16rpx;
				font-size: 12rpx;
				line-height: 150%;
				color: #707070;
			}

			.public_input {
				width: 100%;
				margin: 10rpx 5rpx 0 5rpx;

				.test_index {}
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
				width: 50rpx;
				height: 50rpx;
			}

			.active_text {
				text-decoration: underline;
				color: #118ee9;
			}

		}
	}
</style>
