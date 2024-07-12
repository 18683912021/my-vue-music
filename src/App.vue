<template>
  <m-header />
</template>
<script>
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
    MHeader: () => import('@/pages/components/header/header.vue')
  }
}
</script>

<style lang="scss">
/*每个页面公共css */
</style>
