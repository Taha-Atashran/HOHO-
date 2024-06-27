import React from "react";
import StreamsSvg from "../../public/Svg/StreamsSvg";
import Asvg from "../../public/Svg/Asvg";
import Bsvg from "../../public/Svg/Bsvg";
import Csvg from "../../public/Svg/Csvg";
import Dsvg from "../../public/Svg/Dsvg";
import Esvg from "../../public/Svg/Esvg";
import UnderlineSvg from "../../public/Svg/UnderlineSvg";
import BlueMini from "../../public/Svg/BlueMini";
import GreenMini from "../../public/Svg/GreenMini";

const Streams = ({ rotation }) => {
  return (
    <>
      <div className=" w-full max-w-[1700px]  px-5 lg:px-[90px] mt-32 mx-auto  ">
        <div className="w-full flex justify-center items-center lg:justify-start lg:mb-3">
          <div className=" h-[100px] w-[274px] md:w-[359px] md:h-[125px]  relative">
            <div className=" absolute top-[-5px] xl:top-0">
              <BlueMini rotation={rotation} />
            </div>
            <div className=" absolute md:bottom-[16px] bottom-[13px] md:right-[20px] right-[6px]">
              <GreenMini rotation={rotation} />
            </div>
            <StreamsSvg />
          </div>
        </div>
        <div className=" w-full flex flex-col-reverse lg:flex-row lg:justify-between  ">
          <div className=" lg:max-w-[500px] xl:max-w-[600px]">
            <p className="lg:pb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="flex mt-4">
              <div>
                <Asvg />
              </div>
              <p className="pl-2 ">
                Lorem Ipsum is simply dummy text of the printing and{" "}
              </p>
            </div>
            <div className="flex mt-4">
              <div>
                <Bsvg />
              </div>
              <p className="pl-2 ">
                {" "}
                Lorem Ipsum has been the industry's standard dummy text{" "}
              </p>
            </div>
            <div className="flex mt-4">
              <div>
                <Csvg />
              </div>
              <p className="pl-2 ">
                when an unknown printer took a galley of type
              </p>
            </div>
            <div className="flex mt-4">
              <div>
                <Dsvg />
              </div>
              <p className="pl-2 ">
                {" "}
                and scrambled it to make a type specimen book
              </p>
            </div>
            <div className="flex mt-4">
              <div>
                <Esvg />
              </div>
              <p className="pl-2 ">when an unknown printer took a galley.</p>
            </div>
          </div>
          <div className="  flex justify-center">
            <img
              className="transform lg:translate-y-[-100px] mt-5 lg:mt-0"
              src="/3d.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-full bg-boxColor mb-10 mt-5 lg:mt-0 transform lg:translate-y-[-45px] xl:translate-y-[-100px]  rounded-2xl p-5 flex justify-between flex-col items-center md:flex-row">
          <div className="flex items-center">
            <UnderlineSvg />
            <p className="pl-2 text-[18px]">
              Lorem Ipsum is simply dummy text of the printing
            </p>
          </div>
          <div>
            <button className="bg-btnColor  text-white mt-5 md:mt-0 py-2 px-7 rounded-2xl">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Streams;
