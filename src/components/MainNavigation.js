import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.css';
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <ol className={classes.list}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              end
            >
              {`Users List > `}
            </NavLink>
          </ol>
          <ol className={classes.list}>
            <NavLink
              to="/:user"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              end
            >
              Lianna Grand
            </NavLink>
          </ol>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
