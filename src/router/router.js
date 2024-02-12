import { createBrowserRouter } from 'react-router-dom';
import UserDetailPage, { loader as userDetailLoader } from '../pages/UserDetails';
import UsersListPage, { loader as usersLoader } from '../pages/UsersList';
import RootLayout from '../pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    id: 'user-detail',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <UsersListPage />,
        loader: usersLoader,
      },
      {
        path: '/:userId',
        element: <UserDetailPage />,
        loader: userDetailLoader,
      },
    ],
  },
]);
export default router;
