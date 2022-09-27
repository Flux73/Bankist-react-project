import { createSlice, current } from '@reduxjs/toolkit';

import initData from './app-data';

const initialState = { initData, activeUser: null, error: null };

const appSlice = createSlice({
  name: 'appData',
  initialState,
  reducers: {
    activeUser: (state, action) => {
      const { username, pin } = action.payload;
      const user = state.initData.find(
        acc => acc.username === username && acc.pin === pin
      );

      if (user) {
        state.activeUser = user;
        state.error = null;
        return;
      }

      state.error = true;
    },

    logout: state => {
      state.activeUser = null;
    },

    transferMoney: (state, action) => {
      const { receiver, amount } = action.payload;

      // if the user exist
      const receiverUser = state.initData.find(
        user => user.username === receiver
      );
      if (!receiverUser) return;

      // if the guy who transfers got enough money!
      if (
        state.activeUser.movements.reduce((mov, acc) => mov + acc, 0) < amount
      )
        return;

      receiverUser.movements.push(amount);
      state.activeUser.movements.push(-amount);
    },
  },
});

export const { activeUser, logout, transferMoney } = appSlice.actions;
export default appSlice.reducer;
