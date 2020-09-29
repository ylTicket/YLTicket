<template>
    <main>
        <nav>
            <p>
                <a href="javascript:void()">
                    <i></i>
                    演唱会
                </a>
                <a href="javascript:void()">
                    <i></i>
                    话剧舞台剧
                </a>
                <a href="javascript:void()">
                    <i></i>
                    体育赛事
                </a>
                <a href="javascript:void()">
                    <i></i>
                    儿童亲子
                </a>            
            </p>
            <p>
                 <a href="javascript:void()">
                     <i></i>
                     全部分类
                </a>
                <a href="javascript:void()">
                    <i></i>
                    活动
                </a>
                <a href="javascript:void()">
                    <i></i>
                    永乐说
                </a>
                <a href="javascript:void()">
                    <i></i>
                    我的
                </a>  
            </p>
        </nav>
        <h3>
            <span>推荐</span>
            <span>场馆</span>
        </h3>
        <ul>
            <li v-for='item in recommend' :key="item.ROW_ID">
                <a href="javascript:void()">
                    <img :src="`//static.228.cn${item.PBIGIMG}`"  alt="">
                     <b class='dec'>{{item.NAME}}</b>
                    <span class='date'>{{item.BEGINDATE}}</span>
                    <span class='price'>
                        <b>￥ {{item.MINPRICE}} 起</b>
                    </span>
                </a>
            </li> 
        </ul>
    </main>
</template>
    
<script>
import {get} from '../../../utils/http'
export default {
    data(){
        return {
            recommend:[],
        }
    },
    async mounted(){
        let result=await get({
            url:'/api/server/content/index.json',
        })
        this.recommend=result.data.data.recommendPage.list;
    }
}
</script>

<style lang="stylus" scoped>  
@import '../../../assets/stylus/ellipsis.styl'
  main 
    nav
      padding .25rem .2rem
      background skyblue
      p
        display flex
        a
          color #000
          flex 1
          text-align center
        i
          display block
          width .36rem
          height .36rem
    h3
      padding .2rem .1rem .2rem.15rem
      span
        font-size .22rem  
        padding-right .1rem
    ul
      height 100%
      padding 0 .2rem
      overflow-y scroll
      li
        display inline-block
        width 33.33%
        padding-right .1rem
        paddign-bottom .12rem
        a
          color #000
          font-size .13rem
          img 
            border-radius .1rem
            width 100%
            height 1.4rem
            display block
          b 
            ellipsis()
          .dec
            font-weight 800
            display block
            height .34rem
          .date
            display block
            color #ccc
          .price
            color #ccc
            b 
              color red  
      
    
</style>
