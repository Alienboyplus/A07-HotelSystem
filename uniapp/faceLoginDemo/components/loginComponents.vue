<template>
	<div class="content">
		<div class="text-area">
			<input class="uni-input" focus placeholder="输入名字" v-model="name"/>
		</div>
		<button class="mini-btn" type="primary" size="mini" @click="uploadPics()">读取图片</button>
		<button class="mini-btn" type="primary" size="mini" @click="register">提交注册</button>
		<canvas canvas-id="mycanvas" style="height: 1000rpx;"></canvas>
		<div class="result">
			<label>age:{{this.age}}</label><br/>
			<label>gender:{{this.gender}}</label><br/>
			<label>is_alive:{{this.liveness}}</label>
		</div>
	</div>
</template>

<script>
	import { pathToBase64, base64ToPath } from '@/js_sdk/gsq-image-tools/image-tools/index.js'
	export default {
		data() {
			return {
				base64 :"",
				name:"",
				filePath:"",
				age:"",
				gender:"",
				liveness:"",
			};
		},
		methods: {
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
							//console.log(_this.base64)
						  })
						  .catch(error => {
						    console.error(error)
						  })
						
						console.log(_this.imgPath)
						uni.getImageInfo({
							src: _this.imgPath,
							success: function (image) {
								let canvasWidth = image.width;
								let canvasHeight = image.height;
								let base = canvasWidth/canvasHeight;
			                    //设置画布最大宽度
								if(canvasWidth>800){
									canvasWidth = 800;
									canvasHeight = Math.floor(canvasWidth/base);
								}
								let ctx = uni.createCanvasContext('mycanvas');
								//设置比例
								let radio = uni.getSystemInfoSync().screenWidth/1500;
								ctx.clearRect(0, 0, canvasWidth*radio, canvasHeight*radio);
								ctx.drawImage(_this.imgPath, 0, 0, canvasWidth*radio, canvasHeight*radio);
								ctx.draw();
							}
						});
			        }
			    });
			},
			register(){
				if(this.name == ""){
					uni.showToast({
							title:"请先输入名字！",
							duration:3000,
							icon:'none'
						});
					}
				else if(this.base64 == ""){
					uni.showToast({
							title:"请先上传照片！",
							duration:3000,
							icon:'none'
						});
				}
				else{
					// uni.uploadFile({
					// 	filePath:this.filePath,
						
					// 	/*本地*/
					// 	//url:"http://127.0.0.1:8000/do_upload/",
						
					// 	/*服务器端*/
					// 	url:"http://39.106.209.123:8000/do_upload/",
					// 	name:'myfile',
					// 	success: (res) => {
					// 		console.log(res.data)
					// 	}
					// })
					uni.showLoading({
						title:'加载中...'
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
								uni.showToast({
									title:'注册成功！',
									duration:3000
								});
								this.age = res.data.age;
								this.gender = (res.data.gender == 1 ? "女" : "男");
								this.liveness = (res.data.liveness == 1 ? "活体" : "非活体");
							}
							if(res.data.code == 14){
								uni.showToast({
									icon:'none',
									title:'未检测出人脸，请重试',
									duration:3000
								});
							}
						},
						fail: (res) => {
							console.log("fail");
							console.log(res.data)
						}
					})
				}

			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		margin-top: 200px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}
	
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
