<template>
  <div class="dpage">
    <div class="container">
      <div><nav-bar></nav-bar></div>
      <div class="header">
        <div class="htop">
          <img :src="`//static.228.cn${result.product.PBIGIMG}`" alt="" /> 
        </div>
        <div class="himg">
          <img :src="`//static.228.cn${result.product.PSMILLIMG}`" alt="" />
        </div>
        <div class="hname">{{ result.product.NAME }}</div>
        <div class="hprice"
          >￥{{ result.product.MINPRICE }}-￥{{ result.product.MAXPRICE }}</div
        >
      </div>
      <div class="main">
        <div class="mb1">
          <p>
            <span class="ficon" @click="handleFClick"></span>
            {{ result.product.BEGINDATE.split(" ")[0] }}-{{
              result.product.ENDDATE.split(" ")[0]
            }}
          </p>
          <p><span class="ficon"></span>{{ result.product.VNAME }}</p>
          <div class="micon"></div>
        </div>
        <h2>注意事项</h2>
        <div class="mtxt" v-html="result.product.PRECAUTIONS"></div>
        <h2>演出详情</h2>
        <div class="mtxt dtxt" v-html="result.product.INTRODUCTION1">
          
        </div>
        <div class="mmore" @click="handleMoreClick"></div>


        <div class="mb1 mb2"  @click="handleSClick">
          <p>FAQ</p>
          <div class="micon"></div>
        </div>
        <div class="mb1 mb3"  @click="handleTClick">
          <p>在线问答</p>
          <div class="micon"></div>
        </div>
      </div>
    </div>
    <footer>
      <buy-button></buy-button>
    </footer>
  </div>
</template>

<script>
import { get } from "../../utils/http";
import NavBar from "../../components/NavBar";
import BuyButton from "../../components/BuyButton"
import Vue from "vue";
import { Collapse, CollapseItem } from "vant";
import { Popup } from "vant";
import { Dialog } from "vant";
import { Button } from "vant";

Vue.use(Button);
Dialog({ message: "提示" });
Vue.use(Popup);
Vue.use(Collapse);
Vue.use(CollapseItem);
export default {
  data() {
    return {
      result: "",
      activeNames: ["1"],
      show: false,
    };
  },
  components: {
    NavBar,
    BuyButton,
  },
  async mounted() {
    let result = await get({
      url: "/api/server/product/ticket-654241108.json",
      params: {
        pid: 654241108,
      },
    });
    this.result = result;
    // this.result.product.PRECAUTIONS.replace(/<\/br>/g, "");
    this.result.product.INTRODUCTION1=(this.result.product.INTRODUCTION1).replace(/\s+|&nbsp;/ig, '<br/>');

    Dialog.confirm({
      title: "温馨提示！",
      message: "为了您的账号安全，请先验证手机号码。",
      confirmButtonText: "随便看看",
      confirmButtonColor: "skyblue",
      cancelButtonColor: "#f00",
      cancelButtonText: "去验证",
    })
      .then(() => {
        // on confirm
      })
      .catch(() => {
        // this.$router.push('/')
      });
  },
  methods: {
    showPopup() {
      this.show = false;
    },
    handleFClick(){
      this.$router.push('/')
    },
    handleSClick(){
      this.$router.push('/FAQ')
    },
    handleTClick(){
      this.$router.push('/answer')
    },
    handleClick() {
      Dialog.alert({
        title: "标题",
        message: "弹窗内容",
      }).then(() => {
        // on close
      });
    },
   
  },
  computed:{
     handleMoreClick(){
      
    }
  }
};
</script>

<style lang="stylus" scoped>
.dpage 
  height 100%
  display flex
  flex-direction column
  // justify-content space-between
  background #f5f6f7

  .container 
    padding 0 0.2rem
    box-sizing border-box
    position relative
    overflow-y scroll

    .header 
      position relative
      height 2.2rem
      margin-bottom .4rem

      .htop 
        height 1.8rem
        width 150%

        img 
          height 3.4rem
          width 200%
          border-radius 50%
          position absolute
          left -50%
          top -80%
          filter blur(5px)
        
      .himg 
        position absolute
        width 1.03rem
        height 1.38rem
        top 1rem

        img 
          width 100%
          height 100%
          border-radius 0.1rem
        
      .hname 
        font-size 0.16rem
        position absolute
        top 1rem
        left 1.2rem
        width 4rem
        color #ffffff
        font-weight bold
      

      .hprice 
        width 2rem
        font-size 0.16rem
        font-weight bold
        position absolute
        top 2rem
        left 1.2rem

    .main 
      .mb1 
        height 0.64rem
        background #fff
        font-size 0.14rem
        color #999
        line-height 0.24rem
        text-indent .18rem
        margin 0.24rem 0
        border-radius 0.12rem
        display flex
        flex-direction column
        justify-content center

        .ficon
          width 1.16rem
          height 1.16rem

        .micon 
          position absolute
          left 86%
          color #f00
          width .16rem
          height .16rem
          background url('https://m2static.228.cn/images/icon.png') no-repeat
          background-position-x 0rem
          background-position-y -5.24rem
          background-size 1rem
      

      h2 
        font-size 0.2rem
        line-height 0.6rem
        
    
      .mtxt 
        color #999
        line-height .3rem
      .dtxt
        height .6rem
        overflow hidden 
        
      .mmore
        height .26rem
        background url('https://m2static.228.cn/images/icon.png') no-repeat
        background-position-x 50%
        background-position-y -18.22rem
        background-size 1rem 
      
      .mb2 
        color #000
        font-weight bold
        text-indent .24rem
      
      .mb3 
        color #000
        font-weight bold
        text-indent .24rem
    .van-collapse
      color #ff0000

  footer 
    height .88rem
    width 100%
    background #fff
    display flex
    flex-direction column
    justify-content center

</style>