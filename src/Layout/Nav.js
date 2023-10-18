import classes from "./Nav.module.css";
import { Link } from "react-scroll";

function Nav() {
  return (
    <div className={classes["navbar__container"]}>
      <div className={classes["navbar__links"]}>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={800}>home</Link>
        <Link to="projects" spy={true} smooth={true} offset={-100} duration={800}>projects</Link>
        <Link to="projects" spy={true} smooth={true} offset={-100} duration={800}>about</Link>
        <Link to="projects" spy={true} smooth={true} offset={-100} duration={800}>certificates</Link>
        <Link to="projects" spy={true} smooth={true} offset={-100} duration={800}>stack</Link>
        <Link to="projects" spy={true} smooth={true} offset={-100} duration={800}>contact</Link>
      </div>
    </div>
  )
}

export default Nav;
