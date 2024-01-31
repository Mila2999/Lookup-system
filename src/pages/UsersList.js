import { useState, useEffect } from 'react';
import Card from '../components/Card';
import classes from '../components/UserList.module.css';
import generateUserTitle from '../components/utils';

function UsersListPage() {
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
    <div className={classes.container}>
      <header>
        <h2 className={classes.h2}>User List</h2>
        <hr />
      </header>
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
  );
}
export default UsersListPage;
