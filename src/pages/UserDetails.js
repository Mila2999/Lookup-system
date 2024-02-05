import { useLoaderData } from 'react-router-dom';
import UserDetails from '../components/UserDetails';
import MainNavigation from '../components/MainNavigation';

function UserDetailsPage() {
  const user = useLoaderData();
  return (
    <>
      <MainNavigation userName={user.name} />
      <hr />
      <UserDetails user={user} />
    </>
  );
}
export default UserDetailsPage;

export async function loader({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
  if (!response.ok) {
    console.error(response);
  } else {
    const user = await response.json();
    return user;
  }
}
