import React from "react";
import NavbarComp from "../../ReusableComponents/NavbarComponent";
import Footer from "../Footer";

const BankingLaw = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center bg-gray-50 p-0">
      <NavbarComp/>
      {/* Main Card Container */}
      <div className="w-full max-w-7xl p-8 sm:w-11/12 sm:h-auto bg-white shadow-xl transform transition duration-500 ease-in-out rounded-lg mx-auto mt-20 mb-10">
        
        {/* Title Section */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 text-center border-b-4 border-gray-500 pb-3">
          Banking Law
        </h1>

        {/* Introductory Text */}
        <section className="mb-12">
          <p className="text-gray-700 mb-6 leading-relaxed text-lg sm:text-xl">
            Banking law is the body of law that governs the operations and activities of banks and other financial institutions. It includes regulations related to lending, deposits, financial transactions, and the management of financial risk. Banking law plays a critical role in ensuring the stability and integrity of the financial system, protecting both consumers and financial institutions.
            <br />
            The banking sector is highly regulated, with a complex web of local and international regulations, ensuring that banks operate fairly, securely, and transparently. Understanding banking law is crucial for both businesses and individuals involved in financial transactions.
          </p>
        </section>

        {/* Types of Banking Law */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-500 pb-2">
            Types of Banking Law
          </h2>

          {/* Grid Layout */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {/* Banking Regulations */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Banking Regulations</h3>
              <p className="text-gray-700 text-base">
                Banking regulations are the rules and guidelines that banks must follow to operate legally. These include regulations related to capital requirements, risk management, and compliance with national and international banking standards.
              </p>
            </div>

            {/* Lending Laws */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Lending Laws</h3>
              <p className="text-gray-700 text-base">
                Lending laws govern the terms and conditions under which banks lend money to individuals, businesses, and other organizations. These laws cover interest rates, loan contracts, and the rights and responsibilities of borrowers and lenders.
              </p>
            </div>

            {/* Consumer Protection Laws */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Consumer Protection Laws</h3>
              <p className="text-gray-700 text-base">
                Consumer protection laws ensure that financial institutions act fairly and transparently toward consumers. These laws cover issues such as lending practices, fees, and dispute resolution, protecting consumers from unfair or deceptive practices.
              </p>
            </div>

            {/* Financial Transactions Law */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Financial Transactions Law</h3>
              <p className="text-gray-700 text-base">
                This area of banking law focuses on the legality of financial transactions, including wire transfers, checks, credit card payments, and digital payments. It ensures that these transactions comply with applicable regulations and protect both parties involved.
              </p>
            </div>

            {/* Anti-Money Laundering (AML) Laws */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Anti-Money Laundering (AML) Laws</h3>
              <p className="text-gray-700 text-base">
                AML laws aim to prevent money laundering and terrorist financing activities within the banking sector. These laws require financial institutions to monitor transactions, report suspicious activities, and maintain compliance with financial regulations.
              </p>
            </div>

            {/* Bank Insolvency and Bankruptcy Laws */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Bank Insolvency and Bankruptcy Laws</h3>
              <p className="text-gray-700 text-base">
                These laws govern the process of a bank's insolvency or bankruptcy. In case of financial distress, these regulations provide procedures for liquidation, restructuring, and creditor protection, ensuring fair resolution for all parties involved.
              </p>
            </div>

            {/* Regulatory Compliance */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-700 text-base">
                Regulatory compliance in banking law refers to the adherence of financial institutions to various local and international standards. It includes compliance with tax laws, consumer protection laws, anti-money laundering laws, and others.
              </p>
            </div>

            {/* International Banking Law */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">International Banking Law</h3>
              <p className="text-gray-700 text-base">
                International banking law addresses cross-border banking operations, including international payments, foreign exchange, and international regulations such as the Basel Accords. It ensures that global banking practices are harmonized to avoid legal discrepancies.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Remarks */}
        <section>
          <p className="text-gray-700 leading-relaxed text-lg sm:text-xl font-sans">
            Banking law is essential to the stability and security of the financial system. It ensures the protection of consumers, facilitates transparent financial transactions, and supports the integrity of financial institutions. As the banking sector evolves, staying informed about banking law is crucial for both businesses and individuals engaged in financial activities.
          </p>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default BankingLaw;
