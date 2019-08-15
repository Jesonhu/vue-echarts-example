<template>
  <div>
    <h2>中空饼状图</h2>
    <div class="wrap">
      <v-echarts :options="options"></v-echarts>
    </div>
  </div>
</template>

<script>
import { pieMock2 } from '@/mock/pie';
import CONFIG from '@/config';

export default {
  name: CONFIG.routerNameMap.pie2,
  data() {
    return {
      options: pieMock2,
      theme: 'light'
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 700px;
  height: 420px;
  background-color:rgba(0, 0, 0, .1);
  margin: 0 auto;
}
</style>

<style>
  .echarts {
    width: 100%;
    height: 100%;
  }
</style>