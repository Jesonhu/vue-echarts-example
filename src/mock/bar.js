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
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    extraCssText: 'text-align: left'
  },
  legend: {
    bottom: 8,
    left: 'center',
    itemWidth: 10,
    itemHeight: 10,
    data: [
      { name: 'run', icon: 'rect', textStyle: { width: '8', height: '8' }},
      { name: 'stop', icon: 'rect' },
      { name: 'error', icon: 'rect' },
    ],
    inactiveColor: '#C3C3C3',
  },
  // xAxis : [
  //   {
  //     type : 'category',
  //     axisLine: {
  //       lineStyle: {
  //         color: '#BFBFBF'
  //       }
  //     },
  //     nameGap: 10,
  //     axisTick: {
  //       alignWithLabel: true
  //     },
  //     data : ['某昌', '某口', '某阳', '某西湖']
  //   }
  // ],
  xAxis : {
    type : 'category',
    axisLine: {
      lineStyle: {
        color: '#BFBFBF'
      }
    },
    nameTextStyle: {
      padding: 4
    },
    axisTick: {
      alignWithLabel: true
    },
    data : ['某昌', '某口', '某阳', '某西湖']
  },
  yAxis : [
    {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    }
  ],
  series: [
    {
      type: 'bar',
      name: 'run',
      itemStyle: {
        color: '#3AA1FF'
      },
      data: [300, 300, 300, 300]
    },
    {
      type: 'bar',
      name: 'stop',
      itemStyle: {
        color: '#4ECB73'
      },
      data: [150, 150, 150, 150]
    },
    {
      type: 'bar',
      name: 'error',
      itemStyle: {
        color: '#FBD437'
      },
      data: [100, 100, 100, 100]
    }
  ]
}

// 堆叠柱状图1
export const barMack2 = {
  // title: {
  //   text: '区域运行统计',
  //   left: 8,
  //   top: 8,
  //   textStyle: {
  //     color: '#7F7F7F',
  //     fontSize: 14
  //   }
  // },
  tooltip : {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    extraCssText: 'text-align: left'
  },
  legend: {
    bottom: 8,
    left: 'center',
    itemWidth: 10,
    itemHeight: 10,
    data: [
      { name: 'run', icon: 'rect' },
      { name: 'season', icon: 'rect' },
      { name: 'stop', icon: 'rect' },
    ],
    inactiveColor: '#C3C3C3',
  },
  xAxis : [
    {
      type : 'category',
      axisLine: {
        lineStyle: {
          color: '#BFBFBF'
        }
      },
      axisTick: {
        alignWithLabel: true
      },
      data : ['某昌', '某口', '某阳', '某西湖']
    }
  ],
  yAxis : [
    {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    }
  ],
  series: [
    {
      type: 'bar',
      name: 'stop',
      stack: 'group',
      itemStyle: {
        color: '#FBD437'
      },
      data: [45, 65, 74, 98]
    },
    {
      type: 'bar',
      name: 'season',
      stack: 'group',
      itemStyle: {
        color: '#4ECB73'
      },
      data: [570, 640, 450, 212]
    },
    {
      type: 'bar',
      name: 'run',
      stack: 'group',
      itemStyle: {
        color: '#3AA1FF'
      },
      data: [421, 341, 240, 120]
    }
  ]
}