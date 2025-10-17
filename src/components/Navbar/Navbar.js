import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Buttion";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Logo />
      </div>

      <div className={styles.center}>
        <Search />
      </div>

      <div className={styles.right}>
        <Button text="Give Feedback" />
      </div>
    </nav>
  );
}

export default Navbar;
