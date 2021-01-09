<template>
	<view class="content">
		<uni-nav-bar color="#000000" background-color="#ffffff" :status-bar="true" left-icon="arrowleft" :left-text="back[index_from]" :title="title[index_from]" @clickLeft="return_back" />
		<uni-section :title="source_language[index_from]" type="line"></uni-section>
		<uni-list>
			<uni-list-item>
		        <picker mode="selector" :value="index_from" :range="array" @change="bindPickerChange_from">
		            <view class="uni-input">{{array[index_from]}}</view>
		        </picker>
			</uni-list-item>
		</uni-list>
		<uni-section :title="target_language[index_from]" type="line"></uni-section>
		<uni-list>
			<uni-list-item>
		        <picker mode="selector" :value="index_to" :range="array" @change="bindPickerChange_to">
		            <view class="uni-input">{{array[index_to]}}</view>
		        </picker>
			</uni-list-item>
		</uni-list>
		<uni-section :title="translation_context[index_from]" type="line"></uni-section>
		<uni-list>
			<uni-list-item :show-arrow="false">
				<textarea v-model="context_from" auto-height :placeholder="context_placeholder[index_from]"/>
			</uni-list-item>
		</uni-list>
		<uni-section :title="translation_result[index_from]" type="line"></uni-section>
		<uni-list>
			<uni-list-item :show-arrow="false">
				<textarea v-model="context_to" auto-height :placeholder="result_placeholder[index_from]"/>
			</uni-list-item>
		</uni-list>
		<view style="margin-top:38upx;">
			<button type="primary" @tap="upload">translate</button>
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
		onLoad() {
			let that = this
			that.index_from = 1
			that.index_to = 0
		},
		data() {
			return {
				context_from:'',
				context_to:'',
				array:['中文', 'English', '日本語', '한국어'],
				array_encode:['zh-CHS', 'en', 'ja', 'ko'],
				title:['翻译助手', 'translation helper', '翻訳助手', '번역 조수'],
				back:['返回', 'back', '戻る', '돌아가'],
				source_language:['选择源语言', 'Select the source language', 'ソース言語を選択する', '원본 언어 선택'],
				target_language:['选择目标语言', 'Select target language', '目的言語を選択する', '대상 언어 선택'],
				translation_context:['翻译内容', 'Translation context', '翻訳内容', '내용을 번역하다'],
				translation_result:['翻译结果', 'Translation result', '翻訳結果', '번역 결과'],
				context_placeholder:['请输入需要翻译的文字', 'Please input context', '翻訳が必要な文字を入力してください', '번역할 단어를 입력하십시오.'],
				result_placeholder:['结果', 'result', '結果', '결과'],
				translate:['翻译', 'translate', '翻訳', '번역'],
				index_from:'',
				index_to:'',
			}	
		},
		methods: {
	        bindPickerChange_from: function(e) {
	            // console.log('picker发送选择改变，携带值为', e.target.value)
	            this.index_from = e.target.value
	        },
			bindPickerChange_to: function(e) {
			    // console.log('picker发送选择改变，携带值为', e.target.value)
			    this.index_to = e.target.value
			},
			return_back(){
				uni.navigateTo({
					url:"../infor/first"
				})
			},
			upload(){
				uni.request({
					url:"http://39.106.209.123:8000/translate/",
					data:{
						input_text:this.context_from,
						language_from:this.array_encode[this.index_from],
						language_to:this.array_encode[this.index_to]
					},
					success: (res) => {
						console.log(res.data)
						var s = JSON.parse(res.data.rsp)
						console.log(s.translation)
						this.context_to = s.translation
					},
					fail: (res) => {
						console.log(res.data)
					},
					method:'POST'
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
	
	.content{
		margin-top: 20upx;
	}
	
	button {width: 90%;margin-bottom: 20upx;}
</style>