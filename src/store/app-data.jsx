// movementsDates: [
//   '2019-11-18T21:31:17.178Z',
//   '2019-12-23T07:42:02.383Z',
//   '2020-01-28T09:15:04.904Z',
//   '2020-04-01T10:17:24.185Z',
//   '2020-05-08T14:11:59.604Z',
//   '2020-07-26T17:01:17.194Z',
//   '2020-07-28T23:36:17.929Z',
//   '2020-08-01T10:51:36.790Z',
// ],
// currency: 'EUR',
// locale: 'pt-PT',

const account1 = {
  username: 'flux',
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  username: 'jessica1',
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  username: 'spiderman',
  owner: 'Salah Moumni',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  username: 'nextJS',
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const initData = [account1, account2, account3, account4];

export default initData;
