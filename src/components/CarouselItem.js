import { motion, AnimatePresence } from "framer-motion";
import classes from "./CarouselItem.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import ImageScroller from "./ImageScroller";

const slideVariants = {
  hiddenRight: {
    x: "100%",
    opacity: 1,
  },
  hiddenLeft: {
    x: "-100%",
    opacity: 1,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

function CarouselItem(props) {
  return (
    <AnimatePresence>
      <motion.div
        variants={slideVariants}
        initial={props.slideDirection === "right" ? "hiddenRight" : "hiddenLeft"}
        animate="visible"
        exit={props.slideDirection === "right" ? "hiddenLeft" : "hiddenRight"}
        className={classes["carousel__item"]}>
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
            <ImageScroller images={props.images} />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CarouselItem;
