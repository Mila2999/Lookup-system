import classes from './Card.module.css';

function Card(props) {
  return (
    <div className={classes.card}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.container}>
        <span className={classes.name}>{props.name}</span>
        <br />
        <span className={classes.email}>{props.email}</span>
      </div>
      <button className={classes.button}>More info</button>
    </div>
  );
}
export default Card;
