// import { useState, useEffect } from "react";
// import classes from "./ImageScroller.module.css";

// function ImageScroller(props) {
//   const [imageIndex, setImageIndex] = useState(0);

//   useEffect(() => {

//     const imageHandler = setTimeout(() => {
//       setImageIndex(prevIndex => prevIndex + 1 === props.images.length ? 0 : prevIndex + 1)
//     }, 1000);

//   }, [props.images.length])


//   // return (
//   //   <>
//   //     {props.images.map(meal => (
//   //       <img key={meal} src={meal} alt="" className={classes["carousel__item-image"]} />
//   //     ))}
//   //   </>
//   // )
// }

// export default ImageScroller;
