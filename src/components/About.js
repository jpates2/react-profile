import AboutCircle from "./AboutCircle";
import { AboutInfo } from "../info/about-info";
import classes from "./About.module.css";
import styles from "../styles/shared.module.css";


function About() {
  const aboutContent = AboutInfo.map(info => (
    <AboutCircle key={info.title} title={info.title} text={info.text} />
  ))

  return (
    <div>
      <h2 className={styles["section__title"]}>about</h2>
      <div className={classes["about__container"]}>
        {aboutContent}
      </div>
    </div>
  )
}

export default About;
