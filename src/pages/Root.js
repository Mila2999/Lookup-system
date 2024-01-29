import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <h1>Users List</h1>
      <Outlet />
    </>
  );
}
export default RootLayout;
