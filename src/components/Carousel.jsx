"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function ImageSlider({ images }) {
  const indicatorWidthPercent = images.length > 0 ? 100 / images.length : 100;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const sliderCurrent = sliderRef.current;

    if (!sliderCurrent) {
      return;
    }

    // Find all the slides inside of the slider
    const slides = sliderCurrent.querySelectorAll("div");
    const slidesArray = Array.from(slides);

    // Wait until a slide is 50% visible, then find it's index in the array of
    // all slides and update the currentSlideIndex
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slidesArray.indexOf(entry.target);
            setCurrentSlideIndex(index);
          }
        });
      },
      {
        root: sliderCurrent,
        threshold: 0.5,
      }
    );
    slides.forEach((slide) => observer.observe(slide));

    return () => slides.forEach((slide) => observer.unobserve(slide));
  }, []);

  return (
    <div className="mt-4">
      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex flex-row overflow-x-scroll snap-x snap-mandatory"
        style={{
          width: "80vw",
          paddingBottom: "15px",
          clipPath: "inset(0 0 15px 0)",
        }}
      >
        {images.map((url) => {
          return (
            <div
              key={url}
              className="w-full flex-shrink-0 snap-start flex justify-center items-center"
              style={{ height: "600px", width: "80vw" }}
            >
              <img
                src={url}
                style={{ height: "100%", width: "100%", objectFit: "fill" }}
              />
            </div>
          );
        })}
      </div>

      {/* Scroll indicator */}
      <div className="h-0.5 relative bg-gray-300" style={{ width: "80vw" }}>
        <div
          className="h-0.5 absolute top-0 left-0 bg-gray-500"
          style={{
            width: `${indicatorWidthPercent}%`,
            left: `${indicatorWidthPercent * currentSlideIndex}%`,
            transition: "left 150ms ease-in-out",
          }}
        />
      </div>
    </div>
  );
}
