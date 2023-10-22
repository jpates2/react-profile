import classes from "./StackSquare.module.css";

function StackSquare(props) {
  return (
    <div className={classes["stack-item"]} id={classes[`stack__${props.name}`]}>
      <div className={classes["stack-item__name"]}>{props.name}</div>
      <img src={props.img} alt="" className={classes["stack-item__image"]} />
    </div>
  )
}

export default StackSquare;
