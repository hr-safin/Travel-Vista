import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Review = () => {
  return (
    <div className=" md:px-6 lg:px-16 xl:px-32 px-4 lg:pt-0 lg:pb-32 py-4">
      <div className=" flex justify-center items-center text-2xl  lg:text-4xl font-bold">
        <h2 className=" text-[#faa935] mb-6">Client Review</h2>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        freeMode={true}
        autoplay={{
          delay: 14500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[300px] object-cover"
      >
        <SwiperSlide className="">
          <section class="bg-white">
            <div class=" px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <figure class="">
                <svg
                  class="h-8 mx-auto mb-3 text-gray-500 "
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p class="text-base font-medium text-gray-900 ">
                    TravelVista delivers seamless booking, superb customer service, and memorable vacations. Highly recommended for stress-free and enjoyable travel experiences..
                  </p>
                </blockquote>
                <div className="flex justify-center pt-5 items-center gap-4">
                  <div className="avatar">
                    <div className="w-8">
                      <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" />
                    </div>
                  </div>
                  <p>|</p>
                  <p> John Doe</p>
                </div>
              </figure>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className="">
          <section class="bg-white">
            <div class=" px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <figure class="">
                <svg
                  class="h-8 mx-auto mb-3 text-gray-500 "
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p class="text-base font-medium text-gray-900 ">
                    TravelVista delivers seamless booking, superb customer service, and memorable vacations. Highly recommended for stress-free and enjoyable travel experiences..
                  </p>
                </blockquote>
                <div className="flex justify-center pt-5 items-center gap-4">
                  <div className="avatar">
                    <div className="w-8">
                      <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" />
                    </div>
                  </div>
                  <p>|</p>
                  <p> John Doe</p>
                </div>
              </figure>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className="">
          <section class="bg-white">
            <div class=" px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <figure class="">
                <svg
                  class="h-8 mx-auto mb-3 text-gray-500 "
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p class="text-base font-medium text-gray-900 ">
                    TravelVista delivers seamless booking, superb customer service, and memorable vacations. Highly recommended for stress-free and enjoyable travel experiences..
                  </p>
                </blockquote>
                <div className="flex justify-center pt-5 items-center gap-4">
                  <div className="avatar">
                    <div className="w-8">
                      <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" />
                    </div>
                  </div>
                  <p>|</p>
                  <p> John Doe</p>
                </div>
              </figure>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className="">
          <section class="bg-white">
            <div class=" px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <figure class="">
                <svg
                  class="h-8 mx-auto mb-3 text-gray-500 "
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p class="text-base font-medium text-gray-900 ">
                    TravelVista delivers seamless booking, superb customer service, and memorable vacations. Highly recommended for stress-free and enjoyable travel experiences..
                  </p>
                </blockquote>
                <div className="flex justify-center pt-5 items-center gap-4">
                  <div className="avatar">
                    <div className="w-8">
                      <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" />
                    </div>
                  </div>
                  <p>|</p>
                  <p> John Doe</p>
                </div>
              </figure>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className="">
          <section class="bg-white">
            <div class=" px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <figure class="">
                <svg
                  class="h-8 mx-auto mb-3 text-gray-500 "
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p class="text-base font-medium text-gray-900 ">
                    TravelVista delivers seamless booking, superb customer service, and memorable vacations. Highly recommended for stress-free and enjoyable travel experiences..
                  </p>
                </blockquote>
                <div className="flex justify-center pt-5 items-center gap-4">
                  <div className="avatar">
                    <div className="w-8">
                      <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" />
                    </div>
                  </div>
                  <p>|</p>
                  <p> John Doe</p>
                </div>
              </figure>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className="">
          <section class="bg-white">
            <div class=" px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <figure class="">
                <svg
                  class="h-8 mx-auto mb-3 text-gray-500 "
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p class="text-base font-medium text-gray-900 ">
                    TravelVista delivers seamless booking, superb customer service, and memorable vacations. Highly recommended for stress-free and enjoyable travel experiences..
                  </p>
                </blockquote>
                <div className="flex justify-center pt-5 items-center gap-4">
                  <div className="avatar">
                    <div className="w-8">
                      <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" />
                    </div>
                  </div>
                  <p>|</p>
                  <p> John Doe</p>
                </div>
              </figure>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
