import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import listReducer from '../features/dashboard/listSlice';
import listProjectReducer from '../features/projects/listSilce';

export default configureStore({
  reducer: {
    // (createSlice的name) :  (name + createSlice的export default .点后面)
    counter: counterReducer,
    list: listReducer,
    listProject: listProjectReducer,
  },
});

// TODO: 增加redux-persist持久化处理
