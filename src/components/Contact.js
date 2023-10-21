import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/shared.module.css";
import classes from "./Contact.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const [isExpanded, setIsExpanded] = useState(false)

  const expandHandler = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <div>
      <h2 className={styles["section__title"]}>contact</h2>
      <motion.div className={classes["contact__container"]}>
          <div onClick={expandHandler} className={classes["contact__header"]}>let's talk</div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{opacity: 0, height: 0}}
                animate={{
                  opacity: 1,
                  height: "auto",
                  transition: {type: "spring", bounce: 0.3, duration: 1}
                }}
                exit={{opacity: 0, height: 0}}
                className={classes["contact__details"]}
              >
                <div className={classes["contact__detail"]}>
                  <a href="mailto:jesspates1@gmail.com?">
                    <FontAwesomeIcon icon={faEnvelope} className={classes["contact__icon"]} />jesspates1@gmail.com
                  </a>
                </div>
                <div className={classes["contact__detail"]}>
                  <a href="https://www.linkedin.com/in/jess-pates/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className={classes["contact__icon"]} />jess-pates
                  </a>
                </div>
                <div className={classes["contact__detail"]}>
                  <a href="https://github.com/jpates2" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithubSquare} className={classes["contact__icon"]} />jpates2
                  </a>
                </div>
              </motion.div>
            )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Contact;
