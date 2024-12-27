import React from 'react';
import NavbarComp from '../../ReusableComponents/NavbarComponent';
import Footer from '../Footer';

const Spouse = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <NavbarComp/>
      {/* Container */}
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 mb-10">
        {/* Image Section */}
        <div className="h-64 bg-gray-200">
          <img
            src="https://www.amitpatelandassociates.in/wp-content/uploads/2024/05/Intellectual-Property-Lawyer-Ahmedabad.png"
            alt="Legal Process Illustration"
            className="w-full h-full"
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Allegations of Adultery or Spouse's Remarriage
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Allegations of adultery or a spouse's remarriage cannot be resolved without a full trial. Courts emphasize the importance of examining evidence and ensuring a fair process before making any decisions on such serious claims.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Why a Full Trial is Important
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-4">
            <li>
              <span className="font-semibold">Proof of Allegations:</span> Claims of adultery or remarriage require clear evidence, which can only be properly assessed through a detailed trial.
            </li>
            <li>
              <span className="font-semibold">Legal Implications:</span> Decisions on these matters affect divorce, alimony, child custody, and property rights, making it essential to have a fair trial.
            </li>
            <li>
              <span className="font-semibold">Ensuring Justice:</span> A full trial ensures both parties can present their side, preventing unjust or biased judgments.
            </li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Spouse;
