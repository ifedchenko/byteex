import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ showArrow }) => {
  return (
    <button className={styles.btn}>
      Customize Your Outfit
      {showArrow && (
        <span className={styles.arrow}>
          <svg width="23" height="10">
            <use href="/sprite.svg#icon-arrow"></use>
          </svg>
        </span>
      )}
    </button>
  );
};

Button.propTypes = {
  showArrow: PropTypes.bool,
};

Button.defaultProps = {
  showArrow: false,
};

export default Button;
