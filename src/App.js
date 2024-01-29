import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserPage from './pages/User';
import UsersPage from './pages/Users';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <UsersPage /> },
      { path: '/users', element: <UserPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
