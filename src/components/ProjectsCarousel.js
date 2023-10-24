import { useState } from "react";
import { wrap } from "popmotion";
import { AnimatePresence, motion } from "framer-motion";
import CarouselItem from "../components/CarouselItem";
import { ProjectsInfo } from "../info/projects-info";
import classes from "./ProjectsCarousel.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function ProjectsCarousel (props) {
  const [[currentPage, slideDirection], setPage] = useState([0, 0]);
  const pageIndex = wrap(0, ProjectsInfo.length, currentPage);

  const slider = (newDirection) => {
    setPage([currentPage + newDirection, newDirection])
  }

  return (
    <>
      <motion.div className={classes["carousel__container"]}>
        <AnimatePresence initial={false} custom={slideDirection}>
          <CarouselItem
            key={ProjectsInfo[pageIndex].id}
            custom={slideDirection}
            name={ProjectsInfo[pageIndex].name}
            description={ProjectsInfo[pageIndex].description}
            languages={ProjectsInfo[pageIndex].languages}
            link={ProjectsInfo[pageIndex].link}
            github={ProjectsInfo[pageIndex].github}
            images={ProjectsInfo[pageIndex].images}
            slideDirection={slideDirection}
            />
        </AnimatePresence>
        </motion.div>
        <button
          onClick={() => slider(-1)}
          className={`${classes["carousel__button"]} ${classes["carousel__button-left"]}`}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button onClick={() => slider(1)} className={`${classes["carousel__button"]} ${classes["carousel__button-right"]}`}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </>
  )
}

export default ProjectsCarousel;
