import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <hr />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
