import React, { useEffect, useState } from "react";
import HohoWalletSvg from "../../public/Svg/HohoWalletSvg";
import LineSvg from "../../public/Svg/LineSvg";
import BlueMini from "../../public/Svg/BlueMini";
import GreenMini from "../../public/Svg/GreenMini";

const HohoWallet = ({ rotation }) => {
  const [image1, setImage1] = useState("/secondPink.png");
  const [image2, setImage2] = useState("/secondGreen.png");
  const [image3, setImage3] = useState("/secondBlue.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setImage1("/mobilePink.png");
        setImage2("/mobileGreen.png");
        setImage3("/mobileBlue.png");
      } else {
        setImage1("/secondPink.png");
        setImage2("/secondGreen.png");
        setImage3("/secondBlue.png");
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
      <div className="w-full max-w-[1700px] relative lg:flex   mx-auto  transform md:translate-y-[-100px]">
        <div className="w-[100%] h-[100%] absolute top-0 right-0  z-40 mx-auto   px-5 lg:px-[90px]  ">
          <div className=" bg-bodyColor mt-[100px] p-5 lg:pt-28 relative lg:max-h-[500px]  ">
            <div className="w-full  flex justify-center lg:justify-start lg:absolute top-0 ">
              <div className="w-[197px] h-[113px] md:h-[153px] md:w-[237px]  relative ">
                <div className=" absolute lg:top-[7px] ">
                  <BlueMini rotation={rotation} />
                </div>
                <div className=" absolute bottom-0 right-0  lg:bottom-2">
                  <GreenMini rotation={rotation} />
                </div>
                <HohoWalletSvg />
              </div>
            </div>
            <div className=" lg:flex lg:justify-between">
              <div className=" lg:max-w-[600px] md:w-full">
                <img src="/hohomini.png" alt="" />
                <h1 className=" text-2xl pt-3">
                  our new cryptocurrency secure wallet app
                </h1>
                <p className=" pt-5  text-hohoTextColor">
                  Introducing our new cryptocurrency secure wallet app, designed
                  to give you complete control over your digital assets. With
                  our app, you can easily store, send, and receive a variety of
                  cryptocurrencies, including in this user...
                </p>
                <div className=" my-3">
                  <LineSvg />
                </div>
                <div className=" -red-400 flex lg:justify-between lg:items-center lg:flex-row flex-col">
                  <div className="  max-w-[350px] ">
                    <div className="flex justify-between items-center">
                      <output className="text-hohoTextColor text-sm">
                        Downloads:
                      </output>
                      <output className="text-hohoTextColor text-sm">
                        ............................. +1000
                      </output>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <output className="text-hohoTextColor text-sm">
                        Updated on:
                      </output>
                      <output className="text-hohoTextColor text-sm">
                        {" "}
                       ................... Jan 22, 2023
                      </output>
                    </div>
                  </div>
                  <div className=" flex justify-center">
                    <button className=" bg-btnColor cursor-pointer text-white py-2 px-5 rounded-2xl mt-5 lg:mt-0 ">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className=" mt-8 w-full flex justify-center transform lg:translate-y-[-100px]">
                <img className=" object-contain" src="/mobile.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <img
          className="  w-full transform   lg:static lg:w-[40%]  lg:scale-[1] sm:h-[400px] h-[400px] scale-y-[2] "
          src={image1}
          alt=""
        />
        <img
          className="w-full transform   lg:static lg:w-[20%] lg:scale-[1.5] sm:h-[400px] h-[400px] scale-y-[2]"
          src={image2}
          alt=""
        />
        <img
          className="w-full transform     lg:static lg:w-[40%]  lg:scale-y-[1.5] sm:h-[350px] h-[400px] scale-y-[2]"
          src={image3}
          alt=""
        />
      </div>
    </>
  );
};

export default HohoWallet;
