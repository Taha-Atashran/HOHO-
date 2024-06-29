import React, { useState } from "react";
import { LogoSvg } from "../../../public/Svg/LogoSvg";
import OrangeDots from "../../../public/Svg/OrangeDots";
import CopySvg from "../../../public/Svg/CopySvg";

const Footer = () => {
  const [inputValue1, setInputValue1] = useState(
    "0x970dB36fBaE9f5100f903393BdfD105F982513E8"
  );
  const [inputValue2, setInputValue2] = useState(
    "TEgGbednu8Ak7v5DvMateHheE71ft1gw2H"
  );

  const handleCopyClick = (value) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        // alert("Value copied successfully!");
      })
      .catch(() => {
        // alert("Failed to copy the value.");
      });
  };

  return (
    <>
      <div className=" max-w-[1700px]  mx-auto lg:px-[80px] md:px-[20px] mt-14">
        <div className=" bg-sliderColor p-5  rounded-t-2xl ">
          <div className=" flex flex-col lg:flex-row">
            <div className=" flex flex-col md:flex-row md:items-center">
              <div className=" md:mr-4">
                <LogoSvg />
              </div>
              <p className=" text-textColor pt-3 text-[15px] max-w-[900px]">
                Hoho is a gaming platform, which means it is a repository of
                games in a variety of genres, you can play for free or make
                money playing, you can make friends and chat with others. You do
                not need to install any games or software, just open the site
                and start playing.
              </p>
            </div>
            <div className=" flex items-center justify-between mt-3 lg:flex-col lg:justify-center lg:items-start lg:mt-0  lg:ml-10  min-w-[200px]">
              <div className=" flex items-center ">
                <OrangeDots />
                <output className="pl-1 text-[16px] text-textColor">
                  Contact Us
                </output>
              </div>
              <div className=" flex items-center ">
                <OrangeDots />
                <output className="pl-1 text-[17px] text-textColor ">
                  About Us
                </output>
              </div>
            </div>
          </div>
          <div className="w-full mt-4 border border-white"></div>
          <div className="w-full flex justify-center items-center my-7">
            <h2 className=" text-center text-xl text-textColor">
              HOHO Official Wallet address for manual sending:
            </h2>
          </div>
          <div className="  flex flex-col mt-3 md:flex-row md:justify-between">
            <div className=" flex flex-col md:w-1/2 md:mr-5">
              <output className=" text-textColor text-[15px]">
                BUSD - USDT (BEP20):
              </output>
              <div className=" relative mt-2 w-full h-10">
                <input
                  value={inputValue1}
                  onChange={(e) => setInputValue1(e.target.value)}
                  type="text"
                  className="w-full h-full rounded-xl px-4 pr-10  text-dateColor"
                />
                <div
                  onClick={() => handleCopyClick(inputValue1)}
                  className=" absolute right-1 bottom-2"
                >
                  <CopySvg />
                </div>
              </div>
            </div>
            <div className=" flex flex-col mt-3 md:mt-0 md:w-1/2">
              <output className=" text-textColor text-[15px]">
                USDT (TRC20):
              </output>
              <div className=" relative mt-2 w-full h-10 ">
                <input
                  value={inputValue2}
                  onChange={(e) => setInputValue2(e.target.value)}
                  type="text"
                  className="w-full h-full rounded-xl px-4 pr-10  text-dateColor"
                />
                <div
                  onClick={() => handleCopyClick(inputValue2)}
                  className=" absolute right-1 bottom-2"
                >
                  <CopySvg />
                </div>
              </div>
            </div>
          </div>
          <div className=" border border-white w-full mt-5"></div>
          <div className=" flex flex-col w-full items-center lg:flex-row ">
            <div className=" flex flex-col md:flex-row md:w-full md:justify-around lg:items-center lg:mt-5 lg:justify-end">
              <img
                className="w-[138px] h-[28px] mt-6 lg:mt-0 lg:mr-5"
                src="/Images/footer1.png"
                alt=""
              />
              <img
                className="w-[137px] h-[21px] mt-6 lg:mt-0 lg:mr-5"
                src="/Images/footer2.png"
                alt=""
              />
            </div>
            <div className=" flex flex-col md:flex-row md:w-full md:justify-around lg:items-center lg:mt-5 lg:justify-start">
              <img
                className="w-[151px] h-[26px] mt-6 lg:mt-0 lg:mr-5"
                src="/Images/footer33.png"
                alt=""
              />
              <img
                className="w-[146px] h-[15px] mt-6 lg:mt-0 lg:mr-5"
                src="/Images/footer4.png"
                alt=""
              />
            </div>
          </div>
          <div className=" w-full flex justify-center mt-10">
            <h2 className=" text-center text-dateColor text-xs">
              Copyright © 2023 HoHo CO., LTD. All rights reserved.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
