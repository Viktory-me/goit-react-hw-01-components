import Profile from './components/Profile/Profile';
import Container from './components/Container/Container';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import statisticalData from './data/statistical-data.json';
import user from './data/user.json';
import friends from './data/friends.json';

export default function App() {
  return (
    <div>
      <Container>
        <Profile
          avatar={user.avatar}
          name={user.name}
          tag={user.tag}
          location={user.location}
          followersQuantity={user.stats.followers}
          viewsQuantity={user.stats.views}
          likesQuantity={user.stats.likes}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory />
      </Container>
    </div>
  );
}
