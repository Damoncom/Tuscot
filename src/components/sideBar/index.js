import React, { useState, createContext } from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import dashboardIcon from '../../img/sidebar/manage.png';
import dashboardIcon2 from '../../img/sidebar/manage2.png';
import project from '../../img/sidebar/task.png';
import project2 from '../../img/sidebar/task2.png';
import task from '../../img/sidebar/catalog.png';
import task2 from '../../img/sidebar/catalog2.png';
import message from '../../img/sidebar/message.png';
import message2 from '../../img/sidebar/message2.png';
import analytics from '../../img/sidebar/barChart.png';
import analytics2 from '../../img/sidebar/barChart2.svg';

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

  //   每个项图片的显示状态,默认显示第一项
  const [visibleImageIndex, setVisibleImageIndex] = useState(0);
  const navigate = useNavigate();

  function chooseList(index) {
    setVisibleImageIndex((prevIndex) => (prevIndex === index ? 0 : index));
    if (index === 0) {
      navigate('/Home/Dashboard', { state: { index } });
    } else if (index === 1) {
      navigate('/Home/Projects', { state: { index } });
    } else if (index === 2) {
      navigate('/Home/MyTask', { state: { index } });
    } else if (index === 3) {
      navigate('/Home/Message', { state: { index } });
    } else if (index === 4) {
      navigate('/Home/Analytics', { state: { index } });
    }
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
              <i className="icon-guanli"></i>
            </div>

            <p
              className="listTitle"
              style={{
                color: visibleImageIndex === index ? '#6c5dd3' : '#b6b6b6',
              }}
            >
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
