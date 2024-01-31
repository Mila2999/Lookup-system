import classes from './Card.module.css';
function Card(props) {
  return (
    <div className={classes.card}>
      <div>{props.title}</div>
      <div>
        <p>{props.name}</p>
        <p>{props.email}</p>
      </div>
      <button>More info</button>
    </div>
  );
}
export default Card;
