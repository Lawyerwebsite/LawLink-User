import React from "react";
import NavbarComp from "../../ReusableComponents/NavbarComponent";
import Footer from "../Footer";

const BusinessLaw = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center bg-gray-50 p-0">
      <NavbarComp/>
      {/* Main Card Container */}
      <div className="w-full max-w-7xl p-8 sm:w-11/12 sm:h-auto bg-white shadow-xl transform  transition duration-500 ease-in-out rounded-lg mx-auto mt-20 mb-10">
        
        {/* Title Section */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 text-center border-b-4 border-gray-500 pb-3">
          Business Law
        </h1>

        {/* Introductory Text */}
        <section className="mb-12">
          <p className="text-gray-700 mb-6 leading-relaxed text-lg sm:text-xl">
            Business law encompasses the legal rules and regulations that govern business and commercial activities. It provides the framework for businesses to operate within the boundaries of the law, ensuring fair practices, protecting consumers, and resolving disputes. Business law covers various areas including contracts, intellectual property, corporate governance, and employment.
            <br />
            The legal landscape for businesses is complex, with different laws applying depending on the type of business, its location, and the industry in which it operates. Understanding business law is essential for the success and protection of any organization.
          </p>
        </section>

        {/* Types of Business Law */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-500 pb-2">
            Types of Business Law
          </h2>

          {/* Grid Layout */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {/* Corporate Law */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Corporate Law</h3>
              <p className="text-gray-700 text-base">
                Corporate law deals with the formation, governance, and dissolution of corporations. It covers legal issues related to mergers and acquisitions, corporate finance, and shareholder rights.
              </p>
            </div>

            {/* Contract Law */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Contract Law</h3>
              <p className="text-gray-700 text-base">
                Contract law governs the creation, interpretation, and enforcement of agreements between businesses. It includes the enforcement of business contracts, breach of contract, and legal remedies.
              </p>
            </div>

            {/* Employment Law */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Employment Law</h3>
              <p className="text-gray-700 text-base">
                Employment law covers the rights and duties of employers and employees. It includes issues such as wrongful termination, wage disputes, discrimination, and workplace safety.
              </p>
            </div>

            {/* Intellectual Property Law */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Intellectual Property Law</h3>
              <p className="text-gray-700 text-base">
                Intellectual property law protects the creations of the mind, such as patents, trademarks, copyrights, and trade secrets. It helps businesses protect their innovations and creative works.
              </p>
            </div>

            {/* Antitrust Law */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Antitrust Law</h3>
              <p className="text-gray-700 text-base">
                Antitrust law ensures that businesses compete fairly and prevents monopolistic practices. It regulates mergers, price-fixing, and other activities that could harm competition.
              </p>
            </div>

            {/* Bankruptcy Law */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Bankruptcy Law</h3>
              <p className="text-gray-700 text-base">
                Bankruptcy law helps businesses and individuals navigate the process of insolvency. It provides legal procedures for liquidating assets or restructuring debts to provide financial relief.
              </p>
            </div>

            {/* Consumer Protection Law */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Consumer Protection Law</h3>
              <p className="text-gray-700 text-base">
                Consumer protection law ensures that businesses do not exploit consumers. It covers product safety, false advertising, and unfair business practices, aiming to protect consumer rights.
              </p>
            </div>

            {/* Tax Law */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Tax Law</h3>
              <p className="text-gray-700 text-base">
                Tax law deals with the legal obligations of businesses and individuals in relation to taxes. It includes corporate taxes, tax deductions, audits, and compliance with tax regulations.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Remarks */}
        <section>
          <p className="text-gray-700 leading-relaxed text-lg sm:text-xl font-sans">
            Business law is constantly evolving as new industries and technologies emerge. With the growth of global commerce, understanding business law is crucial to protecting business interests and ensuring compliance with local and international regulations.
          </p>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default BusinessLaw;
