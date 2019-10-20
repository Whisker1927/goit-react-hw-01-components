import React from 'react';
import T from 'prop-types';
import styles from './profile.module.css';
import StatsItem from './statsItem';

const List = ({ stats }) => (
  <ul className={styles.stats}>
    <StatsItem statsItem="Followers" quantity={stats.followers} />
    <StatsItem statsItem="Views" quantity={stats.views} />
    <StatsItem statsItem="Likes" quantity={stats.likes} />
  </ul>
);

List.propTypes = {
  stats: T.shape({
    followers: T.number.isRequired,
    views: T.number.isRequired,
    likes: T.number.isRequired,
  }).isRequired,
};

export default List;
