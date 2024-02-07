import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation(props) {
  return (
    <header className={classes.header}>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : undefined)} end>
            Users List
          </NavLink>
        </li>
        <li>{'>'}</li>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : undefined)} end>
            {props.userName}
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
export default MainNavigation;
