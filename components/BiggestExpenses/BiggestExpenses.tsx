import React from "react";
import Link from 'next/link';
import styles from "./BiggestExpenses.module.scss";
import { FaShoppingBag } from 'react-icons/fa';
import { MdFastfood, MdRestaurant, MdTrain, MdHealthAndSafety } from 'react-icons/md';
import { GiClothes } from 'react-icons/gi';
import { IconContext } from 'react-icons';

type Props = {
  sortedTransactions: Array<{ category: string, total: number }>;
}

const categoryIcons = {
  'food': MdFastfood,
  'health': MdHealthAndSafety,
  'restaurant': MdRestaurant,
  'transport': MdTrain,
  'fees': FaShoppingBag,
  'clothes': GiClothes,
  'otherExpenses': FaShoppingBag,
}

const BiggestExpenses: React.FC<Props> = ({ sortedTransactions }) => {
  let biggestExpenses;
  if (sortedTransactions) {
    biggestExpenses = sortedTransactions.slice(0, 4).map((transaction, index) => {
      let Icon = categoryIcons[transaction.category];
      return (
        <div className={styles.container}>
          <div className={`${styles.box} ${styles.categoryContainer} ${styles[transaction.category]}`} key={index}>
            <Icon className={styles.icon} />
            <span className={styles.category}> {transaction.category}</span>
            <span> ${transaction.total}</span>
          </div>
        </div>
      );
    });
    return (
      <IconContext.Provider value={{ size: '4rem' }}>
        <div className={styles.position}>
          <div className={styles.border}>
            <div className={styles.text}>
              <div className={styles.title}>
                The biggest expenses
              </div>
              <Link href="/transactions">
                <div className={styles.viewMore}>
                  view more
                </div>
              </Link>
            </div>
            <div className={styles.position}>
              {biggestExpenses}
            </div>
          </div>
        </div>
      </IconContext.Provider>
    );
  };
}

export default BiggestExpenses;