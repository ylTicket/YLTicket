<template>
  <div class="content">
    <theory-index></theory-index>
    <theory-details></theory-details>
  </div>
</template>

<script>
import theoryIndex from './views/theory/theoryIndex'
import theoryDetails from './views/theory/theoryDetails'
export default {
  components:{
    theoryIndex,
    theoryDetails
  }
}
</script>

<style lang="stylus" scoped>
.content
  height 100%
</style>