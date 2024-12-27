import React from "react";
import NavbarComp from "../../ReusableComponents/NavbarComponent";
import Footer from "../Footer";

const ImmigrationLaw = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center bg-gray-50 p-0">
      <NavbarComp/>
      {/* Main Card Container */}
      <div className="w-full max-w-7xl p-8 sm:w-11/12 sm:h-auto bg-white shadow-xl transform transition duration-500 ease-in-out rounded-lg mx-auto mt-20 mb-10">
        
        {/* Title Section */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 text-center border-b-4 border-gray-500 pb-3">
          Immigration Law
        </h1>

        {/* Introductory Text */}
        <section className="mb-12">
          <p className="text-gray-700 mb-6 leading-relaxed text-lg sm:text-xl">
            Immigration law governs the rules and procedures for individuals seeking to enter, stay, or work in a country. It includes a variety of legal matters such as visas, asylum, deportation, and citizenship. Immigration law ensures that the process is handled in accordance with the country’s rules, protecting both the immigrants and the country's interests.
            <br />
            Immigration law can be complex, involving different legal frameworks depending on the type of visa or status an individual is applying for, the country’s policies, and the purpose of immigration. Understanding these laws is essential for individuals, employers, and legal professionals involved in immigration matters.
          </p>
        </section>

        {/* Types of Immigration Law */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-500 pb-2">
            Types of Immigration Law
          </h2>

          {/* Grid Layout */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {/* Visa Law */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Visa Law</h3>
              <p className="text-gray-700 text-base">
                Visa law governs the issuance of visas for entry into a country. This includes work visas, student visas, tourist visas, and family reunification visas. Each visa type comes with specific requirements and conditions for entry and stay.
              </p>
            </div>

            {/* Asylum Law */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Asylum Law</h3>
              <p className="text-gray-700 text-base">
                Asylum law offers protection to individuals fleeing persecution in their home country. It allows refugees to stay in a new country while their claim for asylum is reviewed. This law includes specific criteria for applying and proving the need for asylum.
              </p>
            </div>

            {/* Deportation Law */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Deportation Law</h3>
              <p className="text-gray-700 text-base">
                Deportation law covers the removal of individuals from a country for violating immigration laws or for reasons such as criminal activity or overstaying a visa. It includes the legal processes and defenses that may be available during deportation proceedings.
              </p>
            </div>

            {/* Citizenship Law */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Citizenship Law</h3>
              <p className="text-gray-700 text-base">
                Citizenship law deals with the rules and processes for acquiring citizenship. This can include naturalization, birthright citizenship, and the legal rights and responsibilities that come with being a citizen of a country.
              </p>
            </div>

            {/* Family Immigration Law */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Family Immigration Law</h3>
              <p className="text-gray-700 text-base">
                Family immigration law allows individuals to bring close family members (such as spouses, children, or parents) into the country. This area of law focuses on the reunification of families and the conditions under which family members can be granted visas or permanent residency.
              </p>
            </div>

            {/* Employment Immigration Law */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Employment Immigration Law</h3>
              <p className="text-gray-700 text-base">
                Employment immigration law governs the entry and work of foreign nationals within a country. It includes work permits, employer sponsorships, and regulations surrounding foreign workers’ rights and protections in the workplace.
              </p>
            </div>

            {/* Immigration Appeals and Litigation */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Immigration Appeals and Litigation</h3>
              <p className="text-gray-700 text-base">
                Immigration appeals and litigation law focuses on challenging immigration decisions or seeking relief from deportation or denial of status. It includes the process of appealing denials or decisions made by immigration authorities in court.
              </p>
            </div>

            {/* Temporary Protected Status (TPS) */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Temporary Protected Status (TPS)</h3>
              <p className="text-gray-700 text-base">
                TPS provides temporary refuge to individuals from countries experiencing crises, such as war or natural disasters. Under TPS, individuals can remain in the country temporarily without fear of deportation.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Remarks */}
        <section>
          <p className="text-gray-700 leading-relaxed text-lg sm:text-xl font-sans">
            Immigration law is a dynamic and evolving field, influenced by political, economic, and social factors. As countries change their policies, it is important for immigrants and those seeking to help them navigate the complexities of immigration law. Understanding these laws helps ensure the fair treatment of immigrants while maintaining the integrity of a country’s borders.
          </p>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default ImmigrationLaw;
