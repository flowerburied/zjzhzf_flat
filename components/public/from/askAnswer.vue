<template>
	<view class="second_view_questions">
		<uni-easyinput @input="changeInput" v-model="aaList" type="textarea" autoHeight placeholder="请输入内容">
		</uni-easyinput>
		<view class="view_questions_box">
			<button type="primary" @click="addList">添加问答</button>
			<!-- <button type="primary" @click="saveList">保存询问笔录</button> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				aaList: "问:\r\n答:\r\n",

			}
		},
		methods: {
			addList() {
				this.aaList += '问:\r\n答:\r\n'
			},

			changeInput() {
				// console.log("this.aaList", this.aaList)
				this.$emit("change", this.aaList)
			}
		},
		props: {
			value: {
				type: String,
				required: false
			},
		},
		watch: {
			value: {
				handler(val, oldValue) {
					if (val) {
						this.aaList = val
					}
				},
				immediate: true
			}
		},
		model: {
			prop: 'value',
			event: 'change'
		},
	}
</script>

<style lang="scss" scoped>
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
</style>
