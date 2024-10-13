import React, { useState } from 'react';
import Navbar from './Navbar';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import diceImage from '/dice.png'; 
const Ellie = () => {
  const [diceValue, setDiceValue] = useState(1);
  const [isShaking, setIsShaking] = useState(false);

  const rollDice = () => {
   
    const audio = new Audio('/dice-142528.mp3'); 
    audio.play();

   
    const newValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newValue);
    setIsShaking(true);

    setTimeout(() => {
      setIsShaking(false);
    }, 500); 
  };

  return (
    <>
      <Navbar />
      <div id="hero" className='min-h-screen bg-gradient-to-b from-purple-100 via-orange-200 to-transparent'>
        <div className="first-nav text-4xl mx-2">
          <Link to="/">
            <IoMdArrowRoundBack />
          </Link>
        </div>
        <div className="body-section flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold my-6">Dice Roller</h1>

          <div className={`flex flex-col items-center justify-center w-32 h-32 bg-white border-2 border-gray-300 rounded-lg shadow-lg ${isShaking ? 'shake' : ''}`}>
            <img src={diceImage} alt="Dice" className="w-full h-full" />
            <span className="text-6xl mt-2 font-bold text-gray-800">{diceValue}</span>
          </div>
          
          <button
            onClick={rollDice}
            className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
          >
            Roll the Dice
          </button>
        </div>
      </div>

      <style jsx>{`
        .shake {
          animation: shake 0.5s;
        }

        @keyframes shake {
          0% { transform: translate(1px, 0); }
          25% { transform: translate(-1px, 0); }
          50% { transform: translate(1px, 0); }
          75% { transform: translate(-1px, 0); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </>
  );
};

export default Ellie;
