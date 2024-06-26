import React, { useEffect, useState } from "react";
import OurGamesSvg from "../../public/Svg/OurGamesSvg";
import GameSlider from "./GameSlider";
import BlueMini from "../../public/Svg/BlueMini";
import PinkMini from "../../public/Svg/PinkMini";

const Games = ({ rotation }) => {
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
      <div className="w-full  lg:flex lg:mt-[50px] mt-[-100px] max-w-[1700px] mx-auto relative">
        <div className=" absolute top-0 right-0 w-full h-full lg:px-[90px] px-5 ">
          <div className="  w-full flex justify-center ">
            <div className="h-[274px] w-[204px] md:h-[304px] md:w-[234px]  relative ">
              <div className=" absolute top-[30%]">
                <BlueMini rotation={rotation} />
              </div>
              <div className=" absolute bottom-[35%] right-0">
                <PinkMini rotation={rotation} />
              </div>
              <OurGamesSvg />
            </div>
          </div>
          <div className="">
            <GameSlider />
          </div>
        </div>
        <img
          className="w-full h-[300px] scale-y-[1.3] lg:scale-1 lg:w-[40%] lg:h-auto"
          src={image1}
          alt=""
        />
        <img
          className="w-full h-[300px] transform scale-y-[1.5] lg:scale-1 lg:w-[20%] lg:h-auto"
          src={image2}
          alt=""
        />
        <img
          className="w-full h-[300px]  transform scale-y-[1.2] lg:scale-1 lg:w-[40%] lg:h-auto"
          src={image3}
          alt=""
        />
      </div>
    </>
  );
};

export default Games;
