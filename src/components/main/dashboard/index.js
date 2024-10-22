import React, { useState } from 'react';
import './index.scss';
import GaugeChart from './echarts/gaugeChart';
import BasicBar from './echarts/basicBar';
import SingleBar from './echarts/singleBar';
import middleLeftIcon from '../../../img/dashboard/middle1.png';
import { useSelector } from 'react-redux';
import { addComma } from '../../../utils/string-processing';

export default function Dashboard() {
  // 从redux存储桶里获取数据
  const listData = useSelector((state) => state.list);

  return (
    <div className="dashboard">
      {/* top */}
      <div className="top">
        <ul className="top_ul">
          {listData.topData.map((item) => (
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
          <p className="right_title">{listData.topRightData.title}</p>
          <div className="top_right_draft">
            <GaugeChart
              data={{
                current: listData.topRightData.num,
                max: 15000,
                startAngle: 180,
                color: '#6c5dd3',
                height: '300px',
                width: '370px',
              }}
            />
            <div className="total">
              <p className="right_num">{addComma(listData.topRightData.num)}</p>
              <p className="right_name">{listData.topRightData.name}</p>
            </div>
          </div>
        </div>
      </div>

      {/* middle */}
      <div className="middle">
        <div className="middle_left">
          <div className="middle_left_title">
            {listData.middleLeftData.title}
          </div>
          <div className="draft_box">
            <GaugeChart
              data={{
                current: listData.middleLeftData.num,
                max: 100,
                startAngle: 360,
                color: '#52CD9F',
                height: '200px',
                width: '270px',
              }}
            />
            <div className="draft">
              <p className="draft_num">{listData.middleLeftData.num}%</p>
              <p className="draft_name">{listData.middleLeftData.name}</p>
            </div>
          </div>

          <div className="middle_left_bottom">
            <img src={middleLeftIcon} className="left_bottom_img" alt="icon" />

            <div className="left_bottom_text">
              <p className="left_bottom_title">
                {listData.middleLeftData.bottomTitle}
              </p>
              <p className="left_bottom_name">
                {listData.middleLeftData.botomName}
              </p>
            </div>
            <p className="left_bottom_count">{listData.middleLeftData.count}</p>
          </div>
        </div>
        <div className="middle_middle">
          <div className="middle_middle_title">
            {listData.middleMiddleData.title}
          </div>
          <div className="m_m_draft">
            <BasicBar />
          </div>

          <div className="m_m_bottom">
            {listData.middleMiddleData.bottom.map((item) => (
              <div className="middle_middle_bottom" key={item.id}>
                <img src={item.icon} className="middle_bottom_img" alt="icon" />
                <div className="middle_bottom_text">
                  <p className="middle_bottom_title">{item.bottomTitle}</p>
                  <p className="middle_bottom_name">{item.botomName}</p>
                </div>
                <p className="middle_bottom_count">{item.count}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="middle_right">
          <div className="middle_right_title">
            {listData.middleRightData.title}
          </div>
          <ul className="middle_right_ul">
            {listData.middleRightData.employees.map((item) => (
              <li key={item.id} className="middle_right_li">
                <div className="right_li_icon">
                  <img src={item.icon} className="right_li_img" alt="icon" />
                </div>
                <p className="right_li_name">{item.name}</p>
                <p className="right_li_job">{item.job}</p>
                <p className="right_li_task">{item.tasks} Tasks</p>
                <p className="right_li_pts">{item.pts} pts</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* bottom */}
      <div className="bottom">
        <ul className="bottom_ul">
          {listData.bottomData.map((item) => (
            <li className="bottom_li" key={item.id}>
              <div className="bottom_text">
                <p className="bottom_title">{item.title}</p>
                <p className="bottom_num">{item.num}</p>
                <p className="bottom_name">{item.name}</p>
                <SingleBar
                  data={{
                    current: item.num,
                    max: 1200,
                    color: item.color,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
