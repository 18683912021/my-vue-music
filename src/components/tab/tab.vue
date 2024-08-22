<template>
    <div class="tab">
        <router-link class="tab-item" v-for="tab in tabs">
            <span class="tab-link">
                {{ tab.name }}
            </span>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'tab',
    data() {
        return {
            tabs: [
                { name: '推荐', path: '/recommend' },
                { name: '歌手', path: '/singer' },
                { name: '排行', path: '/rank' },
                { name: '搜索', path: '/search' }
            ]
        }
    }
}
</script>
<style lang="scss" scoped></style>