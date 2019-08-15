<template>
  <div>
    <h2>基础漏斗图</h2>
    <div class="wrap">
      <v-echarts :options="options"></v-echarts>
    </div>
  </div>
</template>

<script>
import CONFIG from '@/config'
import { basic } from '@/mock/funnel'

export default {
  name: CONFIG.routerNameMap.funnel1,
  data() {
    return {
      options: basic
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 500px;
  height: 420px;
  background-color:rgba(0, 0, 0, .1);
  margin: 0 auto;
}
</style>