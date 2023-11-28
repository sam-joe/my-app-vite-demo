import React, { useState } from "react";
import styles from "./counter.module.scss";
import CounterMessages from "./CounterMessages/CounterMessages";
const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount((prev) => {
      // if (prev === 9) return prev;
      return prev + 1;
    });
  };
  return (
    <div className={styles["counter-container"]}>
      <p className={styles["counter-indicator"]}>Count {count}</p>
      <div>
        <button className={styles["increment-btn"]} onClick={incrementCounter}>
          increase count
        </button>
      </div>
      <CounterMessages count={count} />
    </div>
  );
};

export default Counter;
