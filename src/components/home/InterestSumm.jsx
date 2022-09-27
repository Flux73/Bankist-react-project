import React from 'react';

import styles from './InterestSumm.module.css';

const InterestSumm = props => {
  return (
    <p className={styles.interest}>
      INTEREST <span>{props.value}$</span>
    </p>
  );
};

export default InterestSumm;
