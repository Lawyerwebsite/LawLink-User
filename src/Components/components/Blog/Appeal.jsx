import React from 'react';
import NavbarComp from '../../ReusableComponents/NavbarComponent';
import Footer from '../Footer';

const Appeal = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <NavbarComp/>
      {/* Container */}
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 mb-10">
        {/* Image Section */}
        <div className="h-64 bg-gray-200">
          <img
            src="https://singhania.in/admin/newsimage/news-1637743257.jpg"
            alt="Legal Judgment Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Filing or Defending an Appeal
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Filing or defending an appeal is a critical step in seeking justice when you believe a legal decision was incorrect or unfair. At <span className="font-semibold">[Your Firm Name]</span>, we provide comprehensive support for appeals in civil, criminal, and constitutional matters.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            What is an Appeal?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            An appeal allows you to challenge a court’s decision by requesting a higher court to review the case. It is not a retrial but an opportunity to correct errors in judgment or law.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-4 mb-6">
            <li>
              <span className="font-semibold">Expert Guidance:</span> We analyze your case to determine its appealability.
            </li>
            <li>
              <span className="font-semibold">Comprehensive Documentation:</span> We prepare and file all necessary appeal documents.
            </li>
            <li>
              <span className="font-semibold">Strong Representation:</span> Our team ensures persuasive arguments to strengthen your case.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Types of Appeals We Handle
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
            <li>Civil Appeals</li>
            <li>Criminal Appeals</li>
            <li>Family Law Appeals</li>
            <li>Property and Contract Disputes</li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Appeal;
