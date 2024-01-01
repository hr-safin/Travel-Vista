import React, { useState } from "react";
import { FaStream } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [isOpen, setOpen] = useState(false);




  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div
    
      className="z-50 bg-white fixed w-full  h-[73px] shadow lg:px-32 px-4  flex justify-between items-center"
    >
      <h2 className=" italic text-2xl sm:text-3xl font-extrabold text-gray-900  ">
        <Link to="/">Travel Vista</Link>
      </h2>

      <ul className="hidden lg:flex tracking-wide text-gray-700 text-base  space-x-6 ">
        <li className="pt-1 cursor-pointer hover:text-yellow-500">Home</li>
        <li className="pt-1 cursor-pointer hover:text-yellow-500">About Us</li>
        <li className="pt-1 cursor-pointer hover:text-yellow-500">Tour</li>

        <li>
          <div className=" mt-1">
            <Link
              
              class="relative cursor-pointer rounded-md border-2  border-[#faa935] py-2 px-4 font-medium before:border-2 before:border-[#faa935]  text-gray-700 transition-colors before:absolute before:left-0  before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#faa935] before:transition-transform before:duration-1000 before:content-[''] hover:text-white before:hover:scale-x-100"
            >
              Login
            </Link>
          </div>
        </li>
      </ul>
      <div className=" lg:hidden flex  text-gray-800">
        <div className="">
          {!isOpen ? (
            <span onClick={() => setOpen(!isOpen)}>
              <FaStream />
            </span>
          ) : (
            <div
              onClick={() => setOpen(!isOpen)}
              className="  text-xl  py-7 flex justify-end items-center"
            >
              <RxCross2 className="z-10" />
            </div>
          )}

          <div
            className={`top-0 text-gray-800 bg-orange-50 right-0 absolute   w-[55vw] h-full  ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } ease-in-out duration-500`}
          >
            <ul className="md:h-[100vh] bg-orange-50 h-[100vh] p-10 py-32 flex flex-col gap-6 justify-center items-center">
              <li className="pt-2 text-xl cursor-pointer hover:text-yellow-500">
                Home
              </li>
              <li className="pt-2 text-xl cursor-pointer hover:text-yellow-500">
                About Us
              </li>
              <li className="pt-2 text-xl cursor-pointer hover:text-yellow-500">
                Tour
              </li>

              <li>
                <div className=" mt-2 text-xl text-gray-800">Login</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar
