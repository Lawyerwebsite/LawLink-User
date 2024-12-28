import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios"; // Import Axios for API requests
import { toast } from "react-toastify"; // Import Toast for notifications
import "react-toastify/dist/ReactToastify.css"; // Import Toast styles

const Forgot = () => {
  const [inputData, setInputData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputData.newPassword !== inputData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:7000/user/forgot", {
        email: inputData.email,
        newPassword: inputData.newPassword,
        confirmPassword:inputData.confirmPassword,
      });

      toast.success(response.data.message);
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
        <h2 className="text-white text-2xl font-sans mb-4 text-center">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <IoMailOutline className="text-gray-400 text-2xl" />
              <input
                type="email"
                name="email"
                value={inputData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* New Password Input */}
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <RiLockPasswordLine className="text-gray-400 text-2xl" />
              <input
                type="password"
                name="newPassword"
                value={inputData.newPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your new password"
                required
              />
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <RiLockPasswordLine className="text-gray-400 text-2xl" />
              <input
                type="password"
                name="confirmPassword"
                value={inputData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your new password"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg"
          >
            Reset Password
          </button>

          {/* Back to Login Link */}
          <p className="mt-4 text-center text-white">
            Remember your password?{" "}
            <Link to="/login" className="text-blue-400 hover:underline font-medium">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
