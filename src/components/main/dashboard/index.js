import React, { useState } from 'react';

export default function Dashboard() {
  const [topData, setTopData] = useState([
    {
      id: 1,
      title: 'Total Employees',
      num: 2.3016,
      name: 'Task',
      percent: '+35%',
      time: 'This Month',
      icon: '',
    },
    {
      id: 2,
      title: 'Total Tasks',
      num: 2.3016,
      name: 'Task',
      percent: '+35%',
      time: 'This Month',
      icon: '',
    },
    {
      id: 3,
      title: 'Complated Task',
      num: 2.3016,
      name: 'Task',
      percent: '+35%',
      time: 'This Month',
      icon: '',
    },
    {
      id: 4,
      title: 'Imcompleted Task',
      num: 2.3016,
      name: 'Task',
      percent: '+35%',
      time: 'This Month',
      icon: '',
    },
  ]);
  return (
    <div className="dashboard">
      <div className="top">
        <ul>
          <li></li>
        </ul>
        <div className="top_right"></div>
      </div>
      <div className="middle"></div>
      <div className="bottom"></div>
    </div>
  );
}
