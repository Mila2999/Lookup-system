import { createBrowserRouter } from 'react-router-dom';
import UserDetailPage from '../pages/UserDetails';
import UsersListPage from '../pages/UsersList';
import RootLayout from '../pages/Root';

// CR router should be in another file. please use import
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <UsersListPage />,
        loader: async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          if (!response.ok) {
            return [];
          }
          const users = await response.json();
          console.log(users);
          return users;
        },
      },
      {
        path: '/:user',
        element: <UserDetailPage />,
        loader: async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
          if (!response.ok) {
            return null;
          } else {
            const user = await response.json();
            console.log(user);
            return user;
          }
        },
      },
    ],
  },
]);
export default router;
