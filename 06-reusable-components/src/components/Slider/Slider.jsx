import styles from "./styles.module.css";

import img1 from "../../../public/images/slider/1.jpeg";
import img2 from "../../../public/images/slider/2.jpeg";
import img3 from "../../../public/images/slider/3.jpeg";
import img4 from "../../../public/images/slider/5.jpeg";
import img5 from "../../../public/images/slider/6.jpeg";
import img6 from "../../../public/images/slider/7.jpeg";
import { useState } from "react";

const slides = [
  { imgSrc: img1, alt: "Image number 1" },
  { imgSrc: img2, alt: "Image number 2" },
  { imgSrc: img3, alt: "Image number 3" },
  { imgSrc: img4, alt: "Image number 4" },
  { imgSrc: img5, alt: "Image number 5" },
  { imgSrc: img6, alt: "Image number 6" },
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function selectImage(index) {
    setCurrentIndex(index);
  }

  function prevImage() {
    // Select the last image
    if (currentIndex === 0) selectImage(slides.length - 1);
    else selectImage(currentIndex - 1);
  }

  function nextImage() {
    // Select the first image
    if (currentIndex === slides.length - 1) selectImage(0);
    else selectImage(currentIndex + 1);
  }

  return (
    <div className={styles["slider-container"]}>
      <div className={styles["slides"]}>
        {slides.map((slide, idx) => (
          <img
            key={idx}
            className={styles["slide"]}
            src={slide.imgSrc}
            alt={slide.alt}
            style={{ translate: `-${100 * currentIndex}%` }}
          />
        ))}
      </div>
      <div className={styles["slides-indicators"]}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`${idx === currentIndex ? styles["active"] : ""}`}
            onClick={() => selectImage(idx)}
          ></button>
        ))}
      </div>

      <div className={styles["controls"]}>
        <button onClick={prevImage}></button>
        <button onClick={nextImage}></button>
      </div>
    </div>
  );
}

export default Slider;
