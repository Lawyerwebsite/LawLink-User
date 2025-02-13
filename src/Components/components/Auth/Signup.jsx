import axios from "axios";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  mobile: "",
  password: "",
  confirmPassword: "",
};

export const Signup = () => {
  const [inputdata, setInputdata] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputdata((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Password confirmation check
    if (inputdata.password !== inputdata.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const res = await axios.post("http://localhost:7000/user/signup", inputdata);
      toast.success(res.data.message);
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/026/774/206/non_2x/handbook-and-judge-s-gavel-on-the-wooden-table-free-photo.jpeg')",
      }}
    >
      <div className="bg-black bg-opacity-50 rounded-lg p-6 shadow-lg max-w-sm w-full">
        <h2 className="text-white text-2xl font-sans mb-4 text-center">Register</h2>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-6 relative">
            
            <div className="flex items-center">
              <FaRegUser className="text-gray-400 absolute ml-3" />
              <input
                type="text"
                id="name"
                name="name"
                value={inputdata.name}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-6 relative">
            
            <div className="flex items-center">
              <IoMailOutline className="text-gray-400 absolute ml-3" />
              <input
                type="email"
                id="email"
                name="email"
                value={inputdata.email}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Mobile Field */}
          <div className="mb-6 relative">

            <div className="flex items-center">
              <MdOutlinePhone className="text-gray-400 absolute ml-3" />
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={inputdata.mobile}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your mobile number"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6">
            
            <input
              type="password"
              id="password"
              name="password"
              value={inputdata.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6">
            
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={inputdata.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-shadow shadow-md"
          >
            Sign Up
          </button>

          {/* Login Redirect */}
          <p className="mt-4 text-center text-white">
            Already have an account?{" "}
            <a href="/login" className="text-blue-400 hover:underline font-medium">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
