import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.css';

function MainNavigation(props) {
  return (
    <header className={classes.header}>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : undefined)} end>
          <p> Users List </p>
        </NavLink>
        <h2>{`>`}</h2>
        <NavLink
          to="/:userId"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <span> {props.userName}</span>
        </NavLink>
      </nav>
    </header>
  );
}
export default MainNavigation;
