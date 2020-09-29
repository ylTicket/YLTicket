<template>
    <div class="container">
        <header>
            <div class="htop">
                <img :src="`//static.228.cn${result.product.PSMILLIMG}`" alt="">
            </div>
            <div class="himg">
                <img :src="`//static.228.cn${result.product.PBIGIMG}`" alt=""> 
            </div>
            <span class="hname">{{result.product.NAME}}</span>
            <span class="hprice">￥{{result.product.MINPRICE}}-￥{{result.product.MAXPRICE}}</span>
        </header>
        <div class="main">
            <div class="mb1">
                <p>{{result.product.BEGINDATE.split(' ')[0]}}-{{result.product.ENDDATE.split(' ')[0]}}</p>
                <p>{{result.product.VNAME}}</p>
            </div>
            <h2>注意事项</h2>
            <div class="mtxt">{{result.product.PRECAUTIONS}}</div>
            <h2>演出详情</h2>
            <div class="mtxt">{{result.product.INTRODUCTION1}}</div>
        </div>
        <footer></footer>
    </div>
  <!-- <buy-button></buy-button> -->
</template>

<script>
// import BuyButton from '../../components/BuyButton'
import {get} from '../../utils/http'
export default {
    // components:{
    //     BuyButton
    // },
    data(){
        return {
            result:""
        }
    },
    
    async mounted(){
        let result = await get({
            url:'/api/server/product/ticket-654241108.json',
            params:{
                pid:654241108,
            }
        })
        this.result=result
        this.result.product.PRECAUTIONS.replace(/<\/br>/g,'')
    },
    
}
</script>

<style lang="stylus" scoped>
.container 
    display flex
    flex-direction column
    background #f5f6f7
    padding 0 .2rem
    overflow-y scroll
    box-sizing border-box
    header
        position relative
        height 3rem
        .htop
            height 2.5rem 
            width 800%  
            border-radius 50% 
            position absolute
            left -180%
            top -.3rem
        .himg
            position absolute
            width 1.03rem
            height 1.38rem
            top 1.3rem
            img  
                width 100%
                height 100%
                border-radius .1rem
        .hname
            font-size .14rem
            position absolute
            top 1.3rem
            left 1.2rem
            width 4rem
        .hprice
            width 2rem
            font-size .14rem
            font-weight bold
            position absolute
            top 2.1rem
            left 1.2rem
    .main 
        .mb1
            
            height .64rem
            background #fff
            font-size .14rem
            color #999
            line-height .24rem
            padding .1rem .2rem
            border-radius .12rem
        h2 
            font-size .2rem
            line-height .6rem
        .mtxt
            color #999

</style>