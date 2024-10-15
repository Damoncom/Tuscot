import React, { useState } from 'react';
import './index.scss';
import GaugeChart from './gaugeChart';
import top1 from '../../../img/dashboard/top1.png';
import top2 from '../../../img/dashboard/top2.png';
import top3 from '../../../img/dashboard/top3.png';
import top4 from '../../../img/dashboard/top4.png';

export default function Dashboard() {
  // top列表数据
  const [topData, setTopData] = useState([
    {
      id: 1,
      title: 'Total Employees',
      num: 2.3016,
      name: 'Task',
      percent: '+35%',
      time: 'This Month',
      icon: top1,
    },
    {
      id: 2,
      title: 'Total Tasks',
      num: 2.3016,
      name: 'Task',
      percent: '+35%',
      time: 'This Month',
      icon: top2,
    },
    {
      id: 3,
      title: 'Complated Task',
      num: 2.3016,
      name: 'Task',
      percent: '+35%',
      time: 'This Month',
      icon: top3,
    },
    {
      id: 4,
      title: 'Imcompleted Task',
      num: 2.3016,
      name: 'Task',
      percent: '+35%',
      time: 'This Month',
      icon: top4,
    },
  ]);

  // top右侧数据
  const [topRightData, setTopRightData] = useState({
    title: 'Task Target Actual vs Prediction',
    num: 10468,
    name: 'Tasks',
  });

  return (
    <div className="dashboard">
      <div className="top">
        <ul className="top_ul">
          {topData.map((item) => (
            <li className="top_li" key={item.id}>
              <div className="main">
                <div className="icon_box">
                  <img className="icon" src={item.icon} alt="icon" />
                </div>
                <p className="top_title">{item.title}</p>
                <p className="top_num">{item.num}</p>
                <p className="top_name">{item.name}</p>
                <div className="top_compare">
                  <p className="top_percent">{item.percent}</p>
                  <p className="top_time">{item.time}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="top_right">
          <p className="right_title">{topRightData.title}</p>
          <GaugeChart className="gauge_chart" />
          <div className="total">
            <p className="right_num">{topRightData.num}</p>
            <p className="right_name">{topRightData.name}</p>
          </div>
        </div>
      </div>

      <div className="middle"></div>
      <div className="bottom"></div>
    </div>
  );
}
