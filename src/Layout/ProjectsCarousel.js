import { useState } from "react";
import CarouselItem from "./CarouselItem";
import classes from "./ProjectsCarousel.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import pitstopImg1 from '../images/pitstop1.png';
import pitstopImg2 from '../images/pitstop2.png';
import pitstopImg3 from '../images/pitstop3.png';
import pitstopImg4 from '../images/pitstop4.png';

const projects = [
  {
    id: "p1",
    name: "Bros Pizza",
    description: [
      "Pizza restaurant landing page"
    ],
    languages: "React | HTML | CSS",
    link: "https://resonant-rabanadas-85a557.netlify.app/",
    github: "https://github.com/jpates2/bros-pizza",
    images: [
      pitstopImg1,
      pitstopImg2,
      pitstopImg3,
      pitstopImg4
    ]
  },
  {
    id: "p2",
    name: "Ron Swanson",
    description: [
      "Tailwind landing page design for personal trainer's business page.",
      "Leverages Tailwind's flexibility and efficiency to create a visually engaging and responsive user experience."
    ],
    languages: "Tailwind | HTML | JavaScript",
    link: "https://creative-dasik-19f68c.netlify.app/#",
    github: "https://github.com/jpates2/ronswansonpt",
    images: [
      pitstopImg1,
      pitstopImg2,
      pitstopImg3,
      pitstopImg4
    ]
  },
  {
    id: "p3",
    name: "Pit Stop",
    description: [
      "Landing page design for ficitonal London street food market with multiple vendors. Goal is to design and build out individual landing page for each vendor.",
      "Mobile first with responsive design to ensure page maintains appearance on larger screens."
    ],
    languages: "JavaScript | HTML | CSS",
    link: "https://main--stirring-bunny-e3e887.netlify.app/",
    github: "https://github.com/jpates2/pitstop",
    images: [
      pitstopImg1,
      pitstopImg2,
      pitstopImg3,
      pitstopImg4
    ]
  }
]

function ProjectsCarousel (props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");

  const handleBack = () => {
    setSlideDirection("left");
    setCurrentIndex(prevIndex => prevIndex + 1 === projects.length ? 0 : prevIndex + 1)
  }

  const handleNext = () => {
    setSlideDirection("right");
    setCurrentIndex(prevIndex => prevIndex - 1 < 0 ? projects.length - 1 : prevIndex - 1)
  }

  return (
    <>
      <div className={classes["carousel__container"]}>
        <CarouselItem
          key={projects[currentIndex].name}
          name={projects[currentIndex].name}
          description={projects[currentIndex].description}
          languages={projects[currentIndex].languages}
          link={projects[currentIndex].link}
          github={projects[currentIndex].github}
          images={projects[currentIndex].images}
          slideDirection={slideDirection}
          />
      </div>
      <button onClick={handleBack} className={`${classes["carousel__button"]} ${classes["carousel__button-left"]}`}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button onClick={handleNext} className={`${classes["carousel__button"]} ${classes["carousel__button-right"]}`}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </>
  )
}

export default ProjectsCarousel;






// const brosPizza = <CarouselItem name="Bros Pizza" description="Landing page and order page for pizza restaurant" className={classes["carousel__item"]} />

// const pitStop = <CarouselItem name="Pit Stop" description="Food vendor site" className={classes["carousel__item"]} />

// const ronSwanson = <CarouselItem name="Ron Swanson PT" description="Landing page for personal trainer" className={classes["carousel__item"]} />
