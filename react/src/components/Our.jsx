import OurSvg from "../../public/Svg/OurSvg";
import Slider from "./Slider";

const Our = () => {
  return (
    <div className="mx-auto px-4 bg-sliderColor   py-7 2xl:pl-[90px] xl:pl-0 max-w-[1700px] mt-7 sm:mt-0">
      <div className="h-20 flex justify-center items-center w-full ">
        <div className=" w-[186px] h-[52px] sm:w-[216px] sm:h-[82px] lg:w-[226px] lg:h-[92px] mb-3">
          <OurSvg />
        </div>
      </div>
      <Slider />
      <div className="boorder mt-5 flex justify-center items-center">
        <output className=" cursor-pointer text-pinkColor">See All</output>
      </div>
    </div>
  );
};

export default Our;
