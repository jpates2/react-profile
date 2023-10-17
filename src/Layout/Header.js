import classes from "./Header.module.css"

function Header() {
  return (
    <div className={classes["header__container"]}>
      <div className={classes["header__title"]}>
        <span>W</span>
        <span>e</span>
        <span>l</span>
        <span>c</span>
        <span>o</span>
        <span>m</span>
        <span>e</span>
      </div>
    </div>
  )
}

export default Header;
