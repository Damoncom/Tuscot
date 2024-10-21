import React from 'react';
import ReactECharts from 'echarts-for-react';

function GaugeChart(data) {
  const getOption = () => ({
    series: [
      {
        type: 'gauge',
        startAngle: data.data.startAngle,
        endAngle: 0,
        min: 0,
        max: data.data.max,

        itemStyle: {
          color: data.data.color,
        },
        progress: {
          show: true,
          roundCap: true,
          width: 22,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 22,
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
            value: data.data.current,
          },
        ],
      },
    ],
  });

  return (
    <ReactECharts
      option={getOption()}
      style={{ height: data.data.height, width: data.data.width }}
    />
  );
}

export default GaugeChart;
