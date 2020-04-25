<template>
	<view>
		<view class="content">
			<uni-nav-bar color="#000000" background-color="#ffffff" :status-bar="true" left-icon="arrowleft" left-text="返回" title="我的申报" @clickLeft="back" />
			<view class="icon">
				<icon :type="value" size="126"/>
			</view>
			<view class="text">
				<text>{{text1}}</text>
			</view>
		</view>
		<uni-section title="个人情况" type="line"></uni-section>
		<uni-list> 
			<uni-list-item :show-extra-icon="true" :extra-icon="positive" :show-arrow="false" title="今日体温正常: 36.2℃" />
			<uni-list-item :show-extra-icon="true" :extra-icon="negative" :show-arrow="false" title="尚未完成14天隔离,不能随意离开房间!" />
			<uni-list-item :show-extra-icon="true" :extra-icon="negative" :show-arrow="false" title="请勿于餐厅就餐,工作人员会将三餐送至您的房间!" />
			<uni-list-item :show-extra-icon="true" :extra-icon="negative" :show-arrow="false" title="请勿进入泳池,健身房或者会议室等公共场所!" />
		</uni-list>
		<view class="button">
			<button type="primary" @click="jumpToWechat()">查看我的健康码</button>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		components:{
			uniNavBar,
			uniSection,
			uniList,
			uniListItem,
		},
		data() {
			return {
				value:'success',
				text1:"您已完成入住申报！",
				positive:{
					color: '#4cd964',
					size:30,
					type:'checkmarkempty'
				},
				negative:{
					color: 'red',
					size:30,
					type:'closeempty'
				}
			}
		},
		onLoad() {
			uni.showModal({
				title:"温馨提示",
				content:"请根据该页面信息在酒店内活动",
			})
		},
		methods: {
			jumpToWechat(){
				plus.runtime.openURL("weixin://");
			},
			back(){
				uni.navigateTo({
					url:"../infor/infor"
				})
			},
			
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
