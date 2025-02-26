import React, { Profiler, useEffect, useState } from "react";
import { FaBriefcase, FaCalendarAlt, FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import NavbarComp from "../../ReusableComponents/NavbarComponent";
import axios from "axios";
import LawNav from "./LawyerInfo/LawNav";
import { MdPlace } from "react-icons/md";
import { SiEducative } from "react-icons/si";
import { RiGraduationCapFill } from "react-icons/ri";
// import LawNav from "./LawyerInfo/LawNav";

const LawyerDesktopUI = () => {
   const backendURL= "https://lawyer-backend-production.up.railway.app"
  const { _id } = useParams();
  const casesHandled = 220;
  const rating = 3
  
  const [lawyer, setLawyerInfo] = useState({});

  const getByUpdate = () => {
    const authToken = localStorage.getItem("Token");

    try {
      // await
      axios
        .get(`https://lawyer-backend-production.up.railway.app/admin/lawyerforuser/?_id=${_id}`)
        .then((res) => {
          console.log(res.data);
          setLawyerInfo(res.data.lawyers);
        })
        .catch((err) => {
          console.log(err.response.data.Message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (_id) {
      getByUpdate(_id);
    }
  },[_id]);  

  return (
    <div className="flex flex-col items-center min-h-screen  bg-gray-100 p-6 mt-20">
      <NavbarComp />
      <div className="w-[80%] bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-blue-500 text-white flex   items-center p-6">
          <img
            src={`${backendURL}/upload/${lawyer.fileName}`}
            alt={lawyer.name}
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
          />
          <div className="ml-6">
            <h1 className="text-2xl font-bold">{lawyer.name}</h1>
            <p className="mt-1 text-lg flex items-center">
              <FaBriefcase className="mr-2" /> {lawyer.category}
            </p>
            <p className="mt-1 text-lg flex items-center">
              <RiGraduationCapFill className="mr-2" /> {lawyer.qualification}
            </p>
            <p className="mt-1 text-lg flex items-center">
              <MdPlace className="mr-2" /> {lawyer.workplace}
            </p>
          </div>
        </div>

        {/* Info Section */}
        <div className="p-6">
          <div className="flex justify-around mb-6">
            <div className="text-center">
              <p className="text-xl font-bold text-gray-800">
                {casesHandled}
              </p>
              <p className="text-gray-600">Cases Handled</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-800">
                {lawyer.experience}
              </p>
              <p className="text-gray-600">Experience</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-800">
                <FaStar className="text-yellow-400 inline mr-1" />
                {rating}
              </p>
              <p className="text-gray-600">Rating</p>
            </div>
          </div>
          <p className="text-gray-600 text-center leading-relaxed">
            {lawyer.bio}
          </p>
        </div>

        {/* Booking Section */}
        <div className="p-6 bg-gray-50 flex justify-between">
          <div className="flex gap-5 ">
            {/* <h2 className="text-lg font-semibold text-gray-800 mb-4">Book Appointment</h2> */}

            {/* Date Selection */}
            {/* <div className="mb-4">
            <h3 className="text-gray-700 font-semibold mb-2">
              <FaCalendarAlt className="inline mr-2 text-blue-500" /> Select Date
            </h3>
            <div className="flex justify-between">
              {dates.map((date, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg border ${
                    selectedDate === date
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-800 hover:bg-blue-100"
                  }`}
                  onClick={() => setSelectedDate(date)}
                >
                  {date}
                </button>
              ))}
            </div>
          </div> */}

            {/* Time Selection */}
            {/* <div className="mb-6">
            <h3 className="text-gray-700 font-semibold mb-2">
              <FaCalendarAlt className="inline mr-2 text-blue-500" /> Select Time
            </h3>
            <div className="flex justify-between">
              {times.map((time, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg border ${
                    selectedTime === time
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-800 hover:bg-blue-100"
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div> */}

            {/* Book Appointment Button */}
            {/* <Link to={"/review"}>
          <button  className=" w-44 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition">
            Add Reviews
          </button>
          </Link>
          
          
          <button  className=" w-44 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition">
            Reviews
          </button> */}
          </div>
          <Link to={`/booking/${lawyer._id}`}>
            <button
              className=" py-3 w-52 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
              // onClick={() => alert(`Appointment booked on ${selectedDate} at ${selectedTime}`)}
              // disabled={!selectedDate || !selectedTime}
            >
              Book Appointment
            </button>
          </Link>
        </div>
      </div>
      <div className="w-[80%] mt-5 border">
        <LawNav/>
      </div>
    </div>
  );
};

export default LawyerDesktopUI;
