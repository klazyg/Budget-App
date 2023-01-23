import React, { useState } from 'react';
import TotalCosts from "../components/TotalCosts/TotalCosts";
import Transaction from "../components/Transaction/Transaction";
import Form from "../components/Form/Form";
import Spending from '../components/Spending/Spending';
import BiggestExpenses from '../components/BiggestExpenses/BiggestExpenses';
import styles from '../styles/Home.module.scss'
import RevenueChart from '../components/RevenueChart/RevenueChart';
import '/styles/main.module.scss';
import axios from 'axios';

const Home: React.FC = ({ transactionsData }) => {
  const [transactions, setTransactions] = useState(transactionsData);

  const onSubmitTransaction = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  }

  const incomeTotal = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((total, transaction) => total + transaction.amount, 0);
  const spendTotal = transactions
    .filter(transaction => transaction.type === 'spend')
    .reduce((total, transaction) => total + transaction.amount, 0);
  const savingsTotal = transactions
    .filter(transaction => transaction.type === 'savings')
    .reduce((total, transaction) => total + transaction.amount, 0);

  const transactionsByCategory = {
    food: transactions.filter(t => t.category === 'food'),
    health: transactions.filter(t => t.category === 'health'),
    restaurant: transactions.filter(t => t.category === 'restaurant'),
    transport: transactions.filter(t => t.category === 'transport'),
    fees: transactions.filter(t => t.category === 'fees'),
    clothes: transactions.filter(t => t.category === 'clothes'),
    otherExpenses: transactions.filter(t => t.category === 'otherExpenses')
  };

  const categoryTotals = Object.entries(transactionsByCategory).map(([category, transactions]) => ({
    category,
    total: transactions.reduce((total, transaction) => total + transaction.amount, 0)
  }));

  const sortedCategoryTotals = categoryTotals.sort((a, b) => b.total - a.total);

  const sortedTransactions = Object.entries(transactionsByCategory).map(([category, transactions]) => ({
    category,
    total: transactions.reduce((total, transaction) => total + parseFloat(transaction.amount), 0)
  })).sort((a, b) => b.total - a.total);

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
          <BiggestExpenses
            sortedTransactions={sortedCategoryTotals} />
        </div>
      </div>
      <div className={styles.rightWidth}>
        {/* <Spending /> */}
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