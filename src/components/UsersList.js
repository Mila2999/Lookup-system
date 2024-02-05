import Card from './Card';

import { cutUserName, generateUserTitle } from '../utils/utils';
import classes from './UsersList.module.css';

function UsersList({ users }) {
  return (
    <div>
      <div>
        <h2 className={classes.h2}>ALL USERS ({users.length})</h2>
        <div className={classes.usersContainer}>
          {users.map((user) => (
            <Card
              key={user.id}
              id={user.id}
              title={generateUserTitle(user.name)}
              name={cutUserName(user.name)}
              email={user.email.toLowerCase()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default UsersList;
