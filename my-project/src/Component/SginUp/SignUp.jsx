import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
      <section class=" pt-10  w-full">
        <div class="flex flex-col items-center py-20 justify-center px-6  mx-auto md:h-screen lg:py-0 w-[100%] lg:w-[80%]">
          <div class="w-full bg-white rounded-lg shadow-md md:mt-0 sm:max-w-md xl:p-0  ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-6">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl text-center ">
                SignUp
              </h1>
              <form
                
                class="space-y-4 md:space-y-4"
              >
               
                  <div>
                    <label
                      for="name"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      Name
                    </label>
                    <input
                    
                      type="text"
                      name="name"
                      id="name"
                      class="outline-none border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="john"
                    />
                    
                  </div>

                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Email
                    </label>
                    <input
                      
                      type="email"
                      name="email"
                      id="email"
                      class="outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="name@xxx.com"
                    />
                    
                  </div>
               

                <div>
                  <div></div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  />
                  
                  

                  
                </div>
               
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 "
                      required
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="terms"
                      class="font-light text-gray-700 "
                    >
                      I accept the{" "}
                      <a
                        class="font-medium text-primary-600 hover:underline "
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-[#faa935] hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Create Account
                </button>
                <div className=" space-y-2 lg:py-1">
                  
                  <p class="text-sm font-light text-gray-700 ">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      class="font-medium text-gray-800 hover:underline dark:text-primary-500"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
};

export default SignUp;