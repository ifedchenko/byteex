import React from "react";
import styles from "./Benefits.module.css";
import Slider from "../Slider/Slider";

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <h3 className={styles.benefits_title}>as seen in</h3>
      <div className={styles.benefits_logos}>
        <img src="/images/company_1.png" alt="Logo-1" />
        <img src="/images/company_2.png" alt="Logo-2" />
        <img src="/images/company_3.png" alt="Logo-3" />
        <img src="/images/company_4.png" alt="Logo-4" />
        <img src="/images/company_5.png" alt="Logo-5" />
      </div>

      <div className={styles.benefits_details_wrapper}>
        <div className={styles.benefits_details_content}>
          <h3 className={styles.benefits_details_content_title}>
            Loungewear you can be proud of.
          </h3>
          <ul>
            <li className={styles.benefit_list_item}>
              <svg
                className={styles.benefit_list_item_svg}
                width="42"
                height="42"
              >
                <use href="/sprite.svg#icon-cart"></use>
              </svg>
              <div className={styles.benefit_list_item_wrapper}>
                <h2 className={styles.benefit_list_item_title}>
                  Ethically sourced.
                </h2>
                <p className={styles.benefit_list_item_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>
            </li>
            <li className={styles.benefit_list_item}>
              <svg
                className={styles.benefit_list_item_svg}
                width="42"
                height="42"
              >
                <use href="/sprite.svg#icon-leaf"></use>
              </svg>
              <div className={styles.benefit_list_item_wrapper}>
                <h2 className={styles.benefit_list_item_title}>
                  Responsibly made.{" "}
                </h2>
                <p className={styles.benefit_list_item_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>
            </li>
            <li className={styles.benefit_list_item}>
              <svg
                className={styles.benefit_list_item_svg}
                width="42"
                height="42"
              >
                <use href="/sprite.svg#icon-sun"></use>
              </svg>
              <div className={styles.benefit_list_item_wrapper}>
                <h2 className={styles.benefit_list_item_title}>
                  Made for living in.{" "}
                </h2>
                <p className={styles.benefit_list_item_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>
            </li>
            <li className={styles.benefit_list_item}>
              <svg
                className={styles.benefit_list_item_svg}
                width="42"
                height="42"
              >
                <use href="/sprite.svg#icon-wave"></use>
              </svg>
              <div className={styles.benefit_list_item_wrapper}>
                <h2 className={styles.benefit_list_item_title}>
                  Unimaginably comfortable.{" "}
                </h2>
                <p className={styles.benefit_list_item_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.benefits_details_slider}>
          <Slider />
        </div>
      </div>
    </section>
  );
};
export default Benefits;
