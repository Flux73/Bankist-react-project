import React from 'react';
import DepositMov from './DepositMov';
import WithdrawalMov from './WithdrawalMov';

import styles from './Movement.module.css';

const Movement = props => {
  return (
    <div className={styles.movement}>
      {props.state === 'deposit' ? (
        <DepositMov id={props.id} />
      ) : (
        <WithdrawalMov id={props.id} />
      )}
      <p className={styles.movDate}>12/03/2020</p>
      <p className={styles.movValue}>{props.value} €</p>
    </div>
  );
};

export default Movement;
