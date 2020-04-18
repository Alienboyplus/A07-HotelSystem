<template>
	<view class="content">
		<uni-nav-bar color="#000000" background-color="#ffffff" :status-bar="true" left-icon="arrowleft" left-text="返回" title="人证核验" @clickLeft="back" />
		<uni-section title="基本信息" type="line"></uni-section>
		<uni-list>
			<uni-list-item :show-arrow="false">
				<input class="uni-input" placeholder="请输入姓名" v-model="name"/>
			</uni-list-item>
			<uni-list-item :show-arrow="false">
				<input class="uni-input" type="idcard" placeholder="请输入身份证号码" v-model="idCardNum"/>
			</uni-list-item>
			<uni-list-item :disabled="true" :show-arrow="false" title="手机号码"/>
		</uni-list>
		<uni-section title="上传照片" type="line"></uni-section>
		<uni-list>
			<uni-list-item title="点击拍摄/上传人脸照片" :showArrow="false" @click="uploadPics()">
				<template v-slot:right="">
					<image style="width: 80px;height: 80px;" :src="filePath" mode="widthFix"></image>
				</template>
			</uni-list-item>
		</uni-list>
		<uni-section title="上传身份证照片(正面/背面)" type="line"></uni-section>
		<view class="grace-idcard-items">
			<view class="grace-idcard-uper-btn" @tap="selectImg1">
				<view class="img"><image src="../../static/imgs/camera.png" mode="widthFix" /></view>
				<view class="text">拍摄或选择照片</view>
			</view>
			<view class="grace-idcard-preview">
				<image :src="idCard1"  @tap="previewImg1" mode="widthFix"></image>
			</view>
		</view>
		<view class="grace-idcard-items">
			<view class="grace-idcard-uper-btn" @tap="selectImg2">
				<view class="img"><image src="../../static/imgs/camera.png" mode="widthFix" /></view>
				<view class="text">拍摄或选择照片</view>
			</view>
			<view class="grace-idcard-preview">
				<image :src="idCard2" @tap="previewImg2" mode="widthFix" />
			</view>
		</view>
		<view style="margin-top:38upx;">
			<button type="primary" @tap="upload">上传</button>
		</view>
		
	</view>
</template>

<script>
	import uniSection from '@/components/uni-section/uni-section.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import { pathToBase64, base64ToPath } from '@/js_sdk/gsq-image-tools/image-tools/index.js'
	var _self
	export default {
		components: {
			uniSection,
			uniList,
			uniListItem,
			uniNavBar
		},
		data() {
			return {
				extraIcon1: {
					color: '#007aff',
					size: '22',
					type: 'gear-filled'
				},
				extraIcon2: {
					color: '#4cd964',
					size: '22',
					type: 'image'
				},
				filePath:"../../static/imgs/camera.png",
				idCard1 : '../../static/imgs/idcard1.png',
				idCard2 : '../../static/imgs/idcard2.png',
				idCard1base64 : '',
				idCardNum:'',
				name:'',
				base64:'',
			}	
		},
		onLoad:function(){
			_self = this;
		},
		methods: {
			switchChange(e) {
				uni.showToast({
					title: 'change:' + e.value,
					icon: 'none'
				})
			},
			selectImg1 : function() {
				uni.chooseImage({
					count:1,
					sizeType: ['compressed'], 
					success:function(res){
						_self.idCard1 = res.tempFilePaths[0];
						_self.imgPath = res.tempFilePaths.toString()
						//_self.filePath = res.tempFilePaths[0]
						pathToBase64(_self.imgPath)
						  .then(base64 => {
						    _self.idCard1base64 = base64;
							//console.log(_self.idCard1base64)
						  })
						  .catch(error => {
						    console.error(error)
						  })
					}
				})
			},
			selectImg2 : function() {
				uni.chooseImage({
					count:1,
					sizeType: ['compressed'], 
					success:function(res){
						_self.idCard2 = res.tempFilePaths[0];
						_self.imgPath = res.tempFilePaths.toString()
						//_self.filePath = res.tempFilePaths[0]
						pathToBase64(_self.imgPath)
						  .then(base64 => {
						    _self.idCard2base64 = base64;
							// console.log(_self.idCard2base64)
						  })
						  .catch(error => {
						    console.error(error)
						  })
					}
				})
			},
			previewImg1 : function(){
				uni.previewImage({
					urls:[_self.idCard1]
				});
			},
			previewImg2 : function(){
				uni.previewImage({
					urls:[_self.idCard2]
				});
			},
			uploadPics(){
				var _this=this
			    uni.chooseImage({
			        count: 1, 
			        sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
			        success: function (res) {
						_this.imgPath = res.tempFilePaths.toString()
						_this.filePath = res.tempFilePaths[0]
						pathToBase64(_this.imgPath)
						  .then(base64 => {
						    _this.base64 = base64;
							// console.log(_this.base64)
						  })
						  .catch(error => {
						    console.error(error)
						  })
						
						console.log(_this.imgPath)
			        }
			    });
			},
			upload(){
				
				// ①:前端进行表单填写验证
				
				if(this.name == ""){
					uni.showToast({
						title:"请输入姓名！",
						duration:3000,
						icon:'none'
					});
				}
				else if(this.idCardNum.length != 18){
					uni.showToast({
						title:"身份证信息有误！",
						duration:3000,
						icon:'none'
					});
				}
				else if(this.filePath == "../../static/imgs/camera.png"){
					uni.showToast({
						title:"请先上传人脸照片！",
						duration:3000,
						icon:'none'
					});
				}
				else if(this.idCard1 == '../../static/imgs/idcard1.png'){
					uni.showToast({
						title:"请上传身份证正面照片！",
						duration:3000,
						icon:'none'
					});
				}
				else if(this.idCard2 == '../../static/imgs/idcard2.png'){
					uni.showToast({
						title:"请上传身份证背面照片！",
						duration:3000,
						icon:'none'
					});
				}
				else {
					uni.showLoading({
						title:'正在上传人脸信息...'
					})
					
					uni.request({
						/*服务器端*/
						//url:"http://127.0.0.1:8080/faceAdd",
						url:"http://39.106.209.123:8089/faceAdd",
						header: {
							'content-type': 'application/x-www-form-urlencoded', 
						},
						data:{
							name:this.name,
							file:this.base64,
							groupId:"101"
						},
						method:'POST',
						success: (res) => {
							console.log("success!");
							console.log(res.data);
							uni.hideLoading();
							if(res.data.code == 0){
								
								uni.showLoading({
									title:'正在上传人脸图片...',
								});
								
								uni.uploadFile({
									filePath:this.filePath,
									
									/*本地*/
									//url:"http://127.0.0.1:8000/do_upload/",
									
									/*服务器端*/
									url:"http://39.106.209.123:8000/do_upload/",
									name:'myfile',
									success: (res) => {
										console.log(res.data)
										uni.hideLoading();
										uni.showLoading({
											title:"正在上传身份证信息"
										})
										// 上传正面
										var uploadTask1 = uni.uploadFile({
											url: 'http://39.106.209.123:8000/uploadimage/',
											filePath: _self.idCard1,
											fileType: 'image',
											name: 'img',
											formData:{
												idCardNum:this.idCardNum
											},
											success: function (uploadFileRes) {
												// 上传成功后返回服务器端保存的路径
												console.log(uploadFileRes.data);
												// 上传背面
												var uploadTask2 = uni.uploadFile({
													url: 'http://39.106.209.123:8000/uploadimage/',
													filePath: _self.idCard2,
													fileType: 'image',
													name: 'img',
													formData:{
														idCardNum:this.idCardNum
													},
													success: function (uploadFileRes) {
														// 上传成功后返回服务器端保存的路径
														console.log(uploadFileRes.data);
														// 至此2张照片上传完毕
														uni.hideLoading();
													}
												 });
											}
										 });
										 
										uni.showLoading({
											title:'正在进行人脸比对...'
										})
										 uni.request({
										 	//url:'http://127.0.0.1:8080/faceSearch',
											url:'http://39.106.209.123:8089/faceSearch',
											header: {
												'content-type': 'application/x-www-form-urlencoded', 
											},
											data:{
												file:this.idCard1base64,
												groupId:"101",
											},
											method:'POST',
											success: (res) => {
												if(res.data.code == 0){
													uni.showToast({
														icon:"none",
														title:"验证成功！",
														duration:3000,
													})
												}
												else if(res.data.code == 15){
													uni.showToast({
														icon:"none",
														title:"人脸比对失败！请重新选择图片！",
														duration:3000,
													})
												}
												uni.hideLoading();
												console.log(res.data)
											},
											fail: (res) => {
												console.log(res.data)
												uni.hideLoading();
												uni.showToast({
													icon:"none",
													title:"上传失败！请确保图片大小不要过大！",
													duration:3000,
												})
										
											}
										 })
										
									}
								})
								
								// this.age = res.data.age;
								// this.gender = (res.data.gender == 1 ? "女" : "男");
								// this.liveness = (res.data.liveness == 1 ? "活体" : "非活体");
							}
							else{
								uni.showToast({
									icon:'none',
									title:'未检测出人脸，请重试',
									duration:3000
								});
							}
							
						},
						fail: (res) => {
							uni.hideLoading();
							console.log("fail");
							console.log(res.data)
						}
					})
				}
				
				// ②:进行人脸注册
			},
			back() {
				uni.navigateTo({
					url:'../login/info'
				})
			},
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
	
/* 	.content{
		margin-top: 20upx;
	} */
	
	button {width: 90%;margin-bottom: 20upx;}
</style>