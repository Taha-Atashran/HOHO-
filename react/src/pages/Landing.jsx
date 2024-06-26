import HeaderDesc from "../components/HeaderDesc";
import HeaderMobile from "../components/HeaderMobile";
import MainHeader from "../components/MainHeader";
import NetWork from "../components/NetWork";
import OurVision from "../components/OurVision";
import Our from "../components/Our";
import { useEffect, useState } from "react";
import Streams from "../components/Streams";
import Slider from "../components/Slider";
import HohoWallet from "../components/HohoWallet";
import Games from "../components/Games";
import Testi from "../components/GameSlider";
import Founders from "../components/Founders";
import FeedBack from "../components/FeedBack";

const Landing = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotationDegree = scrollY % 360; // Adjust the rotation degree based on scroll position
      setRotation(rotationDegree);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderDesc />
      <HeaderMobile />
      <MainHeader rotation={rotation} />
      <OurVision rotation={rotation} />
      <NetWork rotation={rotation} />
      <Our />
      <Streams rotation={rotation} />
      <HohoWallet rotation={rotation} />
      <Games rotation={rotation} />
      <Founders rotation={rotation} />
      <FeedBack />
    </>
  );
};

export default Landing;
