'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Reviews from '@/components/Reviews/Reviews';
import Pricing from '@/components/Pricing/Pricing';
import Blogs from '@/components/Blogs/Blogs';

const page = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="">
      <Hero />
      <About />
      <Reviews />
      <Pricing />
      <Blogs />
    </div>
  );
};
export default page;
