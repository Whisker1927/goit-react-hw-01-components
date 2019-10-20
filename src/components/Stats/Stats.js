import React from 'react';
import styles from './stats.module.css';
import T from 'prop-types';

const Stats = ({ title, stats }) => (
  <section className={styles.stats}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.stat__list}>
      {stats.map(stat => (
        <li className={styles.item} key={stat.id}>
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
Stats.defaultProps = {
  title: 'Upload stats',
};

Stats.propTypes = {
  stats: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default Stats;
