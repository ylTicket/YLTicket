<template>
<div class='container'>
    <header>
        <div class='header-left'>
            <span>北京</span>
            <i class='city-entry-arrow'></i>
        </div>
        <div class='header-right'>
            <input type="text" placeholder="搜索">
            <i></i>
        </div>
    </header>
    <main>
        <router-view></router-view>
    </main>
    <footer>
        <router-link to="/sy" active-class="active">
          <a href="#">
            <i></i>
            首页
          </a>
        </router-link>
        
       <router-link to="/classify" active-class="active">
          <a href="#">
            <i></i>
            分类
          </a>
        </router-link>
        <router-link to="/search" active-class="active">
          <a href="#">
            <i></i>
            搜索
          </a>
        </router-link>
        <router-link to="/profile" active-class="active">
          <a href="#">
            <i></i>
            我的
          </a>
        </router-link>
    </footer>
</div>

</template>
 
<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
.container 
  display flex
  flex-direction column
  position relative
  height 100%
  header 
    height .44rem
    display flex
    background linear-gradient(to right, #ff7e6f, #ff2959)
    box-shadow 0px 2px 6px 0px rgba(255, 37, 68, 0.2)
    
    .header-left
      weight .5rem
      height .4rem
      padding 0 .15rem 0 .15rem
      span 
        line-height .44rem
        color #fff
      .city-entry-arrow 
        border .04rem solid #fff
        border-left-color transparent
        border-right-color transparent
        border-bottom-color transparent
        display inline-block
        margin-left .1rem
    
    .header-right
      flex 1
      line-height .3rem
      margin-top .04rem
      input 
        width 90%
        border-radius .5rem
        text-align center
  main 
    flex 1   
    overflow-y scroll

  footer 
    height .5rem
    width 100%
    background skyblue
    display flex
    position absolute
    bottom 0
    z-index 999
    a
      flex 1
      color #000
      font-size .1rem
      text-align center
      i 
        height .25rem
        width .25rem
        font-size .12rem
        display block
</style>