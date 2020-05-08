<template>
	<view>
		<view class="content">
			<uni-nav-bar color="#000000" background-color="#ffffff" :status-bar="true" left-icon="arrowleft" left-text="back" title="My declaration" @clickLeft="back" />
			<view class="icon">
				<icon :type="value" size="126"/>
			</view>
			<view class="text">
				<text>{{text1}}</text>
			</view>
		</view>
		<uni-section title="Personal situation" type="line"></uni-section>
		<uni-list> 
			<uni-list-item :show-extra-icon="true" :extra-icon="positive" :show-arrow="false" title="Body temperature is normal today: 36.2℃" />
			<uni-list-item :show-extra-icon="true" :extra-icon="negative" :show-arrow="false" title="The 14-day quarantine has not been completed and you cannot leave the room at will!" />
			<uni-list-item :show-extra-icon="true" :extra-icon="negative" :show-arrow="false" title="Please do not eat in the restaurant, the staff will deliver the three meals to your room!" />
			<uni-list-item :show-extra-icon="true" :extra-icon="negative" :show-arrow="false" title="Do not enter public places such as swimming pools, gyms or meeting rooms!" />
		</uni-list>
		<view class="button">
			<button type="primary" @click="jumpToWechat()">View my health QR code</button>
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
				text1:"You have completed the check-in declaration!",
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
				title:"Tips",
				content:"Please perform activities in the hotel according to the information on this page",
				showCancel:false,
				confirmText:"I AGREE"
			})
		},
		methods: {
			jumpToWechat(){
				plus.runtime.openURL("weixin://");
			},
			back(){
				uni.navigateTo({
					url:"../infor/infor_en"
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
