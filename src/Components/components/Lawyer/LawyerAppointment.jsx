import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Mock data for lawyers
const mockLawyers = [
  {
    id: 1,
    name: "Pavan Kalyan",
    gender: "Male",
    location: "Chennai",
    specialization: "Criminal Law",
    img: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Kavari",
    gender: "Female",
    location: "Madurai",
    specialization: "Corporate Law",
    img: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Sriganesh",
    gender: "Male",
    location: "Kanchipuram",
    specialization: "Family Law",
    img: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    name: "Priya",
    gender: "Female",
    location: "Coonoor",
    specialization: "Intellectual Property",
    img: "https://via.placeholder.com/300",
  },
];

const FindLawyer = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const categoryFromParams = params.get("category") || "";

  const [lawyers, setLawyers] = useState(mockLawyers);
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] =
    useState(categoryFromParams);

  const getLawyers = async () => {
    try {
      const response = await axios.get("http://localhost:7000/admin/lawyers/");
      setLawyers(response.data);
    } catch (error) {
      console.error("Error fetching lawyers:", error);
    }
  };

  useEffect(() => {
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
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Filters</h2>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Search Location
          </label>
          <input
            type="text"
            placeholder="Enter location (e.g., Chennai)"
            className="w-full px-4 py-2 border rounded-lg"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-gray-700 mb-2">Gender</h3>
          {["Male", "Female"].map((gender) => (
            <div key={gender} className="flex items-center mb-2">
              <input
                type="radio"
                name="gender"
                id={gender}
                value={gender}
                checked={selectedGender === gender}
                onChange={() => setSelectedGender(gender)}
                className="mr-2"
              />
              <label htmlFor={gender} className="text-gray-800">
                {gender}
              </label>
            </div>
          ))}
          <button
            onClick={() => setSelectedGender("")}
            className="text-sm text-blue-500 hover:underline"
          >
            Clear Gender Filter
          </button>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Specialization</h3>
          <select
            className="w-full px-4 py-2 border rounded-lg"
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
            className="mt-2 text-sm text-blue-500 hover:underline"
          >
            Clear Specialization Filter
          </button>
        </div>
      </aside>

      <main className="flex-grow p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredLawyers.map((lawyer) => (
            <div
              key={lawyer._id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <div className="relative p-6 ">
                <img
                  src={
                    lawyer.img ||
                    `http://localhost:7000/upload/${lawyer.fileName}`
                  }
                  alt={lawyer.name}
                  className="w-full h-56 "
                />
                <div className="absolute top-2 left-2 bg-blue-500 text-white text-sm px-3 py-1 rounded-full shadow">
                  {lawyer.specialization}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 truncate">
                  {lawyer.name}
                </h2>
                <p className="text-gray-600 text-lg">
                  <strong>Specialization:</strong> {lawyer.category}
                </p>
                <p className="text-gray-600 mt-2">
                  <span className="font-semibold">Location:</span> {lawyer.city}
                </p>
                <p className="text-gray-600 mt-1">
                  <span className="font-semibold">Qualification:</span>{" "}
                  {lawyer.qualification}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <Link to={`/card/${lawyer._id}`}>
                    <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-200">
                      View Profile
                    </button>
                  </Link>
                  {/* <Link to={"/booking"}>
                    <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-200">
                      Book Appointment
                    </button>
                  </Link> */}
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
