export default {

	// 详细时间转换
	datialTime(e) {
		let old = new Date(e)

		// 获取old具体时间
		let d = old.getTime()
		let h = old.getHours()
		let m = old.getMinutes()
		var s = old.getSeconds();
		let Y = old.getFullYear()
		let M = old.getMonth() + 1
		let D = old.getDate()
		// 处理时间
		if (M < 10) {
			M = '0' + M
		}
		if (D < 10) {
			D = '0' + D
		}
		if (h < 10) {
			h = '0' + h
		}
		if (m < 10) {
			m = '0' + m
		}
		return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s
	},
}
