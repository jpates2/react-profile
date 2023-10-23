import { useState, useEffect } from "react";
import classes from "./ImageScroller.module.css";
import { motion, AnimatePresence } from "framer-motion";

function ImageScroller(props) {
  const [imageIndex, setImageIndex] = useState(0);


  useEffect(() => {
    const updateIndex = (newIndex) => {
      if (newIndex >= props.images.length || newIndex < 0) {
        newIndex = 0;
      }
      setImageIndex(newIndex);
    };

    const interval = setInterval(() => {
      updateIndex(imageIndex + 1);
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [imageIndex, props.images.length]);

  return (
    <AnimatePresence>
      <motion.div className={classes["carousel__item-image-inner"]} >
        {props.images.map(img => (
          <motion.img
            key={img}
            src={img}
            alt=""
            className={classes["carousel__item-image"]}
            initial={{ y: 0 }}
            animate={{y: `-${imageIndex * 100}%`}}
            exit={{y: "100%"}}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  )
}

export default ImageScroller;
