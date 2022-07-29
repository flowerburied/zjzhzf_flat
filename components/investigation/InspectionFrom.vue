<template>
	<view class="prospect_edit" :style="{paddingTop:$store.state.phoneInfo.BarHeight+'px' }">



		<view class="second_view_box">

			<myCol>
				<myRow widthPercentage='1.66' background="#f0f0f0">
					<view class="public_text">

						当事人类型
					</view>
				</myRow>
				<myRow widthPercentage='8.34'>
					<view class="public_input">
						<uni-data-checkbox style="margin-bottom: 10rpx;" @change="changeTag" :disabled="isdisabled"
							v-model="model.partyType" :localdata="typelocaldata">
						</uni-data-checkbox>
					</view>

				</myRow>
			</myCol>
			<uni-forms v-if="model.partyType==1" style="width: 100%;" ref="form" :modelValue="model" :rules="rules">
				<!-- 单位 -->
				<myCol>
					<myRow widthPercentage='1.66' background="#f0f0f0">
						<view class="public_text">
							地点
						</view>
					</myRow>
					<myRow widthPercentage='8.34'>
						<view class="public_input">
							<uni-forms-item name="companyLocation">
								<uni-easyinput :disabled="isdisabled" v-model="model.companyLocation"
									placeholder="请输入地点">
								</uni-easyinput>

							</uni-forms-item>
						</view>

					</myRow>

				</myCol>
				<myCol>
					<myRow widthPercentage='1.66' background="#f0f0f0">
						<view class="public_text">

							案由
						</view>
					</myRow>
					<myRow widthPercentage='8.34'>
						<view class="public_input">
							<uni-forms-item>
								<uni-easyinput :disabled="isdisabled" v-model="model.caseDesc" placeholder="请输入案由">
								</uni-easyinput>

							</uni-forms-item>
						</view>

					</myRow>
				</myCol>
				<myCol>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							名称
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="companyName">
								<uni-easyinput :disabled="isdisabled" v-model="model.companyName" placeholder="请输入名称">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text ">
							时间
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="companyTime">
								<!-- <uni-easyinput v-model="model.companyPerson" placeholder="请输入负责人">
								</uni-easyinput> -->

								<datetimePicker :disabled="isdisabled" dateType="datetimerange"
									v-model="model.companyTime">
								</datetimePicker>

							</uni-forms-item>
						</view>
					</myRow>
				</myCol>
				<myCol>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							现场负责人
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="companyPerson">

								<uni-easyinput :disabled="isdisabled" v-model="model.companyPerson"
									placeholder="请输入现场负责人">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>

					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							身份证号码
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="companySocialCredit">
								<uni-easyinput :disabled="isdisabled" v-model="model.companySocialCredit"
									placeholder="请输入身份证号码">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>

				<myCol>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">
							工作岗位
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="companyPersonPostion">
								<uni-easyinput :disabled="isdisabled" v-model="model.companyPersonPostion"
									placeholder="请输入工作岗位">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							联系电话
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="companyTel">
								<uni-easyinput :disabled="isdisabled" v-model="model.companyTel" placeholder="请输入联系电话">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>


				</myCol>
				<myCol>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							在场人员
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="companyPeople">
								<uni-easyinput :disabled="isdisabled" v-model="model.companyPeople"
									placeholder="请输入在场人员">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>

					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							身份证号码
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="companyRepresentative">
								<uni-easyinput :disabled="isdisabled" v-model="model.companyRepresentative"
									placeholder="请输入身份证号码">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>

				<myCol>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							工作岗位
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="companyProjectPostion">
								<uni-easyinput :disabled="isdisabled" v-model="model.companyProjectPostion"
									placeholder="请输入工作岗位">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>

					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							联系电话
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="companyProjectTel">
								<uni-easyinput :disabled="isdisabled" v-model="model.companyProjectTel"
									placeholder="请输入联系电话">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>

			</uni-forms>
			<!-- 单位end -->

			<!-- 个人 -->
			<uni-forms v-if="model.partyType==2" style="width: 100%;" ref="form" :modelValue="model" :rules="rulesXX">
				<myCol>
					<myRow widthPercentage='1.66' background="#f0f0f0">
						<view class="public_text">
							地点
						</view>
					</myRow>
					<myRow widthPercentage='8.34'>
						<view class="public_input">
							<uni-forms-item>
								<uni-easyinput :disabled="isdisabled" v-model="model.personalSex" placeholder="请输入地点">
								</uni-easyinput>

							</uni-forms-item>
						</view>

					</myRow>
				</myCol>
				<myCol>
					<myRow widthPercentage='1.66' background="#f0f0f0">
						<view class="public_text">

							案由
						</view>
					</myRow>
					<myRow widthPercentage='8.34'>
						<view class="public_input">
							<uni-forms-item>
								<uni-easyinput :disabled="isdisabled" v-model="model.caseDesc" placeholder="请输入案由">
								</uni-easyinput>

							</uni-forms-item>
						</view>

					</myRow>
				</myCol>
				<myCol>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							姓名
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="personalName">

								<uni-easyinput :disabled="isdisabled" v-model="model.personalName" placeholder="请输入名称">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							时间
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="personalTime">
								<!-- 	<datetimePicker v-model="model.personalTime">
								</datetimePicker> -->

								<datetimePicker :disabled="isdisabled" dateType="datetimerange"
									v-model="model.personalTime">
								</datetimePicker>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>

				<myCol>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							家庭住址
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="personalResidence">

								<uni-easyinput :disabled="isdisabled" v-model="model.personalResidence"
									placeholder="请输入家庭住址">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							联系电话
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="personalTel">
								<uni-easyinput :disabled="isdisabled" v-model="model.personalTel" placeholder="请输入联系电话">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>
				<myCol>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							在场人员
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="personalPeople">
								<uni-easyinput :disabled="isdisabled" v-model="model.personalPeople"
									placeholder="请输入在场人员">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							身份证
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="personalCard">
								<uni-easyinput :disabled="isdisabled" v-model="model.personalCard" placeholder="请输入身份证">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>
				<myCol>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							工作岗位
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item>

								<uni-easyinput :disabled="isdisabled" v-model="model.personalWork"
									placeholder="请输入工作岗位">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							联系电话
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="personalBirthday">
								<uni-easyinput :disabled="isdisabled" v-model="model.personalBirthday"
									placeholder="请输入联系电话">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>
			</uni-forms>

			<!-- 个人end -->

			<uni-forms style="width: 100%;" ref="formXX" :modelValue="model" :rules="rulesXXA">
				<myCol>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">

							检查（勘察）人
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="checkedBy">
								<dataTreePicker :disabled="isdisabled" v-model="model.checkedBy">
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
							<uni-forms-item name="noteTakers">
								<dataTreePicker :disabled="isdisabled" v-model="model.noteTakers">
								</dataTreePicker>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>

				<myCol>

					<myRow widthPercentage='10'>
						<view class="public_input">
							<uni-forms-item name="checkedByNotice">

								<uni-easyinput :disabled="isdisabled" type="textarea" autoHeight
									v-model="model.checkedByNotice" placeholder="请输入检查人告知!">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>
				<myCol>
					<myRow widthPercentage='1.66' background="#f0f0f0">
						<view class="public_text">

							现场检查记录情况
						</view>
					</myRow>
					<myRow widthPercentage='8.34'>
						<view class="public_input">
							<uni-forms-item name="inspectionRecords">
								<uni-easyinput :disabled="isdisabled" type="textarea" autoHeight
									v-model="model.inspectionRecords" placeholder="请输入现场检查记录情况!">
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
							<uni-forms-item name="inspectionInvestigation">
								<filePicker :disabled="isdisabled" v-model="model.inspectionInvestigation">
								</filePicker>

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
								<uni-easyinput :disabled="isdisabled" type="textarea" autoHeight
									v-model="model.inspectionDesc">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>

			</uni-forms>

		</view>
		<view class="prosp_from_btn">
			<view>
				<exportPdf pdfName="现场检查笔录" :model="model" excelConfigId="698678799710285824"></exportPdf>
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
							<ESignature :disabled="isdisabled" v-model="model.signatureQuestioned"></ESignature>
						</uni-forms-item>
						<datetimePicker :disabled="isdisabled" v-model="model.signatureQuestionedTime"
							dateType="datetime">
						</datetimePicker>
						<!-- 		<uni-datetime-picker :disabled="isdisabled" type="datetime"
							v-model="model.signatureQuestionedTime" />
 -->
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
							<ESignature :disabled="isdisabled" v-model="model.witnessInquirer"></ESignature>
							<datetimePicker :disabled="isdisabled" v-model="model.witnessInquirerTime"
								dateType="datetime">
							</datetimePicker>
							<!-- <uni-datetime-picker :disabled="isdisabled" type="datetime"
								v-model="model.witnessInquirerTime" />
 -->
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
							<ESignature :disabled="isdisabled" v-model="model.surveyorQuestioned"></ESignature>
							<datetimePicker :disabled="isdisabled" v-model="model.surveyorQuestionedTime"
								dateType="datetime">
							</datetimePicker>

							<!-- 				<uni-datetime-picker :disabled="isdisabled" type="datetime"
								v-model="model.surveyorQuestionedTime" />
 -->
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
							<ESignature :disabled="isdisabled" v-model="model.noteTaker"></ESignature>

							<datetimePicker :disabled="isdisabled" v-model="model.noteTakerTime" dateType="datetime">
							</datetimePicker>

							<!-- 			<uni-datetime-picker :disabled="isdisabled" type="datetime"
								v-model="model.noteTakerTime" /> -->

						</uni-forms-item>
					</view>
				</myRow>
			</myCol>


		</view>




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

					companyTime: null,
					partyType: '1',
					inspectionDesc: "时间:\r\n方位:\r\n绘制人姓名:\r\n身份:\r\n",
					checkedByNotice: "我们是无锡市住房和城乡建设局的执法人员（出示执法证件），现依法进行检查。依据《中华人民共和国行政处罚法》第四十二条第一款、第五十五条第一款的规定，如执法人员少于两人或执法证件与身份不符，你有权拒绝检查，你是否接受检查？\n被检查（勘验）人答：\n问：根据《中华人民共和国行政处罚法》第四十三条第二款的规定，如认为执法人员与案件有直接利害关系或者有其他关系可能影响公正执法的，你有权申请执法人员回避。你是否申请回避？\n答：\n问：根据《中华人民共和国行政处罚法》五十五条第二款的规定，你应当如实回答询问并协助检查，不得拒绝或者阻挠。如作虚假陈述或拒绝、阻挠检查，将依法追究法律责任。请你配合我们检查。以上告知你是否清楚？\n答：",

				},
				rulesXXA: {
					checkedBy: {
						rules: [{
							required: true,
							errorMessage: "请选择",
						}, ]
					},
					noteTakers: {
						rules: [{
							required: true,
							errorMessage: "请选择",
						}, ]
					},
					inspectionRecords: {
						rules: [{
							required: true,
							errorMessage: '请输入现场检查记录情况',
						}, ]
					},
				},
				rulesXX: {
					personalName: {
						rules: [{
							required: true,
							errorMessage: '请输入姓名',
						}, ]
					},

					personalResidence: {
						rules: [{
							required: true,
							errorMessage: '请输入家庭住址',
						}, ]
					},
					personalTel: {
						rules: [{
							required: true,
							errorMessage: '请输入联系电话',
						}, ]
					},
				},
				rules: {

					companyName: {
						rules: [{
							required: true,
							errorMessage: '请输入名称',
						}, ]
					},
					companyPersonPostion: {
						rules: [{
							required: true,
							errorMessage: '请输入工作岗位',
						}, ]
					},
					companyPerson: {
						rules: [{
							required: true,
							errorMessage: '请输入负责人',
						}, ]
					},

					companyAddress: {
						rules: [{
							required: true,
							errorMessage: '请输入住址',
						}, ]
					},
					personalPost: {
						rules: [{
							required: true,
							errorMessage: '请输入职务',
						}, ]
					},



					companyTel: {
						rules: [{
							required: true,
							errorMessage: '请输入联系电话',
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
			// 触发提交表单
			handleOkupdata() {
				console.log("提交")
				// this.$refs['form'].clearValidate();
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
				let httpurl = "/zhzf/inspectionRecord/updateTranscriptId";
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
			changeTag(e) {
				console.log("切换111", e.detail.value)
				this.$refs['form'].clearValidate();
				let option = {
					personalBirthday: "",
					personalWork: "",
					personalCard: "",
					personalPeople: "",
					personalTel: "",
					personalResidence: "",
					personalTime: null,
					personalName: "",
					personalSex: "",
					companyProjectTel: "",
					companyProjectPostion: "",
					companyRepresentative: "",
					companyPeople: "",
					companyTel: "",
					companyPersonPostion: "",
					companySocialCredit: "",
					companyPerson: "",
					companyName: "",
					companyLocation: "",
					caseDesc: "",
					companyTime: null,
					partyType: e.detail.value,
					inspectionDesc: "时间:\r\n方位:\r\n绘制人姓名:\r\n身份:\r\n",
					checkedByNotice: "我们是无锡市住房和城乡建设局的执法人员（出示执法证件），现依法进行检查。依据《中华人民共和国行政处罚法》第四十二条第一款、第五十五条第一款的规定，如执法人员少于两人或执法证件与身份不符，你有权拒绝检查，你是否接受检查？\n被检查（勘验）人答：\n问：根据《中华人民共和国行政处罚法》第四十三条第二款的规定，如认为执法人员与案件有直接利害关系或者有其他关系可能影响公正执法的，你有权申请执法人员回避。你是否申请回避？\n答：\n问：根据《中华人民共和国行政处罚法》五十五条第二款的规定，你应当如实回答询问并协助检查，不得拒绝或者阻挠。如作虚假陈述或拒绝、阻挠检查，将依法追究法律责任。请你配合我们检查。以上告知你是否清楚？\n答：",

				}
				this.model = option
			},
			submitForm(isSubmit) {
				this.$refs['form'].validate().then(res => {
					console.log('表单数据信息：', res);

					this.$refs['formXX'].validate().then(res => {
						console.log('表单数据信息：', isSubmit);
						this.submitFormvalidate(isSubmit)
					}).catch(err => {
						console.log('表单错误信息：', err);
					})
				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			},
			async submitFormvalidate(isSubmit) {
				try {

					console.log("isSubmit", isSubmit)

					this.loading = true
					uni.showLoading({
						title: '加载中'
					});
					let getModel = JSON.parse(JSON.stringify(this.model))
					let url = ""
					let method = ""
					if (getModel.id) {
						url = "/zhzf/inspectionRecord/edit"
						method = "PUT"
					} else {
						url = "/zhzf/inspectionRecord/add"
						method = "POST"
					}


					if (getModel.inspectionInvestigation) {
						if (typeof getModel.inspectionInvestigation == "object") {
							getModel.inspectionInvestigation = getModel.inspectionInvestigation.join(",");
						}
					}
					if (getModel.companyTime) {
						getModel.companyStartTime = getModel.companyTime[0]
						getModel.companyEndTime = getModel.companyTime[1]
						delete getModel.companyTime
					}

					if (getModel.personalTime) {
						getModel.personalStartTime = getModel.personalTime[0]
						getModel.personalEndTime = getModel.personalTime[1]
						delete getModel.personalTime
					}
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
			// 		this.loading = true
			// 		uni.showLoading({
			// 			title: '加载中'
			// 		});

			// 		let getModel = JSON.parse(JSON.stringify(this.model));
			// 		if (getModel.inspectionInvestigation) {
			// 			if (typeof getModel.inspectionInvestigation == "object") {
			// 				getModel.inspectionInvestigation = getModel.inspectionInvestigation.join(",");
			// 			}
			// 		}
			// 		if (getModel.companyTime) {
			// 			getModel.companyStartTime = getModel.companyTime[0]
			// 			getModel.companyEndTime = getModel.companyTime[1]
			// 			delete getModel.companyTime
			// 		}

			// 		if (getModel.personalTime) {
			// 			getModel.personalStartTime = getModel.personalTime[0]
			// 			getModel.personalEndTime = getModel.personalTime[1]
			// 			delete getModel.personalTime
			// 		}


			// 		const res = await this.api.fieldInvestigation.inspectionedit(getModel)
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
			// 		this.loading = false
			// 	} catch (e) {
			// 		this.loading = false
			// 		console.log('try:e:', e)
			// 	}
			// },
			// async submitFormAdd() {
			// 	try {
			// 		uni.showLoading({
			// 			title: '加载中'
			// 		});
			// 		let getModel = JSON.parse(JSON.stringify(this.model));

			// 		if (getModel.inspectionInvestigation) {
			// 			if (typeof getModel.inspectionInvestigation == "object") {
			// 				getModel.inspectionInvestigation = getModel.inspectionInvestigation.join(",");
			// 			}
			// 		}
			// 		if (getModel.companyTime) {
			// 			getModel.companyStartTime = getModel.companyTime[0]
			// 			getModel.companyEndTime = getModel.companyTime[1]
			// 			delete getModel.companyTime
			// 		}

			// 		if (getModel.personalTime) {
			// 			getModel.personalStartTime = getModel.personalTime[0]
			// 			getModel.personalEndTime = getModel.personalTime[1]
			// 			delete getModel.personalTime
			// 		}
			// 		const res = await this.api.fieldInvestigation.inspectionadd(getModel)
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
