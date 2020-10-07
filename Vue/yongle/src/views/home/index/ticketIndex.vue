<template>
 <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <van-list  v-model="loading"
  :finished="finished"
  finished-text="没有更多了">
  <main> 
    <swiper :result='images'></swiper>
    <jgq></jgq>
    <h3>
      <span>推荐</span>
      <span>场馆</span>
    </h3>
    <ul>
      <li v-for="item in recommend" :key="item.ROW_ID">
        <a href="javascript:void()">
          <img :src="`//static.228.cn${item.PBIGIMG}`" alt="" />
          <b class="dec van-multi-ellipsis--l2">{{ item.NAME }}</b>
          <span class="date">{{ time }}</span>
          <span class="price">
            <b>￥ {{ item.MINPRICE }}</b><span>起</span>
          </span>
        </a>
      </li>
    </ul>
  </main>
  </van-list>
 </van-pull-refresh>
</template>
    
<script>
import { get } from "../../../utils/http";
import jgq from '../../../components/jgq/jgq'
import swiper from "../../../components/swiper/swiper"

import Vue from 'vue';
import { PullRefresh,Toast ,List} from 'vant';


Vue.use(PullRefresh);
Vue.use(Toast);
Vue.use(List)
export default {
  data() {
    return {
      recommend: [],
      images:[],
      isLoading: false,
      loading:false,
      finished:false,
      time:this.moment().format('LL')
    };
  },
  components:{
      jgq,
      swiper
  },
  methods:{
    onRefresh(){ 
      this.loadData();
      this.isLoading = false;
      Toast('刷新成功');
    }, 
    async loadData(){
      let result = await get({
        url: "/api/server/content/index.json",
      });
      this.images=result.data.data.slideList
      this.recommend = result.data.data.recommendPage.list;
    },
  },
  mounted() {
   this.loadData();
  },
};
</script>

<style lang="stylus" scoped>@import '../../../assets/stylus/ellipsis.styl';
main {
  h3 {
    padding: 0.2rem 0.1rem 0.2rem 0.15rem;

    span {
      font-size: 0.22rem;
      padding-right: 0.1rem;
    }
  }

  ul {
    height: 100%;
    padding: 0 0.2rem;
    overflow-y: scroll;

    li {
      display: inline-block;
      width: 33.33%;
      padding-right: 0.1rem;
      paddign-bottom: 0.12rem;

      a {
        color: #000;
        font-size: 0.13rem;

        img {
          border-radius: 0.1rem;
          width: 100%;
          height: 1.4rem;
          display: block;
        }

        .dec {
          font-weight: 800;
          display: block;
          height: 0.38rem;
          ellipsis();
        }

        .date {
          display: block;
          color: #ccc;
        }

        .price {
          color: #ccc;

          b {
            color: red;
          }
        }
      }
    }
  }
}
</style>

