import classes from "./CarouselItem.module.css";

function CarouselItem(props) {
  return (
    <div className={classes["carousel__item"]}>
      <h3 className={classes["carousel__item-title"]}>{props.name}</h3>
      <p className={classes["carousel__item-description"]}>{props.description}</p>
    </div>
  )
}

export default CarouselItem;
