import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Users from './features/users/Users';
import FetchUsers from './features/fetchUsers/FetchUsers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Users />
        <FetchUsers />
      </header>
    </div>
  );
}

export default App;
