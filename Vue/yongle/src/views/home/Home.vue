<template>
  <div class="container">
    <header>
      <headTop></headTop>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <foot></foot> 
    </footer>
  </div>
</template>
 
<script>
import headTop from '../../components/header/header'
import foot from '../../components/footer/footer';
export default {
    data() {
      return {
        active: 1,
      }
    },
    components:{
      headTop,
      foot,
    }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/border.styl';

.container {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;

  header {
    width: 100%
    height: 0.44rem;
    display: flex;
    background: linear-gradient(to right, #ff7e6f, #ff2959);
    box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
  }

  main {
    flex: 1;
    overflow-y: scroll;
  }

  footer {
    height: 0.5rem;
    width: 100%;
    background: white;
    border_1px(1px 0 0 0);
    display: flex;
    position: absolute;
    bottom: 0;
    z-index: 999;
  }
}
</style>