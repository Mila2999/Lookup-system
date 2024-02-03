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
      },
      { path: '/:user', element: <UserDetailPage /> },
    ],
  },
]);
export default router;
