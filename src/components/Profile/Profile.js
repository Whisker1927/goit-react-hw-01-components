import React from 'react';
import T from 'prop-types';
import styles from './profile.module.css';
import List from './List';

const Profile = ({ user }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img className={styles.avatar} src={user.avatar} alt="user avatar" />
      <p className={styles.name}>{user.name}</p>
      <p className={styles.tag}>{user.tag}</p>
      <p className={styles.location}>{user.location}</p>
    </div>
    <List stats={user.stats} />
  </div>
);

Profile.propTypes = {
  user: T.shape({
    name: T.string.isRequired,
    tag: T.string.isRequired,
    location: T.string.isRequired,
    avatar: T.string.isRequired,
    stats: T.objectOf(T.number.isRequired).isRequired,
  }).isRequired,
};

export default Profile;
