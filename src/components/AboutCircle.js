import classes from "./AboutCircle.module.css";
import Modal from "../Layout/Modal";
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
      {activeCircle !== "" && <AboutModal onClose={closeCircleHandler} />}
      <div onClick={openCircleHandler} circle={activeCircle} className={classes["about__circle"]}>
        {props.title}
      </div>
    </>
  )
}

export default AboutCircle;
