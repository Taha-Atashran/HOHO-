import React, { useEffect, useState } from "react";
import OurGamesSvg from "../../public/Svg/OurGamesSvg";
import GameSlider from "./GameSlider";
import BlueMini from "../../public/Svg/BlueMini";
import PinkMini from "../../public/Svg/PinkMini";

const Games = ({ rotation }) => {
  return (
    <>
      <div className="w-full  lg:flex lg:mt-[50px] mt-[-100px] max-w-[1700px] mx-auto relative">
        <div className=" absolute top-0 right-0 w-full h-full lg:px-[90px] px-5 ">
          <div className="  w-full flex justify-center ">
            <div className="h-[274px] w-[204px] md:h-[304px] md:w-[234px]  relative ">
              <div className=" absolute top-[30%]">
                <BlueMini rotation={rotation} />
              </div>
              <div className=" absolute bottom-[35%] right-0">
                <PinkMini rotation={rotation} />
              </div>
              <OurGamesSvg />
            </div>
          </div>
          <div className="">
            <GameSlider />
          </div>
        </div>
        <img
          className="w-full h-[300px] scale-y-[1.3] lg:scale-1 lg:w-[40%] lg:h-auto lg:hidden"
          src="/mobilePink.png"
          alt=""
        />
        <img
          className="w-full h-[300px] scale-y-[1.3] lg:scale-1 lg:w-[40%] lg:h-auto hidden lg:block"
          src="/secondPink.png"
          alt=""
        />

        <img
          className="w-full h-[300px] transform scale-y-[1.5] lg:scale-1 lg:w-[20%] lg:h-auto lg:hidden"
          src="/mobileGreen.png"
          alt=""
        />
        <img
          className="w-full h-[300px] transform scale-y-[1.5] lg:scale-1 lg:w-[20%] lg:h-auto hidden lg:block"
          src="/secondGreen.png"
          alt=""
        />

        <img
          className="w-full h-[300px]  transform scale-y-[1.2] lg:scale-1 lg:w-[40%] lg:h-auto lg:hidden"
          src="/mobileBlue.png"
          alt=""
        />
        <img
          className="w-full h-[300px]  transform scale-y-[1.2] lg:scale-1 lg:w-[40%] lg:h-auto hidden lg:block"
          src="/secondBlue.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Games;
