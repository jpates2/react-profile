import classes from "./Nav.module.css";
import { Link } from "react-scroll";

function Nav() {
  return (
    <div className={classes["navbar__container"]}>
      <div className={classes["navbar__links"]}>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={800} className={classes["navbar__link"]}>home</Link>
        <Link to="projects" spy={true} smooth={true} offset={-100} duration={800}className={classes["navbar__link"]}>projects</Link>
        <Link to="projects" spy={true} smooth={true} offset={-100} duration={800}className={classes["navbar__link"]}>about</Link>
        <Link to="projects" spy={true} smooth={true} offset={-100} duration={800}className={classes["navbar__link"]}>certificates</Link>
        <Link to="projects" spy={true} smooth={true} offset={-100} duration={800}className={classes["navbar__link"]}>stack</Link>
        <Link to="projects" spy={true} smooth={true} offset={-100} duration={800}className={classes["navbar__link"]}>contact</Link>
      </div>
    </div>
  )
}

export default Nav;
