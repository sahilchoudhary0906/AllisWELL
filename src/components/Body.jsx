import { Link } from 'react-router-dom';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { PiArrowBendLeftDownFill } from "react-icons/pi";
import { PiArrowBendRightDownFill } from "react-icons/pi";
import Footer from './Footer';

const Body = () => {
  const handleDownload = () => {
    const pdfUrl = '/sahil oll.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'sahil oll.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const playSound = () => {
    const audio = new Audio('/pop-94319.mp3'); // Make sure the path is correct
    audio.play();
  };

  return (
    <>
      <div id="hero" className='min-h-screen bg-gradient-to-b from-purple-100 via-orange-200 to-transparent'>
        <div id="hero-container" className='max-w-4xl mx-auto px-6 pt-6 pb-32 flex flex-col md:items-center md:text-center'>
          <div className="version-text flex my-6 gap-2 items-center border border-yellow-300 bg-yellow-50 py-1 px-3 w-fit rounded-lg hover:shadow-xl hover:-translate-y-1 transition group">
            <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600">  </div>
            <p className='font-display font-medium text-yellow-600'>v.21.1: <span className='text-yellow-800'>Find-in-page bug fixes</span></p>
            <FaArrowRight className='text-yellow-600 group-hover:translate-x-1 transition' />
          </div>
          <h1 className='text-5xl font-display font-semibold leading-snug mt-4 md:text-7xl'>
            We love to serve You best!!
          </h1>
          <p className='text-xl mt-4 md:text-2xl text-gray-800 md:mt-8 font-display'>Transforming ideas into impactful web solutions, we create seamless experiences that elevate your brand.</p>
          <div className="buttons flex flex-col gap-3 mt-10 items-center md:flex-row transition ">
            <button onClick={handleDownload} className='bg-blue-700 text-white w-96 py-3 hover:bg-blue-500 rounded-xl md:w-56'>
              Download
            </button>
            <Link to="/ReadFiles">
              <button className='bg-white w-96 py-3 hover:bg-zinc-400 hover:shadow-xl rounded-xl md:w-56'>
                Read Docs
              </button>
            </Link>
          </div>
        </div>
        <div className="companies-title mb-4">
          <div className='flex items-center justify-center'>
            <PiArrowBendLeftDownFill className='text-8xl translate-y-2' />
            <span className='text-5xl font-display'>Our Services </span>
            <PiArrowBendRightDownFill className='text-8xl translate-y-2' />
          </div>
          <div className="clients">
            <div className="imgs md:w-fit md:flex gap-4 mx-auto md:gap-6">
              <Link to="/Ronak">
                <div className="image0 flex items-center gap-2 bg-white h-[300px] py-5 my-4 md:flex-col rounded-xl md:w-80 hover:scale-90 transition md:hover:scale-125 hover:cursor-pointer hover:bg-orange-300" onMouseEnter={playSound}>
                  <img src="Sahil.jpg" alt="" className=' w-72 rounded-3xl ' />
                  <p className='text-4xl font-display md:text-2xl text-red-700'>Health care Services</p>
                </div>
              </Link>
              <Link to="/Peter">
                <div className="image1 flex items-center gap-2 bg-white h-fit py-5 my-4 md:flex-col rounded-xl md:w-80 hover:scale-90 transition md:hover:scale-125 hover:cursor-pointer hover:bg-orange-300" onMouseEnter={playSound}>
                  <img src="hi.png" alt="" className='hover:cursor-pointer w-60 h-56 ' />
                  <p className='text-4xl font-display md:text-2xl text-green-800'>Currency Converter</p>
                </div>
              </Link>
              <Link to="/Ellie">
                <div className="image2 flex items-center gap-2 bg-white h-fit py-5 my-4 md:flex-col rounded-xl md:w-80 hover:scale-90 transition md:hover:scale-125 hover:cursor-pointer hover:bg-orange-300" onMouseEnter={playSound}>
                  <img src="dice.png" alt="" className='w-96' />
                  <p className='text-4xl font-display md:text-2xl'>Rolling Dice</p>
                </div>
              </Link>
              <Link to="/Sazia">
                <div className="image3 flex items-center gap-2 bg-white h-fit py-5 my-4 md:flex-col rounded-xl md:w-80 hover:scale-90 transition md:hover:scale-110 hover:cursor-pointer hover:bg-orange-300 p-6" onMouseEnter={playSound}>
                  <img src="unnamed.png" alt="" className=' rounded-3xl w-60' />
                  <p className='text-4xl font-display md:text-2xl text-pink-600'>Love Calculator</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Body;
