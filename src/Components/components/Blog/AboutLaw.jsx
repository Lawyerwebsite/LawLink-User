import React from 'react';
import NavbarComp from '../../ReusableComponents/NavbarComponent';
import Footer from '../Footer';

const AboutLaw = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <NavbarComp/>
      {/* Container */}
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10 mb-10">
        {/* Image Section */}
        <div className="h-60 md:h-80 bg-gray-200">
          <img
            src="https://img.freepik.com/free-photo/court-hammer-books-judgment-law-concept_144627-30457.jpg"
            alt="Scales of justice symbolizing law and judgment"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-6" role="document">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            About the Judgment
          </h1>

          {/* Paragraph 1 */}
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The citation <span className="font-semibold">2018 SCC OnLine Bom 2074</span>, also referenced as <span className="font-semibold">(2018) 5 AIR Bom R 553</span> and <span className="font-semibold">(2018) 6 Bom CR 172</span>, pertains to a judgment delivered by the Bombay High Court in 2018. This case addresses issues involving legal principles applied in civil or constitutional law, specific contractual disputes, or procedural interpretations under Indian law.
          </p>

          {/* Paragraph 2 */}
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            To provide an accurate and detailed summary of this case, access to the judgment text or additional details about the legal context is required. For specifics about the case (e.g., parties involved or legal issues raised), refer to trusted legal databases like SCC Online  or  Manupatra for the full case summary.
          </p>

          {/* Detailed Explanation */}
          <div className="bg-gray-100 p-4 rounded-lg mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Key Aspects of the Case:
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              <li>
                <span className="font-semibold">Case Title and Parties:</span> Includes the names of litigants and case type (civil, criminal, or constitutional).
              </li>
              <li>
                <span className="font-semibold">Legal Issue:</span> The core question addressed by the court, such as statutory interpretation, contractual disputes, or constitutional remedies.
              </li>
              <li>
                <span className="font-semibold">Judgment Highlights:</span> Legal precedents, the court's reasoning, and orders issued.
              </li>
              <li>
                <span className="font-semibold">Impact and Significance:</span> Broader implications for Indian jurisprudence, including changes in legal interpretations and industry impacts.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutLaw;
