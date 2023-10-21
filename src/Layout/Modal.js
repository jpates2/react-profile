import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./Modal.module.css";

export const Backdrop = (props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: {duration: 0.3} }}
        exit={{ opacity: 0 }}
        key="backdrop"
        className={classes["backdrop"]}
        onClick={props.onClose}
      />
    </AnimatePresence>
  )
}

const ModalOverlay = (props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1, transition: {duration: 0.3} }}
        exit={{ opacity: 0}}
        key="modal"
        className={classes["modal"]}
      >
        <div>{props.children}</div>
      </motion.div>
    </AnimatePresence>
  )
}

const portalElement = document.querySelector("#overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal;
