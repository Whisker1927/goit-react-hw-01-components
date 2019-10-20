import React from 'react';
import T from 'prop-types';
import styles from './profile.module.css';
import List from './List';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img className={styles.avatar} src={avatar} alt="user avatar" />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
    <List stats={stats} />
  </div>
);

Profile.propTypes = {
  name: T.string.isRequired,
  tag: T.string.isRequired,
  location: T.string.isRequired,
  avatar: T.string.isRequired,
};
export default Profile;
