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
      <div>
        <h1> {selectedUser.name} </h1>
        <a href="/">
          <button>Back</button>
        </a>
      </div>
      <div>
        <h1>User Info</h1>
        <p>Name: {selectedUser.name}</p>
        <p>Username: {selectedUser.username}</p>
        <p>Phone: {selectedUser.phone}</p>
        <p>Email: {selectedUser.email}</p>
        <p>Website: {selectedUser.website}</p>
      </div>
      <div>
        <h1>Address</h1>
        <p>Street: {selectedUser.address.street}</p>
        <p>Suite: {selectedUser.address.suite}</p>
        <p>City:{selectedUser.address.city}</p>
        <p>Zipcode: {selectedUser.address.zipcode}</p>
      </div>
      <div>
        <h1>Company</h1>
        <p>Name:{selectedUser.company.name}</p>
        <p>CatchPhrase:{selectedUser.company.catchPhrase}</p>
      </div>
    </div>
  );
}
export default UserDetails;
