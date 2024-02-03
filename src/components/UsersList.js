import { useState, useEffect } from 'react';
import Card from './Card';

import generateUserTitle from './utils';
import classes from './UsersList.module.css';

function UsersList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <header>
        <h1 className={classes.h1}>User List</h1>
        <hr />
      </header>
      <main>
        <div>
          <h2 className={classes.h2}>ALL USERS ({users.length})</h2>
          <div className={classes.card}>
            {users.map((user) => (
              <Card
                key={user.id}
                title={generateUserTitle(user.name)}
                name={user.name}
                email={user.email}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
export default UsersList;
