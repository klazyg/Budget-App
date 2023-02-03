import React from 'react';
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from './Layout.module.scss';

export default function Layout({ children }) {
    return (
        <>
            <Menu />
            <div className={styles.menu}>
                <Header />
                <div className={styles.color}>
                    <div className={styles.inner}>
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}