import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const FindLawyer = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const categoryFromParams = params.get("category") || "";

  const [lawyers, setLawyers] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] =
    useState(categoryFromParams);

  useEffect(() => {
    const getLawyers = async () => {
      try {
        const response = await axios.get("http://localhost:7000/admin/lawyers/");
        setLawyers(response.data);
      } catch (error) {
        console.error("Error fetching lawyers:", error);
      }
    };

    getLawyers();
  }, []);

  const filteredLawyers = lawyers.filter((lawyer) => {
    const locationMatch =
      !searchLocation ||
      (lawyer.city &&
        lawyer.city.toLowerCase().includes(searchLocation.toLowerCase()));
    const genderMatch =
      !selectedGender || (lawyer.gender && lawyer.gender === selectedGender);
    const specializationMatch =
      !selectedSpecialization ||
      (lawyer.category &&
        lawyer.category.toLowerCase() === selectedSpecialization.toLowerCase());

    return locationMatch && genderMatch && specializationMatch;
  });

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-80 bg-white shadow-2xl p-8  border-gray-400">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Filters</h2>

        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-700 mb-3">
            Search Location
          </label>
          <input
            type="text"
            placeholder="Enter location (e.g., Chennai)"
            className="w-full px-5 py-3 border rounded-lg text-lg"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Gender</h3>
          {["Male", "Female"].map((gender) => (
            <div key={gender} className="flex items-center mb-4">
              <input
                type="radio"
                name="gender"
                id={gender}
                value={gender}
                checked={selectedGender === gender}
                onChange={() => setSelectedGender(gender)}
                className="w-5 h-5 mr-3"
              />
              <label htmlFor={gender} className="text-gray-800 text-lg">
                {gender}
              </label>
            </div>
          ))}
          <button
            onClick={() => setSelectedGender("")}
            className="text-md text-blue-500 hover:underline"
          >
            Clear Gender Filter
          </button>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Specialization
          </h3>
          <select
            className="w-full px-5 py-3 border rounded-lg text-lg"
            value={categoryFromParams.toLowerCase()}
            onChange={(e) => setSelectedSpecialization(e.target.value)}
          >
            <option value="">All Specializations</option>
            <option value="criminal">Criminal Law</option>
            <option value="corporate">Corporate Law</option>
            <option value="family">Family Law</option>
            <option value="banking">Banking Law</option>
            <option value="civil">Civil Law</option>
            <option value="realEstate">Real Estate Law</option>
            <option value="services">Service Law</option>
            <option value="immigration">Immigration Law</option>
          </select>
          <button
            onClick={() => setSelectedSpecialization("")}
            className="mt-3 text-md text-blue-500 hover:underline"
          >
            Clear Specialization Filter
          </button>
        </div>
      </aside>

      <main className="flex-grow p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredLawyers.map((lawyer) => (
            <div
              key={lawyer._id}
              className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <div className="relative p-6">
                <img
                  src={lawyer.img || `http://localhost:7000/upload/${lawyer.fileName}`}
                  alt={lawyer.name}
                  className="w-full h-64 object-fill"
                />
                <div className="absolute top-0 left-5 bg-blue-500 text-white text-lg px-4 py-2 rounded-full shadow">
                  {lawyer.specialization}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 truncate">
                  {lawyer.name}
                </h2>
                <p className="text-gray-600 text-lg mt-3">
                  <strong>Specialization:</strong> {lawyer.category}
                </p>
                <p className="text-gray-600 mt-3">
                  <strong>Location:</strong> {lawyer.city}
                </p>
                <p className="text-gray-600 mt-3">
                  <strong>Qualification:</strong> {lawyer.qualification}
                </p>
                <div className="flex items-center justify-between mt-6">
                  <Link to={`/card/${lawyer._id}`}>
                    <button className="py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-200">
                      View Profile
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredLawyers.length === 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-500 text-lg">
              No lawyers found for the selected filters.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default FindLawyer;
