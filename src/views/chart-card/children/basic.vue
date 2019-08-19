<template>
  <a-row :gutter="16">
    <chart-card
      :sm="24" :md="12" :xl="6"
      class="basic"
      :loading="loading"
      title="泵房统计"
      :total="total"
    >
      <template v-slot:action>
        <a-tooltip title="泵房统计">
          <a-icon type="info-circle-o" />
        </a-tooltip>
      </template>
      <template v-slot:total>
        <span>
          {{total}}
        </span>
      </template>
      <div class="trend-group">
        <trend style="margin-right: 16px;" flag="up" name="周同比" value="12"></trend>
        <trend flag="down" name="日同比" value="11"></trend>
      </div>
      <template v-slot:footer>
        <div>日均增长<span>23</span></div>
      </template>
    </chart-card>

    <chart-card
      :sm="24" :md="12" :xl="6"
      class="basic"
      :loading="loading"
      :title="title"
      :total="total"
    >
      <template v-slot:action>
        <a-tooltip title="指标说明">
          <a-icon type="info-circle-o" />
        </a-tooltip>
      </template>
      <div class="trend-group">
        <TrendGroup :trend="trend"/>
      </div>
      <template v-slot:footer>
        <div>日均销售额<span>￥ 234.56</span></div>
      </template>
    </chart-card>

    <chart-card
      :sm="24" :md="12" :xl="6"
      class="basic"
      :loading="loading"
      :title="title"
      :total="total"
    > 
      <template v-slot:avatar>
        <div>
          <img
            alt="indicator"
            width="60"
            height="60"
            src="https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png"
          />
        </div>
      </template>
      <template v-slot:total>
        <span>
          {{total}}
        </span>
      </template>
      <template v-slot:action>
        <a-tooltip title="指标说明">
          <a-icon type="info-circle-o" />
        </a-tooltip>
      </template>
      <div class="trend-group">
        <TrendGroup :trend="trend"/>
      </div>
      <template v-slot:footer>
        <div>日均销售额<span>￥ 234.56</span></div>
      </template>
    </chart-card>
  </a-row>
</template>

<script>
import { ChartCard, Trend, TrendGroup } from '@/components/chart';
import CONFIG from '@/config';

export default {
  name: CONFIG.routerNameMap.chart_card_basic,
  components: {
    ChartCard,
    Trend,
    TrendGroup
  },
  data() {
    return {
      loading: false,
      title: '总销售额',
      total: '126,560',

      trend: [
        {
          name: '周同比',
          value: '12'
        },
        {
          name: '日同比',
          value: '13'
        }
      ],
    }
  }
}
</script>

<style scoped>
  .basic {
    /* width: 445px;
    height: 177px; */
  }
  .trend-group {
    text-align: left;
  }
</style>