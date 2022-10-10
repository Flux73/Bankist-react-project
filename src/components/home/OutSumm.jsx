import React from 'react';
import { FormattedNumber } from 'react-intl';

import styles from './OutSumm.module.css';

const OutSumm = props => {
  return (
    <p className={styles.out}>
      OUT{' '}
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

export default OutSumm;
