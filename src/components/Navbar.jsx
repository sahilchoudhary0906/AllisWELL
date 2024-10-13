import React from 'react';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleMenu = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <nav className='flex justify-between items-center p-5'>
      <div className='font-bold text-3xl'>All IN One</div>
      <ul className='hidden md:flex gap-5'>
        <li className='hover:cursor-pointer font-bold'><a href="#">MENU</a></li>
        <li className='hover:cursor-pointer font-bold'><a href="#">DOCS</a></li>
        <li className='hover:cursor-pointer font-bold'><a href="#">ABOUT US</a></li>
        <li className='hover:cursor-pointer font-bold'><a href="#">CONTACT US</a></li>
      </ul>
      <button onClick={toggleMenu} className='md:hidden text-2xl'>
        <FaBars />
      </button>

      {isVisible && (
        <div className='fixed inset-0 bg-white z-50 flex flex-col items-center '>
          <div className="flex justify-between items-center w-full p-5">
            <div className="font-bold text-2xl">All IN One</div>
            <button onClick={toggleMenu} className='text-2xl'><ImCross /></button>
          </div>
          <ul className='flex flex-col items-center gap-5 justify-start'>
            <li className='hover:cursor-pointer font-bold'><a href="#">MENU</a></li>
            <li className='hover:cursor-pointer font-bold'><a href="#">DOCS</a></li>
            <li className='hover:cursor-pointer font-bold'><a href="#">ABOUT US</a></li>
            <li className='hover:cursor-pointer font-bold'><a href="#">CONTACT US</a></li>
          </ul>
        </div>
      )}
      <div className="hidden md:block border border-slate-700 py-4 px-10 rounded-2xl hover:cursor-pointer hover:scale-75">Developer</div>
    </nav>
  );
}

export default Navbar;
