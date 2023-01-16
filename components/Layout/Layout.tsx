import React from 'react';
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import _app from '../../pages/_app';
import styles from './Layout.module.scss';

type Props = {
    Component: any;
    pageProps: any;
    children: any;
};

const Layout: React.FC<Props> = ({ Component, pageProps }) => {
    return (
        <>
            <Menu />
            <div className={styles.menu}>
                <Header />
                <div className={styles.color}>
                    <div className={styles.inner}>
                        <Component {...pageProps} />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Layout;