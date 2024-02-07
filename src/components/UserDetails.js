import { Link } from 'react-router-dom';

import classes from './UserDetails.module.css';
function UserDetails({ user }) {
  if (!user) {
    return null;
  }

  return (
    <div>
      <div>
        <h2> {user.name.toUpperCase()} </h2>
        <Link to="/">
          <button className={classes.button}>Back</button>
        </Link>
      </div>
      <div>
        <h2>User Info</h2>
        <p>
          Name: <span>{user.name}</span>
        </p>
        <p>
          Username:<span> {user.username}</span>
        </p>
        <p>
          Phone:<span> {user.phone}</span>
        </p>
        <p>
          Email: <span>{user.email}</span>
        </p>
        <p>
          Website:<span> {user.website}</span>
        </p>
      </div>
      <div>
        <h2>Address</h2>
        <p>
          Street:<span> {user.address.street}</span>
        </p>
        <p>
          Suite: <span>{user.address.suite}</span>
        </p>
        <p>
          City: <span>{user.address.city}</span>
        </p>
        <p>
          Zipcode: <span>{user.address.zipcode}</span>
        </p>
      </div>
      <div>
        <h2>Company</h2>
        <p>
          Name: <span>{user.company.name}</span>
        </p>
        <p>
          CatchPhrase: <span>{user.company.catchPhrase}</span>
        </p>
      </div>
    </div>
  );
}
export default UserDetails;
