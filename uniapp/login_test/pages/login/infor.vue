<template>
 <view>
	<!-- <view class="example-body">
	  	<uni-nav-bar left-icon="arrowleft" title="个人主页"  @clickLeft="back" />
	</view>	 -->
    <view class="person-head">
      <cmd-avatar src="https://avatar.bbs.miui.com/images/noavatar_small.gif" @click="fnInfoWin" size="lg" :make="{'background-color': '#fff'}"></cmd-avatar>
      <view class="person-head-box">
        <view class="person-head-nickname">访客</view>
        <view class="person-head-username">ID：000001</view>
      </view>
    </view>
    <view class="person-list">
      <cmd-cell-item title="导航" slot-left @click="fnClick('map')" arrow>
        <cmd-icon type="bullet-list" size="24" color="#000000"></cmd-icon>
      </cmd-cell-item>
      <cmd-cell-item title="餐卷" slot-left @click="fnClick('dinningCode')"arrow>
        <cmd-icon type="message" size="24" color="#000000"></cmd-icon>
      </cmd-cell-item>
      <cmd-cell-item title="新闻" slot-left @click="fnClick('new')"arrow>
        <cmd-icon type="settings" size="24" color="#000000"></cmd-icon>
      </cmd-cell-item>
	  <cmd-cell-item title="购物" slot-left @click="fnClick('shop')" arrow>
	    <cmd-icon type="bullet-list" size="24" color="#000000"></cmd-icon>
	  </cmd-cell-item>
      <cmd-cell-item title="检查版本" addon="v1.1" slot-left arrow>
        <cmd-icon type="alert-circle" size="24" color="#000000"></cmd-icon>
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
          url: 'info'
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
		    url:'./dinningCode'
		  })
		}
		if(type == 'new'){
		  uni.navigateTo({
		    url:'../index/index'
		  })
		}
		if(type == 'shop'){
			uni.navigate({
				url:'../index/index'
			})
		}
    }
  },
  }
</script>

<style>
  .person-head {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 150px;
    padding-left: 20px;
    background: linear-gradient(to right, #000000, #000000);
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
    font-weight: 500;
    color: #fff;
  }

  .person-head-username {
    font-size: 14px;
    font-weight: 500;
    color: #fff;
  }

  .person-list {
    line-height: 0;
  }
</style>
