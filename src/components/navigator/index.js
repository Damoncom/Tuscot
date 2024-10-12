import React from 'react';
import index from './index.scss';

export default function Navigator() {
  return (
    <div className={index.navigator}>
      {/* logo */}
      <div className={index.logoBox}>
        <div className={index.imgBox}>
          <img
            src="../../../public/logo/main_logo.png"
            className={index.logoImg}
          />
          <p className={index.logoText}>Tuscot</p>
        </div>
      </div>

      {/* search */}
      <div className={index.search}>
        <input placeholder="Search..." className={index.searchInput}></input>
        <i class="iconfont icon-fangdajing"></i>
      </div>

      {/* add project按钮 */}
      <div className={index.addProject}>
        <p className={index.addText}>+ New Project</p>
      </div>

      {/* message */}
      <div className={index.message}>
        <i class="iconfont icon-lingdang" />
      </div>

      {/* user */}
      <div className={index.user}>
        <div className={index.imgBox}>
          <img src="" className={index.img} />
        </div>
        <div className={index.text}>
          <p className={index.name}></p>
          <p className={index.job}></p>
        </div>
      </div>

      {/* arrow */}
      <div className={index.arrow}>
        <i class="iconfont icon-xialajiantouxiao" />
      </div>
    </div>
  );
}
