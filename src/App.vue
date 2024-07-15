<template>
  <m-header />
</template>
<script>
import Header from '@/pages/components/header/header.vue'
export default {
  onLaunch: function () {
    // console.log('App Launch')
  },
  onShow: function () {
    // console.log('App Show')
  },
  onHide: function () {
    // console.log('App Hide')
  },
  components: {
    MHeader: Header
  }
}
</script>

<style lang="less">
/*每个页面公共css */
</style>
