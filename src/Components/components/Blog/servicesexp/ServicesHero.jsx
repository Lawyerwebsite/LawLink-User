import React from 'react';

const ServiceHero = () => {
  return (
    <div className="relative bg-gray-900 text-white py-20 h-screen flex items-center justify-center">
      {/* Background Image */}
      <img
        src="https://media1.thehungryjpeg.com/thumbs2/ori_4041402_14hdu2bkdpieg5kqvjugjjrzmd0hsa16qwkiejrb_legal-services-powerpoint-presentation-template.jpg"
        alt="Legal Services"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="text-5xl font-bold mb-6">
          SERVICE LAWS
        </h1>
        <p className="text-xl mb-8">
          Legal services can transform lives.
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

export default ServiceHero;