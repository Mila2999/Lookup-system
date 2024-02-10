import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation(props) {
  return (
    <header className={classes.header}>
      <nav className={classes.navItem}>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              end
            >
              <div className={classes.link}>Users List</div>
            </NavLink>
          </li>
          <li>
            <div className={classes.arrow}>{'>'}</div>
          </li>
          <li>
            <div className={classes.userName}>{props.userName}</div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
