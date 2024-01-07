import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./popular.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
const Popular = () => {
  const [tour, setTour] = useState([]);

  useEffect(() => {
    fetch("tour.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTour(data);
      });
  }, []);
  return (
    <div className="md:px-6 containers lg:px-16 xl:px-32 px-4 lg:pt-8 lg:pb-32 py-4">
      <div className=" flex justify-center items-center text-2xl  lg:text-4xl font-bold">
        <h2 className=" text-[#faa935] mb-16 lg:mb-20">Popular Destination</h2>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {tour.map((tours) => (
          <div key={tours.id} className="relative">
            <SwiperSlide>
            <img
              className="object-cover  rounded-lg brightness-75"
              src={tours.image}
              alt={tours.id}
            />
            <div className="  rounded-lg w-full h-full absolute top-0 left-0">
              <p className=" left-0 right-0 text-center bottom-4 text-white absolute text-4xl font-bold">
                {tours.name}
              </p>
            </div>
            </SwiperSlide>
            
            
          </div>
        ))}

<div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
       
      </Swiper>
    </div>
  );
};

export default Popular;
