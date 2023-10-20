import Modal from "../Layout/Modal";
import ReactDOM from "react-dom";
import { AboutInfo } from "../info/about-info";
import { Backdrop } from "../Layout/Modal";
import classes from "./AboutModal.module.css";
import cv from '../images/jess_pates_cv.jpg';

function AboutModal(props) {
  const index = AboutInfo.findIndex(x => x.title === props.circle);

  let modalContent;

  if (index < 5) {
    modalContent = AboutInfo[index].text.map((text, i) => (
      <div key={`text ${i}`}>{text}</div>
    ))
  }

  const portalElement = document.querySelector("#overlays");

  if (index === 5) {
    return (
      <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
        {ReactDOM.createPortal(<img src={cv} alt="" className={classes["about__cv"]}/>, portalElement)}
      </>
    )
  }

  return (
    <Modal onClose={props.onClose}>
      {index < 5 && <h3>{props.circle}</h3>}
      {modalContent}
    </Modal>
  )

}

export default AboutModal;
