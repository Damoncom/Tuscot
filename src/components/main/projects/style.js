import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 102px;
  left: 280px;
  width: 100%;
  height: 85%;
  overflow: scroll;
`;

export const TypeButton = styled.img`
  width: 75px;
  height: 37px;
  border-radius: 8px;
  cursor: pointer;
`;

export const Main = styled.ul`
  display: flex;
`;

export const List = styled.li`
  min-width: 345px;
  width: 23%;
  margin-right: 5%;
`;
export const Head = styled.div`
  display: flex;
  align-items: center;
  padding: 8% 0;
`;

export const Title = styled.p`
  font-size: 19px;
  line-height: auto;
  margin-right: 5px;
`;

export const SmallList = styled.div`
  width: 100%;
  height: 198px;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 19px;
`;

export const Description = styled.p`
  font-size: 14.4px;
  color: #b6b6b6;
`;

export const Adaptation = styled.div`
  padding: 10px;
  background-color: #eeeff7;
  font-size: 13px;
  color: #545dad;
  border-radius: 4px;
  margin: 3% 3% 1% 0;
`;

export const More = styled.div`
  width: 100%;
  height: 31px;
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  margin-bottom: 300px;
`;

export const Chat = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10%;
  font-size: 14.4px;
  color: #b6b6b6;
`;
