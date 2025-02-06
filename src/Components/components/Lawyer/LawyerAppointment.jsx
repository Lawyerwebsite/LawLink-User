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
  const [selectedSpecialization, setSelectedSpecialization] = useState(
    categoryFromParams
  );
  const [isFiltersOpen, setIsFiltersOpen] = useState(false); // Hidden by default on mobile

  // Fetch lawyers from the backend
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

  // Filter lawyers based on search criteria
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
    <div className="flex flex-col  bg-gray-50">
      {/* <div className="w-full h-[60vh] bg-[url('https://img.freepik.com/free-photo/photorealistic-lawyer-environment_23-2151152218.jpg?t=st=1738579296~exp=1738582896~hmac=5c3c4616e0f760ffe2068f983689704749b8a46bdf19e7b4016a64b4cb6dbfa3&w=996')] bg-no-repeat bg-cover bg-center"></div> */}
      {/* Collapsible Filters Sidebar */}
      <aside
        className={`w-64 bg-white shadow-lg p-6 transition-transform duration-300 fixed h-screen z-40 ${
          isFiltersOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0`} // Always visible on desktop, hidden on mobile by default
      >
        {/* Toggle Button (Visible only on mobile) */}
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="absolute top-4 -right-5 bg-black opacity-20 text-white p-1 rounded-full shadow-lg z-50 md:hidden" // Hidden on desktop
        >
          {isFiltersOpen ? "✕" : "☰"}
        </button>

        <h2 className="text-xl font-bold text-gray-800 mb-6">Filters</h2>

        {/* Search Location Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search Location
          </label>
          <input
            type="text"
            placeholder="Enter location (e.g., Chennai)"
            className="w-full px-3 py-2 border rounded-md text-sm"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
        </div>

        {/* Gender Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Gender</h3>
          {["Male", "Female"].map((gender) => (
            <div key={gender} className="flex items-center mb-2">
              <input
                type="radio"
                name="gender"
                id={gender}
                value={gender}
                checked={selectedGender === gender}
                onChange={() => setSelectedGender(gender)}
                className="w-4 h-4 mr-2"
              />
              <label htmlFor={gender} className="text-sm text-gray-800">
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

        {/* Specialization Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Specialization
          </h3>
          <select
            className="w-full px-3 py-2 border rounded-md text-sm"
            value={selectedSpecialization}
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

        {/* Clear All Filters Button */}
        <button
          onClick={() => {
            setSearchLocation("");
            setSelectedGender("");
            setSelectedSpecialization("");
          }}
          className="mt-4 w-full py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-200"
        >
          Clear All Filters
        </button>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-grow p-6 transition-all duration-300 ${
          isFiltersOpen ? "ml-64" : "ml-0"
        } md:ml-64`} // Adjusted margin for desktop
        style={{ overflowY: "auto", height: "calc(100vh - 64px)" }} // Scrollable main content
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredLawyers.map((lawyer) => (
            <div
              key={lawyer._id}
              className="bg-white shadow-sm rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-md transition duration-300 ease-in-out"
            >
              <div className="relative">
                <img
                  src={
                    lawyer.img || `http://localhost:7000/upload/${lawyer.fileName}`
                  }
                  alt={lawyer.name}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = "path/to/fallback/image.jpg"; // Fallback image
                  }}
                />
                <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {lawyer.name}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Specialization:</strong> {lawyer.category}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Location:</strong> {lawyer.city}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Qualification:</strong> {lawyer.qualification}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>EnrollmentNumber:</strong> {lawyer.enrollmentnumber}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <Link to={`/card/${lawyer._id}`}>
                    <button className="py-2 px-4 bg-blue-500 text-white text-sm font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-200">
                      View Profile
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Lawyers Found Message */}
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