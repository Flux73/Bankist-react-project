import React from 'react';

import styles from './OutSumm.module.css';

const OutSumm = props => {
  return (
    <p className={styles.out}>
      OUT <span>{props.value}$</span>
    </p>
  );
};

export default OutSumm;
