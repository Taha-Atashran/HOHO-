import React from "react";
import UserSvg from "../../../public/Svg/UserSvg";

const GameCardSlider = ({ image, bigTitle, shortTitle, desc, online }) => {
  return (
    <>
      <div className="w-full bg-white  mb-7   p-5 rounded-3xl flex flex-col lg:flex-row ">
        <div className="">
          <img
            className="w-[100%] transform lg:h-[250px] lg:w-[850px] xl:w-[650px] 2xl:w-[500] 2xl:h-[255px] "
            src={image}
            alt=""
          />
        </div>
        <div className="lg:ml-10  flex flex-col lg:justify-end">
          <h2 className=" text-textColor text-xl pt-3">{bigTitle}</h2>
          <h1 className=" text-2xl pt-1 ">{shortTitle}</h1>
          <p className="text-dateColor text-[16px]">{desc}</p>
          <div className="border-t mt-[20px]  justify-center items-center flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex mt-3">
              <UserSvg />
              <output className=" text-dateColor pl-1 ">
                User Online: {online}
              </output>
            </div>
            <button className="border border-btnColor text-btnColor py-1 px-5 rounded-xl mt-3 hover:bg-hoverBtn transition-all duration-200">
              Play
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameCardSlider;
