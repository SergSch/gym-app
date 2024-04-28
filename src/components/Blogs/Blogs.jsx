import React from "react";
import img1 from "../../assets/blog1New.jpg";
import img2 from "../../assets/blog2.jpg";
import img3 from "../../assets/blog3.jpg";
import BlogsCard from "./BlogsCard";

const BlogsData = [
  {
    id: 1,
    img: img1,
    title: "yoga & pilates",
    heading: "Do Your Self Realizations Quickly Fade",
    duration: "400",
  },
  {
    id: 2,
    img: img2,
    title: "Trainers & Equipment",
    heading: "Little Things Do Make A Difference",
    duration: "800",
  },
  {
    id: 3,
    img: img3,
    title: "Powerlifting",
    heading: "Are You Famous Or Focused",
    duration: "1200",
  },
];

const Blogs = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center bg-slate-800 text-white py-8 overflow-hidden">
      <h3
        data-aos="fade-up"
        className=" text-center text-lg font-bold text-orange-500 uppercase tracking-[4px]"
      >
        Daily Blogs
      </h3>
      <h1 data-aos="fade-up" className=" text-center text-4xl font-bold pt-3">
        Our latest News
      </h1>

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {BlogsData.map((ele) => (
          <BlogsCard
            key={ele.id}
            img={ele.img}
            title={ele.title}
            heading={ele.heading}
            duration={ele.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;