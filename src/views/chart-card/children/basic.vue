<template>
  <a-row :gutter="16">
    <chart-card
      :sm="24" :md="12" :xl="6"
      class="basic"
      :loading="loading"
      title="泵房统计"
      :total="total"
    >
      <a-tooltip title="泵房统计" slot="action">
        <a-icon type="info-circle-o" />
      </a-tooltip>
      <div class="trend-group">
        <trend style="margin-right: 16px;" flag="up" name="周同比" value="12"></trend>
        <trend flag="down" name="日同比" value="11"></trend>
      </div>
      <div slot="footer">日均增长<span>23</span></div>
    </chart-card>

    <chart-card
      :sm="24" :md="12" :xl="6"
      class="basic"
      :loading="loading"
      :title="title"
      :total="total"
    >
      <a-tooltip title="指标说明" slot="action">
        <a-icon type="info-circle-o" />
      </a-tooltip>
      <div class="trend-group">
        <TrendGroup :trend="trend"/>
      </div>
      <div slot="footer">日均销售额<span>￥ 234.56</span></div>
    </chart-card>

    <chart-card
      :sm="24" :md="12" :xl="6"
      class="basic"
      :loading="loading"
      :title="title"
      :total="total"
    >
      <div slot="avatar">
        <img
          alt="indicator"
          width="60"
          height="60"
          src="https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png"
        />
      </div>
      <a-tooltip title="指标说明" slot="action">
        <a-icon type="info-circle-o" />
      </a-tooltip>
      <div class="trend-group">
        <TrendGroup :trend="trend"/>
      </div>
      <div slot="footer">日均销售额<span>￥ 234.56</span></div>
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