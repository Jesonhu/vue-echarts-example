export const basic = {
  title: {
    text: '区域运行统计',
    left: 8,
    top: 8,
    textStyle: {
      color: '#7F7F7F',
      fontSize: 14
    }
  },
  tooltip : {
    trigger: 'item',
    axisPointer: {
      type: 'shadow'
    },
    // formatter: '{a} {b} {c}',
    extraCssText: 'text-align: left'
  },
  legend: {
    bottom: 8,
    left: 'center',
    itemWidth: 10,
    itemHeight: 10,
    data: [
      { name: '常年运行', icon: 'rect' },
      { name: '季节运行', icon: 'rect' },
      { name: '停运', icon: 'rect' },
    ],
    inactiveColor: '#C3C3C3',
  },
  series: [
    {
      type: 'funnel',
      name: '漏斗图',
      label: {
        show: true,
        position: 'outside',
        formatter: '{b} {c}',
        color: '#545454'
      },
      labelLine: {
        lineStyle: {
          color: '#DFDFDF'
        }
      },
      min: 10,
      minSize: '10%',
      gap: 1,
      data: [
        { 
          value: 2410, 
          name: '常年运行',
          itemStyle: {
            color: '#3AA1FF'
          }
        },
        {
          value: 1240, 
          name: '季节运行',
          itemStyle: {
            color: '#4ECB73'
          }
        },
        { 
          value: 850, 
          name: '停运',
          itemStyle: {
            color: '#FBD437'
          }
        }
      ]
    },
    {
      type: 'funnel',
      name: '漏斗图',
      label: {
        show: true,
        position: 'inside',
        formatter: '{d}%'
      },
      labelLine: {
        lineStyle: {
          color: '#DFDFDF'
        }
      },
      minSize: '10%',
      gap: 1,
      data: [
        { 
          value: 2410, 
          name: '常年运行',
          itemStyle: {
            color: '#3AA1FF'
          }
        },
        {
          value: 1240, 
          name: '季节运行',
          itemStyle: {
            color: '#4ECB73'
          }
        },
        { 
          value: 850, 
          name: '停运',
          itemStyle: {
            color: '#FBD437'
          }
        }
      ]
    }
  ]
}