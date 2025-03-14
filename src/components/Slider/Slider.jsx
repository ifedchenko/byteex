import React, { useState } from "react";
import styles from "./Slider.module.css";

const images = [
  { src: "/images/slider/1.jpg", caption: "White Robe" },
  { src: "/images/slider/2.jpg", caption: "Beige Robe" },
  { src: "/images/slider/3.jpg", caption: "White Robe" },
  { src: "/images/slider/4.jpg", caption: "Beige Robe" },
  { src: "/images/slider/5.jpg", caption: "White Robe" },
  { src: "/images/slider/6.jpg", caption: "Beige Robe" },
  { src: "/images/slider/7.jpg", caption: "White Robe" },
  { src: "/images/slider/8.jpg", caption: "Beige Robe" },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateSlider = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    updateSlider(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    updateSlider(newIndex);
  };

  return (
    <div className={styles.story_slider}>
      <div className={styles.slider_main}>
        <div className={styles.slider_thumbnails}>
          {images.map((image, index) => (
            <img
              key={index}
              className={`${styles.thumbnail} ${
                index === currentIndex ? styles.active_image : ""
              }`}
              src={image.src}
              alt={image.caption}
              onClick={() => updateSlider(index)}
            />
          ))}
        </div>
        <span className={styles.prev_btn} onClick={prevSlide}></span>
        <div className={styles.main_image_wrapper}>
          <img
            id="main-image"
            src={images[currentIndex].src}
            alt={images[currentIndex].caption}
          />
        </div>
        <span className={styles.next_btn} onClick={nextSlide}></span>
      </div>
      <p id="image-caption" className={styles.image_caption}>
        {images[currentIndex].caption}
      </p>
    </div>
  );
};

export default Slider;
