<template>
    <div class="recommend">推荐页面</div>
</template>
<script setup>
import { onMounted,ref } from "vue";
import { getRecommend } from '@/service/recommend'

const sliders = ref([]);
const albums = ref([]);

const fetchRecommend = async () => {
    const ressult = await getRecommend();
    sliders.value = ressult.sliders;
    albums.value = ressult.albums;
    console.log(ressult);
}

onMounted(fetchRecommend);
</script>
<style lang="scss" scoped></style>