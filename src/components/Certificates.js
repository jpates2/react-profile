import { useState } from "react";
import styles from "../styles/shared.module.css";
import classes from "./Certificates.module.css"
import CertificateItem from "./CertificateItem";
import { CertificatesInfo } from "../info/certs-info";

function Certificates() {
  const [expanded, setExpanded] = useState(null)
  const [activeCert, setActiveCert] = useState("");
  const [showCert, setShowCert] = useState(false);

  const openCertHandler = () => {
    setShowCert(true);
  }

  const closeCertHandler = () => {
    setShowCert(false);
  }

  function handleExpand(id) {
    setExpanded((prevId) => {
      if (prevId === id) {
        return null;
      }
      return id;
    })
    setActiveCert((prevId) => {
      if (prevId === id) {
        return null;
      }
      return id;
    })
  }

  const certsContent = CertificatesInfo.map(cert => (
    <CertificateItem
      key={cert.name}
      onExpand={() => handleExpand(cert.id)}
      isExpanded={expanded === cert.id}
      isActiveCert={activeCert === cert.id}
      isVisibleCert={showCert}
      name={cert.name}
      date={cert.date}
      link={cert.link}
      provider={cert.provider}
      certificate={cert.certificate}
      details={cert.details}
      onClose={closeCertHandler}
      onOpen={openCertHandler}
      activeCert={activeCert}
    />
  ))

  return (
    <div id="certificates">
      <h2 className={styles["section__title"]}>certificates</h2>
    <div className={classes["certificates__container"]}>
        {certsContent}
    </div>
    </div>
  )
}

export default Certificates;
