import React from "react";
import NavbarComp from "../../ReusableComponents/NavbarComponent";
import Footer from "../Footer";

const Corporate = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center bg-gray-50 p-0">
      <NavbarComp/>
      {/* Main Card Container */}
      <div className="w-full max-w-7xl p-8 sm:w-11/12 sm:h-auto bg-white shadow-xl transform transition duration-500 ease-in-out rounded-lg mx-auto mt-20 mb-10">
        
        {/* Title Section */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 text-center border-b-4 border-gray-500 pb-3">
          Corporate Law
        </h1>

        {/* Introductory Text */}
        <section className="mb-12">
          <p className="text-gray-700 mb-6 leading-relaxed text-lg sm:text-xl">
            Corporate law is a branch of law that deals with the formation, operation, and regulation of businesses and corporations. It covers a wide range of legal issues, including mergers and acquisitions, corporate governance, intellectual property, labor relations, and compliance with regulatory frameworks. Corporate law ensures that businesses operate within the law, providing a legal framework for the establishment, organization, and management of corporations.
            <br />
            Corporate law can vary depending on the jurisdiction, but it plays a crucial role in shaping how companies interact with other entities, governments, and stakeholders.
          </p>
        </section>

        {/* Types of Corporate Law */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-500 pb-2">
            Types of Corporate Law
          </h2>

          {/* Grid Layout */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {/* Mergers and Acquisitions Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Mergers & Acquisitions</h3>
              <p className="text-gray-700 text-base">
                Mergers and acquisitions (M&A) law governs the process of consolidating companies, whether through mergers, acquisitions, or takeovers. This area of law focuses on ensuring compliance with regulatory requirements, managing negotiations, and protecting the interests of shareholders.
              </p>
            </div>

            {/* Corporate Governance Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Corporate Governance</h3>
              <p className="text-gray-700 text-base">
                Corporate governance law deals with the rules, practices, and processes by which companies are directed and controlled. It includes the roles and responsibilities of corporate boards, management, and shareholders to ensure transparency and accountability.
              </p>
            </div>

            {/* Intellectual Property Law Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Intellectual Property</h3>
              <p className="text-gray-700 text-base">
                Intellectual property (IP) law protects the creations of the mind, such as patents, trademarks, copyrights, and trade secrets. Corporate IP law helps businesses safeguard their innovations and maintain a competitive edge in the marketplace.
              </p>
            </div>

            {/* Labor and Employment Law Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Labor & Employment Law</h3>
              <p className="text-gray-700 text-base">
                Corporate labor and employment law governs the relationship between businesses and their employees, covering topics such as worker rights, employment contracts, discrimination, wage and hour laws, and employee benefits.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Remarks */}
        <section>
          <p className="text-gray-700 leading-relaxed text-lg sm:text-xl">
            Corporate law is essential for the successful operation and growth of businesses. It provides a legal framework that helps businesses navigate complex regulatory environments, resolve disputes, and protect their assets.
          </p>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Corporate;
