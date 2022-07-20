<template>
	<view class="second_view_questions">
		<uni-easyinput :disabled="disabled" @input="changeInput" v-model="aaList" type="textarea" autoHeight
			placeholder="请输入内容">
		</uni-easyinput>
		<view class="view_questions_box">
			<button :disabled="disabled" type="primary" @click="addList">添加问答</button>
			<!-- <button type="primary" @click="saveList">保存询问笔录</button> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				aaList: "调查（询问）人告知：我们是无锡市住房和城乡建设局的执法人员（出示执法证件），现依法进行调查。依据《中华人民共和国行政处罚法》第四十二条第一款、第五十五条第一款的规定，如执法人员少于两人或执法证件与身份不符，你有权拒绝调查，你是否接受调查？\n被调查（询问）人答：\n问：根据《中华人民共和国行政处罚法》第四十三条第二款的规定，如执法人员与案件有直接利害关系或者有其他关系可能影响公正执法的，你有权申请执法人员回避。你是否申请回避？\n答：\n问：根据《中华人民共和国行政处罚法》五十五条第二款的规定，你应当如实回答询问并协助调查，不得拒绝或者阻挠。如作虚假陈述或拒绝、阻挠调查，将依法追究法律责任。请你配合我们调查询问。以上告知你是否清楚？\n答：\n问：为保障你(单位)的合法权益,便于我们及时告知您依法享有的权利和义务,请问你的单位的名称、法定代表人（负责人）姓名与职务、住所（住址）、企业类型、经营范围、社会信用代码和联系电话吗？\n答：我叫     ，我单位名称叫     ，法定代表人（负责人）姓名与职务是    ；住所（住址）为：     ；单位企业类型为：      ；经营范围是：    ，单位社会信用代码为：      ；联系话：      。\n问：\n答：\n问：请你核对以上笔录，若记录属实，请你签名确认。你若阅读困难，我们可以读给你听。\n答：\n",





			}
		},
		methods: {
			addList() {
				this.aaList += '问:\r\n答:\r\n'
			},

			changeInput(e) {
				// this.aaList = e
				// console.log("this.aaList", e)
				this.$emit("change", this.aaList)
			}
		},
		props: {
			value: {
				type: String,
				required: false
			},
			disabled: {
				type: Boolean,
				default: false
			}
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
