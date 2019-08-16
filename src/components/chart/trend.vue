<template>
  <div class="trend">
    <span class="chart-trend__name" v-if="this.name.length > 0">{{ name }}</span>
    <span class="chart-trend__value">{{ _value }}</span>
    <span class="chart-trend__icon" 
      :class="['trend-icon', flag]"
    >
      <a-icon :type="'caret-' + flag"/>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Trend',
  props: {
    name: {
      type: String,
      default: '' 
    },
    value: {
      type: String|Number,
      default: '0'
    },
    percentage: {
      type: Boolean,
      default: true
    },
    flag: {
      type: String,
      default: 'up'
    }
  },
  computed: {
    _value() {
      const isShowPercentage = this.percentage;
      if (isShowPercentage) {
        return this.value + '%';
      }
      return this.value;
    }
  }
}
</script>

<style lang="scss" scoped>
  .trend {
    display: inline-block;
    font-size: 14px;
    line-height: 22px;
    text-align: left;

    .trend-icon {
      font-size: 12px;

      &.up, &.down {
        margin-left: 4px;
        position: relative;
        top: 1px;

        i {
          font-size: 12px;
          transform: scale(.83);
        }
      }

      &.up {
        color: #f5222d;
        vertical-align: text-bottom;
      }
      &.down {
        color: #52c41a;
        top: -1px;
      }
    }
  }
</style>
