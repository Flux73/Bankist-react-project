import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/app-data-slice';

import logo from '../../assets/logo.png';
import styles from './Header.module.css';

const getTimeZoneGretting = grettingParam => {
  if (new Date().getHours() >= 0 && new Date().getHours() < 6)
    grettingParam = 'Good Night';

  if (new Date().getHours() >= 6 && new Date().getHours() < 12)
    grettingParam = 'Good Morning';

  if (new Date().getHours() >= 12 && new Date().getHours() < 18)
    grettingParam = 'Good Afternoon';

  if (new Date().getHours() >= 18 && new Date().getHours() < 23)
    grettingParam = 'Good Evening';

  return grettingParam || 'Welcome Back';
};

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
          {getTimeZoneGretting()} ,{' '}
          <span>{data.activeUser.owner.split(' ')[0]}</span>
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
