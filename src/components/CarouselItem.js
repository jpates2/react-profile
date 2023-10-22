import { motion, AnimatePresence } from "framer-motion";
import classes from "./CarouselItem.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import ImageScroller from "./ImageScroller";

function CarouselItem(props) {
  const direction = props.slideDirection;

  const variants = {
    enter: {
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: {
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30, duration: 1 },
        opacity: { duration: 1 }
      }
    }
  };


  return (
    <AnimatePresence>
      <motion.div
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30, duration: 1 },
          opacity: { duration: 1 }
        }}
        className={classes["carousel__item"]}
      >
        <div className={classes["carousel__item-inner"]}>
          <div className={classes["carousel__item-details"]}>
            <h3 className={classes["carousel__item-title"]}>{props.name}</h3>

            {props.description.map((text, i) => (
              <p key={`${props.name} ${i}`} className={classes["carousel__item-description"]}>
                {text}
              </p>
              ))}

            <div>
              <h3>Languages</h3>
              <p>{props.languages}</p>
            </div>
            <div className={classes["carousel__item-icons"]}>
              <div><a href={props.link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLink} /></a></div>
              <div><a href={props.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithubSquare} /></a></div>
            </div>
          </div>
          <div className={classes["carousel__item-image-container"]}>
            <img src={props.images} alt="" className={classes["carousel__item-image"]} />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CarouselItem;

// const slideVariants = {
//   hiddenRight: {
//     x: "100%",
//     opacity: 1,
//   },
//   hiddenLeft: {
//     x: "-100%",
//     opacity: 1,
//   },
//   visible: {
//     x: "0",
//     opacity: 1,
//     transition: {
//       duration: 1,
//     },
//   },
//   exit: {
//     opacity: 1,
//     transition: {
//       duration: 1,
//     },
//   },
// };
