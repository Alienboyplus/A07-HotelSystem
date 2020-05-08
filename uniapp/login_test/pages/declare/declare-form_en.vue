<template>
	<view>
		<uni-nav-bar color="#000000" background-color="#ffffff" :status-bar="true" left-icon="arrowleft" left-text="back" title="Information Declaration" @clickLeft="back" />
		<uni-section title="*If you forget your health QR code, you can jump to the bottom of the page to view" type="line"></uni-section>
		<view v-for="(wj,i) in wenjuanList" :key="i">
			<wenjuan class="test" :type="wj.type" :value="wj.value" :maxSelect="wj.maxSelect" :title="wj.title" :subTitle="wj.subTitle" :defaultValue="wj.defaultValue" @change="change($event,wj.id,wj.name)" @send="sendCode($event,wj.id,wj.name)"></wenjuan>
		</view>
		<button type="primary" @click="subbmit()">I guarantee the above information is true, confirm the submission</button>
		<button type="default" @click="jumpToWechat()">View health QR code</button>
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
						title:"1. Enter name information",
						subTitle:"",
						maxSelect:10,
						defaultValue:"please enter your name"
					},
					{
						id:"2",
						name:"info-phone",
						type:"input",
						title:"2. Enter phone number information",
						subTitle:"",
						maxSelect:10,
						defaultValue:"Please enter your mobile phone number"
					},
					{
						id:"3",
						name:"info-healthQrcode",
						type:"select",
						title:"3. Health QR code information (mainly Tencent health QR code)",
						subTitle:"",
						value:[
							"Green code",
							"Yellow code",
							"Red code",
						],
						defaultValue:""
					},
					{
						id:"4",
						name:"info-healthCare",
						type:"select",
						title:"4. My physical condition",
						subTitle:"",
						value:[
							"health",
							"Confirmed New Coronary Pneumonia",
							"Suspected case of new coronary pneumonia",
							"temperature> 37.2 ℃",
							"Other symptoms",
						],
						defaultValue:""
					},
					{
						id:"5",
						name:"info-healthTravel",
						type:"select",
						title:"5. Have you been to Hubei or abroad within 14 days",
						subTitle:"",
						value:[
							"Yes",
							"No",
						],
						defaultValue:""
					},
					{
						id:"6",
						name:"info-healthTouch",
						type:"select",
						title:"6. Have you contacted people in Hubei or abroad within 14 days",
						subTitle:"",
						value:[
							"Yes",
							"No",
						],
						defaultValue:""
					},
					{
						id:"7",
						name:"info-healthOtherTouch",
						type:"select",
						title:"7. Have members of the common life been to Hubei or abroad within 14 days",
						subTitle:"",
						value:[
							"Yes",
							"No",
						],
						defaultValue:""
					},
					{
						id:"8",
						name:"info-healthCareOther",
						type:"select",
						title:"8. Health status of members living together",
						subTitle:"",
						value:[
							"health",
							"Confirmed New Coronary Pneumonia",
							"Suspected case of new coronary pneumonia"
						],
						defaultValue:""
					},

				]
			}
		},
		methods: {
			back(){
				uni.navigateTo({
					url:"declare-incomplete_en"
				})
			},
			subbmit(){
				uni.showModal({
					title:"Declaration confirmation!",
					content:"If the above information is not true, the user will be personally responsible!",
					success: (res) => {
						if(res.confirm){
							console.log("positive")
							uni.navigateTo({
								url:"declare-safecomplete_en"
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
