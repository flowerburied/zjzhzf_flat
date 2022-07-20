<template>
	<view class="prospect_edit" :style="{paddingTop:$store.state.phoneInfo.BarHeight+'px' }">
		<uni-forms ref="form" :modelValue="model" :rules="rules">
			<view class="second_view_box">
				<myCol>
					<myRow background="#f0f0f0">

						<view class="public_text">
							<requiredText></requiredText>
							建设单位
						</view>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="constructionUnit">
								<uni-easyinput v-model="model.constructionUnit" placeholder="请输入建设单位">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0">
						<view class="public_text">
							<requiredText></requiredText>
							联系人姓名
						</view>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="constructionPeople1">
								<uni-easyinput v-model="model.constructionPeople1" placeholder="请输入联系人姓名">
								</uni-easyinput>
							</uni-forms-item>
						</view>

					</myRow>
					<myRow background="#f0f0f0">
						<view class="public_text">
							<requiredText></requiredText>
							联系人电话
						</view>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="constructionPeople2">
								<uni-easyinput v-model="model.constructionPeople2" placeholder="请输入联系人电话">
								</uni-easyinput>
							</uni-forms-item>
						</view>

					</myRow>

				</myCol>


				<myCol>
					<myRow background="#f0f0f0">
						<view class="public_text">
							<requiredText></requiredText>
							施工单位
						</view>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="constructionCompany">
								<uni-easyinput v-model="model.constructionCompany" placeholder="请输入施工单位">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0">
						<view class="public_text">
							<requiredText></requiredText>
							联系人姓名
						</view>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="companyPeople1">
								<uni-easyinput v-model="model.companyPeople1" placeholder="请输入联系人姓名">
								</uni-easyinput>
							</uni-forms-item>
						</view>

					</myRow>
					<myRow background="#f0f0f0">
						<view class="public_text">
							<requiredText></requiredText>
							联系人电话
						</view>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="companyPeople2">
								<uni-easyinput v-model="model.companyPeople2" placeholder="请输入联系人电话">
								</uni-easyinput>
							</uni-forms-item>
						</view>

					</myRow>

				</myCol>

				<myCol>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">
							<requiredText></requiredText>
							工程名称
						</view>
					</myRow>
					<myRow widthPercentage='1.66'>
						<view class="public_input">
							<uni-forms-item name="projectName">
								<uni-easyinput v-model="model.projectName" placeholder="请输入工程名称">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">
							<requiredText></requiredText>
							工程地址
						</view>
					</myRow>
					<myRow>
						<view class="public_input">
							<uni-forms-item name="projectAddress">
								<uni-easyinput v-model="model.projectAddress" placeholder="请输入工程地址">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>
				<myCol>
					<myRow widthPercentage='1.66' background="#f0f0f0">
						<view class="public_text">
							<requiredText></requiredText>
							现场工程检查情况
						</view>
					</myRow>
					<myRow widthPercentage='8.34'>
						<view class="public_input">
							<uni-forms-item name="engineeringInspection">

								<uni-easyinput type="textarea" v-model="model.engineeringInspection"
									placeholder="请输入现场工程检查情况">
								</uni-easyinput>
							</uni-forms-item>
						</view>

					</myRow>
				</myCol>


				<myCol>
					<myRow widthPercentage='1.66' background="#f0f0f0">

						<view class="public_text">
							<requiredText></requiredText>
							现场踏勘示意图
						</view>
					</myRow>
					<myRow widthPercentage='8.34'>
						<view class="public_updata">
							<uni-forms-item name="schematicDiagram">
								<filePicker v-model="model.schematicDiagram"></filePicker>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>

				<myCol>
					<myRow widthPercentage='1.66' background="#f0f0f0">

						<view class="public_text">
							<requiredText></requiredText>
							现场踏勘情况
						</view>
					</myRow>
					<myRow widthPercentage='8.34'>

						<view class="public_input">
							<uni-forms-item name="siteSurvey">
								<uni-easyinput type="textarea" v-model="model.siteSurvey" placeholder="请输入现场踏勘情况">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>

				<myCol>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">
							<requiredText></requiredText>
							勘查人
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="surveyor">
								<uni-easyinput v-model="model.surveyor" placeholder="请输入勘查人">
								</uni-easyinput>
							</uni-forms-item>
						</view>

					</myRow>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">
							<requiredText></requiredText>
							勘查时间
						</view>
					</myRow>
					<myRow widthPercentage='3.34'>
						<view class="public_input">
							<uni-forms-item name="surveyTime">
								<datetimePicker v-model="model.surveyTime"></datetimePicker>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>

				<myCol>
					<myRow background="#f0f0f0" widthPercentage='1.66'>
						<view class="public_text">
							<requiredText></requiredText>
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
						<view class="public_text">
							<requiredText></requiredText>
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
				</myCol>

				<myCol>
					<myRow widthPercentage='1.66' background="#f0f0f0">
						<view class="public_text">
							<requiredText></requiredText>
							附件
						</view>
					</myRow>
					<myRow widthPercentage='8.34'>
						<view class="public_input">
							<uni-forms-item name="fileUrl">
								<view class="test_index">

									<upAllFile v-model="model.fileUrl"></upAllFile>
								</view>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>
				<myCol>
					<myRow widthPercentage='1.66' background="#f0f0f0">

						<view class="public_text">
							<requiredText></requiredText>
							处理意见
						</view>
					</myRow>
					<myRow widthPercentage='8.34'>

						<view class="public_input">
							<uni-forms-item name="handlingOpinions">
								<uni-easyinput type="textarea" v-model="model.handlingOpinions" placeholder="请输入现场踏勘情况">
								</uni-easyinput>
							</uni-forms-item>
						</view>
					</myRow>
				</myCol>


				<!-- <myCol>
					<myRow>
						<button @click="submit" type="default">测试</button>
					</myRow>
					<myRow>3456</myRow>

				</myCol> -->

			</view>
		</uni-forms>

		<view class="prosp_from_btn">

			<view>
				<button class="from_btn" @click="goBack" type="default">返回</button>
			</view>
			<view>
				<button @click="submitexamine" v-if="model.id" class="from_btn" type="primary">提交</button>
			</view>
			<view>
				<button class="from_btn" @click="submit" type="primary">保存</button>
			</view>

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

	import requiredText from '@/components/public/requiredText.vue'

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

				testfile: '2022-05-15_log_1653014036228.txt',
				fileLists: [],
				// addlist
				bothsides: '0 12rpx',
				bothLeft: 34,
				resultImg1: "16529254678660_1652925467559.png",
				model: {
					surveyTime: "",
					signatureQuestioned: "",
					surveyorQuestioned: "",
					schematicDiagram: null,
					fileUrl: ""
				},
				rules: {
					// 对name字段进行必填验证
					constructionUnit: {
						rules: [{
							required: true,
							errorMessage: '请输入建设单位',
						}, ]
					},
					constructionPeople1: {
						rules: [{
							required: true,
							errorMessage: '请输入联系人姓名',
						}, ]
					},
					constructionPeople2: {
						rules: [{
							required: true,
							errorMessage: '请输入联系人电话',
						}, ]
					},
					constructionCompany: {
						rules: [{
							required: true,
							errorMessage: '请输入施工单位',
						}, ]
					},
					companyPeople1: {
						rules: [{
							required: true,
							errorMessage: '请输入联系人姓名',
						}, ]
					},
					companyPeople2: {
						rules: [{
							required: true,
							errorMessage: '请输入联系人电话',
						}, ]
					},
					projectName: {
						rules: [{
							required: true,
							errorMessage: '请输入工程名称',
						}, ]
					},
					projectAddress: {
						rules: [{
							required: true,
							errorMessage: '请输入工程地址',
						}, ]
					},
					engineeringInspection: {
						rules: [{
							required: true,
							errorMessage: '请输入现场工程检查情况',
						}, ]
					},
					schematicDiagram: {
						rules: [{
							required: true,
							errorMessage: '请上传现场踏勘示意图',
						}, ]
					},
					siteSurvey: {
						rules: [{
							required: true,
							errorMessage: '请输入现场踏勘情况',
						}, ]
					},
					surveyor: {
						rules: [{
							required: true,
							errorMessage: '请输入勘查人',
						}, ]
					},
					surveyTime: {
						rules: [{
							required: true,
							errorMessage: '请输入勘查时间',

						}, ]
					},
					surveyorQuestioned: {
						rules: [{
							required: true,
							errorMessage: '请输入勘查人签名',

						}, ]
					},
					signatureQuestioned: {
						rules: [{
							required: true,
							errorMessage: '请输入当事人签名',

						}, ]
					},
					fileUrl: {
						rules: [{
							required: true,
							errorMessage: '请上传附件',

						}, ]
					},
					handlingOpinions: {
						rules: [{
							required: true,
							errorMessage: '请输入处理意见',

						}, ]
					},
				},


				option: {},
				height: '180rpx',
				size: 10,
				debug: true,
				// 选择文件后是否立即自动上传
				instantly: false,
				files: new Map(),
				// 微信小程序Map对象for循环不显示，所以转成普通数组，不要问为什么，我也不知道
				wxFiles: [],


				// 演示用
				tabIndex: 0,
				list: [],
			}
		},
		components: {
			myCol,
			myRow,
			datetimePicker,
			ESignature,
			filePicker,
			upAllFile,
			requiredText
		},
		mounted() {
			this.option = {
				// 上传服务器地址，此地址需要替换为你的接口地址
				url: 'http://hlapi.j56.com/dropbox/document/upload',
				// 上传附件的key
				name: 'file',
				// 根据你接口需求自定义请求头
				header: {
					'Authorization': 'bearer eyJhbGciO',
					'uid': '27682',
					'client': 'app',
					'accountid': 'DPOA9487'
				},
				// 根据你接口需求自定义body参数
				formData: {
					// 'orderId': 1000
				}
			};
		},
		created() {
			this.option = {
				// 上传服务器地址，此地址需要替换为你的接口地址
				url: 'http://hlapi.j56.com/dropbox/document/upload',
				// 上传附件的key
				name: 'file',
				// 根据你接口需求自定义请求头
				header: {
					'Authorization': 'bearer eyJhbGciO',
					'uid': '27682',
					'client': 'app',
					'accountid': 'DPOA9487'
				},
				// 根据你接口需求自定义body参数
				formData: {
					// 'orderId': 1000
				}
			};
		},
		onReady() {

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
					uni.navigateBack({
						delta: 1,
						animationType: 'pop-out',
						animationDuration: 200
					})
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
					console.log('已全部上传完毕');
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
			},
			// updatafile() {
			// 	this.$refs.lFile.upload({
			// 		// #ifdef APP-PLUS
			// 		currentWebview: this.$mp.page.$getAppWebview(),
			// 		// #endif
			// 		url: 'http://39.100.93.133:8088/jeecg-boot/sys/common/upload', //测试地址，记得更换
			// 		name: 'file',
			// 		//header: {'Content-Type':'类型','Authorization':'token'},
			// 		//...其他参数
			// 	});
			// },
			upSuccess(e) {
				console.log('e', e)
			},
			maskClick(e) {
				console.log('maskClick事件:', e);
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
					if (getModel.schematicDiagram) {
						if (typeof getModel.schematicDiagram == "object") {
							getModel.schematicDiagram = getModel.schematicDiagram.join(",");
						}
					}
					console.log("getModel", getModel)
					const res = await this.api.prospect.edit(getModel)
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
					if (getModel.schematicDiagram) {
						if (typeof getModel.schematicDiagram == "object") {
							getModel.schematicDiagram = getModel.schematicDiagram.join(",");
						}
					}
					console.log("getModel", getModel)
					const res = await this.api.prospect.add(getModel)
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
