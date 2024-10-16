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

export default function Home() {
  // 获取sideBar传参
  const { state } = useLocation();

  const nowIndex = state;

  return (
    <>
      <Navigator />
      <SideBar />
      {nowIndex.index === 0 && <Dashboard />}
      {nowIndex.index === 1 && <Projects />}
      {nowIndex.index === 2 && <MyTask />}
      {nowIndex.index === 3 && <Message />}
      {nowIndex.index === 4 && <Analytics />}
      <Counter />
    </>
  );
}
