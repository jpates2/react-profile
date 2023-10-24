import { motion } from "framer-motion";
import classes from "./Projects.module.css";
import styles from "../styles/shared.module.css";
import ProjectsCarousel from "./ProjectsCarousel";

function Projects() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 2.5, duration: 3}}
      exit={{opacity: 1}}
      className={classes["projects__section"]}
      id="projects"
    >
      <h2 className={styles["section__title"]}>projects</h2>
      <div className={classes["projects__container"]}>
        <ProjectsCarousel />
      </div>
    </motion.div>
  )
}

export default Projects;
