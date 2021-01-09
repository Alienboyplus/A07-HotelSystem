<template>
	<view class="content">
		<uni-nav-bar color="#000000" background-color="#ffffff" :status-bar="true" left-icon="arrowleft" left-text="返回" title="我的申报" @clickLeft="back" />
		<view class="icon">
			<icon :type="value" size="126"/>
		</view>
		<view class="text">
			<text>{{text1}}</text>
		</view>
		<view class="button">
			<button type="primary" @click="start()">开始申报</button>
			<button type="default" @click="jumpToWechat()">查看健康码</button>
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
				text1:"您尚未在该酒店进行入住申报！",
			}
		},
		onLoad() {
	
		},
		methods: {
			back(){
				uni.navigateTo({
					url:"../infor/first"
				})
			},
			jumpToWechat(){
				plus.runtime.openURL("weixin://");
			},
			start(){
				uni.showModal({
					title:"温馨提醒",
					content:"申报过程需填写健康码情况，您可通过【查看健康码】在微信内确认。",
					success: (res) => {
						if(res.confirm){
							console.log("positive")
							uni.navigateTo({
								url:"declare-form"
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
