import React, { useState } from "react";
import Img1 from "../SVG Collection/Img1.jpg";
import Img2 from "../SVG Collection/Img2.jpg";
import Img3 from "../SVG Collection/Img3.jpg";
import Img4 from "../SVG Collection/Img4.jpg";
import Img5 from "../SVG Collection/Img5.jpg";
import { HiArrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";

function Highlights() {
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const highlightImages = [Img1, Img2, Img3, Img4, Img5];
  function prevHighlight() {
    setCurrentHighlight(currentHighlight === 0 ? 4 : (prev) => prev - 1);
  }
  function nextHighlight() {
    setCurrentHighlight(currentHighlight === 4 ? 0 : (prev) => prev + 1);
  }
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="relative w-screen h-[650px]">
        <div
          style={{ transform: `translateX(-${currentHighlight * 100}vw)` }}
          className="flex w-[400vw] h-full transition-transformation duration-1000"
        >
          {highlightImages.map((image, index) => (
            <img
              key={index}
              src={image}
              className="w-screen h-full object-contain"
            />
          ))}
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevHighlight}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextHighlight}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
