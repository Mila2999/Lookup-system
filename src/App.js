import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserDetailPage from './pages/UserDetail';
import UsersListPage from './pages/UsersList';
import RootLayout from './pages/Root';
import classes from './App.css';

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
function App() {
  return (
    <div className={classes.app}>
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
