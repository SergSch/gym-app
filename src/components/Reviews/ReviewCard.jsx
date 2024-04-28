import React from 'react';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const ReviewCard = ({ id, name, img }) => {
  return (
    <div key={id} className=" bg-slate-800">
      <div className=" flex items-center">
        <div className=" w-3/4 py-3 space-y-3 px-3">
          <div>
            <h1 className=" text-xl font-semibold">{name}</h1>
            <h3 className=" text-orange-400 uppercase text-xs font-semibold tracking-[2px]">
              client
            </h3>
          </div>

          <p className=" text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            natus. Magnam amet libero sit voluptates?"
          </p>
          <div className=" flex text-orange-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className=" w-2/4 md:w-1/4">
          <Image src={img} alt="img" className="rounded-md h-full" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
