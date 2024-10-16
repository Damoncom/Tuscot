import React from 'react';
import ReactECharts from 'echarts-for-react';

function BasicBar() {
  const getOption = () => ({
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      axisTick: {
        show: false, // 不显示坐标轴刻度线
      },
      axisLine: {
        show: false, // 不显示坐标轴线
      },

      splitLine: {
        show: false, // 不显示网格线
      },
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    series: [
      {
        data: [70, 60, 80, 75, 100],
        type: 'bar',
        barWidth: '60%',
        // TODO: 圆角问题
        itemStyle: {
          barBorderRadius: [20, 20, 0, 0],
          color: '#B6B6B6',
        },
      },
      {
        data: [50, 40, 60, 55, 70],
        type: 'bar',
        barWidth: '60%',
        barGap: '-100%',
        itemStyle: {
          barBorderRadius: [20, 20, 0, 0],
          color: '#6c5dd3',
        },
      },
    ],
  });

  return (
    <ReactECharts
      option={getOption()}
      style={{ height: '250px', width: '270px' }}
    />
  );
}

// TODO:传参处理

export default BasicBar;
