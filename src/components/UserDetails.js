import { useState, useEffect } from 'react';
// import UsersList from './UsersList';
function UserDetails() {
  const [selectedUser, setSelectedUser] = useState(undefined);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();

        setSelectedUser(data);
        // setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [1]);

  console.log(selectedUser);

  if (!selectedUser) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>User information {selectedUser.name} </p>
    </div>
  );
}
export default UserDetails;
