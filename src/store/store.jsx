import { configureStore } from '@reduxjs/toolkit';
import appSlice from './app-data-slice';

const store = configureStore({
  reducer: appSlice,
});

export default store;
