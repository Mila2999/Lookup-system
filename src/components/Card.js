import classes from './Card.module.css';
import { Link } from 'react-router-dom';
function Card(props) {
  // CR destruct pros {title ,name ,email}
  return (
    <div className={classes.card}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.userDetailsContainer}>
        <span className={classes.name}>{props.name}</span>
        <span className={classes.email}>{props.email}</span>
      </div>
      <Link to="/:user">
        <button className={classes.button} onClick={props.onClick}>
          More info
        </button>
      </Link>
    </div>
  );
}
export default Card;
