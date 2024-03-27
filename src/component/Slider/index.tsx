"use client";
import "./styles.css";
import { useEffect, useState } from "react";

export function Sliders(): JSX.Element {
  let [indexSlider, setIndexSlider] = useState(0);

  const images = [
    "https://images.ku6111.net/FileSystem/Images/047c15022851413e81ed0de130c3ce55.jpg",
    "https://images.ku6111.net/FileSystem/Images/ef6b16b31177491a9ef693f3710647b7.jpg",
    "https://images.ku6111.net/FileSystem/Images/4bc0457503eb482c88b1e39fedf0c049.jpg",
    "https://images.ku6111.net/FileSystem/Images/56e743190c884eb494e1685cccce15fe.jpg",
  ];

  useEffect(() => {
    const nextSlider = setInterval(() => {
      if (indexSlider == images.length - 1) {
        setIndexSlider(0);
      } else {
        setIndexSlider((pre) => ++pre);
      }
    }, 3000);

    return () => {
      clearInterval(nextSlider);
    };
  }, [indexSlider]);

  return (
    <div className="sliders">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={
            indexSlider == index ? "slider-active slider-item" : "slider-item"
          }
        />
      ))}
    </div>
  );
}
