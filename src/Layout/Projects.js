import classes from "./Projects.module.css";
import styles from "../styles/shared.module.css";
import ProjectsCarousel from "./ProjectsCarousel";

function Projects() {
  return (
    <div className={classes["projects__container"]} id="projects">
      <h2 className={styles["section__title"]}>projects</h2>
      <ProjectsCarousel />


    </div>
  )
}

export default Projects;
