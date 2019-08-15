const basicMock = () => {
  const resData = [];
  for (let i = 0; i <= 360; i++) {
      let t = i / 180 * Math.PI
      let r = Math.sin(2 * t) * Math.cos(2 * t)
      resData.push([r, i])
  }
  return resData;
};

const dataURI = 'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7';

export const basic = {
  title: {
    text: 'xx市运行统计',
    left: 8,
    top: 8
  },
  tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    // orient: 'vertical',
    // top: 'middle',
    bottom: 8,
    left: 'center',
    // data: ['运行', '停运','通讯中断'], // 简写方式
    data: [
      { name: '运行', icon: 'circle' },
      { name: '停运', icon: 'circle' },
      { name: '通讯中断', icon: 'circle' },
    ],
    inactiveColor: '#C3C3C3',
    // selectedMode: 'single',
    // selected: { '运行': true }
  },
  // @see https://echarts.baidu.com/option.html#color
  color: ['#5DB1FF', '#59D4D4', '#4ECB73'],
  series: [
    {
      type: 'pie',
      name: '泵房状态',
      radius: '50%',
      center: ['50%', '50%'],
      data: [
        {value: 60, name: '运行'},
        {value: 15, name: '停运'},
        {
          value: 25, 
          name: '通讯中断',
          tooltip: {
            formatter: '{b} : {c} ({d}%)'
          }
        }
      ],
      label: {
        color: '#000',
        // @see series[i]-pie.label.formatter
        formatter: '{b} : {c} ({d}%)' 
      }
    }
  ]
};

export const pieMock2 = {
  title: {
    text: 'xx市运行统计',
    left: 8,
    top: 8
  },
  tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    // orient: 'vertical',
    // top: 'middle',
    bottom: 8,
    left: 'center',
    // data: ['运行', '停运','通讯中断'], // 简写方式
    data: [
      { name: '正常', icon: 'circle' },
      { name: '停止', icon: 'circle' },
      { name: '通讯中断', icon: 'circle' },
    ],
    inactiveColor: '#C3C3C3'
  },
  // @see https://echarts.baidu.com/option.html#color
  color: ['#2DC05A', '#DC3A4C', '#6C6C6C'],
  series: [
    {
      type: 'pie',
      name: '泵房状态',
      center: ['50%', '50%'],
      radius: ['30%', '50%'],
      data: [
        {value: 8422, name: '正常'},
        {value: 1183, name: '停止'},
        {
          value: 394, 
          name: '通讯中断',
          tooltip: {
            formatter: '{b} : {c} ({d}%)'
          }
        }
      ],
      label: {
        color: '#000',
        // @see series[i]-pie.label.formatter
        formatter: '{b} : {c} ({d}%)' 
      }
    }
  ]
};

