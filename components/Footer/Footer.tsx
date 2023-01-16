import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <span>Copyright © {new Date().getFullYear()} Klaudia Zygmunt</span>
    </div>
  );
};

export default Footer;