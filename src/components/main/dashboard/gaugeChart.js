import React from 'react';
import ReactECharts from 'echarts-for-react';

function GaugeChart() {
  const getOption = () => ({
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 15000,

        itemStyle: {
          color: '#6c5dd3',
        },
        progress: {
          show: true,
          roundCap: true,
          width: 25,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 25,
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        title: {
          show: false,
        },
        detail: {
          show: false,
        },
        data: [
          {
            value: 10468,
          },
        ],
      },
    ],
  });

  return (
    <ReactECharts
      option={getOption()}
      style={{ height: '300px', width: '370px' }}
    />
  );
}

export default GaugeChart;
