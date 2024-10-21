import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import listReducer from '../features/dashboard/listSlice';

export default configureStore({
  reducer: {
    // (createSlice的name) :  (name + createSlice的export default .点后面)
    counter: counterReducer,
    list: listReducer,
  },
});
