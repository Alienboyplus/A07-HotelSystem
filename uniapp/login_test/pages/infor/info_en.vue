<template>
  <view>
    <cmd-nav-bar back title="Information settings"></cmd-nav-bar>
    <cmd-page-body type="top">
      <cmd-transition name="fade-up">
        <view>
          <cmd-cel-item title="Avatar" slot-right arrow>
            <cmd-avatar src="../../static/img/logo.jpg"></cmd-avatar>
          </cmd-cel-item>
          <cmd-cel-item title="hotel name" addon=" " arrow></cmd-cel-item>
          <cmd-cel-item title="room number" addon=" " arrow></cmd-cel-item>
          <cmd-cel-item title="name" addon=" " arrow></cmd-cel-item>
          <cmd-cel-item title="contact" addon=" " arrow></cmd-cel-item>
          <cmd-cel-item title="ID number" addon=" " arrow></cmd-cel-item>
          <cmd-cel-item title="address" addon=" " arrow></cmd-cel-item>
          <cmd-cel-item title="change password" @click="fnClick('modify')" arrow></cmd-cel-item>
		  <cmd-cel-item title="verification" @click="fnClick('identify')" addon="No witness verification yet" arrow></cmd-cel-item>
          <button class="btn-logout">logout</button>
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
            url:'modify_en'
          })
        }
		else if(type == 'identify'){
			uni.navigateTo({
				url:'../identify/identify_en'
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
