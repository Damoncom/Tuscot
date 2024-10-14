import React, { useState } from 'react';
import './index.scss';
import dashboardIcon from '../../img/manage.svg';
import dashboardIcon2 from '../../img/manage2.svg';
import project from '../../img/task.svg';
import project2 from '../../img/task2.svg';
import task from '../../img/catalog.svg';
import task2 from '../../img/catalog2.svg';
import message from '../../img/manage.svg';
import message2 from '../../img/manage2.svg';
import analytics from '../../img/barChart.svg';
import analytics2 from '../../img/barChart2.svg';

// TODO:图片的导入
export default function SideBar() {
  // 列表数据
  const [lists, setList] = useState([
    {
      id: 1,
      title: 'Dashboard',
      icon: dashboardIcon,
      icon2: dashboardIcon2,
    },
    {
      id: 2,
      title: 'Projects',
      icon: project,
      icon2: project2,
    },
    {
      id: 3,
      title: 'My Task',
      icon: task,
      icon2: task2,
    },
    {
      id: 4,
      title: 'Message',
      icon: message,
      icon2: message2,
    },
    {
      id: 5,
      title: 'Analytics',
      icon: analytics,
      icon2: analytics2,
    },
  ]);

  //   每个项图片的显示状态
  const [visibleImageIndex, setVisibleImageIndex] = useState(null);

  function chooseList(index) {
    console.log(index);
    // console.log(e.currentTarget.dataset);
    setVisibleImageIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  return (
    <div className="sideBar">
      <ul className="listUl">
        {lists.map((item, index) => (
          <li
            key={item.id}
            data-index={item.id}
            data-name={item.title}
            className="listLi"
            onClick={() => chooseList(index)}
          >
            <div className="imgBox">
              <img
                src={visibleImageIndex === index ? item.icon2 : item.icon}
                className="listIcon"
                alt="icon"
              />
            </div>

            <p className="listTitle">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
