import React from 'react';

import styles from './BalanceNav.module.css';

const BalanceNav = props => {
  return (
    <div className={styles.balanceNav}>
      <div className={styles.balanceInfo}>
        <div>
          <p className={styles.balanceLabel}>Current Balance</p>
          <p className={styles.balanceDate}>As of 06/09/2022, 22:39</p>
        </div>
        <button>&darr; Sort</button>
      </div>
      <div className={styles.balance}>
        <p>{props.balance} €</p>
      </div>
    </div>
  );
};

export default BalanceNav;
