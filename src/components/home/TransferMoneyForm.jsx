import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { transferMoney } from '../../store/app-data-slice';

import styles from './TransferMoneyForm.module.css';

const TransferMoneyForm = props => {
  const dispatch = useDispatch();
  const [receiver, setReceiver] = useState('');
  const [amount, setAmount] = useState('');

  const receiverChangeHandler = e => {
    setReceiver(e.target.value);
  };

  const amountChangeHandler = e => {
    setAmount(e.target.value);
  };

  const transferMoneyHandler = e => {
    e.preventDefault();
    dispatch(transferMoney({ receiver, amount: +amount }));
    setAmount('');
    setReceiver('');
  };

  return (
    <div className={`${styles.operation} ${styles.transferBG}`}>
      <h2>Transfer money</h2>
      <form onSubmit={transferMoneyHandler}>
        <input
          id="receiver"
          type="text"
          onChange={receiverChangeHandler}
          value={receiver}
        />
        <input
          id="amount"
          type="number"
          onChange={amountChangeHandler}
          value={amount}
        />
        <button>&rarr;</button>
        <label htmlFor="receiver">Transfer to</label>
        <label htmlFor="amount">Amount</label>
      </form>
    </div>
  );
};

export default TransferMoneyForm;
