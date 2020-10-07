<template>
  <header>
    <div class="header-left">
      <span>北京</span>
      <i class="city-entry-arrow"></i>
    </div>
    <div class="header-right">
      <input type="text" placeholder="搜索" />
      <i></i>
    </div>
  </header>
</template>

<script>
export default {
    

}
</script>


<style lang="stylus">
.header-left {
  weight: 0.5rem;
  height: 0.4rem;
  padding: 0 0.15rem 0 0.15rem;
  display flex
  span {
    line-height: 0.44rem;
  }

  .city-entry-arrow {
    border: 0.04rem solid #fff;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    display: inline-block;
    margin-left: 0.1rem;
    margin-top: .18rem
  }
}

.header-right {
  width: 70%
  line-height: 0.3rem;
  margin-top: 0.04rem;

  input {
    width: 90%;
    border-radius: 0.5rem;
    text-align: center;
  }
}    
</style>