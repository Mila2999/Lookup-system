import classes from './Card.module.css';

function Card(props) {
  // CR destruct pros {title ,name ,email}
  return (
    <div className={classes.card}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.userDetailsContainer}>
        <span className={classes.name}>{props.name}</span>
        <span className={classes.email}>{props.email}</span>
      </div>
      <a href="/1">Go TO</a>
      {/* <button className={classes.button} onClick={props.onClick}>
        More info
      </button> */}
    </div>
  );
}
export default Card;
