import classes from './Card.module.css';

function Card({ title, name, email }) {
  return (
    <div className={classes.card}>
      <div>{title}</div>
      <div>
        <span>{name}</span>
        <span>{email}</span>
      </div>
      <button>More info</button>
    </div>
  );
}
export default Card;
