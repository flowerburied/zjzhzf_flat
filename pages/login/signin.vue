<template>
	<view class="signin">


		<view class="signup">

			<view class="signup_title">
				账号密码登录
			</view>

			<view class="signup_from">
				<view class="signup_from_box">
					<input class="from_item_input" v-model="formData.name" placeholder-class="from_item_inputpla"
						type="text" placeholder="请输入账户名" />
				</view>
				<view class="signup_from_box">
					<input class="from_item_input" placeholder-class="from_item_inputpla" type="text"
						placeholder="请输入账户名" />
				</view>
				<view class="signup_from_box">
					<input class="from_item_input" placeholder-class="from_item_inputpla" type="text"
						placeholder="请输入账户名" />
					<view class="from_item_box">

					</view>
				</view>
			</view>
			<view class="signup_agreement">
				<view @click="changeAgreemenet" class="signup_agreement_box"
					:class="[isAgreement?'agreement_box_active':'']">

				</view>
				<text class="signup_agreement_text">我已阅读并同意金坛的《用户服务协议》与《隐私政策》</text>
			</view>
			<view class="signup_reset">
				忘记密码?
			</view>
			<view class="signup_btn" @click="submit">
				登录
			</view>



		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isAgreement: false,
				// 表单数据
				formData: {
					name: 'admin',
					passnum: 'Jtgk@2022'
				},
				rules: {
					// 对name字段进行必填验证
					name: {
						rules: [{
								required: true,
								errorMessage: '请输入账户名',
							}

						]
					},

					passnum: {
						rules: [{
								required: true,
								errorMessage: '请输入密码',
							},
							// {
							// 	minLength: 8,
							// 	maxLength: 20,
							// 	errorMessage: '密码长度在 {minLength} 到 {maxLength} 个字符',
							// }
						]
					}
				}

			}
		},
		onReady() {
			// 需要在onReady中设置规则
			// this.$refs.form.setRules(this.rules)
		},
		methods: {
			changeAgreemenet() {
				console.log('表单数据信息：');
				this.isAgreement = !this.isAgreement
			},
			submit() {
				this.$store.dispatch("getPhoneInfo")
				console.log('表单数据信息：');
				// this.$refs.form.validate().then(res => {
				// 	console.log('表单数据信息：', res);
				// 	this.login()
				// }).catch(err => {
				// 	console.log('表单错误信息：', err);
				// })
				uni.switchTab({
					url: '/pages/homePage/home'
				})
			},
			// login() {
			// 	this.$store.dispatch("getPhoneInfo")
			// 	uni.switchTab({
			// 		url: '/pages/tidings/tidings'
			// 	})
			// }
			async login() {
				try {
					let option = {
						username: this.formData.name,
						password: this.formData.passnum
					}
					console.log("option", option)
					const res = await this.api.user.appLogin(option)
					console.log("appLogin", res)
					if (res.code == 200) {
						let token = res.result.token
						this.$store.commit("SET_TOKEN", token)
						let userinfo = res.result.userInfo
						this.$store.commit("SET_USER_INFO", userinfo)
						// uni.setStorage({
						// 	key: "token",
						// 	data: res.token
						// })
						// setTimeout(() => {
						// 	this.$store.dispatch("setuserinfo")
						// 	this.routes.goIndex()
						// }, 500)
						uni.switchTab({
							url: '/pages/tidings/tidings'
						})
					} else {
						uni.showToast({
							icon: "none",
							title: res.message,
							duration: 2000
						});
					}
				} catch (e) {
					console.log('try:e:', e)
				}
			},


		}
	}
</script>

<style lang="scss">
	.signin {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.signup {
			background-color: #ffffff;
			width: 300rpx;
			height: 300rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			box-shadow: 0px 10rpx 10rpx 0px rgba(0, 0, 0, 0.3);
			border-radius: 1rpx;


			.signup_from {
				width: 225rpx;
				display: flex;
				flex-direction: column;
				margin-top: 10rpx;

				.signup_from_box {
					margin-top: 13rpx;
					width: 225rpx;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					font-size: 10rpx;
					line-height: 10rpx;
					border-bottom: 0.5rpx solid #e5e5e5;

					.from_item_input {
						color: #505050;
					}

					.from_item_inputpla {
						color: #a6a6a6;
					}

					.from_item_box {
						width: 60rpx;
						height: 20rpx;
						border: 0.5rpx solid #e5e5e5;
						// box-shadow: rgba(204, 204, 204, 1) solid 1px;
					}
				}
			}

			.signup_agreement {
				margin-top: 9rpx;
				width: 225rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;

				.signup_agreement_text {
					margin-left: 6rpx;
					font-size: 8rpx;
					line-height: 8rpx;
					color: #000000;
				}

				.signup_agreement_box {
					width: 10rpx;
					height: 10rpx;
					border: 1px solid #43ace9;
				}

				.agreement_box_active {
					background-color: #43ace9;
				}
			}

			.signup_reset {
				width: 225rpx;
				margin-top: 10rpx;
				display: flex;
				flex-direction: row-reverse;
				font-size: 7rpx;
				line-height: 7rpx;
				color: #43ace9;
			}

			.signup_btn {
				width: 225rpx;
				height: 30rpx;
				margin-top: 23rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 1rpx;
				background-color: #118ee9;
				color: #F2F3F7;
				font-size: 11rpx;
				line-height: 11rpx;
			}

			.signup_title {
				margin-top: 35rpx;
				color: #118ee9;
				font-size: 11rpx;
				line-height: 11rpx;


			}






		}
	}
</style>
