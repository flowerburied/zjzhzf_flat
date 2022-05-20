<template>
	<view class="half_box_item" :style="{width:`${widthPercentage*10}%`,
	 background:`${background}`
	 }">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			widthPercentage: {
				type: String,
				default: '5'
			},
			background: {
				type: String,
				default: '#ffffff'
			}
		}
	}
</script>

<style lang="scss">
	.half_box_item {

		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 1px #D2D2D2 solid;
		border-right: 1px #D2D2D2 solid;
	}
</style>
