import React from 'react';
import { FormattedNumber } from 'react-intl';

import styles from './InterestSumm.module.css';

const InterestSumm = props => {
  return (
    <p className={styles.interest}>
      INTEREST{' '}
      <span>
        <FormattedNumber
          value={props.value}
          style="currency"
          currency={props.currency || 'USD'}
        />
      </span>
    </p>
  );
};

export default InterestSumm;
