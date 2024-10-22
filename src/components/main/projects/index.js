import React, { useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import './index.scss';
import {
  Wrapper,
  TypeButton,
  Main,
  List,
  Head,
  Title,
  SmallList,
  Description,
  Adaptation,
  More,
  Chat,
} from './style';
import typeIcon from '../../../img/project/typeIcon.jpg';
import linkIcon from '../../../img/project/linkIcon.jpg';
import chatIcon from '../../../img/project/chatIcon.jpg';
import listIcon from '../../../img/project/listMore.jpg';
import userIcon from '../../../img/project/user.jpg';
import smallListIcon from '../../../img/project/smallListMore.jpg';
import { Avatar } from 'antd';
import { useSelector } from 'react-redux';

export default function Projects() {
  // 从redux存储桶里获取数据
  const listData = useSelector((state) => state.listProject.listData);
  {
    /* TODO: 保零操作 */
  }

  return (
    <Wrapper className="wrapper">
      {/* TODO: type切换 */}
      <TypeButton src={typeIcon}></TypeButton>

      <Main>
        {listData.map((item) => (
          <List key={item.id}>
            <Head>
              <Title>{item.title}</Title>
              <p style={{ fontSize: '16px', color: '#B6B6B6' }}>
                ({listData.length})
              </p>
              <img
                src={listIcon}
                alt="icon"
                style={{
                  width: '24px',
                  height: '6px',
                  marginLeft: 'auto',
                  cursor: 'pointer',
                }}
              />
            </Head>
            {item.smallList.map((item) => (
              <SmallList key={item.id}>
                <div style={{ margin: '0 7%' }}>
                  <Head>
                    <Title>{item.title}</Title>
                    <img
                      src={smallListIcon}
                      alt="icon"
                      style={{
                        width: '23px',
                        height: '5px',
                        marginLeft: 'auto',
                        cursor: 'pointer',
                      }}
                    />
                  </Head>

                  <Description>{item.description}</Description>

                  <Head style={{ padding: '1% 0' }}>
                    {item.adaptation.map((i) => (
                      <Adaptation
                        key={i.id}
                        backgroundColor={i.color.bg}
                        color={i.color.text}
                      >
                        {i.name}
                      </Adaptation>
                    ))}
                  </Head>

                  <More>
                    <img
                      src={linkIcon}
                      alt="icon"
                      style={{
                        width: '8px',
                        height: '16px',
                        cursor: 'pointer',
                      }}
                    />

                    <Chat>
                      <p>{item.noRead}</p>
                      <img
                        src={chatIcon}
                        alt="icon"
                        style={{
                          width: '14px',
                          height: '14px',
                          margin: '0 20%',
                          cursor: 'pointer',
                        }}
                      />
                    </Chat>
                    <Avatar.Group style={{ marginLeft: 'auto' }}>
                      <Avatar src={userIcon} />
                      <Avatar src={userIcon} />
                      <Avatar src={userIcon} />
                    </Avatar.Group>
                  </More>
                </div>
              </SmallList>
            ))}
          </List>
        ))}
      </Main>
    </Wrapper>
  );
}
