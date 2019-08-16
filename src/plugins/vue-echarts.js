import Vue from 'vue'
import VueEcharts from 'vue-echarts'

// 手动引入 ECharts 各模块来减小打包体积
// 更多类型参考: https://github.com/apache/incubator-echarts/blob/master/index.js
// series1: 饼图
// series2: 柱状图
// series3: 漏斗图
import 'echarts/lib/chart/pie' // series1
import 'echarts/lib/chart/bar' // series2
import 'echarts/lib/chart/funnel' // series3

// 组件
// comp1: 标题, 如果不引入即使配置了也不会显示.
// comp2: tooltip 点击出现的内容
// comp3: legend 内容切换选项
import 'echarts/lib/component/title' // basic1
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'

Vue.component('v-echarts', VueEcharts);