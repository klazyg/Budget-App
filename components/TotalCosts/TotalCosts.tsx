import React from "react";
import { IconContext } from 'react-icons';
import { FaWallet } from 'react-icons/fa';
import { GiCash } from 'react-icons/gi';
import { MdSavings } from 'react-icons/md';
import styles from "./TotalCosts.module.scss";

const TotalCosts: React.FC<{
  incomeTotal: number;
  spendTotal: number;
  savingsTotal: number;
}> = ({ incomeTotal, spendTotal, savingsTotal }) => {
  return (
    <IconContext.Provider value={{ size: '1.3rem' }}>
      <div className={styles.position}>
        <div className={styles.border}>
          <div className={styles.icon_border_position}>
            <div className={styles.icon_border_income}>
              <GiCash
                className={styles.icon_income}
              />
            </div>
          </div>
          <div className={styles.text}>
            <div className={styles.title}>
              <span>Income</span>
            </div>
            <div className={styles.value}>
              <span>${incomeTotal}</span>
            </div>
          </div>
        </div>
        <div className={styles.border}>
          <div className={styles.icon_border_position}>
            <div className={styles.icon_border_spend}>
              <FaWallet
                className={styles.icon_spend}
              />
            </div>
          </div>
          <div className={styles.text}>
            <div className={styles.title}>
              <span>Spend</span>
            </div>
            <div className={styles.value}>
              <span>${spendTotal}</span>
            </div>
          </div>
        </div>
        <div className={styles.border}>
          <div className={styles.icon_border_position}>
            <div className={styles.icon_border_savings}>
              <MdSavings
                className={styles.icon_savings}
              />
            </div>
          </div>
          <div className={styles.text}>
            <div className={styles.title}>
              <span>Savings</span>
            </div>
            <div className={styles.value}>
              <span>${savingsTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default TotalCosts;