import React from 'react';
import ReactECharts from 'echarts-for-react';

function GaugeChart2() {
  const getOption = () => ({
    series: [
      {
        type: 'gauge',
        startAngle: 360,
        endAngle: 0,
        min: 0,
        max: 100,

        itemStyle: {
          color: '#52CD9F',
        },
        progress: {
          show: true,
          roundCap: true,
          width: 20,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 20,
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
            value: 82,
          },
        ],
      },
    ],
  });

  return (
    <ReactECharts
      option={getOption()}
      style={{ height: '200px', width: '270px' }}
    />
  );
}

export default GaugeChart2;
