import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.css';

function MainNavigation({ userName }) {
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
              <span> Users List </span>
            </NavLink>
          </ol>
          <ol className={classes.list}>
            <NavLink
              to="/:userId"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              end
            >
              <span>{`>`}</span>
            </NavLink>
          </ol>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
