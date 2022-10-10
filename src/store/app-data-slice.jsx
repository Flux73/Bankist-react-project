import { createSlice, current } from '@reduxjs/toolkit';

import initData from './app-data';

const initialState = {
  initData,
  activeUser: null,
  error: null,
  reactivateTime: false,
};

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
      const sender = state.initData.find(
        user => user.username === state.activeUser.username
      );

      if (!receiverUser) return;

      // if the guy who transfers got enough money!
      if (
        state.activeUser.movements.reduce((acc, mov) => mov.movement + acc, 0) <
        amount
      )
        return;

      receiverUser.movements.push({ movement: amount, date: `${new Date()}` });
      state.activeUser.movements.push({
        movement: -amount,
        date: `${new Date()}`,
      });
      sender.movements.push({ movement: -amount, date: `${new Date()}` });
      state.reactivateTime = true;
    },

    requestLoan: (state, { payload }) => {
      const amount = payload.amount;
      const user = state.initData.find(
        user => user.username === state.activeUser.username
      );

      // Test if at least one deposit is >= 10% of the requested loan!
      if (
        state.activeUser.movements.some(
          mov => mov.movement >= amount * (10 / 100)
        )
      ) {
        state.activeUser.movements.push({
          movement: amount,
          date: `${new Date()}`,
        });
        user.movements.push({
          movement: amount,
          date: `${new Date()}`,
        });
      }

      state.reactivateTime = true;
    },

    closeAccount: function (state, { payload }) {
      const username = payload.username;
      const pin = payload.pin;

      if (
        username !== state.activeUser.username ||
        pin !== state.activeUser.pin
      )
        return;

      const userIndex = state.initData.findIndex(
        user => user.username === username && user.pin === pin
      );

      if (userIndex >= 0) {
        state.initData.splice(userIndex, 1);
        state.activeUser = null;
      }
    },

    deactivateTime: state => {
      state.reactivateTime = false;
    },
  },
});

export const {
  activeUser,
  logout,
  transferMoney,
  requestLoan,
  closeAccount,
  deactivateTime,
} = appSlice.actions;
export default appSlice.reducer;
