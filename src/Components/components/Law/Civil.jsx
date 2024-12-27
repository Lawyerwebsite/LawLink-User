import React from "react";
import NavbarComp from "../../ReusableComponents/NavbarComponent";
import Footer from "../Footer";

const Civil = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center bg-gray-50 p-0">
      <NavbarComp/>
      {/* Main Card Container */}
      <div className="w-full max-w-7xl p-8 sm:w-11/12 sm:h-auto bg-white shadow-xl transform transition duration-500 ease-in-out rounded-lg mx-auto mt-20 mb-10">
        
        {/* Title Section */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 text-center border-b-4 border-gray-500 pb-3">
          Civil Law
        </h1>

        {/* Introductory Text */}
        <section className="mb-12">
          <p className="text-gray-700  mb-6 leading-relaxed text-lg sm:text-xl">
            Civil law is the body of law that deals with the rights and duties of individuals and organizations. It focuses on resolving disputes between private parties and typically involves compensation for damages or enforcement of contracts. Civil law governs various areas including contracts, torts, property, and family matters.
            <br />
            The legal framework of civil law varies by jurisdiction, but it generally provides mechanisms for individuals to resolve disputes peacefully through litigation, mediation, or arbitration.
          </p>
        </section>

        {/* Types of Civil Law */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-500 pb-2">
            Types of Civil Law
          </h2>

          {/* Grid Layout */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {/* Contract Law */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Contract Law</h3>
              <p className="text-gray-700 text-base">
                Contract law governs agreements made between parties. It covers issues such as breach of contract, contract enforcement, and remedies available for non-performance.
              </p>
            </div>

            {/* Tort Law */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Tort Law</h3>
              <p className="text-gray-700 text-base">
                Tort law addresses civil wrongs that cause harm or injury to individuals or property. It includes cases involving negligence, defamation, and personal injury.
              </p>
            </div>

            {/* Property Law */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Property Law</h3>
              <p className="text-gray-700 text-base">
                Property law deals with ownership, use, and transfer of property. It includes issues related to real estate, personal property, and intellectual property rights.
              </p>
            </div>

            {/* Family Law */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Family Law</h3>
              <p className="text-gray-700 text-base">
                Family law is a subset of civil law that governs matters such as divorce, child custody, adoption, and guardianship, providing a legal framework for family-related disputes.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Remarks */}
        <section>
          <p className="text-gray-700 leading-relaxed text-lg sm:text-xl">
            Civil law continues to evolve, with modern trends focusing on areas like digital property rights, environmental law, and international arbitration. The goal is to ensure fair and just resolution of disputes for individuals and businesses alike.
          </p>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Civil;
