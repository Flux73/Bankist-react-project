import React from 'react';

import styles from './InSumm.module.css';

const InSumm = props => {
  return (
    <p className={styles.in}>
      IN <span>{props.value}$</span>
    </p>
  );
};

export default InSumm;
