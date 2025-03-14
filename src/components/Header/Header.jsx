import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.hide_moblile_screen}>
        CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)
      </p>{" "}
      <span className={styles.hide_moblile_screen}>|</span>{" "}
      <p>{"FREE SHIPPING on orders > $200 "}</p>
      <span className={styles.hide_moblile_screen}>|</span>{" "}
      <p className={styles.hide_moblile_screen}> easy 45 day return window.</p>
    </header>
  );
};

export default Header;
