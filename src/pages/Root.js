import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
