<template>
    <div>
        <van-swipe class="simg" @change="onChange" :autoplay="3000" indicator-color="#FF2959">
            <van-swipe-item 
            v-for = "i in focusImg"
            :key="i.ROW_ID"
            > <a  :href="i.URL"><img :src="`//static.228.cn${i.IMG}`"></a></van-swipe-item>
        
        </van-swipe>
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
        }
    },
    props:{
        swiper:Object,
        require:true
    },
    methods: {
        onChange(index) {
            this.current = index;
        },
    },
}
</script>

<style lang="stylus" scoped>
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

</style>
