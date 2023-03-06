import { useState } from 'react';
import TotalCosts from "../components/TotalCosts/TotalCosts";
import Transaction from "../components/Transaction/Transaction";
import Form from "../components/Form/Form";
import BiggestExpenses from '../components/BiggestExpenses/BiggestExpenses';
import styles from '../styles/Home.module.scss';
import RevenueChart from '../components/RevenueChart/RevenueChart';
import axios from 'axios';

export type TTransactionType = "spend" | "income" | "savings";
export interface ITransaction {
  what: string;
  type: TTransactionType;
  amount: number;
  when: string;
  category: string;
}
interface ICategoryTotal {
  category: string;
  total: number;
}
interface HomeProps {
  transactionsData: ITransaction[];
}

const Home: React.FC<HomeProps> = ({ transactionsData }) => {
  const [transactions, setTransactions] = useState(transactionsData);

  const onSubmitTransaction = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
    axios.post("/api/transactions", { transactions: [transaction] });
  }

  const calculateTotal = (type) => transactions
    .filter(transaction => transaction.type === type)
    .reduce((total, transaction) => total + transaction.amount, 0);

  const incomeTotal = calculateTotal('income');
  const spendTotal = calculateTotal('spend');
  const savingsTotal = calculateTotal('savings');

  const sumSpendByCategory = (transactions: ITransaction[]): ICategoryTotal[] => {
    const spendTransactions = transactions.filter(transaction => transaction.type === 'spend');
    const spendByCategory: { [category: string]: number } = {};

    spendTransactions.forEach(transaction => {
      const { category, amount } = transaction;
      if (spendByCategory[category]) {
        spendByCategory[category] += amount;
      } else {
        spendByCategory[category] = amount;
      }
    });

    const result = Object.entries(spendByCategory)
      .map(([category, total]) => ({ category, total }))
      .sort((a, b) => b.total - a.total);

    return result;
  };

  const categoryTotals = sumSpendByCategory(transactions);

  return (
    <div className={styles.container}>
      <div className={styles.leftWidth}>
        <TotalCosts
          incomeTotal={incomeTotal}
          spendTotal={spendTotal}
          savingsTotal={savingsTotal}
        />
        <RevenueChart transactions={transactions.filter((x) => (x.type == "income"))} />
        <div className={styles.gridItem}>
          <Transaction transactions={transactions} />
          <BiggestExpenses sortedTransactions={categoryTotals} />
        </div>
      </div>
      <div className={styles.rightWidth}>
        <Form onSubmitTransaction={onSubmitTransaction} />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get("http://localhost:3000/api/transactions");
    return {
      props: {
        transactionsData: response.data.transactions,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        transactionsData: [],
      },
    };
  }
}

export default Home;