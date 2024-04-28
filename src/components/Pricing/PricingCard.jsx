import React from 'react';

const PricingCard = ({ id, price, pricePlane }) => {
  return (
    <div
      className="group space-y-4 border-[1px] border-slate-300 hover:scale-105 transition duration-200 ease-linear hover:border-orange-400 cursor-pointer"
      key={id}
    >
      <div className=" flex justify-center items-end px-20 py-6">
        <h1 className=" text-2xl font-bold">$</h1>
        <span className=" text-5xl font-bold">{price}</span>
        <h1>/month</h1>
      </div>
      <h1 className=" bg-slate-700 p-2 text-center font-medium group-hover:bg-orange-400">
        {pricePlane}
      </h1>
      <div className=" flex flex-col items-center space-y-4 py-6">
        <p className=" inline-block border-b-[1px] px-6 pb-3">Group Classes</p>
        <p className=" inline-block border-b-[1px] px-6 pb-3">
          Discuss fitness goals
        </p>
        <p className=" inline-block border-b-[1px] px-6 pb-3">Group trainer</p>
        <p className="">Fitness orientation</p>
      </div>
    </div>
  );
};

export default PricingCard;
