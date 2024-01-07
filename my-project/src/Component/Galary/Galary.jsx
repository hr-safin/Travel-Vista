import React from "react";

const Galary = () => {
  return (
    <div className=" md:px-6 lg:px-16 xl:px-32 px-4 lg:pt-8 lg:pb-32 py-4 ">
      <div className=" flex justify-center items-center text-2xl  lg:text-4xl font-bold">
        <h2 className=" text-[#faa935] mb-16 lg:mb-20">Gallery</h2>
      </div>
      <div className='grid overflow-hidden grid-rows-none md:gap-4 gap-4 md:grid-cols-5'>
         <img  src="https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-auto rounded-md cursor-pointer hover:scale-105  duration-500 ease-in-out  transform-gpu transition-transform   object-cover col-span-2 md:col-span-3 row-span-2' />
         <img src="https://images.pexels.com/photos/373409/pexels-photo-373409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full object-cover   rounded-md cursor-pointer hover:scale-105  duration-500 ease-in-out  transform-gpu transition-transform' />
         <img src="https://images.pexels.com/photos/2783619/pexels-photo-2783619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full object-cover   rounded-md cursor-pointer hover:scale-105  duration-500 ease-in-out  transform-gpu transition-transform' />
         <img src="https://images.pexels.com/photos/1591379/pexels-photo-1591379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full object-cover   rounded-md cursor-pointer hover:scale-105  duration-500 ease-in-out  transform-gpu transition-transform' />
         <img src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full object-cover  rounded-md cursor-pointer hover:scale-105  duration-500 ease-in-out  transform-gpu transition-transform' />
         
      </div>
    </div>
  );
};

export default Galary;
