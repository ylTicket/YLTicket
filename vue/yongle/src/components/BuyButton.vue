<template>
  <div class="container" >
      <!-- <div class="icon"></div> -->
          <van-button round type="info" color="linear-gradient(to right, #ff6034, #ee0a24)" to="/ticketBuy">
            立即订购
          </van-button>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';

Vue.use(Button);
export default {

}
</script>

<style lang="stylus" scoped>
.container
    display flex
    justify-content space-between
    .van-button
        width 400%
    
</style>