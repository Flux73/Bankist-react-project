import React, { useState, useMemo } from 'react';
import { FormattedDate, FormattedNumber, useIntl } from 'react-intl';
import { useSelector } from 'react-redux';

import styles from './BalanceNav.module.css';

const BalanceNav = props => {
  const [isSorted, setIsSorted] = useState(false);
  const { activeUser } = useSelector(state => state);
  // const intl = useIntl();

  const sortMovsHandler = () => {
    props.sortHandler(!isSorted);
    setIsSorted(prev => !prev);
  };

  return (
    <div className={styles.balanceNav}>
      <div className={styles.balanceInfo}>
        <div>
          <p className={styles.balanceLabel}>Current Balance</p>
          <p className={styles.balanceDate}>
            As of{' '}
            <FormattedDate
              value={new Date()}
              year="numeric"
              day="2-digit"
              month="2-digit"
              hour="2-digit"
              minute="2-digit"
            />
          </p>
        </div>
        <button onClick={sortMovsHandler}>&darr; Sort</button>
      </div>
      <div className={styles.balance}>
        <p>
          <FormattedNumber
            value={props.balance}
            style="currency"
            currency={activeUser?.currency || 'USD'}
          />
        </p>
      </div>
    </div>
  );
};

export default BalanceNav;
