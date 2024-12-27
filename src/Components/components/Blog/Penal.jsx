import React from 'react';
import NavbarComp from '../../ReusableComponents/NavbarComponent';
import Footer from '../Footer';

const Penal = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <NavbarComp/>
      {/* Container */}
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 mb-10">
        {/* Image Section */}
        <div className="h-90 bg-gray-200">
          <img
            src="https://gsbagga.com/wp-content/uploads/2015/06/family-courts.jpg"
            alt="Section 498A IPC"
            className="w-full h-80"
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* First Heading */}
          <h4 className="text-2xl font-bold text-gray-800 mb-4">
            Can a complaint under S. 498A Indian Penal Code be made after a decree of divorce has been obtained?
          </h4>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The answer to this is simply <span className="font-semibold">NO</span>. When a complainant approaches with a case under S.498A long after the divorce has been granted by a court of law, S.498A will not be attracted.
            <br />
            <br />
            Where the complainant approaches with a case that there has been a divorce long back i.e., years ago before filing of the FIR, section 498A of IPC in terms would not be attracted.
            <br />
            <br />
            Prosecution under section 498A of the Indian Penal Code and sections 3 and 4 of the Dowry Prohibition Act, 1961, will not be maintainable when the complaint is lodged long after the divorce has been granted.
          </p>

          {/* Second Heading */}
          <h4 className="text-2xl font-bold text-gray-800 mb-4">
            Why are complaints not maintainable if filed after a decree of divorce?
          </h4>
          <p className="text-gray-700 text-lg leading-relaxed">
            1. <span className="font-semibold">Time Limitations:</span> There are specific time periods for filing cases, depending on their nature.
            <br />
            <br />
            2. <span className="font-semibold">Preventing Misuse:</span> Allowing delayed complaints might lead to misuse of the law, causing unnecessary harassment to ex-partners.
            <br />
            <br />
            3. <span className="font-semibold">Practicality:</span> Waiting years to file a complaint undermines its credibility. It is advisable to consult a lawyer promptly and file a police complaint instead of delaying.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Penal;
