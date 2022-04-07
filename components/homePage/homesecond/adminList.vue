<template>
	<view class="home_second_view">




		<view class="second_view_box">
			<myCol>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">事项序列</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text">事项序列</text>
				</myRow>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">事项序列</text>
				</myRow>
				<myRow widthPercentage='3'>
					<text class="public_text">事项序列</text>
				</myRow>
			</myCol>
			<myCol>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">事项序列</text>
				</myRow>
				<myRow widthPercentage='8'>
					<text class="public_text">无锡海斯凯尔医学技术有限公司办公室精修项目，该项目设计单位江苏协优工程设计有限公司未按照消防技术标准强
						制性要求进行消防设计。</text>
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


		<view class="second_view_tabber">

			<text @click="getItem(indt)" :class="[getItemnum==indt?'base_active':'']" class="view_tabber_basc"
				v-for="(itt,indt) in tabberList" :key="indt">{{itt.title}} </text>
		</view>

		<view class="second_view_box">

			<myCol>
				<myRow background="#f0f0f0" widthPercentage='2'>
					<text class="public_text">事项序列</text>
				</myRow>
				<myRow widthPercentage='8'>
					<text class="public_text">无锡海斯凯尔医学技术有限公司办公室精修项目，该项目设计单位江苏协优工程设计有限公司未按照消防技术标准强
						制性要求进行消防设计。</text>
				</myRow>
			</myCol>


			<myCol>
				<myRow>23</myRow>
				<myRow>3456</myRow>

			</myCol>

		</view>



	</view>
</template>

<script>
	import myCol from "@/components/public/myRow/myCol.vue"
	import myRow from "@/components/public/myRow/myRow.vue"
	export default {
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

			myRow,
			myCol

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
