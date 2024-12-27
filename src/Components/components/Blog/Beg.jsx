import React from 'react';
import NavbarComp from '../../ReusableComponents/NavbarComponent';
import Footer from '../Footer';

const Beg = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <NavbarComp/>
      {/* Outer Container */}
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 mb-10">
        {/* Image Section */}
        <div className="h-64 bg-gray-200">
          <img
            src="https://www.amitpatelandassociates.in/wp-content/uploads/2024/05/Intellectual-Property-Lawyer-Ahmedabad.png"
            alt="RERA Guide"
            className="w-full h-full"
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            A Beginner’s Guide to RERA
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The Real Estate (Regulation and Development) Act, 2016 (RERA) was introduced to bring transparency and fairness to the real estate sector. It protects homebuyers and ensures developers follow clear rules and timelines.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Key Highlights of RERA:
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-4">
            <li>
              <span className="font-semibold">Mandatory Registration:</span> Real estate projects must be registered under RERA.
            </li>
            <li>
              <span className="font-semibold">Transparency:</span> Developers must disclose project details, timelines, and approvals.
            </li>
            <li>
              <span className="font-semibold">Timely Delivery:</span> Projects must be completed on time, with penalties for delays.
            </li>
            <li>
              <span className="font-semibold">Defect Liability:</span> Developers are responsible for structural defects for up to 5 years.
            </li>
            <li>
              <span className="font-semibold">Grievance Redressal:</span> Buyers and developers can resolve disputes through state RERA authorities.
            </li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Beg;
