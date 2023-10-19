import { useState } from "react";
import CarouselItem from "./CarouselItem";
import classes from "./ProjectsCarousel.module.css";

const projects = [
  {
    name: "Bros Pizza",
    description: "Pizza restaurant landing page"
  },
  {
    name: "Ron Swanson",
    description: "Tailwind designed site for personal trainer"
  },
  {
    name: "Pit Stop",
    description: "Street food vendors"
  }
]

function ProjectsCarousel (props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBack = () => {
    setCurrentIndex(prevIndex => prevIndex + 1 === projects.length ? 0 : prevIndex + 1)
  }

  const handleNext = () => {
    setCurrentIndex(prevIndex => prevIndex - 1 < 0 ? projects.length - 1 : prevIndex - 1)
  }

  return (
    <div className={classes["carousel__container"]}>
      <CarouselItem
        name={projects[currentIndex].name}
        description={projects[currentIndex].description}
      />
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default ProjectsCarousel;






// const brosPizza = <CarouselItem name="Bros Pizza" description="Landing page and order page for pizza restaurant" className={classes["carousel__item"]} />

// const pitStop = <CarouselItem name="Pit Stop" description="Food vendor site" className={classes["carousel__item"]} />

// const ronSwanson = <CarouselItem name="Ron Swanson PT" description="Landing page for personal trainer" className={classes["carousel__item"]} />
