import React from 'react';
import images from '../assets/images';

const Hero = ({ variant }) => {
  return (
    <div id="Hero_1" className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L50 100 L100 0 Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="container mx-auto px-4 flex items-center">
        <div className="w-full md:w-1/2 text-white space-y-8 animate-fade-in-up">
          <h1 id="Hero_2" className="text-5xl md:text-6xl font-bold leading-tight">
            Find Your Dream Property
          </h1>
          <p id="Hero_3" className="text-xl md:text-2xl opacity-90">
            Discover the perfect place to call home with our extensive collection of properties.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all">
              Learn More
            </button>
          </div>
        </div>
        <div className="hidden md:block w-1/2 animate-float">
          <img src={images[0] || 'https://placeholder.com/800x600'} alt="Modern home" className="rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;