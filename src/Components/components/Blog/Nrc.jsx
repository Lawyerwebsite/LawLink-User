import React from 'react';
import NavbarComp from '../../ReusableComponents/NavbarComponent';
import Footer from '../Footer';

const Nrc = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <NavbarComp/>
      {/* Container */}
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 mb-10">
        
        {/* Image Section */}
        <div className="h-64 bg-gray-200">
          <img
            src=" https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_11_Business-Laws-1.jpg"
            alt="NRC and Citizenship"
            className="w-full h-full "
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            NRC and Citizenship: What You Need to Know
          </h1>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The introduction of CAB and NRC on December 12th has raised a lot of concerns within the nation regarding their citizenship and how to prove their Indian citizenship.
            As it stands, the government has not yet decided on the acceptable documents to prove citizenship.
            The courts of law have ruled that providing Aadhaar, Pan Card, and Driving license as proof of citizenship would not suffice.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            With regard to Aadhaar, though it is used to identify a citizen at a national level, under the Aadhaar Act, a person can apply for an Aadhaar card after completing 182 days of residency.
            PAN cards are used for payment of income tax in India, and even foreign citizens, NRIs, or entities can obtain PAN cards when they are bound to pay taxes in India.
            Thus, these documents cannot be considered substantive proof of citizenship but can be used to support a claim.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            In our opinion, the best way to prove citizenship is by submitting documents related to the date or place of birth, such as birth certificates. Section 3 of the Citizenship Act, 1955 addresses "Citizenship by Birth."
            The law adopted the principle of "Jus Soli," granting citizenship to those born in India on or before January 1, 1950.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Set A (Acceptable Documents)
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              <li>1951 NRC</li>
              <li>Electoral Roll(s) up to 24th March 1971 (midnight)</li>
              <li>Land & Tenancy Records</li>
              <li>Citizenship Certificate</li>
              <li>Permanent Residential Certificate</li>
              <li>Passport</li>
              <li>LIC</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Set B (Supplementary Documents)
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              <li>Birth Certificate</li>
              <li>Land Document</li>
              <li>Board/University Certificate</li>
              <li>Bank/LIC/Post Office Records</li>
              <li>Circle Officer/ GP Secretary Certificate (in case of married women)</li>
              <li>Electoral Roll</li>
              <li>Ration Card</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Nrc;
