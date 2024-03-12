import { configureStore } from '@reduxjs/toolkit';
import customerSlice from './customerAuthSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import settingSlice from './settingSlice';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';

let persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

let combined_Reducers = combineReducers({
  customer: customerSlice,
  allsettings: settingSlice,
});

const persistedReducer = persistReducer(persistConfig, combined_Reducers);

const store = configureStore({
  reducer: persistedReducer,
  // middleware: [thunk, logger],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
