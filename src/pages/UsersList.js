import { useState, useEffect } from 'react';
import Card from '../components/Card';
import classes from '../components/UserList.module.css';
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
      </header>
      <h1 className={classes.h2}>ALL USERS (7)</h1>
      <div className={classes.card}>
        {users.map((user) => (
          <Card
            key={user.id}
            title={generateUserTitle(user.name)}
            name={user.name}
            email={user.email}
          />
        ))}
        <Card />
      </div>
    </div>
  );
}
export default UsersListPage;

function generateUserTitle(fullName) {
  const [firstName, lastName] = fullName.split(' ');

  const firstLetterFirstName = firstName.charAt(0);
  const firstLetterLastName = lastName.charAt(0);

  const title = `${firstLetterFirstName}${firstLetterLastName}`;
  return title;
}
