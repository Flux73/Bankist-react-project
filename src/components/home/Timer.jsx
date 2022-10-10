import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/app-data-slice';
import { deactivateTime } from '../../store/app-data-slice';
import styles from './Timer.module.css';

const INIT_TIME = 600;
let logoutTimer;

const Timer = () => {
  const [time, setTime] = useState(INIT_TIME);
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

  useEffect(() => {
    if (!data.reactivateTime) return;

    setTime(INIT_TIME);
    dispatch(deactivateTime());
  }, [data.reactivateTime]);

  return (
    <p className={styles.timer}>
      You will be logged out in{' '}
      <span>{`${String(Math.floor(time / 60)).padStart(2, '0')}:${String(
        time % 60
      ).padStart(2, '0')}`}</span>
    </p>
  );
};

export default Timer;
