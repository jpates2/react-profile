import classes from "./AboutCircle.module.css";
import { useState } from "react";
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
      <div onClick={openCircleHandler} className={classes["about__circle"]}>
        {props.title}
      </div>
    </>
  )
}

export default AboutCircle;
