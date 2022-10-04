import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestLoan } from '../../store/app-data-slice';

import styles from './LoanForm.module.css';

const LoanForm = props => {
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const amountChangeHandler = e => {
    setAmount(+e.target.value);
  };

  const requestLoanHandler = e => {
    e.preventDefault();

    setTimeout(() => {
      dispatch(requestLoan({ amount }));
    }, 2000);
    setAmount('');
  };

  return (
    <div className={`${styles.operation} ${styles.loanBG}`}>
      <h2>Request loan</h2>
      <form onSubmit={requestLoanHandler}>
        <input
          id="amount"
          type="number"
          onChange={amountChangeHandler}
          value={amount}
        />
        <button>&rarr;</button>
        <label htmlFor="amount">Amount</label>
      </form>
    </div>
  );
};

export default LoanForm;
