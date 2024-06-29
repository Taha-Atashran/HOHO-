import React from "react";
import NetWorkSvg from "../../../public/Svg/NetWorkSvg";
import BlueMini from "../../../public/Svg/BlueMini";
import YellowSvg from "../../../public/Svg/YellowSvg";

const NetWork = ({ rotation }) => {
  return (
    <>
      <div className=" relative container h-[550px] md:h-[445px] lg:h-[302px] mx-auto sm:mt-[-70px]">
        <div className="md:w-[380px] md:h-[119px] w-[263px] h-[94px] lg:absolute lg:right-[20px] xl:static xl:mx-auto mx-auto relative  ">
          <div className=" absolute  top-[23%] right-[19%] md:right-[25%] xl:right-[42%] xl:top-[11%] 2xl:right-[43%] ">
            <BlueMini rotation={rotation} />
          </div>
          <div className=" absolute bottom-[11%] left-[7%] md:left-[12%] xl:left-[39%] xl:top-[27%] 2xl:left-[40.5%]">
            <YellowSvg rotation={rotation} />
          </div>
          <NetWorkSvg />
        </div>
        <div className=" absolute h-full w-full  mx-auto top-0   xl:px-20 md-px-20 px-5 flex lg:justify-between items-center lg:items-start flex-col md:flex-row  ">
          <img
            className="md:w-[351px] md:h-[336px] w-[320px] h-[307px] transform lg:translate-y-[-30px] translate-y-[60px]  mt-12 md:mt-0"
            src="/Images/network1.png"
            alt=""
          />
          <p className="md:pt-[200px] pt-[60px] w-full  md:w-[60%]  text-start md:text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley .
          </p>
          <img
            className="w-[351px] h-[336px] hidden xl:block transform translate-y-[10px]"
            src="/Images/network2.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default NetWork;
