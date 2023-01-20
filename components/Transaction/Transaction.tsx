import React from "react";
import Link from 'next/link';
import styles from "./Transaction.module.scss";
import { MdOutlineElectricalServices } from 'react-icons/md';
import { IconContext } from 'react-icons';
import axios from "axios";

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

const Transactions: React.FC<TransactionsProps> = ({ transactions }) => {
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
          <div className={styles.date}>
            Today
          </div>
          {transactions.slice(0, 4).map((transaction, index) => (
            <Link key={index} href="/transactions">
              <div className={styles.transaction}>
                <div className={styles.icon_border}>
                  <MdOutlineElectricalServices
                    className={styles.icon}
                  />
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
                  {transaction.type === 'income' ? '+$' : '-$'} {transaction.amount}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </IconContext.Provider >
  );
};

export async function getServerSideProps() {
  const apiResponse = await axios.get("http:localhost:3000/api/transactions");
  console.log(apiResponse.data);
  return {
    props: {
      transactions: apiResponse.data.transactions,
    },
  };
}

export default Transactions;