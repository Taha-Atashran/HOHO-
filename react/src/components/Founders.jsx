import React, { useEffect, useState } from "react";
import FoundersBgSvg from "../../public/Svg/FoundersBgSvg";
import FounderTextSvg from "../../public/Svg/FounderTextSvg";
import BlueMini from "../../public/Svg/BlueMini";
import GreenMini from "../../public/Svg/GreenMini";

const Founders = ({ rotation }) => {
  const [image1, setImage1] = useState("/founderBg.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setImage1("/foundedMobile.png");
      } else {
        setImage1("/founderBg.png");
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className=" w-full  max-w-[1700px] mx-auto -red-200 sm:mt-[100px] md:mt-[200px] lg:mt-[150px] xl:mt-[0] relative overflow-hidden h-[1200px] md:h-[600px] lg:h-[700px]">
        {/* <FoundersBgSvg /> */}
        <img
          className="w-full transform md:scale-y-[1.5] "
          src={image1}
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
              <img className="w-[231px] h-[231px]" src="/Group 61.png" alt="" />
              <div className=" w-full  flex justify-end md:block md:w-auto">
                <img
                  className="w-[240px] h-[231px] mt-7"
                  src="/Group 62.png"
                  alt=""
                />
              </div>
            </div>
            <div className=" flex flex-col md:flex-row md:justify-around">
              <img
                className="w-[241px] h-[231px] mt-7"
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
