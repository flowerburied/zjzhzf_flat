

# drawingBoard  手写签名

## 快速使用

```html
<template>
	<drawing-board ref="drawingBoard" canvasWidth="100vw"></drawing-board>
</template>
<script>
import drawingBoard from "@/components/drawingBoard.vue"
    export default {
			components: {
				drawingBoard
			},
    }
</script>
```

## API

### 属性 (Props)

|   属性名        |     类型      |    默认值     |             说明             |
| :------------: | :-----------: | :-----------: | :--------------------------: |
|       cid      |    String     |   cid-时间戳 	 |          canvas id          	|
|   canvasWidth  |    String 		 |     100%      |      canvas 宽度，String     |
|  canvasHeight  |    String		 |     250px     |      canvas 高度，String     |
|    lineWidth   |    Number     |       2       |        线宽，单位 px         |
|    lineColor   |    String     |     #000000   |            线颜色            |
|    canvasBg    |    String     |     #FFFFFF   |            画板背景          |

### this.$refs['xxx'].canvasContext 拿到 uni.createCanvasContext创建的...
### 动态修改线条宽度和颜色不起效果，可以通过this.$refs['xxx'].canvasContext 拿到canvas对象修改，或者自行修改一下本插件

### 方法（function） 通过 this.$refs['xxx'] 调用

|     方法称名    |                     说明                |                    返回值                   |
| :------------: | :-------------------------------------: | :---------------------------------------:  |
|  clear         | 清空画板内容 														 | 无 																 		    |
|  retracement   | 回撤一个笔画 														 | 无 																 		    |
|  save          | 保存画板内容为图片（传一个回调函数） 			 | uni.canvasToTempFilePath -> success -> res	|

画板清空、回撤、保存示例：

```html
<template>
	<drawing-board ref="drawingBoard" canvasWidth="100vw"></drawing-board>
	<button @click="$refs['drawingBoard'].retracement()">回撤</button>
	<button @click="$refs['drawingBoard'].clear()">清空</button>
	<button @click="save">保存</button>
</template>
<script>
    export default {
        methods: {
            save() {
              this.$refs['drawingBoard'].save((res) => {
              	console.log(res)
              })
            }
        }
    }
</script>
```
