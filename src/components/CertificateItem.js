import classes from "./CertificateItem.module.css"

function CertificateItem(props) {
  return (
    <div className={classes["cert-item"]}>
      <div className={classes["cert-item__name"]}>{props.name}</div>
      <div className={classes["cert-item__arrow"]}>	&#8964;</div>
    </div>
  )
}

export default CertificateItem;
