<template>
	<view class="prospect_edit" :style="{paddingTop:$store.state.phoneInfo.BarHeight+'px' }">
		<uni-forms ref="form" :modelValue="model" :rules="rules">
			<view class="second_view_box">

				<myCol>
					<myRow widthPercentage='1.66' background="#f0f0f0">
						<view class="public_text">

							案由
						</view>
					</myRow>
					<myRow widthPercentage='8.34'>
						<view class="public_input">
							<uni-forms-item name="causeAction">
								<uni-easyinput :disabled="isdisabled" type="textarea" v-model="model.causeAction"
									placeholder="请输入案由!">
								</uni-easyinput>
							</uni-forms-item>
						</view>

					</myRow>
				</myCol>

				<myCol>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							询问时间
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="startEndTime">
								<datetimePicker :disabled="isdisabled" dateType="datetimerange"
									v-model="model.startEndTime">
								</datetimePicker>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							询问地点
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="inquiryLocation">
								<uni-easyinput :disabled="isdisabled" v-model="model.inquiryLocation"
									placeholder="请输入询问地点">
								</uni-easyinput>
								<!-- <datetimePicker v-model="model.inquiryLocation"></datetimePicker> -->
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>

				<myCol>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							调查询问人
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="callInquirer">
								<dataTreePicker :disabled="isdisabled" v-model="model.callInquirer">
								</dataTreePicker>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							记录人
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="noteTaker">
								<!-- <uni-easyinput v-model="model.noteTaker" placeholder="请输入记录人">
								</uni-easyinput> -->
								<dataTreePicker :disabled="isdisabled" v-model="model.noteTaker">
								</dataTreePicker>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>

				<myCol>
					<myRow background="#f0f0f0">
						<view class="public_text">

							被询问人
						</view>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="personQuestioned">
								<uni-easyinput :disabled="isdisabled" v-model="model.personQuestioned"
									placeholder="请输入被询问人">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0">
						<view class="public_text">

							性别
						</view>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="sex">
								<uni-data-checkbox :disabled="isdisabled" v-model="model.sex"
									:localdata="sexlocaldata">
								</uni-data-checkbox>
								<!-- 	<uni-easyinput v-model="model.sex" placeholder="请输入联系人姓名">
								</uni-easyinput> -->
							</uni-forms-item>
						</view>

					</myRow>
					<myRow background="#f0f0f0">
						<view class="public_text">

							身份证
						</view>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="card">
								<uni-easyinput :disabled="isdisabled" v-model="model.card" placeholder="请输入身份证">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>


				<myCol>
					<myRow background="#f0f0f0">
						<view class="public_text">

							工作单位
						</view>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="working">
								<uni-easyinput :disabled="isdisabled" v-model="model.working"
									placeholder="请输入工作单位">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0">
						<view class="public_text">

							职务
						</view>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="post">
								<uni-easyinput :disabled="isdisabled" v-model="model.post" placeholder="请输入职务">
								</uni-easyinput>
							</uni-forms-item>
						</view>

					</myRow>
					<myRow background="#f0f0f0">
						<view class="public_text">

							出生年月
						</view>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="birthday">
								<datetimePicker :disabled="isdisabled" v-model="model.birthday">
								</datetimePicker>
							</uni-forms-item>
						</view>

					</myRow>

				</myCol>



				<myCol>
					<myRow background="#f0f0f0">
						<view class="public_text">

							住址
						</view>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="location">
								<uni-easyinput :disabled="isdisabled" v-model="model.location"
									placeholder="请输入住址">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0">
						<view class="public_text">

							联系电话
						</view>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="tel">
								<uni-easyinput :disabled="isdisabled" v-model="model.tel" placeholder="请输入联系电话">
								</uni-easyinput>
							</uni-forms-item>
						</view>

					</myRow>

					<myRow background="#f0f0f0">
						<view class="public_text">

							邮政编码
						</view>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="postal">
								<uni-easyinput :disabled="isdisabled" v-model="model.postal"
									placeholder="请输入邮政编码!">
								</uni-easyinput>
							</uni-forms-item>
						</view>

					</myRow>

				</myCol>

			</view>
			<view class="prosp_from_btn">


				<button :loading="loading" :disabled="isdisabled" class="from_btn" @click="submitForm(false)"
					type="primary">保存</button>
			</view>


			<askAnswer :disabled="isdisabled" v-model="model.qaDes"></askAnswer>

			<view class="prosp_from_btn">
			<!-- 	<view>
			
					<exportPdf pdfName="询问笔录" :model="model" excelConfigId="691055234831872000"></exportPdf>

				</view> -->

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

							被询问人签名
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="personQuestionedSign">
								<ESignature :disabled="isdisabled" v-model="model.personQuestionedSign"></ESignature>

								<datetimePicker :disabled="isdisabled" v-model="model.personQuestionedTime"
									dateType="datetime">
								</datetimePicker>
								<!-- <uni-datetime-picker :disabled="isdisabled" type="datetime"
									v-model="model.personQuestionedTime" /> -->
							</uni-forms-item>
						</view>

					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text ">
							调查询问人签名
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="callInquirerSign">
								<ESignature :disabled="isdisabled" v-model="model.callInquirerSign"></ESignature>

								<datetimePicker :disabled="isdisabled" v-model="model.callInquirerTime"
									dateType="datetime">
								</datetimePicker>

								<!-- <uni-datetime-picker :disabled="isdisabled" type="datetime"
									v-model="model.callInquirerTime" /> -->
							</uni-forms-item>
						</view>
					</myRow>


				</myCol>


				<myCol>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">
							记录人签名
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="noteTakerSign">
								<ESignature  :disabled="isdisabled" v-model="model.noteTakerSign"></ESignature>

								<datetimePicker :disabled="isdisabled" v-model="model.noteTakerTime"
									dateType="datetime">
								</datetimePicker>
								<!-- <uni-datetime-picker :disabled="isdisabled" type="datetime"
									v-model="model.noteTakerTime" /> -->
							</uni-forms-item>
						</view>

					</myRow>
					<myRow widthPercentage='5'>
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
	import askAnswer from '@/components/public/from/askAnswer.vue'

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
					birthday: '',
					startEndTime: [],
					inquiryStarttime: '',
					inquiryEndtime: '',
					qaDes: "调查（询问）人告知：我们是无锡市住房和城乡建设局的执法人员（出示执法证件），现依法进行调查。依据《中华人民共和国行政处罚法》第四十二条第一款、第五十五条第一款的规定，如执法人员少于两人或执法证件与身份不符，你有权拒绝调查，你是否接受调查？\n被调查（询问）人答：\n问：根据《中华人民共和国行政处罚法》第四十三条第二款的规定，如执法人员与案件有直接利害关系或者有其他关系可能影响公正执法的，你有权申请执法人员回避。你是否申请回避？\n答：\n问：根据《中华人民共和国行政处罚法》五十五条第二款的规定，你应当如实回答询问并协助调查，不得拒绝或者阻挠。如作虚假陈述或拒绝、阻挠调查，将依法追究法律责任。请你配合我们调查询问。以上告知你是否清楚？\n答：\n问：为保障你(单位)的合法权益,便于我们及时告知您依法享有的权利和义务,请问你的单位的名称、法定代表人（负责人）姓名与职务、住所（住址）、企业类型、经营范围、社会信用代码和联系电话吗？\n答：我叫     ，我单位名称叫     ，法定代表人（负责人）姓名与职务是    ；住所（住址）为：     ；单位企业类型为：      ；经营范围是：    ，单位社会信用代码为：      ；联系话：      。\n问：\n答：\n问：请你核对以上笔录，若记录属实，请你签名确认。你若阅读困难，我们可以读给你听。\n答："
				},
				rules: {
					causeAction: {
						rules: [{
							required: true,
							errorMessage: '请输入案由',

						}, ]
					},
					startEndTime: {
						rules: [{
							required: true,
							errorMessage: "请选择询问时间!",
							trigger: "change"
						}, ]
					},
					inquiryEndtime: {
						rules: [{
							required: true,
							errorMessage: "请选择询问结束时间!",
							trigger: "change"
						}, ]
					},
					inquiryLocation: {
						rules: [{
							required: true,
							errorMessage: "请输入询问地点!",

						}, ]
					},
					callInquirer: {
						rules: [{
							required: true,
							errorMessage: "请选择调查询问人!",

						}, ]
					},
					noteTaker: {
						rules: [{
							required: true,
							errorMessage: "请选择记录人!",

						}, ]
					},
					personQuestioned: {
						rules: [{
							required: true,
							errorMessage: "请输入被询问人!",

						}, ]
					},
					sex: {
						rules: [{
							required: true,
							errorMessage: "请选择性别!",
							trigger: "change"
						}, ]
					},
					card: {
						rules: [{
							required: true,
							errorMessage: "请输入身份证!",

						}, ]
					},
					working: {
						rules: [{
							required: true,
							errorMessage: "请输入工作单位!",
							trigger: "change"
						}, ]
					},
					post: {
						rules: [{
							required: true,
							errorMessage: "请输入职务!",

						}, ]
					},
					birthday: {
						rules: [{
							required: true,
							errorMessage: "请选择出生年月!",
						}, ]
					},
					location: {
						rules: [{
							required: true,
							errorMessage: "请输入住址!",

						}, ]
					},
					tel: {
						rules: [{
							required: true,
							errorMessage: "请输入联系电话!",

						}, ]
					},
					postal: {
						rules: [{
							required: true,
							errorMessage: "请输入邮政编码!",

						}, ]
					},
				},

				loading: false

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
			askAnswer,
			requiredText,
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
				let httpurl = "/zhzf/transcriptQuestioning/updateTranscriptId";
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
				console.log("this.model", this.model)
				this.$refs.form.validate().then(res => {
					console.log('isSubmit：', isSubmit);
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
						url = "/zhzf/transcriptQuestioning/edit"
						method = "PUT"
					} else {
						url = "/zhzf/transcriptQuestioning/add"
						method = "POST"
					}
					if (getModel.informationUrl) {
						if (typeof getModel.informationUrl == "object") {
							getModel.informationUrl = getModel.informationUrl.join(",");
						}
					}

					getModel.inquiryStarttime = getModel.startEndTime[0]
					getModel.inquiryEndtime = getModel.startEndTime[1]
					delete getModel.startEndTime

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

			// submit() {


			// 	console.log("this", this.model)
			// 	this.$refs.form.validate().then(res => {
			// 		console.log('表单数据信息：', res);

			// 		if (this.model.id) {
			// 			this.submitForm()
			// 		} else {
			// 			this.submitFormAdd()
			// 		}
			// 	}).catch(err => {
			// 		console.log('表单错误信息：', err);
			// 	})
			// },
			// async submitForm() {
			// 	try {
			// 		this.loading=true
			// 		uni.showLoading({
			// 			title: '加载中'
			// 		});
			// 		let getmodel = this.model
			// 		getmodel.inquiryStarttime = getmodel.startEndTime[0]
			// 		getmodel.inquiryEndtime = getmodel.startEndTime[1]
			// 		delete getmodel.startEndTime
			// 		const res = await this.api.fieldInvestigation.TreeListlistedit(getmodel)
			// 		console.log("edit", res)
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
			// 		} else {
			// 			uni.showToast({
			// 				icon: "none",
			// 				title: message,
			// 				duration: 2000
			// 			});
			// 		}
			// 		uni.hideLoading();
			// 		this.loading=false
			// 	} catch (e) {
			// 		this.loading=false
			// 		console.log('try:e:', e)
			// 	}
			// },
			// async submitFormAdd() {
			// 	try {
			// 		uni.showLoading({
			// 			title: '加载中'
			// 		});
			// 		let getmodel = this.model
			// 		getmodel.inquiryStarttime = getmodel.startEndTime[0]
			// 		getmodel.inquiryEndtime = getmodel.startEndTime[1]
			// 		delete getmodel.startEndTime
			// 		const res = await this.api.fieldInvestigation.TreeListlistadd(getmodel)
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

			// 		} else {
			// 			uni.showToast({
			// 				icon: "none",
			// 				title: message,
			// 				duration: 2000
			// 			});
			// 		}
			// 		uni.hideLoading();
			// 		uni.navigateBack({
			// 			delta: 1,
			// 			animationType: 'pop-out',
			// 			animationDuration: 200
			// 		})
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
