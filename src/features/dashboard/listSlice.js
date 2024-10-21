import { createSlice } from '@reduxjs/toolkit';
import {
  topData,
  topRightData,
  middleLeftData,
  middleMiddleData,
  middleRightData,
  bottomData,
} from '../../components/main/dashboard/data';

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    topData,
    topRightData,
    middleLeftData,
    middleMiddleData,
    middleRightData,
    bottomData,
  },
  reducers: {
    getList: (state) => {
      state = state.value;
    },
  },
});
// 每个 case reducer 函数会生成对应的 Action creators
export const { getList } = listSlice.actions;

export default listSlice.reducer;
