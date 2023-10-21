import { useState } from "react";
import { motion } from "framer-motion";

import classes from "./AboutCircle.module.css";
import AboutModal from "./AboutModal";

function AboutCircle(props) {
  const [activeCircle, setActiveCircle] = useState("");

  const openCircleHandler = (event) => {
    setActiveCircle(event.target.innerText);
  }

  const closeCircleHandler = (event) => {
    setActiveCircle("");
  }

  return (
    <>
      {activeCircle !== "" && <AboutModal onClose={closeCircleHandler} circle={activeCircle} />}
      <motion.div whileHover={{ scale: 0.9 }} transition={{duration: 0.5, type: "spring"}} onClick={openCircleHandler} className={classes["about__circle"]}>
        {props.title}
      </motion.div>
    </>
  )
}

export default AboutCircle;
