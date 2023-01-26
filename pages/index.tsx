import React, { useState } from 'react';
import TotalCosts from "../components/TotalCosts/TotalCosts";
import Transaction from "../components/Transaction/Transaction";
import Form from "../components/Form/Form";
import BiggestExpenses from '../components/BiggestExpenses/BiggestExpenses';
import styles from '../styles/Home.module.scss'
import RevenueChart from '../components/RevenueChart/RevenueChart';
import axios from 'axios';

interface HomeProps {
  transactionsData: Transaction[];
}

const Home: React.FC<HomeProps> = ({ transactionsData }) => {
  const [transactions, setTransactions] = useState(transactionsData);

  const onSubmitTransaction = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  }

  const calculateTotal = (type) => transactions
    .filter(transaction => transaction.type === type)
    .reduce((total, transaction) => total + transaction.amount, 0);

  const incomeTotal = calculateTotal('income');
  const spendTotal = calculateTotal('spend');
  const savingsTotal = calculateTotal('savings');

  const transactionsByCategory = transactions.reduce((acc, curr) => {
    acc[curr.category] = acc[curr.category] || [];
    acc[curr.category].push(curr);
    return acc;
  }, {});

  const categoryTotals = Object.entries(transactionsByCategory).map(([category, transactions]) => {
    const trans = transactions as typeof Transaction[]
    return {
      category,
      total: trans.reduce((total, transaction) => total + transaction.amount, 0)
    }
  });

  const sortedTransactions = categoryTotals
    .sort((a, b) => b.total - a.total)
    .map(t => ({
      type: "spend",
      category: t.category,
      total: t.total
    }));
  return (
    <div className={styles.container}>
      <div className={styles.leftWidth}>
        <TotalCosts
          incomeTotal={incomeTotal}
          spendTotal={spendTotal}
          savingsTotal={savingsTotal}
        />
        <RevenueChart />
        <div className={styles.gridItem}>
          <Transaction transactions={transactions} />
          <BiggestExpenses sortedTransactions={sortedTransactions} />
        </div>
      </div>
      <div className={styles.rightWidth}>
        <Form onSubmitTransaction={onSubmitTransaction} />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const apiResponse = await axios.get("http:localhost:3000/api/transactions");
  return {
    props: {
      transactionsData: apiResponse.data.transactions,
    },
  };
}

export default Home;