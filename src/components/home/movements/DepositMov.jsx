import React from 'react';

import styles from './DepositMov.module.css';

const DepositMov = props => {
  return (
    <div className={styles.deposit}>
      <p>{props.id} DEPOSIT</p>
    </div>
  );
};

export default DepositMov;
