import React from 'react';
import DepositMov from './DepositMov';
import WithdrawalMov from './WithdrawalMov';

import styles from './Movement.module.css';
import { FormattedDate, FormattedNumber } from 'react-intl';

const Movement = props => {
  const formattedDateAround = date1 => {
    const daysPassed = Math.round(
      (new Date().getTime() - new Date(date1).getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysPassed === 0) return 'Today';

    if (daysPassed === 1) return 'Yesterday';

    if (daysPassed <= 7) return `${daysPassed} Days Ago`;

    return (
      <FormattedDate
        value={new Date(date1)}
        year="numeric"
        month="2-digit"
        day="2-digit"
      />
    );
  };

  return (
    <div className={styles.movement}>
      {props.state === 'deposit' ? (
        <DepositMov id={props.id} />
      ) : (
        <WithdrawalMov id={props.id} />
      )}
      <p className={styles.movDate}>{formattedDateAround(props.date)}</p>
      <p className={styles.movValue}>
        <FormattedNumber
          value={props.value}
          style="currency"
          currency={props.currency || 'USD'}
        />
      </p>
    </div>
  );
};

export default Movement;
