//import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './components/user.json';
import statisticData from './components/statistics.json';
import friends from './components/friends.json';
import transactions from './components/transactions.json';



function App() {
  return (
    <div className="App">
    
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics title="Upload stats" stats={statisticData} />
<FriendList friends={friends} />
<TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
