import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.text}>© {new Date().getFullYear()} Klaudia Zygmunt</span>
    </footer>
  );
};

export default Footer;