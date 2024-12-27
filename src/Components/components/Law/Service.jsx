import React from "react";
import NavbarComp from "../../ReusableComponents/NavbarComponent";
import Footer from "../Footer";

const Service = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center bg-gray-50 p-0">
      <NavbarComp/>
      {/* Main Card Container */}
      <div className="w-full max-w-7xl p-8 sm:w-11/12 sm:h-auto bg-white shadow-xl transform  transition duration-500 ease-in-out rounded-lg mx-auto mt-20 mb-10">
        
        {/* Title Section */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 text-center border-b-4 border-gray-500 pb-3">
          Service Law
        </h1>

        {/* Introductory Text */}
        <section className="mb-12">
          <p className="text-gray-700 mb-6 leading-relaxed text-lg sm:text-xl">
            Service law governs the relationship between employees and their employers, as well as the rights of public service workers. It covers matters such as government employee benefits, job security, pension rights, and disputes regarding termination or promotions. Service law ensures that workers are treated fairly and that public servants are protected under the law.
            <br />
            Service law may vary depending on the jurisdiction and the type of service (i.e., government or private sector), but it is crucial for protecting workers’ rights, ensuring job security, and maintaining fair practices in the workplace.
          </p>
        </section>

        {/* Types of Service Law */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-500 pb-2">
            Types of Service Law
          </h2>

          {/* Grid Layout */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {/* Employment Rights Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Employment Rights</h3>
              <p className="text-gray-700 text-base">
                Employment law protects the rights of employees, including issues like wrongful termination, discrimination, harassment, wage theft, and the right to organize and form unions.
              </p>
            </div>

            {/* Government Benefits Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Government Benefits</h3>
              <p className="text-gray-700 text-base">
                Service law also covers government employees' access to benefits such as pensions, retirement plans, and health insurance, ensuring fair treatment in all aspects of their employment.
              </p>
            </div>

            {/* Public Sector Workers' Rights */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Public Sector Workers' Rights</h3>
              <p className="text-gray-700 text-base">
                Public sector workers are afforded special protections, including civil service protections against arbitrary dismissal and the right to appeal decisions regarding promotions or disciplinary actions.
              </p>
            </div>

            {/* Workplace Safety & Compliance */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Workplace Safety & Compliance</h3>
              <p className="text-gray-700 text-base">
                Service law also ensures that employees, especially in the public sector, are provided with safe working conditions, with regulations in place to address workplace hazards and ensure compliance with safety standards.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Remarks */}
        <section>
          <p className="text-gray-700 leading-relaxed text-lg sm:text-xl">
            Service laws are essential for protecting the rights of workers and ensuring fairness in the workplace. As public sector rules evolve, these laws will continue to adapt to changing societal and economic conditions.
          </p>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Service;
