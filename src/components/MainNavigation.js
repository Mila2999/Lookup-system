import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.css';

function MainNavigation(props) {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.navItems}>
          <div className={classes.nav}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              end
            >
              <p> Users List </p>
            </NavLink>
          </div>
          <div>
            <h2 className={classes.arrow}>{`>`}</h2>
          </div>
          <div>
            <NavLink
              to="/:userId"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              end
            >
              <span> {props.userName}</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default MainNavigation;
