<template>
  <div class="container">
      <div class="btn">
      <div 
        class="lbtn" 
        @click="handBackClick"
      ></div>
      <div class="bnt2">
        <div 
          class="cbtn"
          @click="handStarClick"
        ></div>
        <div class="rbtn">
            <van-cell title="显示分享面板" @click="showShare = true" />
            <van-share-sheet
            v-model="showShare"
            title="立即分享给好友"
            :options="options"
            @select="onSelect"
            />
        </div>
      </div>
  </div>
  </div>
</template> 

<script>
import Vue from 'vue';
import { Dialog } from 'vant';
import { ShareSheet } from 'vant';
import { Toast } from 'vant';

Vue.use(ShareSheet);
Vue.use(Dialog);
export default {
    date(){
        return {
            showShare: true,
            options: [
                { name: '微信', icon: 'wechat' },
                { name: '微博', icon: 'weibo' },
                { name: '复制链接', icon: 'link' },
            ],
            // cbtn:document.querySelector('.cbtn')
        }
    },
    methods: {
        handBackClick(){
            this.$router.push('/sy')
        },
        handStarClick(){
            // cbtn.style.background-position-y:'-33.67rem'
            Dialog.alert({
            title: '提示',
            message:'喜欢成功' ,
            }).then(() => {
            // on close
            });
        },
        onSelect(option) {
            Toast(option.name);
            this.showShare = true;
        },
    },
};
</script>

<style lang="stylus" scoped>
.container
    position: absolute;
    top .3rem
    z-index: 999;
    .btn
        display flex
        justify-content space-between
        margin 0 -.32rem
        .lbtn
            width .4rem
            height .4rem
            background url('https://m2static.228.cn/images/icon.png') no-repeat
            background-position-x 0.12rem
            background-position-y -32.16rem
            background-size 1.4rem
        .bnt2
            display flex
            width 1rem
            justify-content space-between
            .cbtn
                width .4rem
                height .4rem
                background url('https://m2static.228.cn/images/icon.png') no-repeat
                background-position-x 0.1rem
                background-position-y -32.92rem
                // background-position-y -33.67rem
                background-size 1.4rem
            .rbtn
                width .4rem
                height .4rem
                background url('https://m2static.228.cn/images/icon.png') no-repeat
                background-position-x 0.01rem
                background-position-y -34.42rem
                background-size 1.4rem
    
 
</style>