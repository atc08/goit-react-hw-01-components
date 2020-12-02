import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Section from './components/Section';
import user from './incomingData/user.json';
import statisticalData from './incomingData/statistical-data.json';
import friends from './incomingData/friends.json';
import transactions from './incomingData/transactions.json';

export default function App() {
  return (
    <div>
      <Section title="Задание 1 - Профиль социальной сети">
        <Profile
          avatar={user.avatar}
          name={user.name}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
      </Section>

      <Section title="Задание 2 - Секция статистики">
        <Statistics title="Upload stats" stats={statisticalData} />
      </Section>

      <Section title="Задание 3 - Список друзей">
        <FriendList friends={friends} />
      </Section>

      <Section title="Задание 4 - История транзакций">
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
}
