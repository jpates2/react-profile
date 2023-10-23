import { useState } from "react";
import { Link } from "react-scroll";
import { motion, useScroll, useTransform } from "framer-motion";
import classes from "./Nav.module.css";

function Nav() {
  const [selectedLink, setSelectedLink] = useState("home");

  const { scrollY } = useScroll();
  const backgroundNav = useTransform(scrollY, [0, 700], ["rgb(245, 138, 7)", "rgb(250, 187, 60)"]);

  function clickLinkHandler(event) {
    setSelectedLink(event.target.innerText);
  }

  const mobileNav = (
    <motion.div className={classes["mobile-navbar__container"]}>
      <div className={classes["hamburger"]}>
        <span className={classes["hamburger-top"]}></span>
        <span className={classes["hamburger-middle"]}></span>
        <span className={classes["hamburger-bottom"]}></span>
      </div>
    </motion.div>
  )

  const nav = (
    <motion.div className={classes["navbar__container"]} style={{background: backgroundNav}} transition={{duration: 0.5}}>
      <div className={classes["navbar__links"]}>
        <div>
          <Link to="home" smooth={true} offset={-100} duration={800} onClick={clickLinkHandler} className={classes["navbar__link"]}>home</Link>
          {selectedLink === "home" && <motion.div layoutId="animate-link" className={classes["navbar__link-underline"]}></motion.div>}
        </div>
        <div>
          <Link to="projects" smooth={true} offset={-100} duration={800} onClick={clickLinkHandler} className={classes["navbar__link"]}>projects</Link>
          {selectedLink === "projects" && <motion.div layoutId="animate-link" className={classes["navbar__link-underline"]}></motion.div>}
        </div>
        <div>
          <Link to="about" smooth={true} offset={-100} duration={800} onClick={clickLinkHandler} className={classes["navbar__link"]}>about</Link>
          {selectedLink === "about" && <motion.div layoutId="animate-link" className={classes["navbar__link-underline"]}></motion.div>}
        </div>
        <div>
          <Link to="stack" smooth={true} offset={-100} duration={800} onClick={clickLinkHandler} className={classes["navbar__link"]}>stack</Link>
          {selectedLink === "stack" && <motion.div layoutId="animate-link" className={classes["navbar__link-underline"]}></motion.div>}
        </div>
        <div>
          <Link to="certificates" smooth={true} offset={-100} duration={800} onClick={clickLinkHandler} className={classes["navbar__link"]}>certificates</Link>
          {selectedLink === "certificates" && <motion.div layoutId="animate-link" className={classes["navbar__link-underline"]}></motion.div>}
        </div>
        <div>
          <Link to="contact" smooth={true} offset={-100} duration={800} onClick={clickLinkHandler} className={classes["navbar__link"]}>contact</Link>
          {selectedLink === "contact" && <motion.div layoutId="animate-link" className={classes["navbar__link-underline"]}></motion.div>}
        </div>
      </div>
    </motion.div>
  )

  return (
    <>
      {nav}
      {mobileNav}
    </>
  )
}

export default Nav;
