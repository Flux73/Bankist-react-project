import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TransferMoneyForm from './TransferMoneyForm';
import Timer from './Timer';
import InSumm from './InSumm';

import styles from './Main.module.css';
import LoanForm from './LoanForm';
import CloseAccForm from './CloseAccForm';
import Movement from './movements/Movement';
import BalanceNav from './BalanceNav';
import OutSumm from './OutSumm';
import InterestSumm from './InterestSumm';

const addFloatNum = num => num?.toFixed(2);

const Main = () => {
  const [isSorted, setIsSorted] = useState(false);
  const data = useSelector(state => state);
  const activeUser = data.activeUser;
  const movements = activeUser?.movements ?? [];

  const balance = addFloatNum(movements.reduce((mov, acc) => mov + acc, 0));

  const inSummary = addFloatNum(
    movements.filter(mov => mov > 0).reduce((mov, acc) => mov + acc, 0)
  );

  const outSummary = movements
    .filter(mov => mov < 0)
    .reduce((mov, acc) => mov + acc, 0);
  const interestSummary = movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * (activeUser.interestRate / 100))
    .filter(mov => mov > 1)
    .reduce((mov, acc) => mov + acc, 0);

  const sortHandler = isSortedParam => {
    setIsSorted(isSortedParam);
  };

  return (
    <div className={styles.main}>
      <BalanceNav balance={balance} sortHandler={sortHandler} />
      <div className={styles.details}>
        <div className={styles.movements}>
          {!isSorted &&
            [...movements]
              .reverse()
              .map((mov, i) => (
                <Movement
                  key={i}
                  id={movements.length - i}
                  value={addFloatNum(mov)}
                  state={mov > 0 ? 'deposit' : 'withdrawal'}
                  date=""
                />
              ))}
          {isSorted &&
            [...movements]
              .sort((a, b) => b - a)
              .map((mov, i) => (
                <Movement
                  key={i}
                  id={movements.length - i}
                  value={addFloatNum(mov)}
                  state={mov > 0 ? 'deposit' : 'withdrawal'}
                  date=""
                />
              ))}
        </div>
        <div className={styles.formWrapper}>
          <TransferMoneyForm />
          <LoanForm />
          <CloseAccForm />
        </div>
      </div>
      <div className={styles.summary}>
        <div>
          <InSumm value={inSummary} />
          <OutSumm value={addFloatNum(Math.abs(outSummary))} />
          <InterestSumm value={addFloatNum(interestSummary)} />
        </div>
        <Timer />
      </div>
    </div>
  );
};

export default React.memo(Main);
