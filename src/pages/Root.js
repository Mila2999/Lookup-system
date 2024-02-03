import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  return (
    <div>
      <MainNavigation />
      <hr />
      <Outlet />
    </div>
  );
}

export default RootLayout;
