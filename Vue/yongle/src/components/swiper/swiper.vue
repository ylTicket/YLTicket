<template>
   <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in result" :key="index">
        <img v-lazy="`//static.228.cn${image.IMG}`" />
      </van-swipe-item>
    </van-swipe>
</template>

<script>


import Vue from 'vue';
import { Lazyload,Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
export default {
    props:['result']

}
</script>