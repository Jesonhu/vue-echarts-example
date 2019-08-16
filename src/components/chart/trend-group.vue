<template>
  <div class="trend-group">
    <Trend 
      class="trend-group__item"
      :name="oldData.name"
      :value="oldData.value"
      :flag="oldData.flag"
    />
    <Trend 
      class="trend-group__item"
      :name="newData.name"
      :value="newData.value"
      :flag="newData.flag"
    />
  </div>
</template>

<script>
import Trend from './trend';

export default {
  name: 'trend-group',
  components: {
    Trend
  },
  props: {
    trend: {
      type: Array,
      defualt: []
    },
  },
  data() {
    return {
      oldData: {},
      newData: {}
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const dataTpl = { name: '名称', value: '11', percentage: true, flag: 'up' };
      const oldData = Object.assign({}, dataTpl, this.trend[0]);
      const newData = Object.assign({}, dataTpl, this.trend[1]);
      const flag = 'flag';

      if (parseInt(oldData.value) > parseInt(newData.value)) {
        oldData[flag] = 'up';
        newData[flag] = 'down';
      } else {
        oldData[flag] = 'down';
        newData[flag] = 'up';
      }

      this.oldData = oldData;
      this.newData = newData;
    }
  }
}
</script>

<style lang="scss" scoped>
.trend-group {
  &__item {
    margin-right: 16px;
  }
}
</style>