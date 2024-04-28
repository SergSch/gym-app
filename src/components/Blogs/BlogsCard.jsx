import React from 'react';
import Image from 'next/image';

const BlogsCard = ({ id, img, title, heading, duration }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={duration}
      className="group bg-slate-950 cursor-pointer hover:bg-orange-500 transition-all"
      key={id}
    >
      <div>
        <Image src={img} alt="img" />
      </div>
      <div className="p-6 space-y-2 border-b-2 border-orange-500">
        <h3 className=" text-orange-500 font-bold uppercase text-sm group-hover:text-black">
          {title}
        </h3>
        <h1 className=" font-semibold">{heading}</h1>
        <p className=" text-xs">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
          necessitatibus hic sit nesciunt autem fuga?
        </p>
      </div>
    </div>
  );
};

export default BlogsCard;
