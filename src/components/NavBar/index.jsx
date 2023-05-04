// CSS
import styles from "./NavBar.module.css";
// REACT  ROUTER
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className={styles.navegacao}>
        <NavLink
          to="/"
          className={({ isActive }) =>  
          isActive ? styles.active : styles.pending }
        >
          Home
        </NavLink>

        <NavLink
          to="/sobremim"
          className={({ isActive }) =>  
          isActive ? styles.active : styles.pending }
        >
          About
        </NavLink>
      </nav>
    </header>
  )
}

export default NavBar