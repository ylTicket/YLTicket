<template>
<div class='container'>
    <router-view></router-view>
    <!-- <ticketDetail></ticketDetail>
    <ticketBuy></ticketBuy> -->
</div>
</template>

<script>
import ticketDetail from './views/detile/ticketDetail'
import ticketBuy from './views/detile/ticketBuy'
export default {
    components: {
      ticketDetail,
      ticketBuy
    }
}
</script>

<style lang="stylus" scoped>
.container 
  height 100% 
  
</style>
