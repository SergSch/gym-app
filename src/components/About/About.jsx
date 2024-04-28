import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="bg-slate-800 text-white py-10">
      <div className=" min-h-screen container flex flex-col md:flex-row justify-center items-center gap-10">
        {/* content section  */}
        <div className=" w-full md:w-2/4 space-y-6">
          <h3
            data-aos="fade-up"
            className=" text-xl font-bold text-orange-500 uppercase  tracking-[4px]"
          >
            About FlexForce
          </h3>
          <h1 data-aos="fade-up" className=" text-5xl font-bold">
            Welcome to Us
          </h1>

          <p data-aos="fade-up" className=" text-orange-400 font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur odit nam magnam sunt soluta voluptatem!
          </p>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odio
            aut debitis autem est corrupti sapiente? Distinctio voluptas
            recusandae explicabo.
          </p>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vel
            ea, cum consequuntur voluptas voluptate officia pariatur,
            consequatur natus culpa obcaecati ad libero deserunt dignissimos.
          </p>
          <span data-aos="fade-up" className=" text-orange-400 font-bold">
            Read more..
          </span>
        </div>

        {/* img section  */}
        <div data-aos="fade">
          <div>
            <Image src="/about.jpg" alt="img" width={455} height={455} />
          </div>
          {/* <div className=" flex gap-1">
            <Image src="/about1.jpg" alt="img" width={150} height={150} />
            <Image src="/about2.jpg" alt="img" width={150} height={150} />
            <Image src="/about3.jpg" alt="img" width={150} height={150} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
