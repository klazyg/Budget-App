import React from "react";
import Link from 'next/link';
import styles from "./Transaction.module.scss";
import { IconContext } from 'react-icons';
import { FaShoppingBag, FaWallet } from 'react-icons/fa';
import { MdFastfood, MdRestaurant, MdTrain, MdHealthAndSafety } from 'react-icons/md';
import { GiClothes } from 'react-icons/gi';
import moment from 'moment';

interface Transaction {
  what: string;
  type: string;
  amount: string;
  when: string;
  category: string;
}

interface TransactionsProps {
  transactions: Transaction[];
}

const categoryIcons = {
  'food': MdFastfood,
  'health': MdHealthAndSafety,
  'restaurant': MdRestaurant,
  'transport': MdTrain,
  'fees': FaShoppingBag,
  'clothes': GiClothes,
  'other': FaWallet,
}

const Transactions: React.FC<TransactionsProps> = ({ transactions }) => {
  if (!transactions.length) {
    return (
      <div className={styles.position}>
        <div className={styles.border}>
          <div className={styles.text}>
            <div className={styles.title}>
              Latest Transactions
            </div>
          </div>
          <div className={styles.display}>
            <span>There are no transactions to display.</span>
          </div>
        </div>
      </div>
    );
  }
  let transaction;
  if (transactions) {
    transaction = transactions.slice(0, 4).map((transaction, index) => {
      let Icon = categoryIcons[transaction.category];
      let borderClass = `${styles.icon_border} ${styles.categoryContainer} ${styles[transaction.category]}`;
      let when;
      const today = moment().format("YYYY-MM-DD");
      const yesterday = moment().subtract(1, 'days').format("YYYY-MM-DD");
      if (transaction.when === today) {
        when = "Today";
      } else if (transaction.when === yesterday) {
        when = "Yesterday";
      } else {
        when = moment(transaction.when).format("MMM DD, YYYY");
      }
      return (
        <Link key={index} href="/transactions">
          <div className={styles.date}>
            {when}
          </div>
          <div className={`${styles.transaction} ${styles.categoryContainer} ${styles[transaction.category]}`} key={index}>
            <div className={borderClass} key={index}>
              <Icon className={styles.icon} />
            </div>
            <div className={styles.dsp}>
              <div className={styles.payment}>
                {transaction.what}
              </div>
              <div className={styles.category}>
                {transaction.category}
              </div>
            </div>
            <div className={styles.calendar}>
              {transaction.when}
            </div>
            <div className={`${styles.amount} ${transaction.type === 'income' ? 'amount-income' : 'amount-spend'}`}>
              {transaction.type === 'income' ? '+$' : '-$'}{transaction.amount}
            </div>
          </div>
        </Link>
      );
    });
    return (
      <IconContext.Provider value={{ size: '2rem' }}>
        <div className={styles.position}>
          <div className={styles.border}>
            <div className={styles.text}>
              <div className={styles.title}>
                Latest Transactions
              </div>
              <Link href="/transactions">
                <div className={styles.viewMore}>
                  view more
                </div>
              </Link>
            </div>
            {transaction}
          </div>
        </div>
      </IconContext.Provider >
    );
  }
};

export default Transactions;