import axios from "axios";
import React, { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  email: "",
  password: "",
};

const Signin = () => {
  const [inputData, setInputData] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:7000/user/signin", inputData);
      toast.success(response.data.message);
      localStorage.setItem("token", response.data.token)
      console.log("Token:", response.data.token); 
      setInputData(initialState);
      navigate("/");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
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
        <h2 className="text-white text-2xl font-sans mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <IoMailOutline className="text-gray-400 text-2xl" />
              <input
                type="text"
                name="email"
                value={inputData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <RiLockPasswordLine className="text-gray-400 text-2xl" />
              <input
                type="password"
                name="password"
                value={inputData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <div className="text-end m-2">
          <Link to="/forgotpassword" className="text-blue-400 hover:underline  font-medium">
              Forgot password
            </Link></div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg"
          >
            Login
          </button>

          {/* Register Link */}
          <p className="mt-4 text-center text-white">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-400 hover:underline font-medium">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
