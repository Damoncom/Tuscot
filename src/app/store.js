// import { configureStore } from '@reduxjs/toolkit';

// import counterReducer from '../features/counter/counterSlice';
// import listReducer from '../features/dashboard/listSlice';
// import listProjectReducer from '../features/projects/listSilce';

// // TODO: 增加redux-persist持久化处理

// export default configureStore({
//   reducer: {
//     // (createSlice的name) :  (name + createSlice的export default .点后面)
//     counter: counterReducer,
//     list: listReducer,
//     listProject: listProjectReducer,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import counterReducer from '../features/counter/counterSlice';
import listReducer from '../features/dashboard/listSlice';
import listProjectReducer from '../features/projects/listSilce';

const rootReducer = combineReducers({
  counter: counterReducer,
  list: listReducer,
  listProject: listProjectReducer,
  // 其他的 reducer 可以继续添加
});

// 配置持久化
const persistConfig = {
  key: 'root',
  storage,
  // 你可以使用白名单或黑名单来指定哪些 reducer 需要持久化
  whitelist: ['counter', 'list', 'listProject'], // 只有这两个 reducer 会被持久化
  // blacklist: ['someOtherReducer'], // 不持久化的 reducer

  // TODO: 报错：存储的是非序列化的数据
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
};

// 创建持久化的 reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 创建 Redux store
const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
