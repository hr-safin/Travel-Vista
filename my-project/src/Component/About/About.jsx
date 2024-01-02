import React from "react";

export const About = () => {
  return (
    <div className="md:px-6 lg:px-16 xl:px-32 px-4 lg:py-32 py-36 ">
      <div className="flex justify-center items-center">
        <h2 className=" text-3xl  font-bold text-yellow-400 pt-4 pb-10 ">
          About Us
        </h2>
      </div>
      <div className="flex w-full flex-col md:flex-row lg:pt-10 xl-0  lg:gap-10 xl:gap-10 gap-16 md:gap-0 lg:h-screen justify-between">
      <div className="  max-w-xl">
            <h2 className=" text-xl  font-bold text-yellow-400 pb-4 italic">
              Explore the world with us, one adventure at a time.
            </h2>
            <h3 className=" text-4xl w-[300px] md:w-full lg:w-full md:text-3xl lg:text-4xl xl:text-xl font-bold text-gray-700">
            The perfect   vacation   come true with our Travel Agency
            </h3>
            <p className=" text-xl md:text-base lg:text-xl pt-7 text-gray-600">
              Embrace the journey; Travel with passion and purpose.
            </p>
          </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="  row-span-2">
            <img
              className="md:w-[96%] rounded-md object-cover"
              src="https://travel.nicdark.com/travel-agency-wordpress-theme/wp-content/uploads/sites/9/2023/05/i-parallax-04-package-02.jpeg"
              alt=""
            />
          </div>
          <div className=" w-[90%] -ml-8">
            <img
              className="md:w-[42%] rounded-md object-cover"
              src="https://travel.nicdark.com/travel-agency-wordpress-theme/wp-content/uploads/sites/9/2023/05/i-parallax-07-destination-01.jpeg"
              alt=""
            />

            <img
              className="md:w-[42%] rounded-md lg:mt-7 object-cover"
              src="https://travel.nicdark.com/travel-agency-wordpress-theme/wp-content/uploads/sites/9/2023/05/i-parallax-05-package-03.jpeg"
              alt=""
            />
          </div>
        </div>
    
         
        </div>
     
    
    </div>
  );
};
