import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[url('https://images.fineartamerica.com/images-medium-large-5/the-scales-of-justice-allan-swart.jpg')] bg-cover bg-center h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Expert Civil Law Services You Can Trust</h1>
        <p className="text-xl mb-8">We provide comprehensive legal solutions for individuals and businesses.</p>
        <div className="space-x-4">
          <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">Get a Free Consultation</button>
          <button className="bg-transparent border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;