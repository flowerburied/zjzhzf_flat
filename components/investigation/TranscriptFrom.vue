<template>
	<view class="prospect_edit" :style="{paddingTop:$store.state.phoneInfo.BarHeight+'px' }">
		<uni-forms ref="form" :modelValue="model" :rules="rules">
			<view class="second_view_box">

				<myCol>
					<myRow widthPercentage='1.66' background="#f0f0f0">
						<text class="public_text">
							案由
						</text>
					</myRow>
					<myRow widthPercentage='8.34'>
						<view class="public_input">
							<uni-forms-item name="causeAction">
								<uni-easyinput type="textarea" v-model="model.causeAction" placeholder="请输入案由!">
								</uni-easyinput>
							</uni-forms-item>
						</view>

					</myRow>
				</myCol>

				<myCol>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<text class="public_text">
							询问时间
						</text>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="startEndTime">
								<datetimePicker dateType="datetimerange" v-model="model.startEndTime">
								</datetimePicker>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<text class="public_text ">
							询问地点
						</text>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="inquiryLocation">
								<uni-easyinput v-model="model.inquiryLocation" placeholder="请输入询问地点">
								</uni-easyinput>
								<!-- <datetimePicker v-model="model.inquiryLocation"></datetimePicker> -->
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>

				<myCol>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<text class="public_text">
							调查询问人
						</text>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="callInquirer">
								<dataTreePicker v-model="model.callInquirer">
								</dataTreePicker>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<text class="public_text ">
							记录人
						</text>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="noteTaker">
								<uni-easyinput v-model="model.noteTaker" placeholder="请输入记录人">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>

				<myCol>
					<myRow background="#f0f0f0">
						<text class="public_text">
							被询问人
						</text>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="personQuestioned">
								<uni-easyinput v-model="model.personQuestioned" placeholder="请输入被询问人">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0">
						<text class="public_text">
							性别
						</text>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="sex">
								<uni-data-checkbox v-model="model.sex" :localdata="sex">
								</uni-data-checkbox>
								<!-- 	<uni-easyinput v-model="model.sex" placeholder="请输入联系人姓名">
								</uni-easyinput> -->
							</uni-forms-item>
						</view>

					</myRow>
					<myRow background="#f0f0f0">
						<text class="public_text">
							身份证
						</text>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="card">
								<uni-easyinput v-model="model.card" placeholder="请输入身份证">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>


				<myCol>
					<myRow background="#f0f0f0">
						<text class="public_text">
							工作单位
						</text>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="working">
								<uni-easyinput v-model="model.working" placeholder="请输入工作单位">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0">
						<text class="public_text">
							职务
						</text>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="post">
								<uni-easyinput v-model="model.post" placeholder="请输入职务">
								</uni-easyinput>
							</uni-forms-item>
						</view>

					</myRow>
					<myRow background="#f0f0f0">
						<text class="public_text">
							出生年月
						</text>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="birthday">
								<datetimePicker v-model="model.birthday">
								</datetimePicker>
							</uni-forms-item>
						</view>

					</myRow>

				</myCol>



				<myCol>
					<myRow background="#f0f0f0">
						<text class="public_text">
							住址
						</text>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="location">
								<uni-easyinput v-model="model.location" placeholder="请输入住址">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0">
						<text class="public_text">
							联系电话
						</text>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="tel">
								<uni-easyinput v-model="model.tel" placeholder="请输入联系电话">
								</uni-easyinput>
							</uni-forms-item>
						</view>

					</myRow>

					<myRow background="#f0f0f0">
						<text class="public_text">
							邮政编码
						</text>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="postal">
								<uni-easyinput v-model="model.postal" placeholder="请输入邮政编码!">
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


			<askAnswer v-model="model.qaDes"></askAnswer>

			<view class="prosp_from_btn">
				<view>
					<button class="from_btn" @click="submit" type="primary">保存</button>
				</view>
			</view>



			<!-- 签名模块 -->
			<view class="second_view_box">
				<myCol>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<text class="public_text">
							被询问人签名
						</text>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="personQuestionedSign">
								<ESignature v-model="model.personQuestionedSign"></ESignature>
							</uni-forms-item>
						</view>

					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<text class="public_text ">
							调查询问人签名
						</text>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="callInquirerSign">
								<ESignature v-model="model.callInquirerSign"></ESignature>
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
	import askAnswer from '@/components/public/from/askAnswer.vue'

	export default {


		data() {
			return {
				sex: [{
					text: '男',
					value: 1
				}, {
					text: '女',
					value: 2
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
					inquiryEndtime: ''
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
							errorMessage: "请输入案请输入记录人!",

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
						this.model.inquiryStarttime = this.model.startEndTime[0]
						this.model.inquiryEndtime = this.model.startEndTime[1]
						delete this.model.startEndTime
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
					let getmodel = this.model
					getmodel.inquiryStarttime = getmodel.startEndTime[0]
					getmodel.inquiryEndtime = getmodel.startEndTime[1]
					delete getmodel.startEndTime
					const res = await this.api.fieldInvestigation.TreeListlistedit(getmodel)
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

					const res = await this.api.fieldInvestigation.TreeListlistadd(this.model)
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
