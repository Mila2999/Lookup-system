import classes from './UserDetail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

function getIcon(iconType) {
  switch (iconType) {
    case 'faUser':
      return <FontAwesomeIcon icon={faUser} />;

    case 'faHouse':
      return <FontAwesomeIcon icon={faHouse} />;

    case 'faBriefcase':
      return <FontAwesomeIcon icon={faBriefcase} />;

    default:
      return null;
  }
}

function UserDetails({ data }) {
  if (!data) {
    return null;
  }

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>
        {getIcon(data.icon)} {data.title}
      </h2>
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
