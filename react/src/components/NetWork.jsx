import React from "react";
import NetWorkSvg from "../../public/Svg/NetWorkSvg";

const NetWork = () => {
  return (
    <>
      <div className=" relative container  h-[500px] mx-auto">
        <div className="md:w-[380px] md:h-[119px] w-[263px] h-[94px] lg:absolute lg:right-[20px] xl:static xl:mx-auto mx-auto ">
          <NetWorkSvg />
        </div>
        <div className=" absolute h-full w-full  mx-auto top-0   xl:px-20 md-px-20 px-5 flex lg:justify-between items-center lg:items-start flex-col md:flex-row">
          <img
            className="md:w-[351px] md:h-[336px] w-[320px] h-[307px] transform lg:translate-y-[-30px] translate-y-[50px]  mt-12 md:mt-0"
            src="/network1.png"
            alt=""
          />
          <p className="md:pt-[200px] pt-[50px] w-full  md:w-[60%]  text-start md:text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley .
          </p>
          <img
            className="w-[351px] h-[336px] hidden xl:block"
            src="/network2.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default NetWork;
