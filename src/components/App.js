import React from 'react';
import styles from './index.module.css';
import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Stats from './Stats/Stats';
import stats from './Stats/statsItems.json';
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transaction from './TransactionHistory/transaction.json';

const App = () => (
  <div className={styles.container}>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    <FriendList friends={friends} />
    <TransactionHistory items={transaction} />
  </div>
);
export default App;
