import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
export const About = () => {
  return (
    <div className=" md:px-6 lg:px-16 xl:px-32 px-4 lg:py-40 py-4 ">
      <div className=" flex justify-center items-center text-2xl  lg:text-4xl font-bold">
        <h2 className=" text-[#faa935] mb-16 lg:-mb-16">About Us</h2>
      </div>
      <div className="flex flex-col-reverse lg:flex-row-reverse xl-0  lg:gap-10 xl:gap-10 gap-16 md:gap-0 lg:h-screen justify-between lg:items-center">
        <div className="lg:pt-24 xl:pt-0   md:pt-16">
          <h2 className=" text-xl  font-bold text-yellow-400 pb-4 italic">
            Explore the world with us, one adventure at a time.
          </h2>
          <h3 className=" text-4xl w-[400px] md:w-[600px] md:mx-auto lg:mx-0 lg:w-full md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-700">
            The perfect vacation come true with our Travel Agency
          </h3>
          <div className="">
          <p className=" text-base w-[400px] md:w-[480px] lg:w-[520px]   md:text-base lg:text-base pt-7 text-gray-600">
            We are a team of experienced travel experts who specialize in
            planning and organizing unforgettable travel experiences for our
            clients with a wide range of travel services, including flight
            bookings and more.
          </p>
          </div>

          <div className=" my-10 font-bold text-white">
            <button className=" bg-[#faa935] px-4 py-2.5 hover:bg-yellow-500 rounded-md ">More Info</button>
          </div>
         
        </div>
        <div className="flex flex-col lg:gap-8 lg:mr-10 md:gap-6 gap-10  lg:pl-16 md:flex-row lg:flex-col lg:items-center">
          <div>
            <img
              className=" md:w-[820px] lg:w-[1210px]  rounded-md md:h-[200px] lg:h-[100px] xl:h-[200px] object-cover  "
              src="https://travel.nicdark.com/travel-agency-wordpress-theme/wp-content/uploads/sites/9/2023/05/i-parallax-16.jpeg"
              alt=""
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            <img
              className=" md:w-[820px] lg:w-[260px]  rounded-md md:h-[200px] lg:h-[100px] xl:h-[190px] object-cover    "
              src="https://travel.nicdark.com/travel-agency-wordpress-theme/wp-content/uploads/sites/9/2023/05/i-parallax-07-destination-01.jpeg"
              alt=""
            />
            <img
              className=" md:w-[820px] lg:w-[260px]  rounded-md md:h-[200px] lg:h-[100px] xl:h-[190px] object-cover    "
              src="https://travel.nicdark.com/travel-agency-wordpress-theme/wp-content/uploads/sites/9/2023/05/i-parallax-04-package-02.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
