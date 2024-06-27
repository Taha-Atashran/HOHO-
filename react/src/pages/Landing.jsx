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
import Footer from "../components/Footer";

const Landing = () => {
  const [scrollRotation, setScrollRotation] = useState(0);
  const [mouseRotation, setMouseRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotationDegree = scrollY % 360; 
      setScrollRotation(rotationDegree);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const radians = Math.atan2(clientY - centerY, clientX - centerX);
    const degrees = radians * (180 / Math.PI);
    setMouseRotation(degrees);
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <HeaderDesc />
      <HeaderMobile />
      <MainHeader rotation={scrollRotation + mouseRotation} />
      <OurVision rotation={scrollRotation + mouseRotation} />
      <NetWork rotation={scrollRotation + mouseRotation} />
      <Our />
      <Streams rotation={scrollRotation + mouseRotation} />
      <HohoWallet rotation={scrollRotation + mouseRotation} />
      <Games rotation={scrollRotation + mouseRotation} />
      <Founders rotation={scrollRotation + mouseRotation} />
      <FeedBack rotation={scrollRotation + mouseRotation} />
      <Footer />
    </div>
  );
};

export default Landing;
