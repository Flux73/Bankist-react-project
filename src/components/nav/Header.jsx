import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/app-data-slice';

import logo from '../../assets/logo.png';
import styles from './Header.module.css';

const Header = props => {
  const data = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (!data.activeUser) {
      navigate('/login', { replace: true });
    }
  }, [data.activeUser, navigate]);

  return (
    <header className={styles.header}>
      {data.activeUser && (
        <h1>
          Welcome Back, <span>{data.activeUser.owner.split(' ')[0]}</span>
        </h1>
      )}
      {!data.activeUser && (
        <h1>
          Log in to start <span>BANKING</span>
        </h1>
      )}

      <img src={logo} className={styles.logo} alt="logo" />
      {props.showBtn && <button onClick={logoutHandler}>Log out</button>}
    </header>
  );
};

export default React.memo(Header);
