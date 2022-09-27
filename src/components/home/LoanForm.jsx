import React from 'react';

import styles from './LoanForm.module.css';

const LoanForm = props => {
  return (
    <div className={`${styles.operation} ${styles.loanBG}`}>
      <h2>Request loan</h2>
      <form>
        <input id="amount" type="number" />
        <button>&rarr;</button>
        <label htmlFor="amount">Amount</label>
      </form>
    </div>
  );
};

export default LoanForm;
