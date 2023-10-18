import { motion } from "framer-motion";
import classes from "./Header.module.css"

function Header() {
  const header=["w", "e", "l", "c", "o", "m", "e"]

  return (
    <div className={classes["header__container"]}>
      <motion.div variants={{visible: {transition: {staggerChildren: 0.5}}}} className={classes["header__title"]} id="home">
        {header.map((letter, i) => (
          <motion.span
            key={`${letter} ${i}`}
            variants={{
              hidden: {opacity: 0, scale: 0.5},
              visible: {opacity: 1, scale: [0.8, 1.3, 1]}
            }}
            exit={{opacity: 1, scale: 1}}
            transition={{type: "spring"}}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}

export default Header;
