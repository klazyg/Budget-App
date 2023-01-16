import React from "react";
import Link from 'next/link';
import styles from "./Transaction.module.scss";
import { MdOutlineElectricalServices } from 'react-icons/md';
import { IconContext } from 'react-icons';

type Props = {
  what: string;
  type: string;
  amount: string;
  when: string;
  category: string;
}

const Transaction: React.FC<Props> = ({ what, type, amount, when, category }) =>
{
  return (
    <IconContext.Provider value={{ size: '2rem' }}>
      <div className={styles.position}>
        <div className={styles.border}>
          <div className={styles.text}>
            <div className={styles.title}>
              Latest Transaction
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
          <Link href="/transactions">
            <div className={styles.transaction}>
              <div className={styles.icon_border}>
                <MdOutlineElectricalServices
                  className={styles.icon}
                />
              </div>
              <div className={styles.dsp}>
                <div className={styles.payment}>
                  {what}
                </div>
                <div className={styles.category}>
                  {category}
                </div>
              </div>
              <div className={styles.calendar}>
                {when}
              </div>
              <div className={`${styles.amount} ${type === 'income' ? 'amount-income' : 'amount-spend'}`}>
                {type === 'income' ? '+$' : '-$'} {amount}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </IconContext.Provider >
  );
};
export default Transaction;