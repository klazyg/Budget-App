import Link from 'next/link';
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.section}>
      <Link href="/">
        <h1 className={styles.title}>Home Budget</h1>
      </Link>
    </header>
  );
};

export default Header;