import React, { useState } from 'react';
import Navbar from './Navbar';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const Sazia = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [lovePercentage, setLovePercentage] = useState(null);

  const calculateLove = () => {
    if (name1 && name2) {
      const percentage = Math.floor(Math.random() * 101);
      setLovePercentage(percentage);
    }
  };

  return (
    <>
      <Navbar />
      <div id="hero" className='min-h-screen bg-gradient-to-b from-purple-100 via-orange-200 to-transparent flex flex-col items-center justify-center relative'>
        <div className="absolute top-4 left-4">
          <Link to="/" className="text-4xl text-purple-800">
            <IoMdArrowRoundBack />
          </Link>
        </div>
        <div className="body-section text-center">
          <h1 className="text-4xl font-bold mb-6">Love Calculator</h1>
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              className="border border-gray-300 p-2 rounded mb-4 w-full"
            />
            <input
              type="text"
              placeholder="Partner's Name"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              className="border border-gray-300 p-2 rounded mb-4 w-full"
            />
            <button
              onClick={calculateLove}
              className="w-full bg-pink-500 text-white font-semibold py-2 rounded hover:bg-pink-600 transition duration-200"
            >
              Calculate Love
            </button>
            {lovePercentage !== null && (
              <div className="mt-4 text-center">
                <h2 className="text-2xl font-bold">{`Love Percentage: ${lovePercentage}%`}</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sazia;
