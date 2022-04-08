

##完美解决uni.upx2px()方法翻转屏幕没有重置
[](http://www.lucklnk.com/godaddy/details/aid/756937088)
可知源码
有第二个参数！传入第二个参数可解决
let allleft = uni.upx2px(33, this.$store.state.phoneInfo.playerWidth)

## 华为平板 
开发者选项-日志记录器缓冲区大小需要设置为最大16/m
[](https://blog.csdn.net/qq_41891425/article/details/107352935)
QuickShortcutMaker可能有点用
## 苹果推送证书和正常证书要两个

## 使用本地地址的时候要看看有没有连wifi在同一ip下

## echarts for app的实例
##大坑 borderRadius属性 从 v5.0.0 开始支持 ！！！
现在用的是5.2.2
## 引入 echarts.min.js
<!-- #ifdef APP-PLUS || H5  -->
		<view id="container"></view>
		<!-- #endif -->
		<!-- #ifndef APP-PLUS || H5 -->
		<view>非 APP、H5 环境不支持</view>
		<!-- #endif -->
## 创建图表
<code>
// 创建 html5 canvas DOM
			const canvas = document.createElement('canvas')
			// id 不可重复
			canvas.id = 'f2'
			canvas.width = uni.upx2px(750)
			canvas.height = uni.upx2px(750)
			container.appendChild(canvas)
			this.canvas = canvas;
			<!-- #endif -->
</code>

## over