import Modal from "../Layout/Modal";
import AboutCircle from "./AboutCircle";
// import { AboutInfo } from "../info/about-info";

function AboutModal(props) {
  console.log(props.circle);


  return (
    <Modal onClose={props.onClose}>
      <div>text</div>
    </Modal>
  )
}

export default AboutModal;
