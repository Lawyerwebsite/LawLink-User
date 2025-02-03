import React from 'react';

const ServiceLawyer = () => {
  const services = [
    { title: 'Family Law', icon: '👨‍👩‍👧' },
    { title: 'Property Disputes', icon: '🏠' },
    { title: 'Contract Law', icon: '📝' },
    { title: 'Employment Law', icon: '💼' },
    { title: 'Personal Injury Claims', icon: '🚑' },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <span className="text-4xl mb-4">{service.icon}</span>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceLawyer;