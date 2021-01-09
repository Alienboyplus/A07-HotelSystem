<template>
	<view class="content">
		<uni-nav-bar color="#000000" background-color="#ffffff" :status-bar="true" left-icon="arrowleft" left-text="back" title="My declaration" @clickLeft="back" />
		<view class="icon">
			<icon :type="value" size="126"/>
		</view>
		<view class="text">
			<text>{{text1}}</text>
		</view>
		<view class="button">
			<button type="primary" @click="start()">Start to declare</button>
			<button type="default" @click="jumpToWechat()">View health QR code</button>
		</view>
		<view class="info">
			<text>{{text2}}</text>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components:{
			uniNavBar
		},
		data() {
			return {
				value:'info',
				text1:"You have not checked in at this hotel!",
			}
		},
		onLoad() {
	
		},
		methods: {
			back(){
				uni.navigateTo({
					url:"../infor/first_en"
				})
			},
			jumpToWechat(){
				plus.runtime.openURL("weixin://");
			},
			start(){
				uni.showModal({
					title:"Reminder",
					content:"The health QR code needs to be filled in during the application process, you can confirm it in WeChat through [View Health QR Code].",
					success: (res) => {
						if(res.confirm){
							console.log("positive")
							uni.navigateTo({
								url:"declare-form_en"
							})
						}
						else if (res.cancel){
							console.log("negative")
						}
					}
				})
			}
			
		}
	}
</script>

<style>
	.content{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	button{
		width: 80%;
		margin-top: 12rpx;
	}
	
	.button{
		width: 100%;
		position: fixed;
		bottom: 20rpx;
	}
	
	.text{
		margin-top: 60rpx;
	}
	
	.icon{
		margin-top: 40rpx;
	}
</style>
