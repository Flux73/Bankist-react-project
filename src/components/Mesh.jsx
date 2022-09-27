import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Mesh.module.css';

const Mesh = () => {
  return ReactDOM.createPortal(
    <div className={styles.div}>s</div>,
    document.querySelector('body')
  );
};

export default Mesh;
