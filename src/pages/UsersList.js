import { useLoaderData } from 'react-router-dom';
import UsersList from '../components/UsersList';
import MainNavigation from '../components/MainNavigation';

function UsersListPage() {
  const users = useLoaderData();

  return (
    <>
      <MainNavigation />
      <hr />
      <UsersList users={users} />
    </>
  );
}
export default UsersListPage;

export async function loader() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw { message: 'Could not fetch events' };
  } else {
    const users = await response.json();
    return users;
  }
}
