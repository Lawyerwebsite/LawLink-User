import React from 'react';

const RecentBlogs = () => {
  return (
    <div>
    <div className="relative w-full h-64">
        <img 
          src="https://www.livelaw.in/h-upload/2019/04/29/1500x900_360398-mushrooming-of-law-colleges-madras-high-court.jpg" 
          alt="Madras High Court" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-xl text-center px-4">
          Birthplace of organised legal reporting in India.
          </h1>
        </div>
      </div>

    <div className="w-full max-w-7xl p-8 mt-20 mb-8 sm:w-11/12 sm:h-auto bg-white shadow-xl rounded-lg mx-auto ">
      
      <div className="p-6">
        <h2 className="font-bold text-2xl mb-4 text-center">
        In a significant decision the Hon’ble Madras High Court has held that registration of marriage under the Christian Marriage Act, 1872 is not mandatory
        </h2>
        <p className="text-gray-700 mb-4">
        Decisions of the High Court are binding on subordinate courts, authorities and tribunals situated within its jurisdictional territory.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>'Scandalises' the court</li>
          <li>Prejudices any judicial proceeding</li>
          <li>Interferes with the administration of justice in any other manner</li>
        </ul>
        <p className="text-gray-700 mb-4">
          A High Court shall have jurisdiction to inquire into or try a contempt of itself or of any court subordinate to it, 
          whether the contempt is alleged to have been committed within or outside the local limits of its jurisdiction, and whether 
          the person alleged to be guilty of contempt is within or outside such limits.
        </p> <br/>
        <p className="text-gray-700">
          The power of review may be exercised on the discovery of new and important matter or evidence which, after due diligence, was not 
          within the knowledge of the person seeking the review or could not be produced by them at the time the order was made.
        </p> <br/>
        <p className="text-gray-700">
        The Supreme Court bench of Justices Sanjiv Khanna and Dipankar Datta has interpreted Section 20 of the Contempt of Courts Act, 1971, 
        and held that the action for contempt should be brought within a year, and not beyond, from the date on which the contempt is alleged 
        to have been committed
        </p> <br/>
        <p className="text-gray-700">
        The law of contempt is designed to maintain the integrity and sanctity of the judicial system and to ensure that the court's orders 
        and judgments are respected and followed.
        </p>
      </div>
    </div>
    </div>
  );
};

export default RecentBlogs;

