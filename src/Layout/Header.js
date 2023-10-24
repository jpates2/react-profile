import { motion } from "framer-motion";
import classes from "./Header.module.css"

const listVariant = {
  open: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const linkVariant = {
  open: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
}

function Header() {
  const header=["w", "e", "l", "c", "o", "m", "e"]

  return (
    <motion.div animate="open" className={classes["header__container"]}>
      <motion.div variants={listVariant} className={classes["header__title"]} id="home">
        {header.map((letter, i) => (
          <motion.span
            key={`${letter} ${i}`}
            initial={{opacity: 0}}
            variants={linkVariant}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Header;
