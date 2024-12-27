import React from "react";
import NavbarComp from "../../ReusableComponents/NavbarComponent";
import Footer from "../Footer";

const Family = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center bg-gray-50 p-0">
      <NavbarComp/>
      {/* Main Card Container */}
      <div className="w-full max-w-7xl p-8 sm:w-11/12 sm:h-auto bg-white shadow-xl transform transition duration-500 ease-in-out rounded-lg mx-auto mt-20 mb-10">
        
        {/* Title Section */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 text-center border-b-4 border-gray-500 pb-3">
          Family Law
        </h1>

        {/* Introductory Text */}
        <section className="mb-12">
          <p className="text-gray-700 mb-6 leading-relaxed text-lg sm:text-xl">
            Family law is a branch of law that deals with matters related to family relationships, such as marriage, divorce, child custody, adoption, domestic violence, and other related issues. It is a dynamic and sensitive area of legal practice that directly impacts the lives of individuals and families.
            <br />
            Family law is influenced by various factors, including societal norms, cultural expectations, and changing legal precedents. The legal landscape of family law may vary from country to country or state to state, with each jurisdiction having its own rules and procedures governing family-related issues.
          </p>
        </section>

        {/* Types of Family Law */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-500 pb-2">
            Types of Family Law
          </h2>

          {/* Grid Layout */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {/* Divorce Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Divorce</h3>
              <p className="text-gray-700 text-base">
                Divorce law deals with the legal dissolution of a marriage. It addresses how property and assets are divided, whether spousal support (alimony) is required, and how child custody and child support will be arranged.
              </p>
            </div>

            {/* Child Custody and Support Law */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Child Custody & Support</h3>
              <p className="text-gray-700 text-base">
                Child custody law determines which parent will be responsible for a child’s care after separation or divorce. Support law governs the non-custodial parent’s financial contribution to the child's upbringing.
              </p>
            </div>

            {/* Adoption Law */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Adoption</h3>
              <p className="text-gray-700 text-base">
                Adoption law governs the process by which a person or couple becomes the legal parent(s) of a child who is not their biological offspring.
              </p>
            </div>

            {/* Domestic Violence Law */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Domestic Violence</h3>
              <p className="text-gray-700 text-base">
                Domestic violence law provides legal protection for victims of abuse within intimate relationships, including physical, emotional, sexual, or financial abuse.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Remarks */}
        <section>
          <p className="text-gray-700 leading-relaxed text-lg sm:text-xl">
            Family laws are continually evolving, with international trends aiming to harmonize standards, especially in areas like adoption, child protection, and same-sex marriage rights.
          </p>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Family;
