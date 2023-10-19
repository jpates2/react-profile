import classes from "./CarouselItem.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function CarouselItem(props) {
  return (
    <div className={classes["carousel__item"]}>
      <div className={classes["carousel__item-inner"]}>
        <div className={classes["carousel__item-details"]}>
          <h3 className={classes["carousel__item-title"]}>{props.name}</h3>

          {props.description.map((text, i) => (
            <p key={`${props.name} ${i}`} className={classes["carousel__item-description"]}>
              {text}
            </p>
            ))}

          <div>
            <h3>Languages</h3>
            <p>{props.languages}</p>
          </div>
          <div className={classes["carousel__item-icons"]}>
            <div><a href={props.link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLink} /></a></div>
            <div><a href={props.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithubSquare} /></a></div>
          </div>
        </div>
        <div className={classes["carousel__item-image-container"]}>
          {props.images.map(meal => (
            <img key={meal} src={meal} alt="" className={classes["carousel__item-image"]} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default CarouselItem;
