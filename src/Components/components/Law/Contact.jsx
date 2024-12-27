import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 font-sans">Contact Us</h1>
      
      {/* Map Section */}
      <div className="w-full max-w-4xl mb-8">
        <iframe
          title="Google Maps showing the office location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4408228835528!2d80.25644737484316!3d13.071224987253355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526729057d021d%3A0xce0a7a11243b21c5!2sWHY%20tap!5e0!3m2!1sen!2sin!4v1732776995608!5m2!1sen!2sin"
          className="w-full h-96 rounded-lg shadow-md border"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Details Section */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact </h2>

        {/* Phone */}
        <p className="mb-4">
          <strong className="font-medium text-gray-700">Phone Number: </strong>
          <a href="8925628494" className="text-blue-600 hover:underline">
            +91 8925628494
          </a>
        </p>

        {/* Email */}
        <p className="mb-4">
          <strong className="font-medium text-gray-700">Email: </strong>
          <a href="sivajothi812@gmail.com" className="text-blue-600 hover:underline">
            sivajothi812@gmail.com
          </a>
        </p>

        {/* Office Address */}
        <p>
          <strong className="font-medium text-gray-700">Office Address: </strong>
          <span className="block text-gray-600">No.03 Anna Street Chennai Egmore 603 203</span>
          <a
            href="https://www.google.com/maps?q=No.03 Anna Street Chennai Egmore 603 203"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Get Directions
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
