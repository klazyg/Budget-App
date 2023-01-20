import React from "react";
import Link from 'next/link';
import { FaHome, FaFileInvoice, FaChartArea, FaMoneyCheckAlt } from 'react-icons/fa';
import { MdSavings } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import styles from "./Menu.module.scss";

const Menu: React.FC = () => {
  return (
    <IconContext.Provider value={{ size: '1.3rem' }}>
      <nav className={styles.menu}>
        <div className={styles.profile}>
          <div className={styles.border}>
            <CgProfile className={styles.avatar} />
          </div>
          <div className={styles.user}>
            <div className={styles.name}>
              John
            </div>
            <div className={styles.account}>
              Admin
            </div>
          </div>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">
              <FaHome
                className={styles.icon}
              />
              <div className={styles.text}>
                Home
              </div>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/income">
              <FaFileInvoice
                className={styles.icon}
              />
              <div className={styles.text}>
                Income
              </div>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/savings">
              <MdSavings
                className={styles.icon}
              />
              <div className={styles.text}>
                Savings
              </div>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/transactions">
              <FaMoneyCheckAlt
                className={styles.icon}
              />
              <div className={styles.text}>
                Transactions
              </div>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/charts">
              <FaChartArea
                className={styles.icon}
              />
              <div className={styles.text}>
                Charts
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </IconContext.Provider >
  );
};

export default Menu;