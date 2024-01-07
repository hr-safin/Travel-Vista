import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./popular.css"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
const Popular = () => {
    return (
        <div className="md:px-6 lg:px-16 xl:px-32 px-4 lg:pt-8 lg:pb-32 py-4">
      <div className=" flex justify-center items-center text-2xl  lg:text-4xl font-bold">
        <h2 className=" text-[#faa935] mb-16 lg:mb-20">Popular Destination</h2>
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide> 
            <img src="https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://images.pexels.com/photos/373409/pexels-photo-373409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full object-cover' />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://images.pexels.com/photos/2783619/pexels-photo-2783619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full object-cover' />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://images.pexels.com/photos/1591379/pexels-photo-1591379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full object-cover' />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className=' h-[500px] object-cover' />
        </SwiperSlide>
        

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