<template>
	<view class="content">
		<uni-nav-bar color="#000000" background-color="#ffffff" :status-bar="true" left-icon="arrowleft" left-text="返回" title="会议室预约" @clickLeft="back" />
		<uni-section title="基本信息" type="line"></uni-section>
		<uni-list>
			<uni-list-item :show-arrow="false">
				<input class="uni-input" placeholder="请输入预约者姓名" v-model="name"/>
			</uni-list-item>
			<uni-list-item :show-arrow="false">
				<input class="uni-input" type="idcard" placeholder="请输入预约者手机号码" v-model="phoneNum"/>
			</uni-list-item>
		</uni-list>
		<uni-section title="选择预约日期" type="line"></uni-section>
		<uni-list>
			<uni-list-item>
		        <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
		            <view class="uni-input">{{date}}</view>
		        </picker>
			</uni-list-item>
		</uni-list>
		<uni-section title="选择开始时间" type="line"></uni-section>
		<uni-list>
			<uni-list-item>
		        <picker mode="time" :value="start_time" start="09:01" end="21:01" @change="bindStartTimeChange">
		            <view class="uni-input">{{start_time}}</view>
		        </picker>
			</uni-list-item>
		</uni-list>
		<uni-section title="选择结束时间" type="line"></uni-section>
		<uni-list>
			<uni-list-item>
		        <picker mode="time" :value="end_time"  @change="bindEndTimeChange">
		            <view class="uni-input">{{end_time}}</view>
		        </picker>
			</uni-list-item>
		</uni-list>
		<uni-section title="备注" type="line"></uni-section>
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
	        const currentDate = this.getDate({
	            format: true
	        })
			return {
				start_time: '点击选择',
				end_time: '点击选择',
				date: '点击选择',
				remarks:''
			}	
		},
	    computed: {
	        startDate() {
	            return this.getDate('start');
	        },
	        endDate() {
	            return this.getDate('end');
	        }
	    },
		methods: {
	        bindStartTimeChange: function(e) {
	            this.start_time = e.target.value
	        },
			bindEndTimeChange: function(e) {
				this.end_time = e.target.value
			},
	        bindDateChange: function(e) {
	            this.date = e.target.value
	        },
	        getDate(type) {
	            const date = new Date();
	            let year = date.getFullYear();
	            let month = date.getMonth() + 1;
	            let day = date.getDate();
	
	            if (type === 'start') {
	                year = year - 60;
	            } else if (type === 'end') {
	                year = year + 2;
	            }
	            month = month > 9 ? month : '0' + month;;
	            day = day > 9 ? day : '0' + day;
	            return `${year}-${month}-${day}`;
	        },
			upload(){
				uni.showToast({
					duration:3000,
					title:"预约成功！",
					icon:'none'
				})
			}
		}
	}
</script>

<style>
	/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url('~@/static/uni.ttf') format('truetype');
	}

	/* #endif */

	/* #ifndef APP-NVUE */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	view {
		font-size: 14px;
		line-height: inherit;
	}

	.example {
		padding: 0 15px 15px;
	}

	.example-info {
		padding: 15px;
		color: #3b4144;
		background: #ffffff;
	}

	.example-body {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
	}

	/* #endif */
	.example {
		padding: 0 15px;
	}

	.example-info {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 15px;
		color: #3b4144;
		background-color: #ffffff;
		font-size: 14px;
		line-height: 20px;
	}

	.example-info-text {
		font-size: 14px;
		line-height: 20px;
		color: #3b4144;
	}


	.example-body {
		flex-direction: column;
		padding: 15px;
		background-color: #ffffff;
	}

	.word-btn-white {
		font-size: 18px;
		color: #FFFFFF;
	}

	.word-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		height: 48px;
		margin: 15px;
		background-color: #007AFF;
	}

	.word-btn--hover {
		background-color: #4ca2ff;
	}
	
	view{font-size:28upx;}
	.grace-idcard-main{margin:20upx 30upx;}
	.grace-idcard-desc{line-height:2em; background:#FFFFFF; padding:20upx; border-radius:10upx;}
	.grace-idcard-text{line-height:2em; margin-top:30upx;}
	.grace-idcard-items{background:#FFFFFF; padding:30upx 0; display:flex; margin:30upx 0; border-radius:10upx; align-items: flex-start;}
	.grace-idcard-uper-btn{width:276upx; margin:0 60upx; background:#F1F1F1; padding-bottom:10upx; border-radius:10upx; text-align:center;}
	.grace-idcard-uper-btn .img{width:100upx; height:100upx; margin:0 auto; margin-top:30upx;}
	.grace-idcard-uper-btn .img image{width:100upx; height:100upx;}
	.grace-idcard-uper-btn .text{width:100%; margin-top:10upx; text-align:center; line-height:2em;}
	.grace-idcard-preview{width:50%; margin:0 30upx;}
	.grace-idcard-preview image{width:100%;}
	
	.content{
		margin-top: 20upx;
	}
	
	button {width: 90%;margin-bottom: 20upx;}
</style>