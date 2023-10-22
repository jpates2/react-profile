import styles from "../styles/shared.module.css";
import classes from "./Stack.module.css";

import bootstrapIcon from '../images/stack-icons/bootstrap_stack.png';
import cssIcon from '../images/stack-icons/css_stack.png';
import githubIcon from '../images/stack-icons/github_stack.png';
import htmlIcon from '../images/stack-icons/html_stack.png';
import javascriptIcon from '../images/stack-icons/javascript_stack.png';
import reactIcon from '../images/stack-icons/react_stack.png';
import rubyIcon from '../images/stack-icons/ruby_stack.png';
import sqlIcon from '../images/stack-icons/sql_stack.png';
import tailwindIcon from '../images/stack-icons/tailwind_stack.png';
import StackSquare from "./StackSquare";

const stack = [
  { name: "javascript", img: javascriptIcon },
  { name: "react", img: reactIcon },
  { name: "css", img: cssIcon },
  { name: "ruby", img: rubyIcon },
  { name: "html", img: htmlIcon },
  { name: "tailwind", img: tailwindIcon },
  { name: "sql", img: sqlIcon },
  { name: "bootstrap", img: bootstrapIcon },
  { name: "github", img: githubIcon },
]

function Stack() {
  const stackContent = stack.map(lang => (
    <StackSquare key={lang.name} name={lang.name} img={lang.img} />
  ))

  return (
    <div>
      <h2 className={styles["section__title"]}>stack</h2>
      <div className={classes["stack__container"]}>
        {stackContent}
      </div>
    </div>
  )
}

export default Stack;
