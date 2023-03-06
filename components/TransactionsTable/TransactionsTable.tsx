import styles from "./TransactionsTable.module.scss";

interface Transaction {
    what: string;
    amount: string;
    when: string;
    category: string;
}

interface TransactionsTableProps {
    title: string;
    transactions: Transaction[];
}

const TransactionsTable: React.FC<TransactionsTableProps> = ({ title, transactions }) => {
    const totalAmount = transactions.reduce((total, transaction) => total + Number(transaction.amount), 0);
    const showCategoryColumn = title === "All Transactions";
    const amountCellWidth = showCategoryColumn ? '10%' : '20%';
    const whenCellWidth = showCategoryColumn ? '20%' : '30%';

    if (!transactions.length) {
        return (
            <div className={styles.position}>
                <div className={styles.border}>
                    <div className={styles.text}>
                        <div className={styles.title}>
                            {title}
                        </div>
                    </div>
                    <table className={styles.table}>
                        <thead>
                            <tr className={styles.table_heading}>
                                <th className={styles.what_cell}>What</th>
                                <th className={styles.amount_cell}>Amount</th>
                                <th className={styles.when_cell}>When</th>
                                {showCategoryColumn && <th className={styles.category_cell}>Category</th>}
                            </tr>
                        </thead>
                    </table>
                    <div className={styles.display}>
                        <span>No transactions to display</span>
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
                        {title}
                    </div>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.table_heading}>
                            <th className={styles.what_cell}>What</th>
                            <th className={styles.amount_cell}>Amount</th>
                            <th className={styles.when_cell}>When</th>
                            {showCategoryColumn && <th className={styles.category_cell}>Category</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={index} className={styles.table_row}>
                                <td className={styles.table_cell}>{transaction.what}</td>
                                <td className={styles.table_cell_amount} style={{ width: amountCellWidth }}>${transaction.amount}</td>
                                <td className={styles.table_cell} style={{ width: whenCellWidth }}>{transaction.when}</td>
                                {showCategoryColumn && <td className={styles.table_cell}>{transaction.category}</td>}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className={styles.total}>Total Amount: +${totalAmount}</div>
            </div>
        </div>
    );
};

export default TransactionsTable;