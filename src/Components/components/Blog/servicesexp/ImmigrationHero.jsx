import React from 'react';

const ImmigrationLawsHero = () => {
  return (
    <div className="relative bg-gray-800 text-white py-20 h-screen flex items-center justify-center">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="Immigration Laws"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="text-5xl font-bold mb-6">
          IMMIGRATION LAWS
        </h1>
        <p className="text-xl mb-8">
          Turning Complexity Into Clarity.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
          <button className="bg-transparent border border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-gray-900 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImmigrationLawsHero;