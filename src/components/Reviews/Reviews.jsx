import React, { useRef } from "react";
import Slider from "react-slick";
import img1 from "../../assets/review1.jpg";
import img2 from "../../assets/review2.jpg";
import img3 from "../../assets/review3.jpg";
import img4 from "../../assets/review4.jpg";
import img5 from "../../assets/review5.jpg";
import img6 from "../../assets/review6.jpg";
import ReviewCard from "./ReviewCard";

const ReviewsData = [
  {
    id: 1,
    img: img1,
    name: "Jaxon Steele",
  },
  {
    id: 2,
    img: img2,
    name: "Kyler Briggs",
  },
  {
    id: 3,
    img: img3,
    name: "Zayden Wells",
  },
  {
    id: 4,
    img: img4,
    name: "Maddox Stone",
  },
  {
    id: 5,
    img: img5,
    name: "Kason Ryder",
  },
  {
    id: 6,
    img: img6,
    name: "Zander Blake",
  },
];

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const slider = useRef(null);

  return (
    <div className=" bg-slate-950 text-white py-14">
      <h3
        data-aos="fade-up"
        data-aos-delay="600"
        className=" text-center text-lg font-bold text-orange-500 uppercase tracking-[4px]"
      >
        Our Testimonials
      </h3>
      <h1
        data-aos="fade-up"
        data-aos-delay="1000"
        className=" text-center text-4xl font-bold pt-3"
      >
        What Clients Say
      </h1>

      <div data-aos="zoom-in" className=" px-0 lg:px-32 mt-10">
        <Slider ref={slider} {...settings}>
          {ReviewsData.map((e) => (
            <ReviewCard key={e.id} name={e.name} img={e.img} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;