import { useState } from "react";
import styles from "../styles/shared.module.css";
import classes from "./Certificates.module.css"
import CertificateItem from "./CertificateItem";

const certificates = [
  { id: "c1", name: "web development bootcamp" },
  { id: "c2", name: "the complete javascript course" },
  { id: "c3", name: "mastering typescript" },
  { id: "c4", name: "css - the complete guide" },
  { id: "c5", name: "tailwind from scratch" },
  { id: "c6", name: "react - the complete guide" },
]

function Certificates() {
  const [expanded, setExpanded] = useState(null)

  function handleExpand(id) {
    setExpanded((prevId) => {
      if (prevId === id) {
        return null;
      }
      return id;
    })
  }

  const certsContent = certificates.map(cert => (
    <CertificateItem
      key={cert.name}
      onExpand={() => handleExpand(cert.id)}
      isExpanded={expanded === cert.id}
      name={cert.name} />
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
