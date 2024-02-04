import { useState, useEffect, useLoaderData } from 'react';
import UsersList from '../components/UsersList';
import { useLoaderData } from 'react-router-dom';

function HomePage() {
  const userID = useLoaderData;
  //   const [users, setUsers] = useState([]);
  // CR use react loader.
  //   useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         setUsers(data);
  //       });
  //   }, [1]);
  return (
    <>
      <h1>Users List</h1>;
      <hr />
      <UsersList />
    </>
  );
}
export default HomePage;
