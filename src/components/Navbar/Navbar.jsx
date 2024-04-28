'use client';

import Link from 'next/link';
import { useState } from 'react';

import { CgMenuGridR } from 'react-icons/cg';
import { MdCancel } from 'react-icons/md';

export const Navlinks = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'About',
    link: '/about',
  },
  {
    id: 3,
    title: 'Reviews',
    link: '/reviews',
  },
  {
    id: 4,
    title: 'Pricing',
    link: '/pricing',
  },
  {
    id: 5,
    title: 'Blogs',
    link: '/blogs',
  },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header className=" bg-black text-white">
      {/* desktop navigation section  */}
      <nav className="container flex items-center justify-between py-3">
        <div>
          <Link href="/">
            <span className=" text-3xl font-bold">Flex</span>
            <span className=" text-3xl font-bold text-orange-500">Force</span>
          </Link>
        </div>

        <div className=" hidden md:flex">
          <ul className=" flex items-center gap-8">
            {Navlinks.map(({ id, title, link }) => {
              return (
                <li key={id}>
                  <Link
                    href={link}
                    className=" text-lg font-medium hover:text-orange-400 transition-all"
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className=" md:hidden flex items-center">
          {menu ? (
            <MdCancel size={25} onClick={handleChange} />
          ) : (
            <CgMenuGridR size={25} onClick={handleChange} />
          )}
        </div>
      </nav>

      {/* responsive navigation section  */}
      <div
        className={`${
          menu ? 'translate-x-0' : '-translate-x-full'
        } md:hidden flex flex-col absolute bg-black z-10 left-0 top-14 list-none font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        {Navlinks.map(({ id, title, link }) => {
          return (
            <li key={id}>
              <Link
                href={link}
                className=" text-lg font-medium hover:text-orange-400 transition-all"
                onClick={closeMenu}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </div>
    </header>
  );
};

export default Navbar;
