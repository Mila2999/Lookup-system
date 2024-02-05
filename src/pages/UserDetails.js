// import { useParams } from 'react-router-dom';
import UserDetails from '../components/UserDetails';
import MainNavigation from '../components/MainNavigation';
import { useLoaderData } from 'react-router-dom';

function UserDetailsPage() {
  const user = useLoaderData();
  console.log(user);
  return (
    <>
      <UserDetails user={user} />
    </>
  );
}
export default UserDetailsPage;
