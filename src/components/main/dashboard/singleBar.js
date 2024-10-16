import React from 'react';
import ReactECharts from 'echarts-for-react';

function SingleBar() {
  const getOption = () => ({
    legend: {},

    xAxis: {
      type: 'value',
      show: false,
    },
    yAxis: {
      type: 'category',
      show: false,
    },
    series: [
      {
        type: 'bar',
        barWidth: '10%',
        barGap: '-100%',
        data: [1200],
        itemStyle: {
          borderRadius: [0, 50, 50, 0],
          color: '#EFF1F4',
        },
      },
      {
        type: 'bar',
        barWidth: '10%',
        data: [940],
        itemStyle: {
          borderRadius: [0, 50, 50, 0],
          color: '#6C5DD3',
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

export default SingleBar;
