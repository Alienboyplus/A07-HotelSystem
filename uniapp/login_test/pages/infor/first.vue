<template>
  <view>
    <!-- 顶部导航栏组件 -->
    <cmd-nav-bar :title="title"></cmd-nav-bar>
    <!-- 内容区 start -->
    <cmd-page-body type="top-bottom">
      <!-- #ifdef H5 -->
      <cmd-transition name="fade-up">
        <home v-if="current == 0"></home>
        <person v-if="current == 1"></person>
      </cmd-transition>
      <!-- #endif -->
      <!-- #ifndef H5 -->
      <cmd-transition v-if="current == 0" name="fade-up">
        <home></home>
      </cmd-transition>
      <cmd-transition v-if="current == 1" name="fade-up">
        <person></person>
      </cmd-transition>
      <!-- #endif -->
    </cmd-page-body>
    <!-- 内容区 end -->
    <!-- 底部导航栏组件 -->
    <cmd-bottom-nav background-color="#ffffff" font-color="#000000" active-font-color="#000000" @click="getBottomNavCurrent"
      :current="current" :list="list"></cmd-bottom-nav>
  </view>
</template>

<script>
  import home from "./map.vue"
  import person from "./infor.vue"
  import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
  import cmdBottomNav from "@/components/cmd-bottom-nav/cmd-bottom-nav.vue"
  import cmdPageBody from "@/components/cmd-page-body/cmd-page-body.vue"
  import cmdTransition from "@/components/cmd-transition/cmd-transition.vue"

  export default {
    components: {
      home,
      person,
      cmdBottomNav,
      cmdNavBar,
      cmdPageBody,
      cmdTransition
    },

    data() {
      return {
        bodyHeight: 0,
        title: '欢迎登录',
        // 底部导航栏的默认选中
        current: 0,
        // 底部导航栏的菜单项
        list: [{
            "pagePath": "/pages/bottom-nav/home/home",
            "text": "周边",
            "icon": "home"
          },
          {
            "pagePath": "/pages/bottom-nav/person/person",
            "text": "个人",
            // 字体图标不可与图片共显
            "icon": "user",
            // 以导入方式传入的图片最佳 import srcImg from "@/static/xxx.png"
            // src 大小限制为40kb，建议尺寸为 81px * 81px
            // "src": "../../static/home.png",
            // "srcSelect": "../../static/homeHL.png"
          }
        ]
      };
    },

    methods: {
      /**
       * 点击底部导航栏的菜单项
       * 得到的项进行跳转切换
       */
      getBottomNavCurrent(e) {
        this.current = e.select;
        this.title = e.item.text;
      }
    }
  }
</script>

<style>
</style>
