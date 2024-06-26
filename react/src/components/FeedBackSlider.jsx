// src/components/VerticalSlider.js

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import CardFeedBack from "./CardFeedBack";

const VerticalSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [messages, setMessages] = useState([
    {
      image: "/person.png",
      name: "Raven Bardot",
      desc: "In Cold War, you have to fly in the enemy area and destroy their tanksIn Cold War, you have ",
      profit: "135.12 $",
    },
    {
      image: "/person.png",
      name: "Raven Bardot",
      desc: "In Cold War, you have to fly in the enemy area and destroy their tanksIn Cold War, you have ",
      profit: "135.12 $",
    },
    {
      image: "/person.png",
      name: "Raven Bardot",
      desc: "In Cold War, you have to fly in the enemy area and destroy their tanksIn Cold War, you have ",
      profit: "135.12 $",
    },
    {
      image: "/person.png",
      name: "Raven Bardot",
      desc: "In Cold War, you have to fly in the enemy area and destroy their tanksIn Cold War, you have ",
      profit: "135.12 $",
    },
    {
      image: "/person.png",
      name: "Raven Bardot",
      desc: "In Cold War, you have to fly in the enemy area and destroy their tanksIn Cold War, you have ",
      profit: "135.12 $",
    },
    {
      image: "/person.png",
      name: "Raven Bardot",
      desc: "In Cold War, you have to fly in the enemy area and destroy their tanksIn Cold War, you have ",
      profit: "135.12 $",
    },
  ]);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <div className="slider-container w-full  mx-auto relative h-[850px] md:h-[350px] lg:h-[500px] ">
      <div className=" h-full overflow-hidden pl-5 relative ">
        <Swiper
          direction="vertical"
          slidesPerView={1}
          centeredSlides={true}
          onSlideChange={handleSlideChange}
          scrollbar={{ draggable: true, el: ".custom-scrollbar" }}
          modules={[Scrollbar]}
          initialSlide={1}
          className="h-full "
          breakpoints={{
            0: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {messages.map((message, index) => (
            <SwiperSlide
              key={index}
              className={` ${
                index === currentSlide ? "opacity-100" : "opacity-50"
              }`}
            >
              <CardFeedBack {...message} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-scrollbar swiper-scrollbar "></div>
      </div>
    </div>
  );
};

export default VerticalSlider;
