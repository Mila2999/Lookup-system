// App.js

import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Fetch user data from JSONplaceholder API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="app">
      <header>
        <h1>User List</h1>
      </header>
      <main>
        <div className="user-list">
          <h2>All Users(7)</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id} onClick={() => handleUserClick(user)}>
                {user.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="user-details">
          <h2>User Details</h2>
          {selectedUser ? (
            <div>
              <p>
                <strong>Name:</strong> {selectedUser.name}
              </p>
              <p>
                <strong>Email:</strong> {selectedUser.email}
              </p>
              {/* Add more user details as needed */}
            </div>
          ) : (
            <p>Select a user to view details</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
