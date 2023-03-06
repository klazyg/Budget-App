import axios from "axios";
import TransactionsTable from "../components/TransactionsTable/TransactionsTable";

const Transactions = ({ transactions }) => {
    return (
        <TransactionsTable transactions={transactions} title="All Transactions" />
    )
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