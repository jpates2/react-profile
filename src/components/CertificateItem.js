import { AnimatePresence, motion } from 'framer-motion';
import ReactDOM from "react-dom";
import { Backdrop } from "../Layout/Modal";
import classes from "./CertificateItem.module.css";

function CertificateItem(props) {
  const certDetails = props.details.map((detail, i) => (
    <p key={`${detail[0]} ${i}`} className={classes["cert-item__detail"]}>{`- ${detail}`}</p>
  ))

  const portalElement = document.querySelector("#overlays");

  const certModal = (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<img src={props.certificate} alt="" className={classes["cert__image"]}/>, portalElement)}
    </>
  )

  return (
    <div className={classes["cert-item"]} >
      <div onClick={props.onExpand} className={classes["cert-item__header"]} >
        <motion.div
          className={`${classes["cert-item__name"]} ${props.isExpanded ? classes.boldFont : classes.normalFont}`}
        >
          {props.name}
        </motion.div>
        <motion.div animate={{rotate: props.isExpanded ? 180 : 0}} className={classes["cert-item__arrow"]}>	&#8964;</motion.div>
      </div>
      <AnimatePresence>
        {props.isExpanded && (
          <motion.div initial={{height: 0, opacity: 0}} animate={{height: "240px", opacity: 1}} exit={{height: 0, opacity: 0}} >
            <div className={classes["cert-item__info-container"]}>
              <div className={classes["cert-item__info"]}>Provider</div>
              <div><a href={props.link} target="_blank" rel="noreferrer" >{props.provider}</a></div>
            </div>
            <div className={classes["cert-item__info-container"]}>
              <div className={classes["cert-item__info"]}>Completed</div>
              <div>{props.date}</div>
            </div>
            {props.certificate !== "" && <div className={classes["cert-item__cert-link"]} onClick={props.onOpen}>View Certificate</div>}
            <div className={classes["cert-item__details"]}>
              {certDetails}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {(props.isActiveCert && props.isVisibleCert) && <>{certModal}</>}

    </div>
  )
}

export default CertificateItem;
