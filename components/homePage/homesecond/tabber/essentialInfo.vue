<template>
	<view class="second_view_box">


		<myCol>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">事项序号</text>
			</myRow>
			<myRow widthPercentage='3'>
				<text class="public_text"> {{ model.itemNo ? model.itemNo : "自动生成" }}</text>
			</myRow>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">事项类型</text>
			</myRow>
			<myRow widthPercentage='3'>
				<text class="public_text"> {{ model.itemType ? model.itemType : "案件来源及受理" }}</text>
			</myRow>
		</myCol>
		<myCol>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">受理人</text>
			</myRow>
			<myRow widthPercentage='3'>
				<text class="public_text"> {{ model.receiver }}</text>
			</myRow>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">案件来源</text>
			</myRow>
			<myRow widthPercentage='3'>
				<text class="public_text"> {{ model.sourceCase }}</text>
			</myRow>
		</myCol>
		<myCol>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">受理时间</text>
			</myRow>
			<myRow widthPercentage='3'>
				<text class="public_text"> {{ model.receiverTime }}</text>
			</myRow>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">当事人类型</text>
			</myRow>
			<myRow widthPercentage='3'>
				<text class="public_text"> {{ model.partyType == "1" ? "单位" : "个人" }}</text>
			</myRow>
		</myCol>

		<!-- 单位模块 -->
		<div style="width: 100%;" v-if="model.partyType == 1">
			<myCol>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">名称</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text"> {{ model.companyName }}</text>
				</myRow>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">统一社会信用代码</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text"> {{ model.companySocialCredit }}</text>
				</myRow>
			</myCol>
			<myCol>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">法定代表人</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text"> {{ model.companyRepresentative }}</text>
				</myRow>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">负责人</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text"> {{ model.companyPerson }}</text>
				</myRow>
			</myCol>
			<myCol>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">负责人职务</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text"> {{ model.companyPersonPostion }}</text>
				</myRow>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">住址</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text"> {{ model.companyAddress }}</text>
				</myRow>
			</myCol>
			<myCol>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">联系电话</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text"> {{ model.companyTel }}</text>
				</myRow>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">施工许可证号</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text"> {{ model.companyConstruction }}</text>
				</myRow>
			</myCol>

		</div>
		<!-- 个人模块 -->
		<div style="width: 100%;" v-if="model.partyType == 2">
			<myCol>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">姓名</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text"> {{ model.personalName }}</text>
				</myRow>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">性别</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text"> {{ model.personalSex }}</text>
				</myRow>
			</myCol>
			<myCol>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">身份证</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text"> {{ model.personalCard }}</text>
				</myRow>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">出生年月</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text"> {{ model.personalBirthday }}</text>
				</myRow>
			</myCol>
			<myCol>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">工作单位</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text"> {{ model.personalWork }}</text>
				</myRow>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">职务</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text"> {{ model.personalPost }}</text>
				</myRow>
			</myCol>
			<myCol>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">住所</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text"> {{ model.personalResidence }}</text>
				</myRow>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">联系电话</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text"> {{ model.personalTel }}</text>
				</myRow>
			</myCol>
		</div>
		<myCol>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">案发时间</text>
			</myRow>
			<myRow widthPercentage='3'>
				<text class="public_text"> {{ model.crimeTime }}</text>
			</myRow>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">案发地点</text>
			</myRow>
			<myRow widthPercentage='3'>
				<text class="public_text"> {{ model.crimePlace }}</text>
			</myRow>
		</myCol>
		<myCol>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">案件所涉项目代码</text>
			</myRow>
			<myRow widthPercentage='3'>
				<text class="public_text"> {{ model.projectCase }}</text>
			</myRow>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">案件所涉项目名称</text>
			</myRow>
			<myRow widthPercentage='3'>
				<text class="public_text"> {{ model.projectName }}</text>
			</myRow>
		</myCol>
		<myCol>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">案件来源单位</text>
			</myRow>
			<myRow widthPercentage='3'>
				<text class="public_text"> {{ model.caseSource }}</text>
			</myRow>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">案件来源单位联系电话</text>
			</myRow>
			<myRow widthPercentage='3'>
				<text class="public_text"> {{ model.caseSourceTel }}</text>
			</myRow>
		</myCol>
		<myCol>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">案由</text>
			</myRow>
			<myRow widthPercentage='3'>
				<text class="public_text"> {{ model.caseDesc }}</text>
			</myRow>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">任务类型</text>
			</myRow>
			<myRow widthPercentage='3'>
				<text class="public_text"> {{ model.recordType }}</text>
			</myRow>
		</myCol>
		<myCol>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">事件描述</text>
			</myRow>
			<myRow widthPercentage='3'>
				<text class="public_text"> {{ model.eventDes }}</text>
			</myRow>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">办理人</text>
			</myRow>
			<myRow widthPercentage='3'>
				<text class="public_text"> {{ model.eventHandler }}</text>
			</myRow>
		</myCol>
		<myCol>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">信用扣分类别</text>
			</myRow>
			<myRow widthPercentage='3'>
				<text class="public_text"> {{ model.creditCategory }}</text>
			</myRow>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">处罚类型</text>
			</myRow>
			<myRow widthPercentage='3'>
				<text class="public_text"> {{ model.penaltyType }}</text>
			</myRow>
		</myCol>
		<myCol>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">问题领域</text>
			</myRow>
			<myRow widthPercentage='8'>
				<text class="public_text"> {{ model.problemArea }}</text>
			</myRow>

		</myCol>



		<!-- <myCol>
			<myRow>23</myRow>
			<myRow>3456</myRow>
		</myCol> -->

	</view>
</template>

<script>
	import myCol from "@/components/public/myRow/myCol.vue"
	import myRow from "@/components/public/myRow/myRow.vue"
	export default {
		props: {
			model: {
				type: Object
			}
		},
		data() {
			return {}
		},
		methods: {

		},
		components: {

			myRow,
			myCol

		},
	}
</script>

<style lang="scss">
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

	}
</style>
