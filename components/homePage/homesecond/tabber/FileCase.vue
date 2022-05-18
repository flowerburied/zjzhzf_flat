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
					{{`${model.filingNumberType?'锡新建立字':''} ${model.filingYear}年 第${ model.filingNumber} 号`}}</text>
			</myRow>
		</myCol>
		<myCol>
			<myRow background="#f0f0f0" widthPercentage='2'>
				<text class="public_text">办案人</text>
			</myRow>
			<myRow widthPercentage='8'>
				<uni-data-checkbox disabled multiple v-model="model.filingHandler" :localdata="checkedList">
				</uni-data-checkbox>
				<!-- <text class="public_text"> {{ model.filingHandler }}</text> -->
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
