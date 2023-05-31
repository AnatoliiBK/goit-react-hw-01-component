import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import user from "./components/user/user.json";
import data from "./components/statistic/statistics.json";
import friends from "./components/friends/friends.json";
import transactions from "./components/transactions/transactions.json";

import { App } from 'components/App';
import { Profile } from "components/user/Profile.jsx";
import { Statistics } from 'components/statistic/Staistics.jsx';
import { FriendList } from 'components/friends/FriendList.jsx';
import { TransactionHistory } from 'components/transactions/Transactions.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
 <>
 <React.StrictMode>
    <App />   
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
       />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </React.StrictMode>
  </>
);
