import React from 'react';
import images from '../assets/images';

const Hero = ({ bioData }) => {
  return (
    <div className="container mx-auto px-4 py-16" id="Hero_1">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3" id="Hero_2">
          <img src={images[0]} alt="Profile" className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg" />
        </div>
        <div className="md:w-2/3" id="Hero_3">
          <h1 className="text-4xl font-bold mb-4">John Doe</h1>
          <p className="text-xl text-gray-600 mb-6">Full Stack Developer & UI/UX Enthusiast</p>
          <p className="text-gray-700 leading-relaxed">{bioData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;