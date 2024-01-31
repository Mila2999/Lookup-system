import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.css';
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <lu className={classes.list}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              end
            >
              Users List
            </NavLink>
          </lu>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
