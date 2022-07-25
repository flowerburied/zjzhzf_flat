<template>
	<view class="datatimepick_box">
		<uni-datetime-picker :disabled="disabled" rangeSeparator="至" :type="dateType" :clear-icon="false"
			v-model="datetimesingle" @change="timechange" />

		<!-- <button type="default">此刻</button> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datetimesingle: '',
			}
		},
		watch: {
			datetimesingle1: {
				handler(val, oldValue) {
					// if (val) {
					this.datetimesingle = val;
					// }

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
	}
</style>
