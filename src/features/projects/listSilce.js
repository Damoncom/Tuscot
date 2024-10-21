import { createSlice } from '@reduxjs/toolkit';
import { listData } from '../../components/main/projects/data';

export const listProjectSlice = createSlice({
  name: 'listProject',
  initialState: {
    listData,
  },
  reducers: {
    getList: (state) => {
      state = state.value;
    },
  },
});
// 每个 case reducer 函数会生成对应的 Action creators
export const { getList } = listProjectSlice.actions;

export default listProjectSlice.reducer;
