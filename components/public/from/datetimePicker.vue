<template>
	<view class="datatimepick_box" @click="showFun">
		<uni-datetime-picker @maskClick="maskClickFun" :disabled="disabled" rangeSeparator="至" :type="dateType"
			:clear-icon="dateType!='date'" v-model="datetimesingle" @change="timechange" />
		<view class="datatimepick_box_btn" v-if="isShowBtn&&isShowBtn1">
			<button :disabled="disabled" v-if="dateType!='datetimerange' " size="mini" type="default"
				@click.stop="onwtime">此刻</button>
		</view>

	</view>
</template>

<script>
	import myfun from '@/commons/js/timeFun.js'
	export default {
		data() {
			return {
				datetimesingle: '',
				isShowBtn: false,
				isShowPopup: false,
				isShowBtn1: true
			}
		},
		watch: {
			datetimesingle1: {
				handler(val, oldValue) {
					if (val) {
						this.datetimesingle = val;
					}
				},
				//立刻执行handler
				immediate: true,
			},
			datetimesingle: {
				handler(val, oldValue) {
					if (val) {
						this.isShowBtn1 = false;

						setTimeout(() => {
							this.isShowBtn = false
						}, 50);
						console.log("val", val)
					} else {
						this.isShowBtn1 = true;
					}
				},
				//立刻执行handler
				immediate: true,
			},
		},
		model: {
			prop: "datetimesingle1",
			event: "change",
		},
		props: {
			datetimesingle1: {
				type: [String, Array],
				default: "",
			},
			dateType: {
				type: String,
				default: 'date'
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			showFun() {
				this.isShowBtn = !this.isShowBtn
				console.log("点击showFun", this.isShowBtn)
			},
			maskClickFun() {
				console.log("点击")
				this.isShowBtn = false
			},
			onwtime() {
				this.datetimesingle = Date.now()
				const getTime = myfun.datialTime(this.datetimesingle)
				console.log("getTime", getTime)
				this.$emit("change", getTime);
				this.isShowBtn = false
				// console.log("getTime", this.datetimesingle)
			},
			// maskClick(e) {
			// 	console.log('this.datetimesingle', this.datetimesingle)
			// 	console.log('e', e)
			// },
			timechange(e) {
				// console.log('this.datetimesingle', this.datetimesingle)
				this.datetimesingle = e
				// console.log('e', e)
				this.$emit("change", e);
				console.log('this.datetimesingle', this.datetimesingle)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.datatimepick_box {
		display: flex;
		flex-direction: row;
		align-items: center;


		.datatimepick_box_btn {
			position: absolute;
			z-index: 9999;
			// left: 50rpx;
			// top: 30rpx;
			bottom: 30rpx;
			// right: 50rpx;
		}
	}
</style>
