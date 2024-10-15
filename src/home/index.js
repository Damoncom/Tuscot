import React, { useState } from 'react';
import Navigator from '../components/navigator/index';
import SideBar from '../components/sideBar/index';
import Dashboard from '../components/main/dashboard/index';

export default function Home() {
  return (
    <>
      <Navigator />
      <SideBar />
      <Dashboard />
    </>
  );
}
