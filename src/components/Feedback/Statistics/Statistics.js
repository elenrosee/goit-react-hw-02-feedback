import React from "react";
import styles from "./Statistics.module.scss";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles.statistics_list}>
      <li className={styles.item}>
        <p>Good:</p>
        <p>{good}</p>
      </li>
      <li className={styles.item}>
        <p>Nautral:</p>
        <p>{neutral}</p>
      </li>
      <li className={styles.item}>
        <p>Bad:</p>
        <p>{bad}</p>
      </li>
      <li className={styles.item}>
        <p>Total:</p>
        <p>{total}</p>
      </li>
      <li className={styles.item}>
        <p>Positive feedback:</p>
        <p>{positivePercentage}%</p>
      </li>
    </ul>
  );
};

export default Statistics;
