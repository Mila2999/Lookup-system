// import { useState, useEffect } from 'react';

function UserDetails({ user }) {
  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div>
        <h1> {user.name} </h1>
        <a href="/users">
          <button>Back</button>
        </a>
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
