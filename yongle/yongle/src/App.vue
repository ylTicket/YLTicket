<template>
<div class='container'>
    <!-- <router-view></router-view> -->
    <ticketDetail></ticketDetail>
</div>
</template>

<script>
import ticketDetail from './views/detile/ticketDetail'
export default {
    components: {
      ticketDetail
    }
}
</script>

<style lang="stylus" scoped>
.container 
  height 100% 
  
</style>
