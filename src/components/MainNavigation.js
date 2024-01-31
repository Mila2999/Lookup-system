import { NavLink } from 'react-router-dom';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li className={classes.list}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              end
            >
              Users List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
            >
              All users (7)
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
