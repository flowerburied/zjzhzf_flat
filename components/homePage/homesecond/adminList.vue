<template>
	<view class="home_second_view">
		<view class="second_view_box">
			<myCol>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">事项序列</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text">{{model.itemNo?model.itemNo:''}}</text>
				</myRow>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">事项类型</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text">{{model.itemType}}</text>
				</myRow>
			</myCol>
			<myCol>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">当事人类型</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text"> {{ model.partyType == "1" ? "单位" : "个人" }}</text>
				</myRow>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">名称</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text"> {{ model.companyName }}</text>
				</myRow>
			</myCol>
			<myCol>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">案件所涉项目名称</text>
				</myRow>
				<myRow widthPercentage='8'>
					<text class="public_text"> {{ model.projectName }}</text>
				</myRow>
			</myCol>
			<myCol>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">案由</text>
				</myRow>
				<myRow widthPercentage='8'>
					<text class="public_text"> {{ model.caseDesc }}</text>
				</myRow>
			</myCol>
			<myCol>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">经办单位</text>
				</myRow>
				<myRow widthPercentage='8'>
					<text class="public_text">新吴区住房和城乡建设局</text>
				</myRow>
			</myCol>
			<myCol>

				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">陈述申辩材料状态</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text">{{model.sbcl}}</text>
				</myRow>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">是否疑难案件</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text">{{model.ynaj}}</text>
				</myRow>
			</myCol>

			<!-- 			<myCol>
				<myRow background="#f0f0f0" widthPercentage='2'>23</myRow>
				<myRow background="#f0f0f0" widthPercentage='3'>3456</myRow>
				<myRow background="#f0f0f0" widthPercentage='5'>23</myRow>

			</myCol>
			<myCol>
				<myRow>23</myRow>
				<myRow>3456</myRow>

			</myCol> -->

		</view>


		<view class="second_view_tabber">

			<text @click="getItem(indt)" :class="[getItemnum==indt?'base_active':'']" class="view_tabber_basc"
				v-for="(itt,indt) in tabberList" :key="indt">{{itt.title}} </text>
		</view>

		<essentialInfo :model="model" v-if="getItemnum==0"></essentialInfo>
		<Acceptance :checkedList="checkedList" :model="model" v-if="getItemnum==1"></Acceptance>
		<FileCase :checkedList="checkedList" :model="model" v-if="getItemnum==2"></FileCase>

		<HearCase :checkedList="checkedList" :model="model" v-if="getItemnum==3"></HearCase>

	</view>
</template>

<script>
	import myCol from "@/components/public/myRow/myCol.vue"
	import myRow from "@/components/public/myRow/myRow.vue"
	import essentialInfo from './tabber/essentialInfo.vue'
	import FileCase from './tabber/FileCase.vue'
	import HearCase from './tabber/HearCase.vue'
	import Acceptance from './tabber/Acceptance.vue'
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
				tabberList: [{
						title: "基本信息"
					},
					{
						title: "受理"
					},
					{
						title: "立案"
					},
					{
						title: "审理"
					},


				],
				getItemnum: 0
			}
		},
		methods: {
			getItem(e) {
				this.getItemnum = e
			}
		},
		components: {
			essentialInfo,
			myRow,
			myCol,
			FileCase,
			HearCase,
			Acceptance

		},
	}
</script>

<style lang="scss" scoped>
	.home_second_view {
		display: flex;
		flex-direction: column;
		// justify-content: center;
		align-items: center;
		// background-color: #FFFFFF;



		.second_view_tabber {
			margin-top: 12rpx;
			margin-left: 8rpx;
			width: 100%;
			display: flex;
			flex-direction: row;

			.view_tabber_basc {
				margin-right: 24rpx;
				line-height: 150%;
				font-size: 12rpx;
				color: #707070;
			}

			.base_active {
				color: #118ee9;
				text-decoration: underline;
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

		}


	}
</style>
