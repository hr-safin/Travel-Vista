import React from "react";

export const Banner = () => {
  return (
    <div className="lg:px-32 px-4 lg:py-0 py-36 ">
      <div className="flex flex-col md:flex-row lg:gap-10 xl:gap-0 gap-16 lg:h-screen justify-between items-center">
        <div>
          <h2 className=" text-xl  font-bold text-yellow-400 pb-4 italic">Start Traveling Now 🌎</h2>
          <h3 className=" text-3xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-700">Explore the Top Destination of Planet Earth</h3>
          <p className=" text-xl md:text-base lg:text-xl pt-7 text-gray-600">Embrace the journey; Travel with passion and purpose.</p>
          <form></form>
        </div>
        <div className="flex flex-col lg:gap-0 md:gap-0 gap-10 md:pl-16 lg:pl-0 md:flex-row items-center">
          <div>
            <img
              className="md:w-[80%] lg:w-[85%] rounded-md md:h-[300px] lg:h-[400px] xl:h-[480px] object-cover md:rounded-br-full md:rounded-bl-full md:rounded-tl-full md:rounded-tr-full "
              src="https://travel.nicdark.com/travel-agency-wordpress-theme/wp-content/uploads/sites/9/2023/05/i-parallax-15-1536x1024.jpeg"
              alt=""
            />
          </div>
          <div className=" md:pt-44">
            <img
              className="md:w-[80%] lg:w-[85%] rounded-md md:h-[300px] lg:h-[400px] xl:h-[480px] object-cover md:rounded-br-full md:rounded-bl-full md:rounded-tl-full md:rounded-tr-full   "
              src="https://travel.nicdark.com/travel-agency-wordpress-theme/wp-content/uploads/sites/9/2023/05/i-parallax-20-1536x1024.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
