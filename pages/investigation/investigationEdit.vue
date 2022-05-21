<template>
	<view class="home">
		<view class="home_tabber"
			:style="{ width: $store.state.phoneInfo.playerWidth+'px',height:$store.state.phoneInfo.BarHeight }">
			<view
				:style="{ width: $store.state.phoneInfo.playerWidth+'px',height: $store.state.phoneInfo.statusBarHeight+'px' }">
			</view>
			<view class="home_tabber_down"
				:style="{ width: $store.state.phoneInfo.playerWidth+'px',height: $store.state.phoneInfo.BarHeightDown+'px' }">

				<view class="tabber_down_img" @click="goback">
					<image class="down_img_size" src="@/static/img/public/001.svg"></image>
				</view>
				<scroll-view :style="{height: $store.state.phoneInfo.BarHeightDown+'px' }" ref="tabbar1" id="tab-bar"
					class="tab-bar" :scroll="false" :scroll-x="true" :show-scrollbar="false"
					:scroll-into-view="scrollInto">
					<view class="tabber_down_con" :style="{ marginLeft:bothLeft +'rpx'}">
						<view class="down_con_box">
							<view class="con_box_add" v-for="(tab,indextab) in tabList" :key="indextab">
								<!-- 	<view class="box_add_num" :style="{ left: boxnumleft+'px'}">
									{{tab.num}}
								</view> -->
								<text :style="{ margin:bothsides }" :class="[indextab==tabIndex?'con_active_color':'']"
									@click="getitemTab(indextab)" :id="`ctsbox${indextab}`"
									class="con_box_text">{{tab.name}}</text>
							</view>
						</view>
						<!-- 	<view class="down_con_line">
							<view class="con_line" :style="{ left: boxLeft+'px',width: boxwidth+'px'}">
							</view>
						</view> -->
					</view>
				</scroll-view>

			</view>
		</view>
		<!-- <image class="home_position_img" src="@/static/img/public/002.png"></image> -->

		<publicContent backcolor="#FFFFFF">

			<view class="prospect_edit">

				<view class="second_view_questions">

					<view class="view_questions_box">
						<text>问:</text>
						<uni-easyinput type="textarea" autoHeight placeholder="请输入内容">
						</uni-easyinput>
					</view>
					<view class="view_questions_box">
						<text>答:</text>
						<uni-easyinput type="textarea" autoHeight placeholder="请输入内容">
						</uni-easyinput>
					</view>
				</view>

				<view class="second_view_box">
					<myCol>
						<myRow background="#f0f0f0" widthPercentage='2'>
							<text class="public_text">
								建设单位
							</text>
						</myRow>
						<myRow widthPercentage='3'>
							<uni-easyinput placeholder="请输入内容"></uni-easyinput>
						</myRow>
						<myRow background="#f0f0f0" widthPercentage='2'>
							<text class="public_text">
								建设单位
							</text>
						</myRow>
						<myRow widthPercentage='3'>

							<dataTreePicker></dataTreePicker>
						</myRow>

					</myCol>
					<myCol>
						<myRow widthPercentage='2' background="#f0f0f0">

							<text class="public_text">
								录音
							</text>
						</myRow>
						<myRow widthPercentage='8'>


							<text v-if="voicePath" class="public_text">
								录音文件
							</text>
							<text class="public_text" @tap="startRecord">
								开始录音
							</text>
							<text class="public_text" @tap="endRecord">
								停止录音
							</text>
							<text class="public_text" @tap="playVoice">
								播放录音
							</text>
						</myRow>
					</myCol>
					<myCol>
						<myRow widthPercentage='2' background="#f0f0f0">

							<text class="public_text">
								当事人类型
							</text>
						</myRow>
						<myRow widthPercentage='8'>
							<uni-data-checkbox class="public_padding" v-model="radio1" :localdata="sex">
							</uni-data-checkbox>
						</myRow>
					</myCol>
					<myCol>
						<myRow widthPercentage='2' background="#f0f0f0">

							<text class="public_text">
								现场勘探示意图
							</text>
						</myRow>
						<myRow widthPercentage='8'>
							<view class="public_updata">


								<uni-file-picker limit="3" :value="fileLists" :imageStyles="imageStyles"
									file-mediatype="image">
								</uni-file-picker>

							</view>
						</myRow>
					</myCol>
					<myCol>
						<myRow widthPercentage='2' background="#f0f0f0">
							<text class="public_text">
								当事人签名
							</text>
						</myRow>
						<myRow widthPercentage='3'>
							<text v-if="!isshowimg" class="public_text active_text" @click="openpopup">
								签名
							</text>
							<image v-if="isshowimg" class="public_img" :src="testcanvasimg"></image>
						</myRow>
						<myRow widthPercentage='2' background="#f0f0f0">
							<text class="public_text ">
								见证者签名
							</text>
						</myRow>
						<myRow widthPercentage='3'>
							<image class="public_img" :src="testcanvasimg"></image>
						</myRow>
					</myCol>
					<myCol>
						<myRow background="#f0f0f0" widthPercentage='2'>
							<text class="public_text">
								处理意见
							</text>
						</myRow>
						<myRow widthPercentage='8'>
							<uni-easyinput type="textarea" autoHeight placeholder="请输入内容">
							</uni-easyinput>

						</myRow>

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

				<SecurityBox></SecurityBox>
			</view>
		</publicContent>
		<uni-popup ref="popup" type="center">
			<view class="recti_popup">




				<view class="recti_popup_canvas">
					<drawing-board @touchmove222="touchmove222" ref="drawingBoard" canvasWidth="300rpx"
						canvasHeight="200rpx">
					</drawing-board>
				</view>



				<view class="recti_popup_btn">
					<view class="view_btn_item add_color">
						关闭
					</view>
					<view class="view_btn_item" @click="save">
						保存
					</view>
				</view>

			</view>

		</uni-popup>
	</view>
</template>

<script>
	import SecurityBox from '@/components/public/SecurityBox.vue'
	import publicContent from '@/components/public/publicContent.vue'
	import recordSheet from '@/components/homePage/homesecond/recordSheet.vue'
	import adminList from '@/components/homePage/homesecond/adminList.vue'

	import myCol from "@/components/public/myRow/myCol.vue"
	import myRow from "@/components/public/myRow/myRow.vue"

	import drawingBoard from "@/components/qiao-drawingBoard/drawingBoard.vue"
	// 录音
	const recorderManager = uni.getRecorderManager();
	const innerAudioContext = uni.createInnerAudioContext();

	import dataTreePicker from '@/components/public/from/dataTreePicker.vue'

	innerAudioContext.autoplay = true;
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
				fileLists: [],
				radio1: 0,
				sex: [{
					text: '单位',
					value: 0
				}, {
					text: '个人',
					value: 1
				}, ],

				tabList: [{
						name: "现场踏勘情况",

					},

				],
				scrollInto: "",
				tabIndex: 0,
				taberWidth: 1700,
				boxLeft: 0,
				boxwidth: 52,
				getList: [],
				boxnumleft: null,

				// 数据
				classes: '2022',
				items: [{
						text: "2022",
						value: "2022"
					},
					{
						text: "2023",
						value: "2023"
					}
				],
				// addlist
				bothsides: '0 12rpx',
				bothLeft: 34,
				testcanvasimg: "",
				// 画板
				isshowimg: false,
				isdraw: false,
				// 录音
				voicePath: ''
			}
		},

		components: {
			SecurityBox,
			publicContent,
			recordSheet,
			adminList,
			myCol,
			myRow,
			drawingBoard,
			dataTreePicker

		},
		onLoad() {
			this.$nextTick(() => {
				this.getitemTab(0)
			})

			let self = this;
			recorderManager.onStop(function(res) {
				console.log('recorder stop' + JSON.stringify(res));
				self.voicePath = res.tempFilePath;
			});
		},
		methods: {
			startRecord() {
				console.log('开始录音');

				recorderManager.start();
			},
			endRecord() {
				console.log('录音结束');
				recorderManager.stop();
			},
			playVoice() {
				console.log('播放录音');

				if (this.voicePath) {
					innerAudioContext.src = this.voicePath;
					innerAudioContext.play();
				}
			},
			save() {
				if (this.isdraw) {
					this.$refs['drawingBoard'].save((res) => {
						console.log(res)
						this.testcanvasimg = res.tempFilePath
						this.isshowimg = true
						this.$refs.popup.close()
					})
				} else {

					uni.showToast({
						icon: "none",
						title: '请签字',
						duration: 2000
					});
				}

			},

			touchmove222() {
				// console.log("hual")

				this.isdraw = true
			},
			openpopup() {
				this.$refs.popup.open('center')
			},
			closepopup() {
				console.log("关闭")
				this.$refs.popup.close()
			},
			goback() {
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
					animationDuration: 200
				})
			},
			onswiperchange(e) {
				// console.log('onswiperchangee', e)
				this.getitemTab(e.detail.current)


			},
			onnodeclick(e) {
				console.log(e);
			},

			onchange(e) {
				console.log('onchange:', e);
			},
			getitemTab(e) {
				// console.log('e', e)
				this.tabIndex = e
				let info = uni.createSelectorQuery().in(this);
				info.select(`#ctsbox${e}`).boundingClientRect().exec(res => {
					if (res[0]) {
						console.log("ctsDome", res[0])
						// this.boxwidth = res[0].width
						let firstwidth = res[0].width / 2
						this.boxwidth = firstwidth
						let secondwidth = firstwidth / 2
						this.boxLeft = res[0].left - uni.upx2px(this.bothLeft) + secondwidth
						if (!this.boxnumleft) {

							this.boxnumleft = res[0].left + res[0].width - uni.upx2px(this.bothLeft)
						}

						// console.log("this.boxwidth", this.boxwidth)
					} else {
						console.log("错误")
					}
				})
			}
		}

	}
</script>

<style lang="scss" scoped>
	.home {

		position: relative;


		.recti_popup {
			width: 500rpx;
			// height: 305rpx;
			border-radius: 4rpx;
			background-color: #ffffff;
			display: flex;
			flex-direction: column;
			align-items: center;

			.recti_popup_canvas {
				margin-top: 20rpx;
				width: 300rpx;
				height: 200rpx;
				border: 1rpx solid #cccccc;
			}

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
		}



		.prospect_edit {
			display: flex;
			flex-direction: column;
			align-items: center;

			.second_view_questions {
				margin-top: 12rpx;
				width: 624rpx;
				display: flex;
				flex-direction: column;
				border: 1px #D2D2D2 solid;
				border-radius: 2rpx;

				.view_questions_box {
					padding: 8rpx 16rpx;
					display: flex;
					flex-direction: row;
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


		.home_position_img {
			z-index: 1001;
			position: absolute;
			top: 55rpx;
			right: 77rpx;
			width: 117rpx;
			height: 76rpx;
			pointer-events: none;
		}

		.tab-view {
			display: flex;
			flex: 1;

			.swiper-item {
				display: flex;
				flex: 1;
				flex-direction: column;

				.second_view_add {
					border-top: 1px #D2D2D2 solid;
					background-color: #18BC37;
				}




			}
		}

		.home_tabber {
			z-index: 1001;
			position: fixed;
			background-color: #ffffff;


			.home_tabber_down {
				position: relative;
				background-color: #ffffff;
				border-bottom: 1rpx solid #e5e5e5;

				.tabber_down_img {
					z-index: 1001;
					position: absolute;
					left: 8rpx;
					height: 100%;
					display: flex;
					align-items: center;

					.down_img_size {
						width: 18rpx;
						height: 18rpx;
					}
				}

				.tab-bar {
					flex-direction: row;

					.tabber_down_con {
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: center;

						.down_con_line {
							width: 50rpx;
							position: relative;
							left: 0;
							border-radius: 3rpx;

							.con_line {
								position: absolute;
								top: 10rpx;
								width: 25rpx;
								height: 2rpx;
								background-color: #118ee9;
								transition-property: width, left, background-color;
								transition-duration: 0.3s;
								transition-timing-function: ease-in-out;
							}
						}

						.down_con_box {
							display: flex;
							flex-direction: row;
							align-items: center;

							.con_box_add {
								position: relative;
							}

							.box_add_num {
								position: absolute;
								top: 0;
								width: 10rpx;
								height: 10rpx;
								background-color: #d43030;
								color: #ffffff;
								border-radius: 50%;
								font-size: 7rpx;
								line-height: 7rpx;
								display: flex;
								align-items: center;
								justify-content: center;
							}

							.con_box_text {
								// margin: 0 33rpx;
								font-size: 12rpx;
								line-height: 12rpx;
								color: #909090;
							}

							.con_active_color {
								color: #118ee9;
							}
						}
					}
				}
			}
		}
	}
</style>
