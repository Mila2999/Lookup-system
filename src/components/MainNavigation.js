import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <heder>
      <nav>
        <ul>
          <li>
            <Link to="/">Users List</Link>
          </li>
          <li>
            <Link to="/users">All users (7)</Link>
          </li>
        </ul>
      </nav>
    </heder>
  );
}
export default MainNavigation;
