import React from "react";
import styles from "../styles/income.module.scss";
import axios from "axios";

interface Transaction {
    what: string;
    amount: string;
    when: string;
}

interface TransactionsProps {
    transactions: Transaction[];
}

const Income: React.FC<TransactionsProps> = ({ transactions }) => {
    if (!transactions.length) {
        return (
            <div className={styles.position}>
                <div className={styles.border}>
                    <div className={styles.text}>
                        <div className={styles.title}>
                            All Income
                        </div>
                    </div>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.what}>What</th>
                                <th className={styles.amount}>Amount</th>
                                <th className={styles.when}>When</th>
                            </tr>
                        </thead>
                    </table>
                    <div className={styles.display}>
                        <span>No income</span>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className={styles.position}>
            <div className={styles.border}>
                <div className={styles.text}>
                    <div className={styles.title}>
                        All Income
                    </div>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.what}>What</th>
                            <th className={styles.amount}>Amount</th>
                            <th className={styles.when}>When</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={index} className={styles.tr}>
                                <td>{transaction.what}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.when}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export async function getServerSideProps() {
    const apiResponse = await axios.get("http:localhost:3000/api/transactions");
    const transactions = apiResponse.data.transactions.filter(transaction => transaction.type === "income");
    return {
        props: {
            transactions: transactions,
        },
    };
}

export default Income;