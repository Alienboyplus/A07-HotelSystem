<template>
	<view>
		<uni-nav-bar color="#000000" background-color="#ffffff" :status-bar="true" left-icon="arrowleft" left-text="返回" title="餐券" @clickLeft="back" />
		<view class="content" >
			<view class="top"></view>
			<view class="banner">
				<dl>
					<dt><image src="../../static/img/icon.png" mode=""></image></dt>
					<dd>我的餐券</dd>
				</dl>
				<view class="canvas">
					<canvas canvas-id="qrcode" style="width: 215px; height: 215px;" />
				</view>
				<view class="tgtit">使用日期：<text class="tugurl">2020.3.7 - 2020.3.8</text></view>
				<view class="sharbuttn">
					<view class="btn" @click="save">保存二维码</view>
		<!-- 			<view class="btn" @click="sharurl">复制推广链接</view> -->
				</view>
				
				<!-- <button class="btn" @click="share">分享</button> -->
				<view class="shartitle"><view>注意事项</view></view>
				<view class="sharapk" @click="share">
					<!-- <view><image src="../../static/img/weact.png"></image></view>
					<view><image src="../../static/img/shar.png"></image></view>
					<view><image src="../../static/img/qq.png"></image></view> -->
				</view>
				
				<view class="bottom">
					<ul>
						<li>1、请在用餐时于前台出示此二维码</li>
						<li>2、请保管好该二维码</li>
						<li>3、最终解释权归本酒店所有</li>
					</ul>
				</view>
			</view>
			
			</view>
	</view>
	
</template>

<script>
	import uQRCode from '@/common/uqrcode.js'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniNavBar,
		},
		data(){
			return {
				// providerList:[],				
				// sourceLink: 'http://yunzhujiao.cn/bind_pub/index.html',		
				// type:0,
				qrcodeText: 'example text message.',
				qrcodeSize: 215,
				qrcodeSrc: '',
				phoneData: '15989584526'
				
			}
		},
		onLoad() {
			this.initialize();
			this.version = plus.runtime.version;
			uni.getProvider({
				service: 'share',
				success: (e) => {
					let data = [];
					for (let i = 0; i < e.provider.length; i++) {
						switch (e.provider[i]) {
							case 'weixin':
								data.push({
									name: '分享到微信好友',
									id: 'weixin'
								})
								data.push({
									name: '分享到微信朋友圈',
									id: 'weixin',
									type: 'WXSenceTimeline'
								})
								break;
							case 'qq':
								data.push({
									name: '分享到QQ',
									id: 'qq'
								})
								break;
							default:
								break;
						}
					}
					this.providerList = data;
				},
				fail: (e) => {
					console.log('获取登录通道失败'+ JSON.stringify(e));
				}
			});

		},
		methods:{
			back() {
				uni.navigateTo({
					url:'infor'
				})
			},
			initialize() {
				uni.request({
					//url:'http://127.0.0.1:8000/do_qrcode/',
					url:'http://39.106.209.123:8000/do_qrcode/',
					data:{
						phoneNumber:this.phoneData,
					},
					/*
					这里其实应该传一个用户登录的信息
					到数据库里去找对应的信息
					但是我暂时没研究清楚该怎么写，就先写死了电话QAQ
					*/
					head:{
						'content-type': 'application/x-www-form-urlencoded'
					},
					method:'POST',
					success: (res) => {
						console.log(res.data);
						this.qrcodeText = res.data.text;
						this.make();
					},
					fail: () => {
						console.log(res.data);
						uni.showToast({
							icon:'none',
							duration:3000,
							title:'请检查网络链接！'
						})
					}
				});
			},
			make() {
				uQRCode.make({
					canvasId: 'qrcode',
					text: this.qrcodeText,
					size: 215,
					margin: 10,
					success: res => {
						console.log(res)
						this.qrcodeSrc = res
					}
				})
			},
			sharurl(){
				uni.setClipboardData({
					data: 'http://sishuquan.com?id=3228969',
					success: function () {
						console.log('success');
						uni.showModal({
							title: '复制成功',
							content: '内容已复制到粘贴板，可前往其他应用粘贴查看。', 
							showCancel:false,
							success: function(res) {
								if (res.confirm) {											 
									//console.log('用户点击确定');
								} else if (res.cancel) {
									//console.log('用户点击取消');
								}
							}
						});
					}
				});
			},
			//保存图片到相册
			save(){
				uni.showActionSheet({
					itemList:['保存图片到相册'],
					success: () => {
						plus.gallery.save(this.qrcodeSrc, function() {
							uni.showToast({
								title:'保存成功',
								icon:'none'
							})
						}, function() {
							uni.showToast({
								title:'保存失败，请重试！',
								icon:'none'
							})
						});
					}
				})
			},
			share(e) {
				if (this.providerList.length === 0) {
					uni.showModal({
						title: '当前环境无分享渠道!',
						showCancel: false
					})
					return;
				}
				let itemList = this.providerList.map(function (value) {
					return value.name
				})
				 
				console.log(itemList)
				
				uni.showActionSheet({
					itemList: itemList,
					success: (res) => {
						console.log(this.providerList[res.tapIndex].id)
						if(this.providerList[res.tapIndex].id=='qq'){
							this.type=1
						}else{
							this.type=0
						}
						 uni.share({
						 	provider: this.providerList[res.tapIndex].id,
						 	scene: this.providerList[res.tapIndex].type && this.providerList[res.tapIndex].type === 'WXSenceTimeline' ? 'WXSenceTimeline' : "WXSceneSession",
						 	type: this.type,
						 	title:'耘助教',
						 	summary: '耘助教是一个在线教育应用平台',
						 	imageUrl:'http://pds.jyt123.com/wxtest/logo.png',
						 	href:"https://m3w.cn/uniapp",
						 	success: (res) => {
						 		console.log("success:" + JSON.stringify(res));
						 	},
						 	fail: (e) => {
						 		uni.showModal({
						 			content: e.errMsg,
						 			showCancel:false
						 		})
						 	}
						 });
					}
				})
			},
			openLink() {
				plus.runtime.openWeb(this.sourceLink)
			},
		}
	}
	
	
</script>

<style>
	.tugurl{
		color: #999;
	}
	.sharbuttn{
		display: flex;
		justify-content: center;
		padding-top: 0;
	}
	.shartitle{
		    width: 80%;
			text-align: center;
			margin-left: 10%;
			border-bottom: 1px solid #dddddd;
			position: relative;
			height: 60upx;
	}
	.tgtit{
		text-align: center;
		padding-top: 20upx;
	}
	.shartitle view{
		    height: 50upx;
			line-height: 50upx;
			font-size: 28upx;
			color: #999;
			width: 120upx;
			margin: 32upx auto;
			position: absolute;
			background: #fff;
			left: 50%;
			margin-left: -60upx;
	}
	.sharapk{
	 display: flex;
	 justify-content: center;
	 margin: 20upx auto
	}
	.sharapk view{
		margin: 40upx;
	}
	.sharapk view image{
		height: 80upx;
		width: 80upx;
	}
	.content{
		width: 100%;
		background-color: #ffffff;
	}
	.top{
		width: 100%;
		height:95upx;
		background: url(~@/static/img/banner2.png) no-repeat ;
		background-size:100% ;
		background-position:center center;
	}
	.banner{
		width: 100% ;
		background-color: #FFFFFF;
		border-radius: 60upx 60upx 0 0;
		margin-top: -60upx;
	}
	.banner dl{
		margin-top: -30upx;
	}
	.banner dl dt{
		text-align: center;
		
	}
	.banner dt{
		/* margin-top: -50upx; */
	}
	.banner dl dt image{
		width: 160upx;
		height: 160upx;
		border-radius:50% ;
	}
	.banner dl dd{
		text-align: center;
	}
/* 	.img{
		width: 300upx;
		height: 300upx;
		background-color: red;
		margin: 0 auto;
		margin-top: 60upx;
	} */
	.img image{
		width: 100%;
		height: 100%;
	}
	.btn{
		width: 260upx;
		height: 60upx;
		line-height: 60upx;
		margin: 0 auto;
		margin-top: 60upx;
		border-radius: 40upx;
		border: 0;
		font-size: 26upx;
		outline: 0;
		background: #33b17b;
		color: #FFFFFF;
		text-align: center;
	}
	.bottom{
		width: 100%;
		height: 400upx;
	/* 	background: url(../../static/img/beij.png) no-repeat; */
		background-position:left bottom;/* 设置背景图片位置 */
		background-size: 20%;
		bottom: 0;
	}
	.bottom ul{
		padding-left: 40upx;
		box-sizing: border-box;
		padding-top: 40upx;
	}
	.bottom ul li{
		width: 100%;
		height: 60upx;
	}
	.canvas {
		margin-top: 50rpx;
		text-align: center;
	}
	canvas{
		display: block;
		margin: 0 auto;
	}
</style>
