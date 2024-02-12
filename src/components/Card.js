import { Link } from 'react-router-dom';
import classes from './Card.module.css';

function Card(props) {
  return (
    <div className={classes.card}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.userDetailsContainer}>
        <p className={classes.name}>{props.name}</p>
        <span className={classes.email}>{props.email}</span>
      </div>
      <Link to={'/' + props.id}>
        <button className={classes.button}>More info</button>
      </Link>
    </div>
  );
}
export default Card;
