import { createSlice } from '@reduxjs/toolkit';

export const sideBarSlice = createSlice({
  name: 'sidebar',
  initialState: {},
  reducers: {
    getIndex: (state) => {
      state = state.value;
    },
  },
});
// 每个 case reducer 函数会生成对应的 Action creators
export const { getIndex } = sideBarSlice.actions;

export default sideBarSlice.reducer;
