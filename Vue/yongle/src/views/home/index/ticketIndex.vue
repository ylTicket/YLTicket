<template>
<div class='container'>
    <header>
        <div class='header-left'>
            <span>北京</span>
            <i class='city-entry-arrow'></i>
        </div>
        <div class='header-right'>
            <input type="text">
            <i></i>
        </div>
    </header>
    <main>
        <nav>导航栏</nav>
        <ul>
            <li>list</li>
        </ul>
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
export default {

}
</script>

<style lang="stylus" scoped>
.container 
  height 100%
  header 
    height .44rem
    display flex
    background linear-gradient(to right, #ff7e6f, #ff2959)
    box-shadow 0px 2px 6px 0px rgba(255, 37, 68, 0.2)
    
    .header-left
      width .5rem
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
      height .34rem
      line-height .34rem
      border-radius 1rem
      margin-top .05rem 
      overflow hidden

      
      
    
      
      
    
</style>
