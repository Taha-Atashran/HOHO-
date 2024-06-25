import OrangeSvg from "../../public/Svg/OrangeSvg";
import PinkMini from "../../public/Svg/PinkMini";
import VisionText from "../../public/Svg/VisionText";

const OurVision = ({ rotation }) => {
  return (
    <>
      <div className=" container  h-[500px] mt-[100px]  xl:px-40 md-px-20 px-5 flex flex-col ">
        <div className=" h-1/3 flex justify-between">
          <div className=" lg:w-[253px] lg:h-[125px] w-[148px] h-[94px] md:w-[200px] md:h-[150px] sm:w-[170px] sm:h-[120px]  relative ">
            <div className=" absolute top-[30%] right-[35%] md:right-[40%] lg:right-[45%] md:top-[35%] lg:top-[30%]">
              <OrangeSvg rotation={rotation} />
            </div>
            <div className=" absolute  bottom-[20%] left-[10%] md:left-[15%] lg:bottom-[10%] lg:left-[17%] ">
              <PinkMini rotation={rotation} />
            </div>
            <VisionText />
          </div>
          <img
            className="lg:w-[222px] lg:h-[299px] w-[140px] h-[175px] transform lg:translate-y-[-50px] translate-y-0"
            src="vision.png"
            alt=""
          />
        </div>
        <div className="  h-1/2 pt-5">
          <p className="xl:w-[75%] lg:w-4/5 w-full text-xl ">
            Introducing our new cryptocurrency secure wallet app, designed to
            give you complete control over your digital assets. With our app,
            you can easily store, send, and receive a variety of
            cryptocurrencies, including in this user...
          </p>
        </div>
      </div>
    </>
  );
};

export default OurVision;
