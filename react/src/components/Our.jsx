import OurSvg from "../../public/Svg/OurSvg";
import Slider from "./Slider";

const Our = () => {
  return (
    <div className="mx-auto px-4 bg-sliderColor   py-7 2xl:pl-[90px] xl:pl-0 max-w-[1700px]">
      <div className="h-20 flex justify-center items-center w-full ">
        <OurSvg />
      </div>
      <Slider />
      <div className="boorder mt-5 flex justify-center items-center">
        <output className=" cursor-pointer text-pinkColor">See All</output>
      </div>
    </div>
  );
};

export default Our;
