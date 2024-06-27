import React, { useEffect, useState } from "react";
import FoundersBgSvg from "../../public/Svg/FoundersBgSvg";
import FounderTextSvg from "../../public/Svg/FounderTextSvg";
import BlueMini from "../../public/Svg/BlueMini";
import GreenMini from "../../public/Svg/GreenMini";
import TextSvg from "../../public/Svg/TextSvg";
import Cammera from "../../public/Svg/Cammera";
import Book from "../../public/Svg/Book";

const Founders = ({ rotation }) => {

  return (
    <>
      <div className=" w-full  max-w-[1700px] mx-auto -red-200 sm:mt-[100px] md:mt-[200px] lg:mt-[150px] xl:mt-[0] relative overflow-hidden h-[1200px] md:h-[600px] lg:h-[700px]">
        {/* <FoundersBgSvg /> */}
        <img
          className="w-full transform md:scale-y-[1.5]  hidden fouter:block "
          src="/founderBg.png"
          alt=""
        />
        <img
          className="w-full transform md:scale-y-[1.5]   fouter:hidden "
          src="/foundedMobile.png"
          alt=""
        />

        <div className=" absolute top-0 right-0 h-full w-full p-5 lg:px-20  ">
          <div className="w-full flex justify-center items-center">
            <div className=" w-[241px] h-[124px] lg:w-[271px] lg:h-[154px] xl:w-[291px] xl-h-[174px] md:absolute top-0  -red-300 relative">
              <div className=" absolute lg:top-[10px]">
                <BlueMini rotation={rotation} />
              </div>
              <div className=" absolute bottom-0 right-0 lg:bottom-[10px]">
                <GreenMini rotation={rotation} />
              </div>
              <FounderTextSvg />
            </div>
          </div>
          <div className="">
            <div className=" flex flex-col md:flex-row md:justify-between">
              <img className="w-[221px] h-[231px]" src="/Group 61.png" alt="" />
              <div className=" w-full  flex justify-end md:block md:w-auto">
                <div className=" relative">
                  <img
                    className="w-[240px] h-[231px] mt-7 "
                    src="/Group 62.png"
                    alt=""
                  />
                  <div className=" absolute bottom-[0.5px] left-0 bg-founderColor h-[41px] rounded-2xl w-[187px] border flex items-center justify-center">
                    <div className=" cursor-pointer mr-4">
                      <Book />
                    </div>
                    <div className="cursor-pointer">
                      <Cammera />
                    </div>
                    <div className=" cursor-pointer ml-4">
                      <TextSvg />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col md:flex-row md:justify-around">
              <img
                className="w-[261px] h-[231px] mt-7"
                src="/Group 63.png"
                alt=""
              />
              <div className="w-full  flex justify-end md:block md:w-auto">
                <img
                  className="w-[250px] h-[231px] mt-7"
                  src="/Group 64.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Founders;
