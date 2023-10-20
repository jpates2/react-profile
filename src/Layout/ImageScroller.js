import classes from "./ImageScroller.module.css";


function ImageScroller(props) {
  return (
    <>
      {props.images.map(meal => (
        <img key={meal} src={meal} alt="" className={classes["carousel__item-image"]} />
      ))}
    </>
  )
}

export default ImageScroller;
