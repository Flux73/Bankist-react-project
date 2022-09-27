import React from 'react';

import styles from './WithdrawalMov.module.css';

const WithdrawalMov = props => {
  return (
    <div className={styles.withdrawal}>
      <p>{props.id} WITHDRAWAL</p>
    </div>
  );
};

export default WithdrawalMov;
