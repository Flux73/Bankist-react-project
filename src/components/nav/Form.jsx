import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { activeUser } from '../../store/app-data-slice';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';

import styles from './Form.module.css';

const Form = () => {
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const data = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usernameChangeHandler = e => {
    setUsername(e.target.value);
  };

  const pinChangeHandler = e => {
    setPin(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(activeUser({ username, pin: +pin }));
  };

  useEffect(() => {
    if (data.activeUser) {
      navigate('/home', { replace: true });
    }
  }, [data.activeUser, navigate]);

  if (data.error) {
    console.log('User not found');
  }

  return (
    <div className={styles.formContainer}>
      <h2>Welcome Back :)</h2>
      <form onSubmit={submitHandler} className={styles.form}>
        <input
          onChange={usernameChangeHandler}
          className={styles.input}
          type="text"
          placeholder="Username"
        />
        <input
          onChange={pinChangeHandler}
          className={styles.input}
          type="number"
          placeholder="PIN"
        />
        <button>&rarr;</button>
      </form>
      <Footer />
    </div>
  );
};

export default React.memo(Form);
