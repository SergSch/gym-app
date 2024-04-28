import React from "react";
import { FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <div className=" min-h-screen flex justify-center items-center bg-[url('/heroNew.jpg')] bg-cover bg-no-repeat">
      {/* content section  */}
      <div className=" container text-white space-y-6">
        <h1
          data-aos="fade-up"
          className=" text-6xl w-full md:w-2/4 font-bold leading-tight"
        >
          You Only Fail, When You Stop Trying
        </h1>
        <p data-aos="fade-up" data-aos-delay="600" className=" w-full md:w-2/4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod commodi
          excepturi ut magnam minus id in nisi mollitia incidunt est.
        </p>
        <div data-aos="fade-up" data-aos-delay="1000" className=" flex gap-8">
          <button className=" uppercase px-5 py-2 bg-orange-500 text-sm hover:scale-105 transition duration-200 ease-linear">
            Get Started Now
          </button>
          <div className=" flex gap-2 items-center">
            <FaYoutube size={28} className=" text-red-500" />
            <button>Watch Reviews</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;