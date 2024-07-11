<template>
    <view>
      <text>{{ message }}</text>
    </view>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const message = ref('Hello, Uni-app with Vue 3!');
  </script>
  
  <style scoped>
  text {
    font-size: 16px;
  }
  </style>