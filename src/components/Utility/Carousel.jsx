"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[500px] md:h-[600px] lg:h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {images.map((img, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

// export default function ImageSlider({ images }) {
//   const indicatorWidthPercent = images.length > 0 ? 100 / images.length : 100;

//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const sliderCurrent = sliderRef.current;

//     if (!sliderCurrent) {
//       return;
//     }

//     // Find all the slides inside of the slider
//     const slides = sliderCurrent.querySelectorAll("div");
//     const slidesArray = Array.from(slides);

//     // Wait until a slide is 50% visible, then find it's index in the array of
//     // all slides and update the currentSlideIndex
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = slidesArray.indexOf(entry.target);
//             setCurrentSlideIndex(index);
//           }
//         });
//       },
//       {
//         root: sliderCurrent,
//         threshold: 0.5,
//       }
//     );
//     slides.forEach((slide) => observer.observe(slide));

//     return () => slides.forEach((slide) => observer.unobserve(slide));
//   }, []);

//   return (
//     <div className="mt-4 p-8 shadow-lg bg-[#eadbc8]">
//       {/* Slider */}
//       <div
//         ref={sliderRef}
//         className="flex flex-row overflow-x-scroll snap-x snap-mandatory"
//         style={{
//           width: "80vw",
//           paddingBottom: "15px",
//           clipPath: "inset(0 0 15px 0)",
//         }}
//       >
//         {images.map((url) => {
//           return (
//             <div
//               key={url}
//               className="flex-shrink-0 snap-start h-[300px] w-[80vw] md:h-[450px] lg:h-[600px] flex justify-center items-center"
//               // style={{ height: "600px", width: "80vw" }}
//             >
//               <img
//                 src={url}
//                 style={{ height: "100%", width: "100%", objectFit: "fill" }}
//               />
//             </div>
//           );
//         })}
//       </div>

//       {/* Scroll indicator */}
//       <div className="h-0.5 bg-black" style={{ width: "80vw" }}>
//         <div
//           className="h-0.5 absolute top-0 left-0 bg-[#553939]"
//           style={{
//             width: `${indicatorWidthPercent}%`,
//             left: `${indicatorWidthPercent * currentSlideIndex}%`,
//             transition: "left 150ms ease-in-out",
//           }}
//         />
//       </div>
//     </div>
//   );
// }
