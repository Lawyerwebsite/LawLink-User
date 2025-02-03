import React from 'react';

const Footer1 = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2023 Civil Law Services. All rights reserved.</p>
        <a
          href="https://g.page/your-law-firm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          Visit us on Google Maps
        </a>
      </div>
    </footer>
  );
};

export default Footer1;