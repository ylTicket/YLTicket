<template>
<nav>
    <van-grid class="navicon mt-3" :column-num="4" :border='false'>
    <van-grid-item v-for="(item, index) in naviconList" :key="index">
        <i class="sprite" :class="item.activeClass"></i>
        <div class="mt-2">{{ item.text }}</div>
    </van-grid-item>
    </van-grid>
</nav>
</template>

<script>
import Vue from "vue";
import { Grid, GridItem } from "vant";

Vue.use(Grid);
Vue.use(GridItem);
export default {
   data() {
       return {
            naviconList: [
        {
          activeClass: "sprite-news",
          text: "演唱会",
        },
        {
          activeClass: "sprite-stories",
          text: "话剧舞台剧",
        },
        {
          activeClass: "sprite-mall",
          text: "体育赛事",
        },
        {
          activeClass: "sprite-server",
          text: "儿童亲子",
        },
        {
          activeClass: "sprite-rookie",
          text: "全部分类",
        },
        {
          activeClass: "sprite-honour",
          text: "活动",
        },
        {
          activeClass: "sprite-wz",
          text: "永乐说",
        },
        {
          activeClass: "sprite-public",
          text: "我的",
        },
      ],
       }
   }
}
</script>


<style lang="stylus">
.sprite {
  background: url(../../assets/icons/icon.png) no-repeat 0 0; //0 0左上角对齐 750*910
  background-size .75rem ; //375px
  display: inline-block; //i标签使用精灵图要设置
  &.sprite-news{
    width:.36rem;
    height: .36rem;
    background-position: 0 -693.25px; //用百分数
  }
  &.sprite-stories{
   width:.36rem;
    height: .36rem;
    background-position: 0 -737.73px; //用百分数
  }
  &.sprite-mall{
    width:.36rem;
    height: .36rem;
    background-position: 0 -783px; //用百分数
  }
  &.sprite-server{
    width:.36rem;
    height: .36rem;
    background-position: 0 -826.5px; //用百分数
  }
  &.sprite-rookie{
    width:.36rem;
    height: .36rem;
    background-position: 0 -871.25px; //用百分数
  }
  &.sprite-honour{
    width:.36rem;
    height: .36rem;
    background-position: 0 -915.5px; //用百分数
  }
  &.sprite-wz{
    width:.36rem;
    height: .36rem;
    background-position: 0 -960px; //用百分数
  }
  &.sprite-public{
    width:.36rem;
    height: .36rem;
    background-position: 0 -1004.75px; //用百分数
  }

  &.sprite-arrow{
    width:.36rem;
    height: .36rem;
    background-position: 0 -1004.75px; //用百分数
  }

}   
</style>