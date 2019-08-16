<template>
  <div class="parent_page">
    <h1> Chart_Card </h1>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import CONFIG from '@/config';

export default {
  name: CONFIG.routerNameMap.chart_card
}
</script>

<style scoped>
.parent_page {
  background-color:rgba(0, 0, 0, .3);
}
</style>