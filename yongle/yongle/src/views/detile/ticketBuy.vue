<template>
  <div class="container">
    <van-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
import { get } from "../../utils/http";
import Vue from 'vue';
import { NavBar } from 'vant';
import { Toast } from 'vant';


Vue.use(NavBar);
export default {
   methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      // Toast('按钮');
    },
  },
}
</script>

<style lang="stylus" scoped>

</style>