import React from 'react';

const Casecategories = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4 ">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('https://wallpaperaccess.com/full/1506496.jpg')] bg-cover bg-center   opacity-30"
      ></div>

      {/* Content Wrapper */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="max-w-2xl text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Understanding Criminal Laws
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Your guide to justice, rights, and legal protections. Empower yourself with knowledge about criminal offenses, legal procedures, and defense strategies.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-900 font-semibold py-3 px-6 rounded-lg hover:bg-blue-100 transition duration-300">
              Explore Criminal Laws
            </button>
            <button className="bg-transparent border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-900 transition duration-300">
              Get Legal Help Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casecategories;
