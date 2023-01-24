import React from "react";
import styles from "../styles/transactions.module.scss";
import axios from "axios";

interface Transaction {
    what: string;
    type: string;
    amount: string;
    when: string;
    category: string;
}

interface TransactionsProps {
    transactions: Transaction[];
}

const Transactions: React.FC<TransactionsProps> = ({ transactions }) => {
    if (!transactions.length) {
        return (
            <div className={styles.position}>
                <div className={styles.border}>
                    <div className={styles.text}>
                        <div className={styles.title}>
                            All Transactions
                        </div>
                    </div>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.what}>What</th>
                                <th className={styles.amount}>Amount</th>
                                <th className={styles.when}>When</th>
                                <th className={styles.category}>Category</th>
                            </tr>
                        </thead>
                    </table>
                    <div className={styles.display}>
                        <span>No transactions</span>
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
                        All Transactions
                    </div>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.what}>What</th>
                            <th className={styles.amount}>Amount</th>
                            <th className={styles.when}>When</th>
                            <th className={styles.category}>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={index} className={styles.tr}>
                                <td>{transaction.what}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.when}</td>
                                <td>{transaction.category}</td>
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
    const transactions = apiResponse.data.transactions.filter(transaction => transaction.type === "spend");
    return {
        props: {
            transactions: transactions,
        },
    };
}

export default Transactions;