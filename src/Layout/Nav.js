import { useState } from "react";
import { Link } from "react-scroll";
import { motion, useScroll, useTransform } from "framer-motion";
import classes from "./Nav.module.css";

const navVariant = {
  opened: {
    height: "100vh",
    background: "rgb(250, 187, 60)",
    zIndex: 100
  },
  closed: {
    height: "4rem",
    background: "rgb(245, 138, 7)",
    zIndex: 30
  }
}

const burgerIconVariant = {
  opened: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  closed: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 1,
      duration: 0.5,
      ease: "easeInOut"
    }
  }
}

const mobileMenuVariant = {
  opened: {
    y: "0%",
    height: "100vh",
    transition: {
      delay: 0.15,
      duration: 1,
      ease: [0.75, 0, 0.2, 1]
    }
  },
  closed: {
    y: "-100%",
    height: 0,
    transition: {
      delay: 0.35,
      duration: 0.5,
      ease: [0.75, 0, 0.5, 1]
    }
  }
}

const closeIconVariant = {
  opened: {
    opacity: 1,
    transition: {
      delay: 1
    }
  },
  closed: { opacity: 0 }
}

const listVariant = {
  opened: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.15
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}

const linkVariant = {
  opened: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.65,
      ease: "easeOut"
    }
  },
  closed: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 0.25,
      ease: "easeInOut"
    }
  }
}

function Nav() {
  const [selectedLink, setSelectedLink] = useState("home");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const { scrollY } = useScroll();
  const backgroundNav = useTransform(scrollY, [0, 700], ["rgb(245, 138, 7)", "rgb(250, 187, 60)"]);

  function clickLinkHandler(event) {
    setSelectedLink(event.target.innerText);
  }


  function mobileClickLinkHandler(event) {
    setSelectedLink(event.target.innerText);
    setMobileNavOpen(prevState => {
      return !prevState;
    });
  }

  const mobileNav = (
    <motion.nav
      initial="closed"
      animate={mobileNavOpen ? "opened" : "closed"}
      variants={navVariant}
      className={classes["mobile-navbar__container"]}
    >

      <div className={classes["hamburger"]}>
        <motion.div
          variants={burgerIconVariant}
          onClick={() => setMobileNavOpen(true)}
        >
          <span className={classes["hamburger-top"]}></span>
          <span className={classes["hamburger-middle"]}></span>
          <span className={classes["hamburger-bottom"]}></span>
        </motion.div>
      </div>
      <motion.div variants={mobileMenuVariant} className="mobile-navbar">
        <motion.div
          variants={closeIconVariant}
          onClick={() => setMobileNavOpen(false)}
          className={classes["mobile-navbar__close"]}
        >
          X
        </motion.div>
        <motion.div variants={listVariant} className={classes["mobile-navbar__links"]}>
          <motion.div variants={linkVariant}>
            <Link to="home" smooth={true} offset={-100} duration={800} onClick={mobileClickLinkHandler} className={classes["mobile-navbar__link"]}>home</Link>
          </motion.div>
          <motion.div variants={linkVariant}>
              <Link to="projects" smooth={true} offset={-100} duration={800} onClick={mobileClickLinkHandler} className={classes["mobile-navbar__link"]}>projects</Link>
          </motion.div>
          <motion.div variants={linkVariant}>
              <Link to="about" smooth={true} offset={-100} duration={800} onClick={mobileClickLinkHandler} className={classes["mobile-navbar__link"]}>about</Link>
          </motion.div>
          <motion.div variants={linkVariant}>
              <Link to="stack" smooth={true} offset={-100} duration={800} onClick={mobileClickLinkHandler} className={classes["mobile-navbar__link"]}>stack</Link>
          </motion.div>
          <motion.div variants={linkVariant}>
              <Link to="certificates" smooth={true} offset={-100} duration={800} onClick={mobileClickLinkHandler} className={classes["mobile-navbar__link"]}>certificates</Link>
          </motion.div>
          <motion.div variants={linkVariant}>
              <Link to="contact" smooth={true} offset={-100} duration={800} onClick={mobileClickLinkHandler} className={classes["mobile-navbar__link"]}>contact</Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.nav>
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
