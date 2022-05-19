<template>
	<view class="canvas-box">
		<canvas :style="{width: canvasWidth, height: canvasHeight}" :canvas-id="cid" :id="cid" @touchstart="touchstart"
			@touchmove="touchmove" @canvasIdErrorCallback="canvasIdErrorCallback"></canvas>
	</view>
</template>

<script>
	export default {
		props: {
			cid: {
				type: String,
				default: `cid-${new Date().getTime()}`
			},
			lineWidth: {
				type: Number,
				default: 2
			},
			lineColor: {
				type: String,
				default: '#000000'
			},
			// 画板背景
			canvasBg: {
				type: String,
				default: '#FFFFFF'
			},
			canvasWidth: {
				type: String,
				default: '100%'
			},
			canvasHeight: {
				type: String,
				default: '250px'
			}
		},
		data() {
			return {
				context: null,
				lineData: [],
				lineIndex: null
			}
		},
		mounted() {
			this.context = uni.createCanvasContext(this.cid, this);
			this.resetCanvas();
			this.context.setLineWidth(this.lineWidth)
			this.context.setStrokeStyle(this.lineColor)
			this.canvasContext = this.context;
		},
		methods: {
			// 重置画板
			resetCanvas() {
				// 画板背景颜色（填充一个矩形充当画布背景）
				this.context.setFillStyle(this.canvasBg)
				this.context.fillRect(0, 0, 999999, 999999)
				this.context.draw(false);
			},
			// 触摸开始
			touchstart(e) {
				this.lineIndex == null ? this.lineIndex = 0 : this.lineIndex += 1;
				this.lineData[this.lineIndex] = [e.touches[0]];
			},
			// 触摸后移动
			touchmove(e) {
				let upLineData = this.lineData[this.lineIndex][this.lineData[this.lineIndex].length - 1];
				this.context.moveTo(upLineData.x, upLineData.y);
				this.context.lineTo(e.touches[0].x, e.touches[0].y);
				this.context.stroke();
				this.context.draw(true)
				this.lineData[this.lineIndex].push(e.touches[0])
				this.$emit("touchmove222") //判断是否动笔
			},
			canvasIdErrorCallback: function(e) {
				console.error(e.detail.errMsg)
			},
			// 回撤(去除最后一笔后重新画)
			retracement() {
				if (this.lineData.length == 0) return;
				this.lineIndex -= 1;
				this.lineData.pop();
				this.resetCanvas();
				this.lineData.forEach(lineDataArr => {
					lineDataArr.forEach(obj => this.context.lineTo(obj.x, obj.y))
					this.context.stroke();
					this.context.draw(true)
				})
			},
			clear() {
				this.lineData = [];
				this.lineIndex = null;
				this.resetCanvas()
			},
			transformUint8ArrayToBase64(array) {
				var binary = "";
				for (var len = array.byteLength, i = 0; i < len; i++) {
					binary += String.fromCharCode(array[i]);
				}
				return window.btoa(binary).replace(/=/g, "");
			},

			save(callback) {
				uni.canvasToTempFilePath({
					canvasId: this.cid,
					success: function(res) {
						callback(res)
					},
				}, this)
				// uni.canvasToTempFilePath({

				// 	canvasId: this.cid,
				// 	success: function(res) {
				// 		// 在H5平台下，tempFilePath 为 base64
				// 		console.log(res)
				// 	}
				// },this)

			},
		}
	}
</script>

<style>
</style>
