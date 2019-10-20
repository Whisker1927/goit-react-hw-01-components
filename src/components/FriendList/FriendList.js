import React from 'react';
import FriendListItem from './FriendListItem';
import styles from './friendList.module.css';
import T from 'prop-types';

const FriendList = ({ friends }) => (
  <ul className={styles.friend__list}>
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

FriendList.propTypes = {
  friends: T.arrayOf(
    T.shape({
      avatar: T.string.isRequired,
      name: T.string.isRequired,
      isOnline: T.bool.isRequired,
      id: T.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default FriendList;
