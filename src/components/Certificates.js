import styles from "../styles/shared.module.css";
import classes from "./Certificates.module.css"
import CertificateItem from "./CertificateItem";

const certificates = [
  { name: "web development bootcamp" },
  { name: "the complete javascript course" },
  { name: "mastering typescript" },
  { name: "css - the complete guide" },
  { name: "tailwind from scratch" },
  { name: "react - the complete guide" },
]

function Certificates() {
  const certsContent = certificates.map(cert => (
    <CertificateItem key={cert.name} name={cert.name} />
  ))

  return (
    <div>
      <h2 className={styles["section__title"]}>certificates</h2>
    <div className={classes["certificates__container"]}>
      {certsContent}
    </div>
    </div>
  )
}

export default Certificates;
