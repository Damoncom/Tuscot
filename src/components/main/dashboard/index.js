import React, { useState } from 'react';
import './index.scss';
import GaugeChart from './gaugeChart';
import GaugeChart2 from './GaugeChart2';
import top1 from '../../../img/dashboard/top1.png';
import top2 from '../../../img/dashboard/top2.png';
import top3 from '../../../img/dashboard/top3.png';
import top4 from '../../../img/dashboard/top4.png';
import middleLeftIcon from '../../../img/dashboard/middle1.png';
import middleMiddleIcon2 from '../../../img/dashboard/middle2.png';
import middleMiddleIcon3 from '../../../img/dashboard/middle3.png';

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

  // middle的left数据
  const [middleLeftData, setMiddleLeftData] = useState({
    title: 'Complete Task Target',
    num: 82,
    name: 'Task',
    bottomTitle: 'Completed Task',
    botomName: 'Global',
    count: 455,
  });

  // middle的middle数据
  const [middleMiddleData, setMiddleMiddleData] = useState({
    title: 'Task Count',
    bottom: [
      {
        id: 1,
        bottomTitle: 'Expanslon Europo',
        botomName: 'Global',
        count: 245,
        icon: middleMiddleIcon2,
      },
      {
        id: 2,
        bottomTitle: 'Payment Promo',
        botomName: 'Commercial',
        count: 122,
        icon: middleMiddleIcon3,
      },
    ],
  });

  return (
    <div className="dashboard">
      {/* top */}
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

      {/* middle */}
      <div className="middle">
        <div className="middle_left">
          <div className="middle_left_title">{middleLeftData.title}</div>
          <GaugeChart2 />
          <div className="draft">
            <p className="draft_num">{middleLeftData.num}%</p>
            <p className="draft_name">{middleLeftData.name}</p>
          </div>

          <div className="middle_left_bottom">
            <img src={middleLeftIcon} className="left_bottom_img" alt="icon" />

            <div className="left_bottom_text">
              <p className="left_bottom_title">{middleLeftData.bottomTitle}</p>
              <p className="left_bottom_name">{middleLeftData.botomName}</p>
            </div>
            <p className="left_bottom_count">{middleLeftData.count}</p>
          </div>
        </div>
        <div className="middle_middle">
          <div className="middle_middle_title">{middleMiddleData.title}</div>

          {middleMiddleData.bottom.map((item) => (
            <div className="middle_middle_bottom">
              <img src={item.icon} className="middle_bottom_img" alt="icon" />
              <div className="middle_bottom_text">
                <p className="middle_bottom_title">{item.bottomTitle}</p>
                <p className="middle_bottom_name">{item.botomName}</p>
              </div>
              <p className="middle_bottom_count">{item.count}</p>
            </div>
          ))}
        </div>
        <div className="middle_right"></div>
      </div>

      {/* bottom */}
      <div className="bottom"></div>
    </div>
  );
}
