<template>
  <view>
    <cmd-nav-bar back title="信息设置"></cmd-nav-bar>
    <cmd-page-body type="top">
      <cmd-transition name="fade-up">
        <view>
          <cmd-cel-item title="头像" slot-right arrow>
            <cmd-avatar src="https://avatar.bbs.miui.com/images/noavatar_small.gif"></cmd-avatar>
          </cmd-cel-item>
          <cmd-cel-item title="积分" addon="666" arrow></cmd-cel-item>
          <cmd-cel-item title="昵称" addon="Macle" arrow></cmd-cel-item>
          <cmd-cel-item title="姓名" addon="颜王亮" arrow></cmd-cel-item>
          <cmd-cel-item title="联系方式" addon="19975269386" arrow></cmd-cel-item>
          <cmd-cel-item title="证件号码" addon="450112xxxxxxxx2017" arrow></cmd-cel-item>
          <cmd-cel-item title="我的地址" addon="杭州电子科技大学" arrow></cmd-cel-item>
          <cmd-cel-item title="修改密码" @click="fnClick('modify')" arrow></cmd-cel-item>
          <button class="btn-logout">"退出登录"</button>
        </view>
      </cmd-transition>
    </cmd-page-body>
  </view>
</template>

<script>
  import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
  import cmdPageBody from "@/components/cmd-page-body/cmd-page-body.vue"
  import cmdTransition from "@/components/cmd-transition/cmd-transition.vue"
  import cmdCelItem from "@/components/cmd-cell-item/cmd-cell-item.vue"
  import cmdAvatar from "@/components/cmd-avatar/cmd-avatar.vue"

  export default {
    components: {
      cmdNavBar,
      cmdPageBody,
      cmdTransition,
      cmdCelItem,
      cmdAvatar
    },

    data() {
      return {};
    },

    mounted() {},
    
    methods:{
      /**
       * 点击触发
       * @param {Object} type 跳转页面名或者类型方式
       */
      fnClick(type){
        if(type == 'modify'){
          uni.navigateTo({
            url:'modify'
          })
        }

      }
    }
  }
</script>

<style>
  .btn-logout {
    margin-top: 100upx;
    width: 80%;
    border-radius: 50upx;
    font-size: 16px;
    color: #fff;
    background: linear-gradient(to right, #000000, #000000);
  }

  .btn-logout-hover {
    background: linear-gradient(to right, #000000, #000000);
  }
</style>
