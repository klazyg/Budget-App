import React from "react";
import styles from "../styles/savings.module.scss";
import axios from "axios";

interface Transaction {
    what: string;
    amount: string;
    when: string;
}

interface TransactionsProps {
    transactions: Transaction[];
}

const Savings: React.FC<TransactionsProps> = ({ transactions }) => {
    return (
        <div className={styles.position}>
            <div className={styles.border}>
                <div className={styles.text}>
                    <div className={styles.title}>
                        All Savings
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
    const transactions = apiResponse.data.transactions.filter(transaction => transaction.type === "savings");
    console.log(apiResponse.data);
    return {
        props: {
            transactions: transactions,
        },
    };
}

export default Savings;