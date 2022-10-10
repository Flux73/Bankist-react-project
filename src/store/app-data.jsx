const account1 = {
  username: 'flux',
  owner: 'Jonas Schmedtmann',
  movements: [
    { movement: 200, date: '2019-11-18T21:31:17.178Z' },
    { movement: 450, date: '2019-12-23T07:42:02.383Z' },
    { movement: -400, date: '2020-01-28T09:15:04.904Z' },
    { movement: 3000, date: '2020-04-01T10:17:24.185Z' },
    { movement: -130, date: '2022-10-02T10:51:36.790Z' },
    { movement: 70, date: '2022-10-03T14:11:59.604Z' },
    { movement: 1300, date: '2022-10-08T17:01:17.194Z' },
    { movement: -650, date: '2022-10-09T23:36:17.929Z' },
  ],
  interestRate: 1.2, // %
  pin: 1111,
  ////
  currency: 'EUR',
  locale: 'pt-PT',
};

const account2 = {
  username: 'jessica1',
  owner: 'Jessica Davis',

  movements: [
    { movement: 5000, date: '2019-11-01T13:15:33.035Z' },
    { movement: 3400, date: '2019-11-30T09:48:16.867Z' },
    { movement: -150, date: '2019-12-25T06:04:23.907Z' },
    { movement: -790, date: '2020-01-25T14:18:46.235Z' },
    { movement: -3210, date: '2020-02-05T16:33:06.386Z' },
    { movement: -1000, date: '2020-04-10T14:43:26.374Z' },
    { movement: 8500, date: '2020-06-25T18:49:59.371Z' },
    { movement: -30, date: '2020-07-26T12:01:20.894Z' },
  ],

  interestRate: 1.5,
  pin: 2222,

  ////
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  username: 'spiderman',
  owner: 'Salah Moumni',
  movements: [
    { movement: 200, date: '2019-11-01T13:15:33.035Z' },
    { movement: -200, date: '2019-11-30T09:48:16.867Z' },
    { movement: 340, date: '2019-12-25T06:04:23.907Z' },
    { movement: -300, date: '2020-01-25T14:18:46.235Z' },
    { movement: -20, date: '2020-02-05T16:33:06.386Z' },
    { movement: 50, date: '2020-04-10T14:43:26.374Z' },
    { movement: 400, date: '2020-06-25T18:49:59.371Z' },
    { movement: -460, date: '2020-07-26T12:01:20.894Z' },
  ],
  interestRate: 0.7,
  pin: 3333,
  currency: 'MAD',
  locale: 'ar-SA',
};

const account4 = {
  username: 'nextJS',
  owner: 'Sarah Smith',
  movements: [
    { movement: 430, date: '2019-11-01T13:15:33.035Z' },
    { movement: 1000, date: '2019-11-30T09:48:16.867Z' },
    { movement: 700, date: '2019-12-25T06:04:23.907Z' },
    { movement: 50, date: '2020-01-25T14:18:46.235Z' },
    { movement: 90, date: '2020-02-05T16:33:06.386Z' },
  ],
  interestRate: 1,
  pin: 4444,
  currency: 'JPY',
  locale: 'ja-JP',
};

const initData = [account1, account2, account3, account4];

export default initData;
