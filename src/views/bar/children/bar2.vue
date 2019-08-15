<template>
  <div>
    <h5>堆叠柱状图</h5>
    <div class="wrap">
      <v-echarts :options="options"></v-echarts>
    </div>
  </div>
</template>

<script>
import config from '@/config';
import { barMack2 } from '@/mock/bar';

export default {
  name: config.routerNameMap.bar2,
  data() {
    return {
      options: barMack2
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

<style>
  .echarts {
    width: 100%;
    height: 100%;
  }
</style>