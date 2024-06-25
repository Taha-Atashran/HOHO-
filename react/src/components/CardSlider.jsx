import EyeSvg from "../../public/Svg/EyeSvg";
import VectorSvg from "../../public/Svg/VectorSvg";

const CardSlider = ({ price, title, image, view, date }) => {
  return (
    <>
      <div className="   bg-cardSliderColor rounded-xl  mb-10 p-5">
        {price === 0 ? (
          <div className="w-full   flex items-start text-textColor ">Free</div>
        ) : (
          <div className="w-full   flex  justify-between  mb-1">
            <VectorSvg />
            <output className="text-textColor">${price}</output>
          </div>
        )}
        <div className="w-full ">
          <img className="h-full w-full" src={image} alt="" />
        </div>
        <div className="w-full">
          <p className=" text-[16px] py-3">{title}</p>
        </div>
        <div className=" border-t flex justify-between items-center pt-2 ">
          <div className="flex text-xs text-dateColor items-center justify-center">
            <EyeSvg />
            <output className="ml-[1px] transform translate-y-[1px]">{view}</output>
          </div>
          <div className="">
            <output className="text-xs text-dateColor  ">{date}</output>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSlider;
