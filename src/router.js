import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CONFIG from './config';

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    // 饼状图
    {
      path: '/pie',
      name: 'pie',
      component: () => import('@/views/pie'),
      children: [
        {
          path: 'example1',
          name: 'pieBasic',
          meta: { title: '基本饼状图' },
          component: () => import('@/views/pie/children/basic')
        },
        {
          path: 'example2',
          name: CONFIG.routerNameMap.pie2,
          meta: { title: '中空饼状图' },
          component: () => import('@/views/pie/children/pie2')
        }
      ]
    },

    // 柱状图
    {
      path: '/bar',
      name: CONFIG.routerNameMap.bar,
      component: () => import('@/views/bar'),
      children: [
        {
          path: 'example1',
          name: CONFIG.routerNameMap.bar1,
          meta: { title: '基本柱状图' },
          component: () => import('@/views/bar/children/bar1')
        },
        {
          path: 'example2',
          name: CONFIG.routerNameMap.bar2,
          meta: { title: '堆叠柱状图' },
          component: () => import('@/views/bar/children/bar2')
        },
        {
          path: 'example3',
          name: CONFIG.routerNameMap.bar3,
          meta: { title: 'dataset 柱状图' },
          component: () => import('@/views/bar/children/bar3')
        }
      ]
    },

    // 漏斗图
    {
      path: '/funnel',
      name: CONFIG.routerNameMap.funnel,
      component: () => import('@/views/funnel'),
      children: [
        {
          path: 'example1',
          name: CONFIG.routerNameMap.funnel1,
          meta: { title: '基本漏斗图' },
          component: () => import('@/views/funnel/children/funnel1')
        }
      ]
    },

    // cart_card
    {
      path: '/chart-card',
      name: CONFIG.routerNameMap.chart_card,
      component: () => import('@/views/chart-card'),
      children: [
        {
          path: 'basic',
          name: CONFIG.routerNameMap.cc_basic,
          name: { title: '基本使用' },
          component: () => import('@/views/chart-card/children/basic')
        }
      ]
    }
  ]
})

// line
// bar
// scatter
// effectScatter
// pie
// candlestick
// radar
// boxplot
// map
// heatmap
// lines
// graph
// treemap
// sunburst
// parallel
// funnel
// gauge
// custom
