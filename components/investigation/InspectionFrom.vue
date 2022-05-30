<template>
	<view class="prospect_edit" :style="{paddingTop:$store.state.phoneInfo.BarHeight+'px' }">
		<uni-forms ref="form" :modelValue="model" :rules="rules">
			<view class="second_view_box">


				<myCol>
					<myRow widthPercentage='1.66' background="#f0f0f0">
						<view class="public_text">
							<requiredText></requiredText>
							当事人类型
						</view>
					</myRow>
					<myRow widthPercentage='8.34'>
						<view class="public_input">
							<uni-forms-item name="partyType">
								<uni-data-checkbox v-model="model.partyType" :localdata="typelocaldata">
								</uni-data-checkbox>
							</uni-forms-item>
						</view>

					</myRow>
				</myCol>

				<!-- 单位 -->
				<myCol v-if="model.partyType==1">
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">
							<requiredText></requiredText>
							名称
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="companyName">

								<uni-easyinput v-model="model.companyName" placeholder="请输入名称">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text ">
							<requiredText></requiredText>
							负责人
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="companyPerson">
								<uni-easyinput v-model="model.companyPerson" placeholder="请输入负责人">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>
				<myCol v-if="model.partyType==1">
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">
							<requiredText></requiredText>
							统一社会信用代码
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="companySocialCredit">

								<uni-easyinput v-model="model.companySocialCredit" placeholder="请输入统一社会信用代码">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">
							<requiredText></requiredText>
							职务
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="companyPersonPostion">
								<uni-easyinput v-model="model.companyPersonPostion" placeholder="请输入职务">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>

				<myCol v-if="model.partyType==1">
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">
							<requiredText></requiredText>
							住址
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="companyAddress">

								<uni-easyinput v-model="model.companyAddress" placeholder="请输入住址">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">
							<requiredText></requiredText>
							联系电话
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="companyTel">
								<uni-easyinput v-model="model.companyTel" placeholder="请输入联系电话">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>


				<!-- 单位end -->

				<!-- 个人 -->
				<myCol v-if="model.partyType==2">
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">
							<requiredText></requiredText>
							姓名
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="personalName">

								<uni-easyinput v-model="model.personalName" placeholder="请输入名称">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">
							<requiredText></requiredText>
							性别
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="personalSex">
								<uni-data-checkbox v-model="model.personalSex" :localdata="sexlocaldata">
								</uni-data-checkbox>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>

				<myCol v-if="model.partyType==2">
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">
							<requiredText></requiredText>
							身份证
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="personalCard">

								<uni-easyinput v-model="model.personalCard" placeholder="请输入身份证">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">
							<requiredText></requiredText>
							出生年月
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="personalBirthday">
								<datetimePicker v-model="model.personalBirthday">
								</datetimePicker>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>
				<myCol v-if="model.partyType==2">
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">
							<requiredText></requiredText>
							工作单位
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="personalWork">

								<uni-easyinput v-model="model.personalWork" placeholder="请输入工作单位">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">
							<requiredText></requiredText>
							职务
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="personalPost">
								<uni-easyinput v-model="model.personalPost" placeholder="请输入职务">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>
				<myCol v-if="model.partyType==2">
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">
							<requiredText></requiredText>
							住所
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="personalResidence">

								<uni-easyinput v-model="model.personalResidence" placeholder="请输入住所">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">
							<requiredText></requiredText>
							联系电话
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="personalTel">
								<uni-easyinput v-model="model.personalTel" placeholder="请输入联系电话">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>

				<!-- 个人end -->

				<myCol>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							项目名称
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="companyProjectName">
								<uni-easyinput v-model="model.companyProjectName" placeholder="请输入项目名称">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text ">
							项目编号
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="companyProjectNo">
								<uni-easyinput v-model="model.companyProjectNo" placeholder="请输入项目编号">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>
				<myCol>
					<myRow widthPercentage='1.66' background="#f0f0f0">
						<view class="public_text">

							项目地址
						</view>
					</myRow>
					<myRow widthPercentage='8.34'>
						<view class="public_input">
							<uni-forms-item name="companyProjectLocation">
								<uni-easyinput v-model="model.companyProjectLocation" placeholder="请输入项目地址">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>
				<myCol>
					<myRow widthPercentage='1.66' background="#f0f0f0">
						<view class="public_text">
							<requiredText></requiredText>
							现场检查记录情况
						</view>
					</myRow>
					<myRow widthPercentage='8.34'>
						<view class="public_input">
							<uni-forms-item name="inspectionRecords">
								<uni-easyinput type="textarea" v-model="model.inspectionRecords"
									placeholder="请输入现场检查记录情况!">
								</uni-easyinput>

							</uni-forms-item>
						</view>
					</myRow>
				</myCol>
				<myCol>
					<myRow widthPercentage='1.66' background="#f0f0f0">
						<view class="public_text">

							现场勘察示意图
						</view>
					</myRow>
					<myRow widthPercentage='8.34'>
						<view class="public_input">
							<uni-forms-item name="inspectionRecords">
								<filePicker v-model="model.inspectionInvestigation"></filePicker>

							</uni-forms-item>
						</view>
					</myRow>
				</myCol>




				<myCol>
					<myRow widthPercentage='1.66' background="#f0f0f0">
						<view class="public_text">

							现场勘察示意图说明
						</view>
					</myRow>
					<myRow widthPercentage='8.34'>
						<view class="public_input">
							<uni-forms-item name="inspectionDesc">
								<uni-easyinput type="textarea" autoHeight v-model="model.inspectionDesc">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>





			</view>
			<view class="prosp_from_btn">
				<view>
					<button class="from_btn" @click="submit" type="primary">保存</button>
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
								<ESignature v-model="model.signatureQuestioned"></ESignature>
							</uni-forms-item>
						</view>

					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text ">
							见证人签名
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="witnessInquirer">
								<ESignature v-model="model.witnessInquirer"></ESignature>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>

				<myCol>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							勘查人签名
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="surveyorQuestioned">
								<ESignature v-model="model.surveyorQuestioned"></ESignature>
							</uni-forms-item>
						</view>

					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text ">
							记录人签名
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="noteTaker">
								<ESignature v-model="model.noteTaker"></ESignature>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>


			</view>
		</uni-forms>

		<!-- <view class="prosp_from_btn">


			<view>
				<button class="from_btn" @click="submit" type="primary">保存</button>
			</view>

		</view> -->

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
	import requiredText from '@/components/public/requiredText.vue'
	import soundRecording from '@/components/public/from/soundRecording.vue'
	export default {
		watch: {
			resultList: {
				handler(val, oldValue) {
					if (val.id) {
						console.log("valllllll", val)
						this.model = val;
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
				typelocaldata: [{
					text: '单位',
					value: '1'
				}, {
					text: '个人',
					value: '2'
				}, ],
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
					inspectionInvestigation: '',
					personalSex: "1",
					partyType: '1',
					inspectionDesc: "时间:\r\n方位:\r\n绘制人姓名:\r\n身份:\r\n"
				},
				rules: {

					companySocialCredit: {
						rules: [{
							required: true,
							errorMessage: "请输入统一社会信用代码!",

						}, ]
					},
					companyName: {
						rules: [{
							required: true,
							errorMessage: '请输入名称',
						}, ]
					},
					companyRepresentative: {
						rules: [{
							required: true,
							errorMessage: '请输入法定代表人',
						}, ]
					},
					companyPerson: {
						rules: [{
							required: true,
							errorMessage: '请输入负责人',
						}, ]
					},
					companyPersonPostion: {
						rules: [{
							required: true,
							errorMessage: '请输入负责人职务',
						}, ]
					},
					companyAddress: {
						rules: [{
							required: true,
							errorMessage: '请输入住址',
						}, ]
					},
					companyTel: {
						rules: [{
								required: true,
								errorMessage: '请输入联系电话',
							},

						]
					},
					personalName: {
						rules: [{
							required: true,
							errorMessage: '请输入姓名',
						}, ]
					},
					personalSex: {
						rules: [{
							required: true,
							errorMessage: '请选择性别',
							trigger: "change"
						}, ]
					},
					personalCard: {
						rules: [{
							required: true,
							errorMessage: '请输入身份证',
						}, ]
					},
					personalBirthday: {
						rules: [{
							required: true,
							errorMessage: '请输入出生年月',
						}, ]
					},
					personalWork: {
						rules: [{
							required: true,
							errorMessage: '请输入工作单位',
						}, ]
					},
					personalPost: {
						rules: [{
							required: true,
							errorMessage: '请输入职务',
						}, ]
					},
					personalResidence: {
						rules: [{
							required: true,
							errorMessage: '请输入住所',
						}, ]
					},
					personalTel: {
						rules: [{
								required: true,
								errorMessage: '请输入联系电话',
							},

						]
					},
					inspectionRecords: {
						rules: [{
								required: true,
								errorMessage: '请输入现场检查记录情况',
							},

						]
					},



				},

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
			submit() {


				console.log("this", this.model)
				this.$refs.form.validate().then(res => {
					console.log('表单数据信息：', res);

					if (this.model.id) {
						this.submitForm()
					} else {

						this.submitFormAdd()
					}
				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			},
			async submitForm() {
				try {
					uni.showLoading({
						title: '加载中'
					});

					let getModel = JSON.parse(JSON.stringify(this.model));
					if (getModel.inspectionInvestigation) {
						if (typeof getModel.inspectionInvestigation == "object") {
							getModel.inspectionInvestigation = getModel.inspectionInvestigation.join(",");
						}
					}

					const res = await this.api.fieldInvestigation.inspectionedit(getModel)
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
			async submitFormAdd() {
				try {
					uni.showLoading({
						title: '加载中'
					});
					let getModel = JSON.parse(JSON.stringify(this.model));
					if (getModel.inspectionInvestigation) {
						if (typeof getModel.inspectionInvestigation == "object") {
							getModel.inspectionInvestigation = getModel.inspectionInvestigation.join(",");
						}
					}
					const res = await this.api.fieldInvestigation.inspectionadd(getModel)
					console.log("add", res)
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
					uni.navigateBack({
						delta: 1,
						animationType: 'pop-out',
						animationDuration: 200
					})
				} catch (e) {
					console.log('try:e:', e)
				}
			},





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
