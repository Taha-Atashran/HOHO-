import React, { useEffect, useState } from "react";
import HeaderMiniSvg from "../../public/Svg/HeaderMiniSvg";
import GreenBlueSvg from "../../public/Svg/GreenBlueSvg";

const MainHeader = ({ rotation }) => {
  return (
    <div className="">
      <div
        className={`  lg:h-[700px]  h-[700px]  w-[100%]  md:justify-center md:flex flex-col md:flex-row   relative   max-w-[1700px] mx-auto `}
      >
        <img
          className="   md:h-full md:left-0 md:w-auto w-full  top-0  md:top-auto h-[300px] md:absolute block md:hidden"
          src="/image1.png"
          alt=""
        />
        <img
          className="   md:h-full md:left-0 md:w-auto w-full  top-0  md:top-auto h-[300px] md:absolute  hidden md:block"
          src="/Ellipse 10.png"
          alt=""
        />

        <img
          className="  md:h-full md:right-[10%]  right-0  md:w-auto w-full h-[400px] md:static absolute top-[70px] md:hidden"
          src="/image2.png"
          alt=""
        />
        <img
          className="  md:h-full md:right-[10%]  right-0  md:w-auto w-full h-[400px] md:static absolute top-[70px] hidden md:block"
          src="/Ellipse 11.png"
          alt=""
        />

        <img
          className="  md:h-full md:right-0  w-full md:w-auto absolute right-0 md:top-0  h-[600px] md:hidden "
          src="/image4.png"
          alt=""
        />
        <img
          className="  md:h-full md:right-0  w-full md:w-auto absolute right-0 md:top-0  h-[600px] hidden  md:block "
          src="/Ellipse 9.png"
          alt=""
        />

        <div className=" absolute   h-[100%] w-[100%] flex  items-start justify-center  max-w-[1700px] mx-auto  overflow-hidden top-0 right   ">
          <img className=" mt-32 md:hidden" src="/mobile vector.png" alt="" />
          <img className=" mt-32 hidden md:block" src="/Vector 2.png" alt="" />
        </div>
        <div className=" absolute top-0  right-0 h-full w-full   max-w-[1700px] flex lg:flex-row md:flex-col justify-between  items-center    md:px-20   ">
          <div className="  relative w-full h-full flex flex-col justify-start lg:justify-center  pt-28 lg:pt-0 items-center px-10 lg:px-0  md:w-[600px] lg:w-[500px] xl:w-2/6 ">
            <div className=" absolute top-[12%] left-[40px] h-[30px] w-[30px] md:h-[40px] md:w-[40px] md:top-[15%] lg:top-[25%] lg:left-0">
              <HeaderMiniSvg rotation={rotation} />
            </div>
            <h1 className=" text-5xl xl:text-[57px] text-center font-extrabold leading-[60px] pt-10 md:pt-0">
              Welcome To The World Of
              <span className=" text-hohoColor"> HOHO</span>
            </h1>
            <div className="flex items-center justify-center relative   h-[55px] w-full mt-4">
              <input
                type="text"
                placeholder="Email"
                className="w-full h-full  rounded-3xl pl-5 text-sm outline-none "
              />
              <button className=" absolute right-0 bg-btnColor h-4/5 px-6 text-white rounded-3xl mr-1 text-sm ">
                Login
              </button>
            </div>
          </div>
          <div className="  hidden md:flex h-full w-auto items-center justify-end  lg:justify-end pl-5  transform translate-y-[-80px] lg:translate-y-0">
            <img src="/welcome.png" alt="" />
          </div>
          <div className=" h-20 w-full flex justify-center items-center absolute bottom-14 md:bottom-[-30px] lg:bottom-14 left-0">
            <img className="w-[80%]" src="/Vector 1.png" alt="" />
            <div
              style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
              className=" absolute h-[35px] w-[250px] rounded-xl flex justify-center items-center bg-hohoDivColor"
            >
              <output className="text-textColor text-[15px] relative">
                1 HoHo=0.006 USD
                <div className=" absolute left-[-20px] top-[2px]">
                  <GreenBlueSvg rotation={rotation} />
                </div>
                <div className=" absolute right-[-22px] top-[2px]">
                  <GreenBlueSvg rotation={rotation} />
                </div>
              </output>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
