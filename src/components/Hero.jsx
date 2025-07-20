// src/components/Hero.jsx
import { Link } from 'react-router-dom';
import React from 'react';
function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-black py-20 px-6">
      <h1 className="text-5xl font-bold mb-4">Welcome to our help hub</h1>
      <p className="text-xl mb-6">No Red Tape, Just Empathy. What Do You Need?</p>
      <button> <Link to="/Support"className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-100">
        Click to Get Support</Link>
      </button>
      <img 
        src="/community.webp" 
        alt="Community Support" 
        className="mt-6 w-[600px] h-100"
      />
    </div>
  );
}

export default Hero;
