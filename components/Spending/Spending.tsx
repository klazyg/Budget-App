import React from "react";
import styles from "./Spending.module.scss";

const Spending: React.FC = () => {
  return (
    <div className={styles.position}>
      <div className={styles.border}>
        <div className={styles.title}>
          Spend This Month
        </div>

      </div>
    </div>
  );
};

export default Spending;



