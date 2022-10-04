import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeAccount, logout } from '../../store/app-data-slice';

import styles from './CloseAccForm.module.css';

const CloseAccForm = props => {
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const dispatch = useDispatch();

  const usernameChangeHandler = e => {
    setUsername(e.target.value);
  };

  const pinChangeHandler = e => {
    setPin(e.target.value);
  };
  const closeAccountHandler = e => {
    e.preventDefault();
    dispatch(closeAccount({ username, pin: +pin }));
    // dispatch(logout());
    setUsername('');
    setPin('');
  };

  return (
    <div className={`${styles.operation} ${styles.closeAccBG}`}>
      <h2>Close account</h2>
      <form onSubmit={closeAccountHandler}>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={username}
        />
        <input id="pin" type="number" onChange={pinChangeHandler} value={pin} />
        <button>&rarr;</button>
        <label htmlFor="username">Confirm user</label>
        <label htmlFor="pin">Confirm PIN</label>
      </form>
    </div>
  );
};

export default CloseAccForm;
