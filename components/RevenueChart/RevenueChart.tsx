import React, { PureComponent, useState } from 'react';
import styles from "./RevenueChart.module.scss";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    month: 'Jan',
    uv: 4000,
    Income: 2400,
    amt: 2400,
  },
  {
    month: 'Feb',
    uv: 3000,
    Income: 1398,
    amt: 2210,
  },
  {
    month: 'Mar',
    uv: 2000,
    Income: 9800,
    amt: 2290,
  },
  {
    month: 'Apr',
    uv: 2780,
    Income: 3908,
    amt: 2000,
  },
  {
    month: 'May',
    uv: 1890,
    Income: 4800,
    amt: 2181,
  },
  {
    month: 'June',
    uv: 2390,
    Income: 3800,
    amt: 2500,
  },
  {
    month: 'July',
    uv: 3490,
    Income: 4300,
    amt: 2100,
  },
  {
    month: 'Aug',
    uv: 2390,
    Income: 3800,
    amt: 2500,
  },
  {
    month: 'Sep',
    uv: 2780,
    Income: 3908,
    amt: 2000,
  },
  {
    month: 'Oct',
    uv: 4000,
    Income: 2400,
    amt: 2400,
  },
  {
    month: 'Nov',
    uv: 2780,
    Income: 3908,
    amt: 2000,
  },
  {
    month: 'Dec',
    uv: 3490,
    Income: 4300,
    amt: 2100,
  },
];


export default class RevenueChart extends PureComponent {
  render() {
    return (
      <div className={styles.border}>
        <div className={styles.text}>
          <div className={styles.title}>
            {new Date().getFullYear()} Revenue Chart
          </div>
          <div className={styles.viewMore}>
            view more
          </div>
        </div>
        <ResponsiveContainer width="100%" height="80%" className={styles.chart}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="1 8" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={value => '$' + value} />
            <Line type="monotone" dataKey="Income" stroke="#524AAD" dot={{ strokeWidth: 3, r: 3.5 }} strokeWidth={2.5} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
