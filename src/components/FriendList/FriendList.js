import React from 'react';
import FriendListItem from './FriendListItem';
import styles from './friendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friend__list}>
    {' '}
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);
export default FriendList;