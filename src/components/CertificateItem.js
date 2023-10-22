import { AnimatePresence, motion } from 'framer-motion';
import classes from "./CertificateItem.module.css";

function CertificateItem(props) {
  return (
    <div className={classes["cert-item"]} onClick={props.onExpand} >
      <div className={classes["cert-item__header"]} >
        <div className={classes["cert-item__name"]}>{props.name}</div>
        <motion.div animate={{rotate: props.isExpanded ? 180 : 0}} className={classes["cert-item__arrow"]}>	&#8964;</motion.div>
      </div>
      <AnimatePresence>
        {props.isExpanded && (
          <motion.div initial={{height: 0, opacity: 0}} animate={{height: "100px", opacity: 1}} exit={{height: 0, opacity: 0}} >
            <p className={classes["cert-item__details"]}>Cert details here</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CertificateItem;
