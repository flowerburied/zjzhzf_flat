<template>
	<view class="tree_list">
		<!-- <uni-card :is-shadow="false" is-full> -->
		<scroll-view :show-scrollbar="true" :style="{height:300+'rpx'}" scroll-y="true" class="scroll-Y">
			<ly-tree :props="props" :tree-data="treeData" :ready="ready" node-key="id" @node-expand="handleNodeExpand"
				@node-click="handleNodeClick">
			</ly-tree>
		</scroll-view>
		<!-- </uni-card> -->
	</view>
</template>

<script>
	import LyTree from '@/components/ly-tree/ly-tree.vue'
	export default {
		components: {
			LyTree
		},
		data() {
			return {
				ready: false, // 这里用于自主控制loading加载状态，避免异步正在加载数据的空档显示“暂无数据”
				treeData: [],
				props: function() {
					return {
						// 这里的label就可以使用函数进行自定义的渲染了
						// label(data, node) {
						// 	return '节点' + node.data.personName;
						// },
						label: 'departName', // 指把数据中的‘personName’当做label也就是节点名称
					}
				},
			};
		},
		created() {
			this.getTreeList()
			// 模拟异步请求
		},
		methods: {
			async getTreeList() {
				try {
					this.ready = false
					const res = await this.api.publics.queryTreeList();
					const {
						code,
						message,
						result
					} = res;
					if (code == 0) {

						console.log("queryTreeList", result)
						this.treeData = result
					} else {
						uni.showToast({
							icon: "none",
							title: message,
							duration: 2000
						});
					}
					this.ready = true
				} catch (err) {

					// uni.showToast({
					// 	icon: "none",
					// 	title: "导出失败",
					// 	duration: 2000
					// });
					console.log("err", err);
				}


			},

			// uni-app中emit触发的方法只能接受一个参数，所以会回传一个对象，打印对象即可见到其中的内容
			handleNodeClick(obj) {
				console.log('handleNodeClick', obj);
				this.$emit("queryUserByDepId", obj.data.key)
			},
			handleNodeExpand(obj) {
				// console.log('handleNodeExpand', obj);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.tree_list {
		font-size: 20rpx;

	}
</style>
