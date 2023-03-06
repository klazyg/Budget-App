import Link from 'next/link';
import { FaHome, FaFileInvoice, FaMoneyCheckAlt } from 'react-icons/fa';
import { MdSavings } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import styles from "./Menu.module.scss";

const Menu: React.FC = () => {
  return (
    <IconContext.Provider value={{ size: '1.3rem' }}>
      <nav className={styles.menu}>
        <div className={styles.profile}>
          <CgProfile className={styles.avatar} />
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
          <Link href="/">
            <li className={styles.item}>
              <FaHome
                className={styles.icon} />
              <div className={styles.text}>
                Home
              </div>
            </li>
          </Link>
          <Link href="/income">
            <li className={styles.item}>
              <FaFileInvoice
                className={styles.icon} />
              <div className={styles.text}>
                Income
              </div>
            </li>
          </Link>
          <Link href="/savings">
            <li className={styles.item}>
              <MdSavings
                className={styles.icon} />
              <div className={styles.text}>
                Savings
              </div>
            </li>
          </Link>
          <Link href="/transactions">
            <li className={styles.item}>
              <FaMoneyCheckAlt
                className={styles.icon} />
              <div className={styles.text}>
                Transactions
              </div>
            </li>
          </Link>
        </ul>
      </nav>
    </IconContext.Provider >
  );
};

export default Menu;