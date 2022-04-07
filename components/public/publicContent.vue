<template>
	<view class="public_content"
		:style="{ top: $store.state.phoneInfo.BarHeight+'px',height:$store.state.phoneInfo.publicCon+'px',width:$store.state.phoneInfo.playerWidth+'px' }">
		<scroll-view @scrolltolower="scrolltolower"
			:style="{height:$store.state.phoneInfo.publicCon+'px',backgroundColor:backcolor}" scroll-y="true"
			class="scroll-Y">
			<slot></slot>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			backcolor: {
				type: String,
				default: '#F7F6F7'
			}
		},
		methods: {
			scrolltolower(e) {
				this.$emit("scrolltolower")
				// console.log("scrolltolower", e)
			}
		}
	}
</script>

<style lang="scss">
	.public_content {
		position: fixed;
		background-color: #F7F6F7;
	}
</style>
