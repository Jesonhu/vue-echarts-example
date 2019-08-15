<template>
  <div>
    <h1>漏斗图</h1>
    <div class="view">
      <router-view/>
    </div>
  </div>
</template>

<script>
import CONFIG from '@/config'

export default {
  name: CONFIG.routerNameMap.funnel
}
</script>

<style>
.echarts {
  width: 100%;
  height: 100%;
}
</style>