import React from 'react';

const BusinessLawsHero = () => {
  return (
    <div className="relative bg-gray-800 text-white py-20 h-screen flex items-center justify-center">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="Business Laws"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="text-5xl font-bold mb-6">
          BUSINESS LAWS
        </h1>
        <p className="text-xl mb-8">
          Your Legal Journey, Our Guiding Hand.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
          <button className="bg-transparent border border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-gray-900 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessLawsHero;