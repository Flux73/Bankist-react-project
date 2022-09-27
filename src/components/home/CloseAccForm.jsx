import React from 'react';

import styles from './CloseAccForm.module.css';

const CloseAccForm = props => {
  return (
    <div className={`${styles.operation} ${styles.closeAccBG}`}>
      <h2>Close account</h2>
      <form>
        <input id="username" type="text" />
        <input id="pin" type="number" />
        <button>&rarr;</button>
        <label htmlFor="username">Confirm user</label>
        <label htmlFor="pin">Confirm PIN</label>
      </form>
    </div>
  );
};

export default CloseAccForm;
