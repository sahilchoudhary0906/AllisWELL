import React from 'react';
import Navbar from './Navbar';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const ReadFiles = () => {
  return (
    <>
      <Navbar />
      <div id="hero" className='min-h-screen bg-gradient-to-b from-purple-100 via-orange-200 to-transparent'>
        <div className="body-section p-8">
          <div className="first-nav text-4xl mb-4">
            <Link to="/">
              <IoMdArrowRoundBack />
            </Link>
          </div>
          <div className='text-2xl mx-auto text-center font-display'>
            <h1 className='text-5xl underline mb-6'>Service Offerings</h1>
            <h2 className='text-3xl font-bold mt-4'>1. Health Care Services List</h2>
            <p className='mt-2'>
              Our Health Care Services List is a comprehensive directory of various health-related services available in your area. Whether you’re looking for hospitals, clinics, or specialized health services, this tool provides easy access to essential information.
            </p>
            <h3 className='text-2xl font-semibold mt-4'>Features</h3>
            <ul className='list-disc list-inside mt-2'>
              <li>Search Functionality: Quickly find health care providers by name or specialty.</li>
              <li>Location-Based Results: Discover services near you using geolocation features.</li>
              <li>Detailed Information: Access contact details, service descriptions, and ratings for each provider.</li>
              <li>User Reviews: Read experiences from other patients to make informed decisions.</li>
            </ul>

            <h2 className='text-3xl font-bold mt-6'>2. Rolling Dice Game</h2>
            <p className='mt-2'>
              Experience the thrill of chance with our Rolling Dice Game! This interactive game allows users to roll virtual dice and enjoy a variety of dice games right from their devices.
            </p>
            <h3 className='text-2xl font-semibold mt-4'>Features</h3>
            <ul className='list-disc list-inside mt-2'>
              <li>Realistic Dice Simulation: Roll virtual dice that mimic real-life rolling.</li>
              <li>Multiplayer Options: Challenge friends and family in multiplayer mode.</li>
              <li>Customizable Settings: Choose the number of dice and sides to create unique game scenarios.</li>
              <li>Fun Graphics and Sounds: Enjoy engaging visuals and sound effects to enhance the gaming experience.</li>
            </ul>

            <h2 className='text-3xl font-bold mt-6'>3. Love Calculator</h2>
            <p className='mt-2'>
              Discover your compatibility with our fun and interactive Love Calculator! Enter your name and your partner's name to see how much love you share.
            </p>
            <h3 className='text-2xl font-semibold mt-4'>Features</h3>
            <ul className='list-disc list-inside mt-2'>
              <li>Simple Input: Easily enter names to calculate love percentage.</li>
              <li>Randomized Results: Get a fun, random love percentage based on your names.</li>
              <li>User-Friendly Interface: Enjoy a clean and intuitive design for all users.</li>
              <li>Social Sharing: Share your love results with friends on social media.</li>
            </ul>

            <h2 className='text-3xl font-bold mt-6'>4. Currency Converter</h2>
            <p className='mt-2'>
              Our Currency Converter is a practical tool for travelers and business professionals alike. Convert currencies in real-time to ensure you always know the latest exchange rates.
            </p>
            <h3 className='text-2xl font-semibold mt-4'>Features</h3>
            <ul className='list-disc list-inside mt-2'>
              <li>Real-Time Exchange Rates: Access live updates on currency values.</li>
              <li>Multiple Currencies: Convert between a wide range of international currencies.</li>
              <li>User-Friendly Interface: Simple and intuitive design for quick conversions.</li>
              <li>History Tracking: View historical exchange rates to understand currency trends.</li>
            </ul>

            <h2 className='text-3xl font-bold mt-6'>Conclusion</h2>
            <p className='mt-2'>
              We are committed to providing high-quality applications that serve your needs. Each of our services is designed to be user-friendly and informative, ensuring a positive experience. Explore our offerings and find the tools that best suit your lifestyle!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadFiles;
