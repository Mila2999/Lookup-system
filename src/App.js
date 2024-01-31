import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserPage from './pages/User';
import UsersListPage from './pages/UsersList';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <UsersListPage />,
      },
      { path: '/users', element: <UserPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
