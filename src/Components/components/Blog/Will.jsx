import React from 'react';
import NavbarComp from '../../ReusableComponents/NavbarComponent';
import Footer from '../Footer';

const Will = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <NavbarComp/>
      {/* Outer Container */}
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 mb-10">
        {/* Image Section */}
        <div className="h-64 bg-gray-200">
          <img
            src="https://blog.ipleaders.in/wp-content/uploads/2020/03/Judgement.png"
            alt="Writing a Will"
            className="w-full h-full" 
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Writing or Drafting a Will
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Writing or drafting a will is a crucial step in ensuring that your assets are distributed according to your wishes after your passing. As experienced lawyers, we understand the importance of a well-structured will to prevent legal disputes and provide peace of mind to your loved ones.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Why You Need a Will
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2 mb-6">
            <li>
              <span className="font-semibold">Ensure Asset Distribution:</span> A will ensures that your estate is divided according to your wishes, avoiding conflicts and confusion among your family members.
            </li>
            <li>
              <span className="font-semibold">Appoint an Executor:</span> You can appoint a trusted person to manage your estate and ensure your wishes are carried out.
            </li>
            <li>
              <span className="font-semibold">Protect Loved Ones:</span> A will allows you to specify guardians for minor children and provide for dependents or family members in need.
            </li>
            <li>
              <span className="font-semibold">Minimize Legal Complications:</span> Having a valid will reduces the chances of disputes, delays, and complications during the probate process.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Key Components of a Will
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
            <li>
              <span className="font-semibold">Testator’s Information:</span> The full name, address, and personal details of the person writing the will.
            </li>
            <li>
              <span className="font-semibold">Executor:</span> A person or institution chosen to carry out the instructions of the will.
            </li>
            <li>
              <span className="font-semibold">Asset Distribution:</span> Specific details on how property, money, and other assets are to be divided.
            </li>
            <li>
              <span className="font-semibold">Witnesses:</span> The signatures of at least two witnesses who attest to the authenticity of the will.
            </li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Will;
