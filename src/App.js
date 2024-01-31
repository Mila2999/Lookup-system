import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserInformationPage from './pages/UserDetail';
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
      { path: '/:users', element: <UserInformationPage /> },
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
