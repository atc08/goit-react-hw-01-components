import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import user from './incomingData/user.json';
import statisticalData from './incomingData/statistical-data.json';
import friends from './incomingData/friends.json'
import transactions from './incomingData/transactions.json'

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics
        title="Upload stats"
        stats={statisticalData}
      />

      <FriendList
        friends={friends}
      />

      <TransactionHistory
        items={transactions}
      />
    </div>
  );
}
