import * as C from "./styles";
import React, { useState, useEffect } from "react";
import { images } from "../../../utils/slides-banner";

export const BannerAnimated: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <C.Container>
      {images.map((image, index) => (
        <C.Img
          key={image.id}
          src={image.src}
          alt={image.alt}
          className={index === currentImageIndex ? "current" : "next"}
        />
      ))}
    </C.Container>
  );
};

