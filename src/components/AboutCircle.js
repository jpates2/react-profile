import classes from "./AboutCircle.module.css";

function AboutCircle(props) {

  return (
    <div className={classes["about__circle"]}>
      {props.title}
    </div>
  )
}

export default AboutCircle;
