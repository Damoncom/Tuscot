import React, { useState } from 'react';
import './index.scss';
import logo from '../../img/circle.svg';
import searchIcon from '../../img/manify.svg';
import messageIcon from '../../img/bell.svg';
import userIcon from '../../img/user.png';
import arrowIcon from '../../img/arrow.svg';

export default function Navigator() {
  const [user, setUser] = useState({
    img: userIcon,
    username: 'Cavin petarrson',
    job: 'Manager',
  });

  return (
    <div className="navigator">
      {/* logo */}
      <div className="logoBox">
        <div className="imgBox">
          {/* TODO:logo抠图 */}
          {/* TODO:iconfont的引用失效 */}
          {/* <img src="../../../public/logo/main_logo.png" className="logoImg" /> */}
          {/* <i className="iconfont icon-circulation-full"></i> */}
          <img src={logo} className="icon-circulation-full" alt="logo" />
          <p className="logoText">Tuscot</p>
        </div>
      </div>

      {/* search */}
      <div className="search">
        <input placeholder="Search..." className="searchInput"></input>
        <img src={searchIcon} className="icon-fangdajing" alt="search" />
      </div>

      {/* add project按钮 */}
      <div className="addProject">
        <p className="addText">+ New Project</p>
      </div>

      {/* message */}
      <div className="message">
        <img src={messageIcon} className="icon-lingdang" alt="message" />
      </div>

      {/* user */}
      <div className="user">
        <div className="imgBox">
          <img src={user.img} className="img" />
        </div>
        <div className="text">
          <p className="name">{user.username}</p>
          <p className="job">{user.job}</p>
        </div>
        <div className="arrow">
          <img src={arrowIcon} className="icon-xialajiantouxiao" />
        </div>
      </div>
    </div>
  );
}
