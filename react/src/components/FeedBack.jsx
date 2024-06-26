import React from "react";
import VerticalSlider from "./FeedBackSlider";
import FeedBackSvg from "../../public/Svg/FeedBackSvg";

const FeedBack = () => {
  return (
    <>
      <div className="  max-w-[1700px]  mx-auto mt-10 flex  flex-col md:flex-row-reverse md:justify-between lg:px-20 px-5">
        <div className="  flex flex-col items-center md:justify-center  md:max-w-[400px] md:w-[45%] md:ml-10 ">
          <div className="w-[250px] h-[94px]">
            <FeedBackSvg />
          </div>
          <p className=" text-center text-textColor pt-3">
            Introducing our new cryptocurrency secure wallet app, designed to
            give you complete control over your digital assets. With our app.
          </p>
          <button className=" bg-btnColor text-white w-full py-2 mt-5 rounded-3xl md:w-auto md:px-7">
            Join Us
          </button>
        </div>
        <div className=" mt-10">
          <VerticalSlider />
        </div>
      </div>
    </>
  );
};

export default FeedBack;
