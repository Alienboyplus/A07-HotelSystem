<template>
	<view>
		<uni-nav-bar color="#000000" background-color="#ffffff" :status-bar="true" left-icon="arrowleft" left-text="返回" title="信息申报" @clickLeft="back" />
		<uni-section title="*如果忘记了健康码,可以在页底跳转查看" type="line"></uni-section>
		<view v-for="(wj,i) in wenjuanList" :key="i">
			<wenjuan class="test" :type="wj.type" :value="wj.value" :maxSelect="wj.maxSelect" :title="wj.title" :subTitle="wj.subTitle" :defaultValue="wj.defaultValue" @change="change($event,wj.id,wj.name)" @send="sendCode($event,wj.id,wj.name)"></wenjuan>
		</view>
		<button type="primary" @click="subbmit()">我保证以上信息属实，确认提交</button>
		<button type="default" @click="jumpToWechat()">查看健康码</button>
	</view>
</template>

<script>
	import uniSection from '@/components/uni-section/uni-section.vue'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import wenjuan from '@/components/gwh-wenjuan/gwh-wenjuan.vue'
	export default {
		components:{
			wenjuan,
			uniNavBar,
			uniSection,
		},
		data() {
			return {
				wenjuanList:[
					{
						id:"1",
						name:"info-name",
						type:"input",
						title:"1. 输入姓名信息",
						subTitle:"",
						maxSelect:10,
						defaultValue:"请输入您的姓名"
					},
					{
						id:"2",
						name:"info-phone",
						type:"input",
						title:"2. 输入手机号信息",
						subTitle:"",
						maxSelect:10,
						defaultValue:"请输入您的手机号"
					},
					{
						id:"3",
						name:"info-healthQrcode",
						type:"select",
						title:"3. 健康码信息（以腾讯健康码为主）",
						subTitle:"",
						value:[
							"绿码",
							"黄码",
							"红码",
						],
						defaultValue:""
					},
					{
						id:"4",
						name:"info-healthCare",
						type:"select",
						title:"4. 本人身体情况",
						subTitle:"",
						value:[
							"健康",
							"确诊新冠肺炎",
							"新冠肺炎疑似病例",
							"体表温度>37.2℃",
							"其他症状",
						],
						defaultValue:""
					},
					{
						id:"5",
						name:"info-healthTravel",
						type:"select",
						title:"5. 14天内是否到过湖北或者国外",
						subTitle:"",
						value:[
							"是",
							"否",
						],
						defaultValue:""
					},
					{
						id:"6",
						name:"info-healthTouch",
						type:"select",
						title:"6. 14天内是否接触过湖北或者国外的人员",
						subTitle:"",
						value:[
							"是",
							"否",
						],
						defaultValue:""
					},
					{
						id:"7",
						name:"info-healthOtherTouch",
						type:"select",
						title:"7. 共同生活成员14天内是否到过湖北或者国外",
						subTitle:"",
						value:[
							"是",
							"否",
						],
						defaultValue:""
					},
					{
						id:"8",
						name:"info-healthCareOther",
						type:"select",
						title:"8. 共同生活成员的健康情况",
						subTitle:"",
						value:[
							"健康无异常",
							"确认感染新冠肺炎",
							"有新冠肺炎疑似病例"
						],
						defaultValue:""
					},

				]
			}
		},
		methods: {
			back(){
				uni.navigateTo({
					url:"declare-incomplete"
				})
			},
			subbmit(){
				uni.showModal({
					title:"申报确认！",
					content:"以上信息若存在不实情况，将由用户个人负责！",
					success: (res) => {
						if(res.confirm){
							console.log("positive")
							uni.navigateTo({
								url:"declare-safecomplete"
							})
						}
						else if (res.cancel){
							console.log("negative")
						}
					}
				})
			},
			jumpToWechat(){
				plus.runtime.openURL("weixin://");
			},
			
		}
	}
</script>

<style>
	button{
		width: 90%;
		margin-bottom: 10upx;
	}
</style>
