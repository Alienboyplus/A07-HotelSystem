<template>
 <view>
	<!-- <view class="example-body">
	  	<uni-nav-bar left-icon="arrowleft" title="个人主页"  @clickLeft="back" />
	</view>	 -->
    <view class="person-head">
      <cmd-avatar src="../../static/img/logo.jpg" @click="fnInfoWin" size="lg" :make="{'background-color': '#ffffff'}"></cmd-avatar>
      <view class="person-head-box">
        <view class="person-head-nickname">Visitor</view>
        <view class="person-head-username">ID:0</view>
      </view>
    </view>
    <view class="person-list">
      <cmd-cell-item title="Map" slot-left @click="fnClick('map')" arrow>
        <cmd-icon type="bullet-list" size="24" color="#000000"></cmd-icon>
      </cmd-cell-item>
      <cmd-cell-item title="Meal coupon" slot-left @click="fnClick('dinningCode')"arrow>
        <cmd-icon type="credit-card" size="24" color="#000000"></cmd-icon>
      </cmd-cell-item>
      <cmd-cell-item title="News" slot-left @click="fnClick('new')"arrow>
        <cmd-icon type="message" size="24" color="#000000"></cmd-icon>
      </cmd-cell-item>
	  <cmd-cell-item title="Shopping" slot-left @click="fnClick('shop')" arrow>
	    <cmd-icon type="shopping-cart" size="24" color="#000000"></cmd-icon>
	  </cmd-cell-item>
      <cmd-cell-item title="Version" addon="v1.1" slot-left arrow>
        <cmd-icon type="settings" size="24" color="#000000"></cmd-icon>
      </cmd-cell-item>
    </view>
  </view>
</template>

<script>
  import cmdAvatar from "@/components/cmd-avatar/cmd-avatar.vue"
  import cmdIcon from "@/components/cmd-icon/cmd-icon.vue"
  import cmdCellItem from "@/components/cmd-cell-item/cmd-cell-item.vue"
  import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
  export default {
    components: {
      cmdAvatar,
      cmdCellItem,
      cmdIcon,
	  uniNavBar
    },
    data() {
      return {};
    },
    methods: {
      /**
       * 打开用户信息页
       */
	  back() {
	  	uni.navigateBack({
	  		delta: 1
	  	})
	  },
      fnInfoWin() {
        uni.navigateTo({
          url: 'info_en'
        })
      },
	  fnClick(type){
	    if(type == 'map'){
	      uni.navigateTo({
	        url:'./map'
	      })
	    }
		if(type == 'dinningCode'){
		  uni.navigateTo({
		    url:'./dinningCode_en'
		  })
		}
		if(type == 'new'){
		  uni.navigateTo({
			url:'../new/index_en'
		  })
		}
		if(type == 'shop'){
			uni.navigateTo({
			url:'../shop/tabBar/home/home'
			})
		}
		if(type == 'identify'){
			uni.navigateTo({
				url:"../identify/identify"
			})
		}
    },
	checkVersion(){
		uni.showToast({
			icon:"none",
			duration:3000,
			title:"It is the latest version!"
		})
	}
  },
  }
</script>

<style>
  .person-head {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 140px;
    padding-left: 20px;
    background: linear-gradient(to right, #ffffff, #565656);
  }

  .person-head-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 10px;
  }

  .person-head-nickname {
    font-size: 18px;
    font-weight: 550;
    color: #000000;
  }

  .person-head-username {
    font-size: 16px;
    font-weight: 550;
    color: #000000;
  }

  .person-list {
    line-height: 0;
  }
</style>
