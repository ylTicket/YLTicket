<template>
<div class='container'>
    <ticket-index></ticket-index>
</div>
</template>

<script>
import ticketIndex from './views/home/index/ticketIndex'
export default {
    components: {
        ticketIndex
    }
}
</script>

<style lang="stylus" scoped>
.container 
  height 100% 
  
</style>
