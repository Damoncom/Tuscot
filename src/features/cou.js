import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/lib/storage/session';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import sessionReducer from './reducers/sessionReducer';

// 持久化配置
const persistConfigLocal = {
  key: 'auth',
  storage: storage,
  whitelist: ['auth'],
};

const persistConfigSession = {
  key: 'session',
  storage: sessionStorage,
  whitelist: ['session'],
};

// 持久化的 reducers
const persistedAuthReducer = persistReducer(persistConfigLocal, authReducer);
const persistedSessionReducer = persistReducer(
  persistConfigSession,
  sessionReducer
);

// 根 reducer
const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  session: persistedSessionReducer,
  // 其他 reducers...
});

// 创建 store
const store = createStore(rootReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
