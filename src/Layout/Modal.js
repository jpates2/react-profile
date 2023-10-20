import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

export const Backdrop = (props) => {
  return (
    <div className={classes["backdrop"]} onClick={props.onClose} />
  )
}

const ModalOverlay = (props) => {
  return (
    <div className={classes["modal"]}>
      <div>{props.children}</div>
    </div>
  )
}

const portalElement = document.querySelector("#overlays");

export const ImgModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal;
