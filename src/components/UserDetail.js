import { Link } from 'react-router-dom';

import classes from './UserDetail.module.css';

import { capitalizeFirstLetter } from '../utils/utils';
function UserDetails({ data }) {
  if (!data) {
    return null;
  }

  return (
    <div className={classes.wrapper}>
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
