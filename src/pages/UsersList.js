import { useLoaderData } from 'react-router-dom';
import UsersList from '../components/UsersList';

function UsersListPage() {
  const users = useLoaderData();

  return (
    <>
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
