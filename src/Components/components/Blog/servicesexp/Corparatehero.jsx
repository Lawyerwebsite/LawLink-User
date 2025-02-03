import React from 'react';

const Corparatehero = () => {
  return (
    <div className="relative bg-blue-900 text-white py-20 h-screen flex items-center justify-center">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
        alt="Corporate Laws"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Expert Corporate Legal Services
        </h1>
        <p className="text-xl mb-8">
          Providing comprehensive legal solutions for your business needs.
        </p>
        <div className="space-x-4">
          <button className="bg-white text-blue-900 font-semibold py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">
            Get Started
          </button>
          <button className="bg-transparent border border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-blue-900 transition duration-300">
            Get Legal Help
          </button>
        </div>
      </div>
    </div>
  );
};

export default Corparatehero;