import { useState, useEffect } from 'react';
import styles from "./RevenueChart.module.scss";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ITransaction } from '../../pages';

type Props = {
  transactions: ITransaction[];
}

const RevenueChart: React.FC<Props> = ({ transactions }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const sortedData = transactions.sort((a, b) => new Date(a.when).getTime() - new Date(b.when).getTime());
    const groupedData = sortedData.reduce((acc, curr) => {
      const month = new Date(curr.when).toLocaleString('en-US', { month: 'short' });
      const existingMonth = acc.find(item => item.month === month);

      if (existingMonth) {
        existingMonth.Income += curr.amount;
      } else {
        acc.push({
          month,
          Income: curr.amount,
        });
      }

      return acc;
    }, []);

    setChartData(groupedData);
  }, [transactions]);

  return (
    <div className={styles.border}>
      <div className={styles.text}>
        <div className={styles.title}>
          {new Date().getFullYear()} Revenue Chart
        </div>
      </div>
      <ResponsiveContainer width="100%" height="80%" className={styles.chart}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="1 8" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={value => '$' + value} />
          <Line type="monotone" dataKey="Income" stroke="#524AAD" dot={{ strokeWidth: 3, r: 3.5 }} strokeWidth={2.5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;