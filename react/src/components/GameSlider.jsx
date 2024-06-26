import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import GameCardSlider from "./GameCardSlider";

const Testi = () => {
  const [data, setData] = useState([
    {
      id: 0,
      image: "/sliderImg.png",
      bigTitle: "Our Professional Game؛",
      shortTitle: "Cold War",
      desc: "In Cold War, you have to fly in the enemy area and destroy their tanks In Cold War, you have to fly in the enemy area and destroy their tanks",
      online: 32,
    },
    {
      id: 0,
      image: "/sliderImg.png",
      bigTitle: "Our Professional Game؛",
      shortTitle: "Cold War",
      desc: "In Cold War, you have to fly in the enemy area and destroy their tanks In Cold War, you have to fly in the enemy area and destroy their tanks",
      online: 32,
    },
    {
      id: 0,
      image: "/sliderImg.png",
      bigTitle: "Our Professional Game؛",
      shortTitle: "Cold War",
      desc: "In Cold War, you have to fly in the enemy area and destroy their tanks In Cold War, you have to fly in the enemy area and destroy their tanks",
      online: 32,
    },
    {
      id: 0,
      image: "/sliderImg.png",
      bigTitle: "Our Professional Game؛",
      shortTitle: "Cold War",
      desc: "In Cold War, you have to fly in the enemy area and destroy their tanks In Cold War, you have to fly in the enemy area and destroy their tanks",
      online: 32,
    },
    {
      id: 0,
      image: "/sliderImg.png",
      bigTitle: "Our Professional Game؛",
      shortTitle: "Cold War",
      desc: "In Cold War, you have to fly in the enemy area and destroy their tanks In Cold War, you have to fly in the enemy area and destroy their tanks",
      online: 32,
    },
  ]);

  return (
    <div className=" ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
          disabledClass: "opacity-50 cursor-not-allowed",
        }}
        scrollbar={{ draggable: true }}
      >
        {data.map((value, index) => (
          <SwiperSlide key={index}>
            <GameCardSlider {...value} />
          </SwiperSlide>
        ))}
        {/* <div className="swiper-button-prev custom-button-prev"></div>
        <div className="swiper-button-next custom-button-next"></div> */}
      </Swiper>
    </div>
  );
};

export default Testi;
