import React from 'react';

import styles from './Timer.module.css';

const Timer = () => {
  return (
    <p className={styles.timer}>
      You will be logged out in <span>04:56</span>
    </p>
  );
};

export default Timer;
