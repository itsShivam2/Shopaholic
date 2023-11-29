import React from "react";
import mensfashion from "../SVG Collection/MensFashion2.jpeg";
import womensfashion from "../SVG Collection/WomensFashion5.jpeg";
import fashionUp from "../SVG Collection/Couple's Fashion 2.jpeg";
import fashionDown from "../SVG Collection/Group's Fashion 1.jpeg";

function HomeImageGrid() {
  return (
    <section className="max-w-[80rem] m-auto pt-4">
      <div className="grid grid-cols-3 place-content-center place-items-center my-[1rem] mt-[1rem] sm:mt-0">
        <div>
          <img
            src={mensfashion}
            alt="mensfashion"
            className="xl:h-[44rem] xl:w-[24rem] lg:h-[44rem] lg:w-[18rem] md:h-[28rem] md:w-[16rem] sm:h-[20rem] sm:w-[12rem] w-[6.8rem] h-[16rem]"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={fashionUp}
            alt="fashionUp"
            className="xl:w-[28rem] xl:h-[11.76rem] lg:w-[28rem] lg:h-[9.6rem] md:h-[6.5rem] md:w-[18rem] sm:h-[5rem] sm:w-[14rem] w-[7.5rem] h-[3rem]"
          />
          <h2 className="text-[#484848] text-center lg:text-[5.5rem] xl:text-[1rem] md:text-[2.8875rem] text-[1.35rem] tracking-tight font-medium">
            ULTIMATE
          </h2>
          <h2 className="text-center text-[#484848] lg:text-[9.5rem] xl:text-[11.2875rem] md:text-[5.6875rem] text-[2.8rem] -m-[0.55rem] sm:m-[-0.8rem] md:m-[-2.2rem] lg:m-[-2rem] xl:m-[-2.2rem] font-medium text-stroke">
            SALE
          </h2>
          <p className="text-center text-[#484848] font-normal md:text-[0.85rem] md:mt-3 lg:mt-0 lg:text-[1.25rem] text-[0.65rem] tracking-[0.125rem]">
            NEW COLLECTION
          </p>
          <div className="flex justify-center py-4">
            <button className="mx-auto px-7 py-2 bg-black text-white rounded-md sm:text-[1rem] text-[0.55rem]">
              Shop Now
            </button>
          </div>
          <img
            src={fashionDown}
            alt="fashionDown"
            className="xl:w-[28rem] xl:h-[11.76rem] lg:w-[28rem] lg:h-[9.6rem] md:h-[6.5rem] md:w-[18rem] sm:h-[5rem] sm:w-[14rem] w-[7.5rem] h-[3rem]"
          />
        </div>
        <div>
          <img
            src={womensfashion}
            alt="womensfashion"
            className="xl:h-[44rem] xl:w-[24rem] lg:h-[44rem] lg:w-[18rem] md:h-[28rem] md:w-[16rem] sm:h-[20rem] sm:w-[12rem] w-[6.75rem] h-[16rem]"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeImageGrid;
