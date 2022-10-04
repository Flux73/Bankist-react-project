import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/app-data-slice';

import styles from './Timer.module.css';

let logoutTimer;
const Timer = () => {
  const [time, setTime] = useState(10);
  const dispatch = useDispatch();
  const data = useSelector(state => state);

  // SideEffect logic!
  useEffect(() => {
    if (!data.activeUser) {
      clearInterval(logoutTimer);
      return;
    }

    const timer = () => {
      logoutTimer = setInterval(() => {
        console.log(time);
        if (time === 0) {
          dispatch(logout());
          clearInterval(logoutTimer);
        }
        setTime(prev => (prev -= 1));
      }, 1000);
    };

    timer();

    return () => clearInterval(logoutTimer);
  }, [data.activeUser, time]);
  //////

  return (
    <p className={styles.timer}>
      You will be logged out in <span>{time}</span>
    </p>
  );
};

export default Timer;
