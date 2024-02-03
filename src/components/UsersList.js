import { useState, useEffect } from 'react';
import Card from './Card';

import { cutUserName, generateUserTitle } from '../utils/utils';
import classes from './UsersList.module.css';

function UsersList() {
  const [users, setUsers] = useState([]);
  // CR use react loader.
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
      <div>
        <h2 className={classes.h2}>ALL USERS ({users.length})</h2>
        <div className={classes.usersContainer}>
          {users.map((user) => (
            <Card
              key={user.id}
              title={generateUserTitle(user.name)}
              name={cutUserName(user.name)}
              email={user.email.toLowerCase()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default UsersList;
