import React from "react";
import styles from "./Hero.module.css";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_section_logo}>
        <img
          src="/vectors/logo.svg"
          alt="Company Logo"
          className={styles.hero_logo}
        />
      </div>
      <div className={styles.content_wrapper}>
        <div className={styles.hero_section_text}>
          <h1 className={styles.hero_section_text_title}>
            Don’t apologize for being <br /> comfortable.
          </h1>
          <ul className={styles.hero_section_text_list}>
            <li className={styles.hero_section_text_list_item}>
              <svg className={styles.hero_section_svg} width="31" height="31">
                <use href="/sprite.svg#icon-sun"></use>
              </svg>
              <h2 className={styles.hero_section_text_list_item_details}>
                Beautiful, comfortable loungewear for day or night.
              </h2>
            </li>
            <li className={styles.hero_section_text_list_item}>
              <svg className={styles.hero_section_svg} width="31" height="31">
                <use href="/sprite.svg#icon-cart"></use>
              </svg>
              <h2 className={styles.hero_section_text_list_item_details}>
                No wasteful extras, like tags or plastic packaging.
              </h2>
            </li>
            <li className={styles.hero_section_text_list_item}>
              <svg className={styles.hero_section_svg} width="31" height="31">
                <use href="/sprite.svg#icon-wave"></use>
              </svg>
              <h2 className={styles.hero_section_text_list_item_details}>
                Our signature fabric is incredibly comfortable — unlike{" "}
                <br></br> anything you’ve ever felt.
              </h2>
            </li>
          </ul>
          <Button showArrow={true} />
          <div className={styles.hero_section_comment}>
            {/* <div className={styles.hero_section_comment_author}></div> */}
            <div className={styles.hero_section_comment_author_info}>
              <div className={styles.hero_section_comment_author_img}></div>

              <p className={styles.hero_section_comment_author_info_name}>
                Amy P.
              </p>
              <div className={styles.hero_section_comment_author_info_rate}>
                <svg
                  className={styles.hero_section_comment_author_info_rate_svg}
                  width="10"
                  height="10"
                >
                  <use href="/sprite.svg#icon-full-star"></use>
                </svg>
                <svg
                  className={styles.hero_section_comment_author_info_rate_svg}
                  width="10"
                  height="10"
                >
                  <use href="/sprite.svg#icon-full-star"></use>
                </svg>
                <svg
                  className={styles.hero_section_comment_author_info_rate_svg}
                  width="10"
                  height="10"
                >
                  <use href="/sprite.svg#icon-full-star"></use>
                </svg>
                <svg
                  className={styles.hero_section_comment_author_info_rate_svg}
                  width="10"
                  height="10"
                >
                  <use href="/sprite.svg#icon-full-star"></use>
                </svg>
                <svg
                  className={styles.hero_section_comment_author_info_rate_svg}
                  width="10"
                  height="10"
                >
                  <use href="/sprite.svg#icon-full-star"></use>
                </svg>
              </div>
              <p className={styles.hero_section_comment_author_info_review}>
                One of 500+ 5 Star Reviews Online
              </p>
            </div>
            <p className={styles.hero_section_comment_author_info_text}>
              Overjoyed with my Loungewear set. I have the jogger and the
              sweatshirt. Quality product on every level. From the compostable
              packaging, to the supplied washing bag, even the garments smells
              like fresh herbs when I first held them.
            </p>
          </div>
        </div>
        <div className={styles.hero_section_collage}>
          <div className={styles.hero_section_collage_item_bg_left}></div>
          <img
            className={styles.hero_section_collage_img_left}
            src="/images/img1.jpg"
            alt="main section collage"
          />

          <img
            className={styles.hero_section_collage_img_center}
            src="/images/img2.jpg"
            alt="main section collage"
          />

          <img
            className={styles.hero_section_collage_img_right}
            src="/images/img3.jpg"
            alt="main section collage"
          />
          <div className={styles.hero_section_collage_item_bg_right}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
