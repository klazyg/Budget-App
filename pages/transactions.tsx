import React from "react";
import styles from "../styles/transactions.module.scss";

type Props = {
    transactions: {
        what: string;
        type: string;
        amount: string;
        when: string;
        category: string;
    }[];
}

const Transactions: React.FC<Props> = ({ transactions }) => {

    return (
        <div className={styles.position}>
            <div className={styles.border}>
                <div className={styles.text}>
                    <div className={styles.title}>
                        Transactions
                    </div>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.what}>What</th>
                            <th className={styles.type}>Type</th>
                            <th className={styles.amount}>Amount</th>
                            <th className={styles.when}>When</th>
                            <th className={styles.category}>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {transactions.map((transaction, index) => (
                            <tr key={index}>
                                <td>{transaction.what}</td>
                                <td>{transaction.type}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.when}</td>
                                <td>{transaction.category}</td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Transactions;