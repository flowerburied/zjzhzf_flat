<template>
	<view class="second_view_box">
		<myCol>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">摘要</text>
			</myRow>
			<myRow widthPercentage='8'>
				<text class="public_text"> {{ model.filingSummary }}</text>
			</myRow>

		</myCol>
		<myCol>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">编号</text>
			</myRow>
			<myRow widthPercentage='8'>
				<text class="public_text">
					{{`${model.hearNumberType?'锡新建立字':''} ${model.hearYear?model.hearYear:''}年 第${ model.hearNumber?model.hearNumber:''} 号`}}</text>
			</myRow>
		</myCol>
		<myCol>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">办案人</text>
			</myRow>
			<myRow widthPercentage='8'>
				<uni-data-checkbox disabled multiple v-model="model.hearHandler" :localdata="checkedList">
				</uni-data-checkbox>
			</myRow>
		</myCol>

		<myCol>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">自由裁量权</text>
			</myRow>
			<myRow widthPercentage='3'>
				<text class="public_text"> {{ model.hearDiscretionary }}</text>
			</myRow>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">案件调查报告</text>
			</myRow>
			<myRow widthPercentage='3'>
				<text class="public_text"> {{ model.hearContent }}</text>
			</myRow>
		</myCol>
		<myCol>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">案件事实及证据</text>
			</myRow>
			<myRow widthPercentage='3'>
				<text class="public_text"> {{ model.hearEvidence }}</text>
			</myRow>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">案件类型</text>
			</myRow>
			<myRow widthPercentage='3'>
				<text class="public_text"> {{ model.hearType }}</text>
			</myRow>
		</myCol>
		<!-- 法制审核意见 -->
		<myCol>
			<myRow background="#f0f0f0">
				<text class="public_text">审核内容</text>
			</myRow>
			<myRow background="#f0f0f0">
				<text class="public_text">审核意见</text>
			</myRow>
			<myRow background="#f0f0f0">
				<text class="public_text">具体建议</text>
			</myRow>
		</myCol>
		<myCol>
			<myRow>
				<text class="public_text">是否属于重大行政执法决定</text>
			</myRow>
			<myRow>
				<text class="public_text">{{model.hearExamine0==0?'否':model.hearExamine8==1?'是':''}}</text>
			</myRow>
			<myRow>
				<text class="public_text">{{model.hearExamine0Proposal}}</text>
			</myRow>
		</myCol>
		<myCol>
			<myRow>
				<text class="public_text">行政执法机关主体是否合法</text>
			</myRow>
			<myRow>
				<text class="public_text">{{model.hearExamine1==0?'否':model.hearExamine8==1?'是':''}}</text>
			</myRow>
			<myRow>
				<text class="public_text">{{model.hearExamine1Prop}}</text>
			</myRow>
		</myCol>
		<myCol>
			<myRow>
				<text class="public_text">行政执法人员是否具备执法资格</text>
			</myRow>
			<myRow>
				<text class="public_text">{{model.hearExamine2==0?'否':model.hearExamine8==1?'是':''}}</text>
			</myRow>
			<myRow>
				<text class="public_text">{{model.hearExamine2Prop}}</text>
			</myRow>
		</myCol>
		<myCol>
			<myRow>
				<text class="public_text">适用法律、法规、规章是否准确</text>
			</myRow>
			<myRow>
				<text class="public_text">{{model.hearExamine3==0?'否':model.hearExamine8==1?'是':''}}</text>
			</myRow>
			<myRow>
				<text class="public_text">{{model.hearExamine3Prop}}</text>
			</myRow>
		</myCol>
		<myCol>
			<myRow>
				<text class="public_text">执行裁量基准是否适当</text>
			</myRow>
			<myRow>
				<text class="public_text">{{model.hearExamine4==0?'否':model.hearExamine8==1?'是':''}}</text>
			</myRow>
			<myRow>
				<text class="public_text">{{model.hearExamine4Prop}}</text>
			</myRow>
		</myCol>
		<myCol>
			<myRow>
				<text class="public_text">程序是否合法</text>
			</myRow>
			<myRow>
				<text class="public_text">{{model.hearExamine5==0?'否':model.hearExamine8==1?'是':''}}</text>
			</myRow>
			<myRow>
				<text class="public_text">{{model.hearExamine5Prop}}</text>
			</myRow>
		</myCol>
		<myCol>
			<myRow>
				<text class="public_text">是否有超越本机关职权范围或滥用职权情形</text>
			</myRow>
			<myRow>
				<text class="public_text">{{model.hearExamine6==0?'否':model.hearExamine8==1?'是':''}}</text>
			</myRow>
			<myRow>
				<text class="public_text">{{model.hearExamine6Prop}}</text>
			</myRow>
		</myCol>
		<myCol>
			<myRow>
				<text class="public_text">行政执法文书是否规范、齐备</text>
			</myRow>
			<myRow>
				<text class="public_text">{{model.hearExamine7==0?'否':model.hearExamine8==1?'是':''}}</text>
			</myRow>
			<myRow>
				<text class="public_text">{{model.hearExamine7Prop}}</text>
			</myRow>
		</myCol>

		<myCol>
			<myRow>
				<text class="public_text">违法行为是否涉嫌犯罪需要移送司法机关</text>
			</myRow>
			<myRow>
				<text class="public_text">{{model.hearExamine8==0?'否':model.hearExamine8==1?'是':''}}</text>
			</myRow>
			<myRow>
				<text class="public_text">{{model.hearExamine8Prop}}</text>
			</myRow>
		</myCol>
		<myCol>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">法制审核人意见</text>
			</myRow>
			<myRow widthPercentage='8'>
				<text class="public_text">{{model.hearLegalReviewer}}</text>
			</myRow>
		</myCol>
		<myCol>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">法制审核机构负责人意见</text>
			</myRow>
			<myRow widthPercentage='8'>
				<text class="public_text">{{model.hearLegalInstitution}}</text>
			</myRow>
		</myCol>


	</view>
</template>

<script>
	import myCol from "@/components/public/myRow/myCol.vue"
	import myRow from "@/components/public/myRow/myRow.vue"
	export default {
		props: {
			model: {
				type: Object
			},
			checkedList: {
				type: Array
			}
		},
		data() {
			return {

			}
		},
		methods: {
			change(e) {
				console.log('e:', e);
			}
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
