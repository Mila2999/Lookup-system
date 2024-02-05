import { Link } from 'react-router-dom';
function UserDetails({ user }) {
  if (!user) {
    return null;
  }

  return (
    <div>
      <div>
        <h1> {user.name} </h1>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
      <div>
        <h2>User Info</h2>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Phone: {user.phone}</p>
        <p>Email: {user.email}</p>
        <p>Website: {user.website}</p>
      </div>
      <div>
        <h2>Address</h2>
        <p>Street: {user.address.street}</p>
        <p>Suite: {user.address.suite}</p>
        <p>City:{user.address.city}</p>
        <p>Zipcode: {user.address.zipcode}</p>
      </div>
      <div>
        <h2>Company</h2>
        <p>Name:{user.company.name}</p>
        <p>CatchPhrase:{user.company.catchPhrase}</p>
      </div>
    </div>
  );
}
export default UserDetails;
