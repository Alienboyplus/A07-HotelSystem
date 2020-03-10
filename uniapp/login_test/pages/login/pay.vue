<template>
	<view style="overflow: hidden;">
		<scroll-view class="tab-title center" scroll-x="true" id="tab-title">
			<view
				v-for="(tab, index) in tabs"
				:key="index"
				:class="[tabCurrentIndex == index ? 'tab-current' : 'tabpage']"
				:id="'tabTag-' + index"
				@tap="tabChange"
			>
				{{ tab.name }}
			</view>
		</scroll-view>
		<swiper
			class="tab-swiper-full"
			:current="swiperCurrentIndex"
			@change="swiperChange"
			:style="{ height: tabHeight + 'px' }"
		>
			<swiper-item key="0">
				<view data-scindex="0">
					<view class="content">
						<uni-password ref="secrity" @input="onInput" @confirm="onConfirm">
							请为账号****设置6位支付密码
						</uni-password>
					</view>
				</view>
			</swiper-item>
			<swiper-item key="1">
				<view data-scindex="1">
					<view class="keyboard-container">
						<uni-keyboard @completed="done" ref="keyboard"></uni-keyboard>
					</view>
					<view class="payment-container">
						<view class="payment mt-10" hover-class="payment-active">
							<view>
								<image src="../../static/ICBC.png"></image>
							</view>
							<view>
								中国工商银行(尾号1234)
							</view>
							<view>
								<uni-icon type="jinrujiantou"></uni-icon>
							</view>
						</view>
					</view>
					<view class="money-container mt-10">
						<view class="money-box">
							<view>￥</view>
							<view><input type="number" placeholder="最低提现100元" placeholder-style="font-size:12px;color#f2f2f2;"></input></view>
							<view class="button">全部提现</view>
						</view>
						<view class="tips">
							可提现：1500.00元
						</view>
					</view>
					<view class="button-box mt-10">
						<button @tap="confirmPwd" type="primary">预计两小时内到账，确认提现</button>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import uniPassword from '@/components/uni-password/uni-password.vue'
	import uniIcon from '@/components/i-icon/i-icon.vue'
	import uniKeyboard from '@/components/uni-keyboard.vue'
	export default {
		components: {
			uniPassword,
			uniIcon,
			uniKeyboard
		},
		data() {
			return {
				tabCurrentIndex: 0,
				swiperCurrentIndex: 0,
				titleShowId: 'tabTag-0',
				tabHeight: 300,
				tabs: [
					//标签名称 , 分类 id , 加载更多, 加载的页码
					{ name: '支付密码一', id: 'pwd1', loadingType: 0, page: 1 },
					{ name: '支付密码二', id: 'pwd2', loadingType: 0, page: 1 }
				],
				showKeyboard: false
			}
		},
		onLoad() {

		},
		methods: {
			done(password) {
				console.log(password);
				console.log(this.$refs);
			},
			confirmPwd() {
				this.$refs.keyboard.show();
			},
			onInput(e) {
				//e.cancel = true;
			},
			onConfirm(e) {
				let password = e.value;
			},
			tabChange(e) {
				var index = e.target.id.replace('tabTag-', '');
				this.swiperCurrentIndex = index;
				this.tabCurrentIndex = index;
				this.titleShowId = 'tabTag-' + index;
			},
			swiperChange: function(e) {
				var index = e.detail.current;
				this.tabCurrentIndex = index;
				this.titleShowId = 'tabTag-' + index;
			}
		},
		onReady() {
			//获取屏幕高度及比例
			var winInfo = uni.getSystemInfo({
				success: res => {
					var windowHeight = res.windowHeight;
					//获取头部标题高度
					var dom = uni.createSelectorQuery().select('#tab-title');
					dom.fields({ size: true }, res2 => {
						if (!res2) {
							return;
						}
						//计算得出滚动区域的高度
						this.tabHeight = windowHeight - res2.height;
						console.log(this.tabHeight);
					}).exec();
				}
			});
		}
	}
</script>

<style>
	page {
		background: #f2f2f2;
	}
	.keyboard-container {
		position: absolute;
		top:0;
		height: 100%;
		width: 100%;
	}
	uni-button[type=primary] {background: #00C456!important;}
	/* 选项卡 */
	.tab{padding:0;}
	.tab-title{white-space:nowrap; text-align:center; background:#FFFFFF;}
	.tab-title view{width:auto; padding:0 12px; margin:0 8px; line-height:42px; display: inline-block; text-align:center; border-bottom:2px solid #FFFFFF; font-size:30upx;}
	.tab-title view:first-child{margin-left: 0;}
	.tab-title view:last-child{margin-right: 0;}
	.tab-current{border-bottom:4upx solid #00C777 !important; color:#00C777;}
	.tab-swiper{width:100%; height:350upx; padding:0;}
	.tab-swiper swiper-item{width:100%;}
	.tab-swiper swiper-item navigator{line-height:70upx; width:100%; display:block;}
	.tab-swiper-full{width:100%; height:auto;}
	.tab-swiper-full swiper-item{width:100%;}
	.tab-swiper-full scroll-view{width:100%; height:100%;}
	
	.center {text-align: center;}
	.mt-10 {margin-top: 10px;}
	.pt-10 {paddint-top: 10px;}
	
	.content {text-align: center;height: 400upx;}
	
	.payment-container {border-top: 1px solid #e2e2e2;height: calc(100%-44px);overflow: hidden;}
	.payment-container .payment {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 10px;
		background: #fff;
	}
	.payment-container .payment view:nth-child(2) {flex:1;}
	.payment-container .payment-active {background: #E2E2E2;}
	.payment-container .payment image {width: 30px; height: 30px;margin-right: 10px;}
	
	.money-container {background: #fff;padding: 10px;}
	.money-container .money-box {padding:10px 0;border-bottom: 1px solid #efefef;display: flex;flex-direction: row; align-items: center;}
	.money-container .money-box .button {font-size: 12px;color: #cf9f41;}
	.money-container .money-box view:nth-child(1) {font-size: 25px;}
	.money-container .money-box view:nth-child(2) {flex: 1;font-size: 30px;padding: 0 5px;}
	
	.money-container .tips {color:#222;padding-top: 10px; font-size: 12px;}
	
	.button-box {padding: 0 10px;}
</style>
