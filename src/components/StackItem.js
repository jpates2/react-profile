import classes from "./StackItem.module.css";

function StackItem(props) {
  return (
    <div className={classes["stack-item"]} id={props.name}>
      <div className={classes["stack-item__name"]}>{props.name}</div>
      <img src={props.img} alt="" className={classes["stack-item__image"]} />
    </div>
  )
}

export default StackItem;
