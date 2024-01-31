import { useState, useEffect } from 'react';
import Card from '../components/Card';

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
    <div>
      <header>
        <h1>User List</h1>
      </header>
      <h2>All Users (7)</h2>
      <div>
        {users.map((user) => (
          <Card key={user.id} />
        ))}
        <Card />
      </div>
    </div>
  );
}
export default UsersListPage;
