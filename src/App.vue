<template>
  <m-header></m-header>
  
  <Tab />
</template>

<script>
import Header from '@/components/header/header'
import Tab from '@/components/tab/tab'

export default {
  components: {
    MHeader: Header,
    Tab: Tab
  },
  computed: {

  }
}
</script>
