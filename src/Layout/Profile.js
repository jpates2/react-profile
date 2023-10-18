import React from "react";
import classes from "./Profile.module.css";

import profileImg from '../images/bitmoji1.png';

function Profile() {
  return (
    <div className={classes["profile__container"]}>
      <div className={classes["profile__text"]}>
        <div className={classes["profile__name"]}>JESS PATES</div>
        <div>FULLSTACK DEVELOPER</div>
      </div>
      <div>
        <img src={profileImg} alt="profile image" className={classes["profile__image"]} />
      </div>
    </div>
  )
}

export default Profile;
