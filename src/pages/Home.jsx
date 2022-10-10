import React, { useEffect } from 'react';
import Header from '../components/nav/Header';
import Main from '../components/home/Main';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const data = useSelector(state => state);
  useEffect(() => {
    if (!data.activeUser) {
      navigate('/login', { replace: true });
    }
  }, [data.activeUser, navigate]);

  return (
    <>
      <Header showBtn={true} />
      <Main />
    </>
  );
};

export default Home;
