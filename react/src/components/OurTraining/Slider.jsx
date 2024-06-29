import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";

import { Navigation, Pagination, Scrollbar, Grid } from "swiper/modules";
import CardSlider from "./CardSlider";
import { useState } from "react";

const Slider = () => {
  const [data] = useState([
    {
      id: 1,
      price: 0,
      image: "/Images/1.png",
      title: "How to start network marketing?",
      view: "256",
      date: "1998/02/12",
    },
    {
      id: 2,
      price: 32,
      image: "/Images/2.png",
      title: "How to start network marketing?",
      view: "456",
      date: "2002/07/2",
    },
    {
      id: 3,
      price: 50,
      image: "/Images/3.png",
      title: "How to start network marketing?",
      view: "555",
      date: "1998/02/12",
    },
    {
      id: 4,
      price: 23,
      image: "/Images/1.png",
      title: "How to start network marketing?",
      view: "759",
      date: "2020/02/5",
    },
    {
      id: 5,
      price: 0,
      image: "/Images/2.png",
      title: "How to start network marketing?",
      view: "492",
      date: "1978/4/12",
    },
    {
      id: 6,
      price: 45,
      image: "/Images/3.png",
      title: "How to start network marketing?",
      view: "228",
      date: "1998/02/8",
    },
    {
      id: 7,
      price: 0,
      image: "/Images/1.png",
      title: "How to start network marketing?",
      view: "167",
      date: "2013/02/20",
    },
    {
      id: 8,
      price: 60,
      image: "/Images/2.png",
      title: "How to start network marketing?",
      view: "856",
      date: "2021/06/15",
    },
    {
      id: 9,
      price: 25,
      image: "/Images/3.png",
      title: "How to start network marketing?",
      view: "752",
      date: "2016/04/15",
    },
  ]);

  return (
    <>
      <div className=" ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Grid]}
          spaceBetween={10}
          //   navigation
          //   pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          slidesPerView={1}
          slidesPerGroup={1}
          breakpoints={{
            10: {
              slidesPerView: 1,
              grid: {
                rows: 3,
                fill: "row",
              },
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 2.1,
              grid: {
                rows: 2,
                fill: "row",
              },
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.3,
              grid: {
                rows: 1,
                fill: "row",
              },
              spaceBetween: 30,
            },
          }}
        >
          {data.map((value, index) => (
            <SwiperSlide key={index}>
              <CardSlider {...value} />
            </SwiperSlide>
          ))}{" "}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
