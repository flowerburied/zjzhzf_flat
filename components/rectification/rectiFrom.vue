<template>
	<view class="rectiFrom">
		<view class="second_view_box">
			<myCol v-for="i of 8" :key="i">
				<myRow widthPercentage='1'>23</myRow>
				<myRow widthPercentage='3'>3456</myRow>
				<myRow widthPercentage='3'>23</myRow>
				<myRow widthPercentage='3'>3456</myRow>
				<myRow widthPercentage='2'>23</myRow>
				<myRow widthPercentage='3'>3456</myRow>
				<myRow widthPercentage='3'>23</myRow>

			</myCol>



		</view>
	</view>
</template>

<script>
	import myCol from "@/components/public/myRow/myCol.vue"
	import myRow from "@/components/public/myRow/myRow.vue"

	export default {
		components: {

			myRow,
			myCol

		},
	}
</script>

<style lang="scss">
	.rectiFrom {
		display: flex;
		flex-direction: column;
		// justify-content: center;
		align-items: center;

		.second_view_box {
			margin-top: 8rpx;
			width: 624rpx;
			display: flex;
			flex-wrap: wrap;
			border-left: 1px #D2D2D2 solid;
			border-top: 1px #D2D2D2 solid;

		}
	}
</style>
