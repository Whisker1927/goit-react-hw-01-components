import React from 'react';
import T from 'prop-types';
import styles from './transaction.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transaction__history}>
    <thead>
      <tr className={styles.tablerow}>
        <th className={styles.tablehead}>Type</th>
        <th className={styles.tablehead}>Amount</th>
        <th className={styles.tablehead}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <td className={styles.column}>{item.type}</td>
          <td className={styles.column}>{item.amount}</td>
          <td className={styles.column}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
TransactionHistory.propTypes = {
  items: T.arrayOf(T.string),
};
export default TransactionHistory;
