import axios from "axios";
import React, { useState } from "react";
import styles from "./Form.module.scss";

type Transaction = {
  what: string;
  type: string;
  amount: number;
  when: string;
  category: string;
}

type Props = {
  onSubmitTransaction: (transaction: Transaction) => void;
}

const Form: React.FC<Props> = ({ onSubmitTransaction }) => {
  const [what, setWhat] = useState('');
  const [type, setType] = useState('income');
  const [amount, setAmount] = useState<number>(0);
  const [when, setWhen] = useState('');
  const [category, setCategory] = useState('');
  const [incomeTransactions, setIncomeTransactions] = useState([]);
  const [spendTransactions, setSpendTransactions] = useState([]);
  const [savingsTransactions, setSavingsTransactions] = useState([]);
  const [transactions, setTransactions] = useState([...incomeTransactions, ...spendTransactions, ...savingsTransactions]);

  const handleWhatChange = (event) => {
    setWhat(event.target.value);
  }

  const handleTypeChange = (event) => {
    setType(event.target.value);
  }

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!value.match(/^\d*(\.\d*)?$/)) {
      setAmount(0);
      return;
    }
    setAmount(parseFloat(value));
  };

  const handleWhenChange = (event) => {
    setWhen(event.target.value);
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitTransaction({ what, type, amount, when, category });
    onSubmitTransactions({ what, type, amount, when, category });
    setWhat('');
    setType('income');
    setAmount(0);
    setWhen('');
    setCategory('');
    setTransactions(prevTransactions => [...prevTransactions, { what, type, amount, when, category }]);
  };

  const onSubmitTransactions = (transaction: Transaction) => {
    if (transaction.type === 'income') {
      setIncomeTransactions((prevTransactions) => [
        ...prevTransactions,
        transaction,
      ]);
    } else if (transaction.type === 'spend') {
      setSpendTransactions((prevTransactions) => [
        ...prevTransactions,
        transaction,
      ]);
    } else if (transaction.type === 'savings') {
      setSavingsTransactions((prevTransactions) => [
        ...prevTransactions,
        transaction
      ]);
    }
    setTransactions(prevTransactions => [...prevTransactions, transaction]);
    axios.post("/api/transactions", { transactions: [transaction] });
  };

  const incomeTotal = incomeTransactions.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
  const spendTotal = spendTransactions.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
  const savingsTotal = savingsTransactions.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);

  return (
    <div className={styles.section}>
      <form className={styles.border} onSubmit={handleSubmit}>
        <div className={styles.position}>
          <label className={styles.title_what}>What?:</label>
          <textarea
            className={styles.input_what}
            value={what}
            onChange={handleWhatChange}
            required
          />
          <label className={styles.title}>Type:</label>
          <select className={styles.select} value={type} onChange={handleTypeChange}>
            <option value="" disabled selected>Select a type</option>
            <option value="income">Income</option>
            <option value="spend">Spend</option>
            <option value="savings">Savings</option>
          </select>
          <label className={styles.title}>Amount:</label>
          <input
            className={styles.input}
            type="number"
            value={amount}
            onChange={handleAmountChange}
            pattern="\d*"
            required
          />
          <label className={styles.title}>When?:</label>
          <input
            className={styles.input_date}
            type="date"
            value={when}
            onChange={handleWhenChange}
            required
          />
          <label className={styles.title}>Category:</label>
          <select className={styles.select} value={category} onChange={handleCategoryChange}>
            <option value="" disabled>Select a category</option>
            <option value="food">Food</option>
            <option value="health">Health</option>
            <option value="restaurant">Restaurant</option>
            <option value="transport">Transport</option>
            <option value="fees">Fees</option>
            <option value="clothes">Clothes</option>
            <option value="other">Other</option>
          </select>
          <div className={styles.btn_position}>
            <button className={styles.btn} type="submit" value="Button">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;