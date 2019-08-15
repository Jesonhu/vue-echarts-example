<template>
  <div>
    <h2>基本饼状图</h2>
    <div class="wrap">
      <v-echarts :options="options"></v-echarts>
    </div>
  </div>
</template>

<script>
import { basic } from '@/mock/pie';
export default {
  name: 'pie-basic',
  data() {
    return {
      options: basic,
      theme: 'light'
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