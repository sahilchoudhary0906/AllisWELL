import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const Peter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      const data = await response.json();
      setCurrencies(Object.keys(data.rates));
      setFromCurrency('USD');
      setToCurrency('EUR');
    };
    fetchCurrencies();
  }, []);

  const convertCurrency = async () => {
    if (fromCurrency && toCurrency) {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const data = await response.json();
      const rate = data.rates[toCurrency];
      setConvertedAmount((amount * rate).toFixed(2));
    }
  };

  return (
    <>
      <Navbar />
      <div id="hero" className='min-h-screen bg-gradient-to-b from-purple-100 via-orange-200 to-transparent'>
        <div className="body-section">
          <div className="first-nav text-4xl mx-2">
            <Link to="/">
              <IoMdArrowRoundBack />
            </Link>
          </div>
          <h1 className="text-center text-3xl my-4">Currency Converter</h1>
          <div className="flex flex-col items-center">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="1"
              className='p-2 border rounded'
            />
            <div className="flex gap-2 my-2">
              <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} className='p-2 border rounded'>
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              <span> to </span>
              <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className='p-2 border rounded'>
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
            <button onClick={convertCurrency} className='bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-500 transition'>
              Convert
            </button>
            {convertedAmount > 0 && (
              <h2 className='mt-4 text-xl'>
                {amount} {fromCurrency} = {convertedAmount} {toCurrency}
              </h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Peter;
