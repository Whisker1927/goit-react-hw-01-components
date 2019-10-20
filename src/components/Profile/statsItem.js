import React from 'react';
import T from 'prop-types';
import styles from './profile.module.css';

const StatsItem = ({ statsItem, quantity }) => {
  const formatedQuantity = quantity.toString();

  return (
    <li className={styles.item}>
      <span className={styles.label}>{statsItem}</span>
      <span className={styles.quantity}>{formatedQuantity}</span>
    </li>
  );
};

StatsItem.propTypes = {
  statsItem: T.string.isRequired,
  quantity: T.number.isRequired,
};

export default StatsItem;
