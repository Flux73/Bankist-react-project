import React, { useEffect } from 'react';
import Header from '../components/nav/Header';
import Main from '../components/home/Main';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './Home.module.css';

const Home = () => {
  const navigate = useNavigate();
  const data = useSelector(state => state);
  useEffect(() => {
    if (!data.activeUser) {
      navigate('/login', { replace: true });
    }
  }, [data.activeUser, navigate]);

  return (
    <div className={styles.container}>
      <Header showBtn={true} />
      <Main />
    </div>
  );
};

export default Home;
