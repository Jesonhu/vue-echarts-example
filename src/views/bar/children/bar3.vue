<template>
  <div>
    <h2>未使用 dataset </h2>
    <div class="wrap">
      <v-echarts :options="options"></v-echarts>
    </div>

    <h2> dataset 方式 </h2>
    <div class="wrap">
      <v-echarts :options="options2"></v-echarts>
    </div>
  </div>
</template>

<script>
import config from '@/config';
import { noDataset, dataset } from '@/mock/bar';

export default {
  name: config.routerNameMap.bar3,
  data() {
    return {
      options: noDataset,

      options2: dataset
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
  margin-bottom: 16px;
}
</style>

<style>
  .echarts {
    width: 100%;
    height: 100%;
  }
</style>