<template>
	<view>
		<uni-datetime-picker type="date" :clear-icon="false" v-model="datetimesingle" @change="timechange" />
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
					this.resultImg = val;
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
				type: String,
				default: "",
			},
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

<style>
</style>
