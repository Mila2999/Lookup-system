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
