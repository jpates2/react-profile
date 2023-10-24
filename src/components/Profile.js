import React from "react";
import { motion } from "framer-motion";
import classes from "./Profile.module.css";

import profileImg from '../images/bitmoji1.png';

function Profile() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1.5, duration: 3}} exit={{opacity: 1}} className={classes["profile__container"]}>
      <div className={classes["profile__text"]}>
        <div className={classes["profile__name"]}>JESS PATES</div>
        <div>FULLSTACK DEVELOPER</div>
      </div>
      <div>
        <img src={profileImg} alt="profile bitmoji" className={classes["profile__image"]} />
      </div>
    </motion.div>
  )
}

export default Profile;
