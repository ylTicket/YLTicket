<template>
    <div class="content">
        <div class="hnav">
           <span><a href="">&lt;</a></span>
           <div class="header">永乐说戏</div>
        </div>
        <main>
            <div>
                 <!-- <van-swipe class="simg" @change="onChange" :autoplay="3000" indicator-color="#FF2959">
                    <van-swipe-item 
                    v-for = "i in focusImg"
                    :key="i.ROW_ID"
                    > <a  :href="i.URL"><img :src="`//static.228.cn${i.IMG}`"></a></van-swipe-item>
                     <van-swipe-item>2</van-swipe-item>
                    <van-swipe-item>3</van-swipe-item>
                    <van-swipe-item>4</van-swipe-item> 
                    <! <template #indicator>
                        <div class="custom-indicator">
                            {{ current + 1 }}/3
                        </div>
                    </template> -->
                <!-- </van-swipe> -->
                <ul>
                    <li 
                        v-for="m in list"
                        :key="m.ROW_ID">
                        <a href="">
                            <div class="top">
                                <span>
                                   <img :src="`//static.228.cn${m.IMG}`">
                               </span>
                               <div>
                                   <b>
                                       {{m.REMARK}}
                                       <!-- 东野圭吾《回廊亭杀人事件》 -->
                                   </b>
                                   <em>
                                       2018年12月05日
                                   </em>
                               </div>
                            </div>
                            <div class="text">
                                {{m.TEXT}}
                                   <!-- 本剧根据东野圭吾的同名小说改编
                                    东野圭吾最耽美、最诡异的本格推理极致之作
                                    东野圭吾最具争议的悲情悬疑力作
                                    本剧集复仇、密室、爱情于一体，对人性和情感进行拷问
                                    显赫企业家之死，庞大遗产的明争暗夺。遗书将要在其经营的日式旅馆回廊亭中向家族公开，众人各自心怀叵测。除家人以外，一名身份特殊的老妇人也被应邀出席。然而，老妇出现的真正目的会是什么？！
                                    夜深时，做发财梦的贪婪之人没有等到他们的遗产，反而等来死神的降临。破灭的爱情，破败的人生，曾经种下的恶缘种子，逐渐在回廊亭发芽…… -->
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </main>
        <footer>
            <ul>
                <li>首页</li>
                <li>分类</li>
                <li>搜索</li>
                <li>我的</li>
            </ul>
        </footer>
    </div>
</template>

<script>
import Vue from 'vue';
import { CellGroup, Swipe, SwipeItem } from 'vant';
import {get} from '../../utils/http'


Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
    data() {
        return {
            current: 0,
            focusImg:"",
            list:"",
        }
    },

    // filters:{
    //     time(value){
    //         return value.replace(/^/,)
    //     }
    // },

    methods: {
        onChange(index) {
            this.current = index;
        },
    },
    async mounted(){
        let result = await get ({
            url:'/api/server/opera/list.json',
            params:{
                limit:12,
                offset:0
            }
        })
        console.log(result)
        this.focusImg = result.focusImgList
        this.list = result.sxList
    }
}
</script>>

<style lang='stylus' scoped>
@import '../../assets/stylus/border.styl'
@import '../../assets/stylus/ellipsis.styl'
.content
    height 100%
    background #f5f6f7
    display flex
    flex-direction column
    .hnav
        overflow hidden
        height .4rem
        font-size .16rem
        line-height .4rem
        display flex
        span 
            width .4rem
            height .4rem
            float left 
            a
                margin-left  .15rem;
                top .11rem
                font-width bloder 
                color: #FF2959
                width .4rem
                height .4rem
        .header 
            height .4rem
            text-align center
            flex 1
            float left
       
       
   
    main 
        flex 1
        overflow-y scroll
        div
            img 
                height 1.52rem
                width 100%
                .custom-indicator
                    position: absolute;
                    right: 5px;
                    bottom: 5px;
                    padding: 2px 5px;
                    font-size: 12px;
                    background: rgba(0, 0, 0, 0.1);
            ul 
                margin-left 0.15rem
                margin-top 0.15rem
                margin-right 0.15rem
                li
                    background #fff
                    width: 100%;
                    height 1.86rem
                    margin-top: .15rem;
                    border-radius: .1rem;
                    overflow: hidden;
                    padding .15rem
                    a
                        text-decoration: none;
                        color: #333;
                        .top
                            span 
                                    float left
                                    margin-right .1rem
                                    img 
                                        width: 1.8rem;
                                        height: 1.02rem;
                                        border-radius: .1rem;
                                        overflow: hidden;
                                        position: relative;
                                div  
                                    float left
                                    width: calc(100% - 1.9rem);
                                    b
                                        &
                                            ellipsis(100%,2)
                                        display flex
                                        font-size: .16rem;
                                        height: .45rem;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                    em
                                        display flex
                                        margin-top 15px
                                        color: #b5bbc1
                                        font-size: .11rem
                        .text
                            margin-top 0.15rem
                            border_1px(1px 0 0 0)
                            color: #7b8187;
                            font-size 0.12rem
                            padding 5px 0 0 
                            padding-top: 0.05rem;
                            margin-left: 0.15rem
                            margin-right: 0.2rem
                            height .39rem
                            &
                                ellipsis(100%,2)
                                                    
    footer 
        background #fff
        height .5rem
        ul
            height 100%
            display flex
            li
                flex 1

</style>