import React from 'react';
import T from 'prop-types';
import styles from './friendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span className={isOnline ? styles.status : styles.false}></span>
    <img className={styles.avatar} src={avatar} alt="avatar" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: T.string.isRequired,
  name: T.string.isRequired,
  isOnline: T.bool.isRequired,
};
export default FriendListItem;
