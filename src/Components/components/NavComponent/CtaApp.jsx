import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  number: "",
  address: "",
  date: "",
  time: "",
  category: "",
  discribe: "",
};
const CtaApp = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:7000/appointment/add", formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      toast.success("Appointment Added Successfully");
      setFormData(initialState);
    } catch (error) {
      toast.error("Error Occured");
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-5 mt-28">
        <form
          className="bg-white shadow-lg w-[60%] rounded-lg p-10 gap-3 border"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label htmlFor="number" className="block text-gray-700 font-medium">
              Phone No
            </label>
            <input
              type="tel"
              name="number"
              placeholder="Enter Your Number"
              value={formData.number}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-gray-700 font-medium"
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Enter Your Current Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-gray-700 font-medium">
              Date
            </label>
            <input
              type="date"
              name="date"
              placeholder="Select Date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-gray-700 font-medium">
              Select Time
            </label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
              required
            >
              <option value="">Select</option>
              <option value="8:00 AM">8:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Law Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 mt-2"
              required
            >
              <option value="">Select the Law Category</option>
              <option value="banking">Banking</option>
              <option value="civil">Civil</option>
              <option value="corporate">Corporate</option>
              <option value="criminal">Criminal</option>
              <option value="family">Family</option>
              <option value="immigration">Immigration</option>
              <option value="Realestate">Real Estate</option>
              <option value="service">Service</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="discribe"
              className="block text-gray-700 font-medium"
            >
              How can we help you
            </label>
            <textarea
              name="discribe"
              placeholder="Describe your issue"
              value={formData.discribe}
              onChange={handleChange}
              rows="4"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 px-3 py-3 w-full text-white text-xl rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CtaApp;
