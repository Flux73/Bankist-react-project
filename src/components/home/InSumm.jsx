import React from 'react';
import { FormattedNumber } from 'react-intl';

import styles from './InSumm.module.css';

const InSumm = props => {
  return (
    <p className={styles.in}>
      IN{' '}
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

export default InSumm;
