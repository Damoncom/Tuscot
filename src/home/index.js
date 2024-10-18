import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router';
import Navigator from '../components/navigator/index';
import SideBar from '../components/sideBar/index';
import Dashboard from '../components/main/dashboard/index';
import Projects from '../components/main//projects/index';
import MyTask from '../components/main/myTask/index';
import Message from '../components/main/message/index';
import Analytics from '../components/main/analytics/index';
import { Counter } from '../features/counter/Counter';
import AntDesign from '../components/antDesign/index';

// TODO:根据现在路径判断控制index
export default function Home() {
  let nowIndex = 0;
  // 获取sideBar传参
  const { state } = useLocation();

  if (state) {
    nowIndex = state;
  }
  // const nowIndex = state;

  return (
    <>
      <Navigator />
      <SideBar />
      {(nowIndex.index === 0) | ((nowIndex === null) | (nowIndex === 0)) && (
        <Dashboard />
      )}
      {nowIndex.index === 1 && <Projects />}
      {nowIndex.index === 2 && <MyTask />}
      {nowIndex.index === 3 && <Message />}
      {nowIndex.index === 4 && <Analytics />}
      {/* <Counter /> */}
      {/* <AntDesign /> */}
    </>
  );
}
