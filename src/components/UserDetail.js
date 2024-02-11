import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

import classes from './UserDetail.module.css';

function UserDetails({ data }) {
  if (!data) {
    return null;
  }

  return (
    <div className={classes.wrapper}>
      <FontAwesomeIcon icon={faHouse} />
      <FontAwesomeIcon icon={faUser} />
      <FontAwesomeIcon icon={faBriefcase} />
      <h2 className={classes.title}>{data.title}</h2>
      {data.arr.map((arrValue) => (
        <div className={classes.itemWrapper}>
          <div className={classes.itemKey}>{arrValue.key}</div>:
          <div className={classes.itemValue}>{arrValue.value}</div>
        </div>
      ))}
    </div>
  );
}
export default UserDetails;
