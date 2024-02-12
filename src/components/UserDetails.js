import { Link } from 'react-router-dom';
import UserDetail from './UserDetail';
import classes from './UserDetails.module.css';

function UserDetails({ user }) {
  if (!user) {
    return null;
  }

  const userInfo = {
    icon: 'faUser',
    title: 'User Info',
    arr: [
      { key: 'Name', value: user.name },
      { key: 'Username', value: user.username },
      { key: 'Phone', value: user.phone },
      { key: 'Email', value: user.email },
      { key: 'Website', value: user.website },
    ],
  };

  const userAddress = {
    icon: 'faHouse',
    title: 'Address',
    arr: [
      { key: 'Street', value: user.address.street },
      { key: 'Suite', value: user.address.suite },
      { key: 'City', value: user.address.city },
      { key: 'Zipcode', value: user.address.zipcode },
    ],
  };

  const userCompany = {
    icon: 'faBriefcase',
    title: 'Company',
    arr: [
      { key: 'Name', value: user.company.name },
      { key: 'CatchPhrase', value: user.company.catchPhrase },
    ],
  };

  const userArr = [userInfo, userAddress, userCompany];

  return (
    <div>
      <div className={classes.header}>
        <div className={classes.userName}> {user.name.toUpperCase()} </div>
        <Link to="/">
          <button className={classes.buttonLarge}>{' < '}Back</button>
          <button className={classes.buttonSmall}>{'<'}</button>
        </Link>
      </div>
      {userArr.map((data) => (
        <UserDetail data={data} />
      ))}
    </div>
  );
}
export default UserDetails;
