import React from "react";
import NavbarComp from "../../ReusableComponents/NavbarComponent";
import Footer from "../Footer";

const CriminalLaw = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center bg-gray-50 p-0">
      <NavbarComp/>
      {/* Main Card Container */}
      <div className="w-full max-w-7xl p-8 sm:w-11/12 sm:h-auto bg-white shadow-xl transform transition duration-500 ease-in-out rounded-lg mx-auto mt-20 mb-10">
        
        {/* Title Section */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 text-center border-b-4 border-gray-500 pb-3">
          Criminal Law
        </h1>

        {/* Introductory Text */}
        <section className="mb-12">
          <p className="text-gray-700 mb-6 leading-relaxed text-lg sm:text-xl">
            Criminal law involves the system of laws concerned with the punishment of individuals who commit crimes. It is designed to protect society by defining criminal behavior, specifying punishments, and ensuring that justice is served. Criminal law covers various categories of crimes, from minor offenses to serious felonies, and provides a framework for prosecution and defense.
            <br />
            The criminal justice system includes law enforcement agencies, courts, and correctional institutions, and is based on principles such as due process, the presumption of innocence, and the right to a fair trial.
          </p>
        </section>

        {/* Types of Criminal Law */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-500 pb-2">
            Types of Criminal Law
          </h2>

          {/* Grid Layout */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {/* White Collar Crime */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">White Collar Crime</h3>
              <p className="text-gray-700 text-base">
                White collar crimes involve non-violent offenses, typically committed by individuals in positions of trust, such as fraud, embezzlement, bribery, and insider trading.
              </p>
            </div>

            {/* Violent Crime */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Violent Crime</h3>
              <p className="text-gray-700 text-base">
                Violent crimes involve harm or the threat of harm to individuals, such as assault, murder, robbery, and domestic violence.
              </p>
            </div>

            {/* Drug Offenses */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Drug Offenses</h3>
              <p className="text-gray-700 text-base">
                Drug offenses include crimes related to the possession, distribution, manufacturing, and trafficking of illegal drugs.
              </p>
            </div>

            {/* Property Crime */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Property Crime</h3>
              <p className="text-gray-700 text-base">
                Property crimes involve the unlawful taking or damaging of property, such as burglary, theft, vandalism, and arson.
              </p>
            </div>

            {/* Juvenile Crime */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Juvenile Crime</h3>
              <p className="text-gray-700 text-base">
                Juvenile crime refers to criminal acts committed by individuals under the age of 18, including offenses like theft, assault, and vandalism, often dealt with through specialized juvenile courts.
              </p>
            </div>

            {/* Cybercrime */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Cybercrime</h3>
              <p className="text-gray-700 text-base">
                Cybercrime involves criminal activities that use computers or networks as a means to commit crimes, including hacking, identity theft, and online fraud.
              </p>
            </div>

            {/* Sex Crimes */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Sex Crimes</h3>
              <p className="text-gray-700 text-base">
                Sex crimes involve offenses such as sexual assault, rape, child exploitation, and indecent exposure.
              </p>
            </div>

            {/* Hate Crimes */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Hate Crimes</h3>
              <p className="text-gray-700 text-base">
                Hate crimes are criminal acts motivated by prejudice or hatred against individuals or groups based on race, religion, ethnicity, gender, or sexual orientation.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Remarks */}
        <section>
          <p className="text-gray-700 leading-relaxed text-lg sm:text-xl">
            Criminal law is essential for maintaining law and order in society, ensuring justice for victims, and holding offenders accountable. The legal processes are designed to ensure a fair trial and protect the rights of the accused while also providing justice to the victims of crime.
          </p>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default CriminalLaw;
