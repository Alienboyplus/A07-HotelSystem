<template>
	<view>
		<uni-list>
			<uni-list-item :show-arrow="false">
				<textarea v-model="remarks" auto-height placeholder="可以留下相关的备注"/>
			</uni-list-item>
		</uni-list>
		<view style="margin-top:38upx;">
			<button type="primary" @tap="upload">确认预约</button>
		</view>
	</view>
</template>

<script>
	import uniSection from '@/components/uni-section/uni-section.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniSection,
			uniList,
			uniListItem,
			uniNavBar
		},
		data() {
			return {
				remarks:''
			}
		},
		methods: {
			upload(){
				uni.request({
					url:"http://127.0.0.1:8000/translate/",
					data:{
						input_text:this.remarks
					},
					success: (res) => {
						console.log(res.data)
					},
					fail: (res) => {
						console.log(res.data)
					},
					method:'POST'
				})
			}
		}
	}
</script>

<style>

</style>
