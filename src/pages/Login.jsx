import React from 'react';
import Form from '../components/nav/Form';
import Header from '../components/nav/Header';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Form />
    </div>
  );
};

export default Login;
