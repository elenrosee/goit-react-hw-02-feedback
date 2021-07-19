import React from "react";
import styles from "./FeedbackOptions.module.scss";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ul className={styles.buttons_list}>
      <li>
        <button
          className={styles.button}
          type="button"
          id="good"
          onClick={onLeaveFeedback}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className={styles.button}
          type="button"
          id="nautral"
          onClick={onLeaveFeedback}
        >
          Nautral
        </button>
      </li>
      <li>
        <button
          className={styles.button}
          type="button"
          id="bad"
          onClick={onLeaveFeedback}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};

export default FeedbackOptions;
