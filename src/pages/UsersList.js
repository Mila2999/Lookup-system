import MainNavigation from '../components/MainNavigation';
import UsersList from '../components/UsersList';

function UsersListPage() {
  return (
    <>
      <header>
        <MainNavigation />
        <hr />
      </header>
      <UsersList />
    </>
  );
}
export default UsersListPage;
