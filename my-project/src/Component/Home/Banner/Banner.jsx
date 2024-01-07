import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
export const Banner = () => {
  return (
    <div className=" md:px-6 lg:px-16 xl:px-32 px-4 lg:py-0 py-36 ">
      <div className="flex flex-col md:flex-row lg:pt-10 xl-0  lg:gap-10 xl:gap-10 gap-16 md:gap-0 lg:h-screen justify-between lg:items-center">
        <div className="lg:pt-24 xl-0">
          <h2 className=" text-xl  font-bold text-yellow-400 pb-4 italic">
            Start Traveling Now 🌎
          </h2>
          <h3 className=" text-4xl w-[300px] md:w-full lg:w-full md:text-3xl lg:text-4xl xl:text-6xl font-bold text-gray-700">
            Explore the Top Destination of Planet Earth
          </h3>
          <p className=" text-xl md:text-base lg:text-xl pt-7 text-gray-600">
            Embrace the journey; Travel with passion and purpose.
          </p>
          <form>
            <section class="max-w-4xl px-3 py-4 mt-8 mx-auto bg-white rounded-md shadow ">
              <form>
                <div class="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                  <div className=" relative">
                    <label class="text-gray-700 d" for="location">
                      Location
                    </label>
                    <input
                      id="location"
                      placeholder="location"
                      type="text"
                      class="block w-full relative px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-opacity-40 dark:focus:border-yellow-500 focus:outline-none focus:ring"
                    />
                    <span className="absolute right-2 font-bold text-lg top-11 bottom-0"><MdOutlineLocationOn /></span>
                  </div>

                  <div>
                    <label class="text-gray-700 " for="checkIn">
                      Check In
                    </label>
                    <input
                      id="checkIn"
                      type="date"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-opacity-40 dark:focus:border-yellow-500 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label class="text-gray-700 " for="checkOut">
                      Check Out
                    </label>
                    <input
                      id="checkOut"
                      type="date"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-opacity-40 dark:focus:border-yellow-500 focus:outline-none focus:ring"
                    />
                  </div>

                  <div class="flex justify-end mt-6">
                    <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#faa935] rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </form>
        </div>
        <div className="flex  flex-col lg:gap-0 md:gap-0 gap-10 md:pl-16 lg:pl-16 md:flex-row items-center">
          <div className="overflow-hidden">
            <img
              className="md:w-[80%] lg:w-[85%] rounded-md md:h-[300px] lg:h-[400px] xl:h-[480px] object-cover md:rounded-br-full md:rounded-bl-full  h-auto  cursor-pointer hover:scale-105  duration-500 ease-in-out  transform-gpu transition-all md:rounded-tl-full md:rounded-tr-full "
              src="https://travel.nicdark.com/travel-agency-wordpress-theme/wp-content/uploads/sites/9/2023/05/i-parallax-15-1536x1024.jpeg"
              alt=""
            />
          </div>
          <div className=" overflow-hidden md:pt-44">
            <img
              className="md:w-[80%]  h-auto  cursor-pointer hover:scale-105  duration-500 ease-in-out  transform-gpu transition-all  lg:w-[85%] rounded-md md:h-[300px] lg:h-[400px] xl:h-[480px] object-cover md:rounded-br-full md:rounded-bl-full md:rounded-tl-full md:rounded-tr-full   "
              src="https://travel.nicdark.com/travel-agency-wordpress-theme/wp-content/uploads/sites/9/2023/05/i-parallax-20-1536x1024.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
