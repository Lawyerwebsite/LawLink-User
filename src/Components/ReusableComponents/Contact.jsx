import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarComp from "./NavbarComponent";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("http://localhost:7000/api/contact", formData);

      if (response.status === 201) {
        toast.success("Message sent successfully!", {
          position: "top-center",
          autoClose: 3000,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      toast.error("Failed to send your message. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
      });
      console.error("Error submitting the form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavbarComp/>
      <ToastContainer />
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">
              Send Message 
            </h3>
            <p className="text-gray-600">
            For more details about our legal expertise, ongoing projects, or pricing structure, don't hesitate to contact us. We're here to assist you!
            </p>
            <div className="space-y-2">
              <p>
                <span className="font-bold">Address:</span> 77 & 79, Lohmanradhri Towers, 3rd Floor, New No. 75, Pantheon Rd, Egmore, Chennai, Tamil Nadu 600008
              </p>
              <p>
                <span className="font-bold">Mobile Number:</span> 9865321475
              </p>
              <p>
                <span className="font-bold">Email:</span> lawlink@gmail.com
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <iframe
              title="map"
              className="w-full h-64 rounded-lg shadow"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4408228835528!2d80.25644737484319!3d13.071224987253364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526729057d021d%3A0xce0a7a11243b21c5!2sWHY%20tap!5e0!3m2!1sen!2sin!4v1735134801949!5m2!1sen!2sin"
            ></iframe>
          </div>

         
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              We Want To Hear From You
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-gray-600" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-600" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
                  placeholder="Type your message here"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full mt-4 p-2 text-white bg-blue-800 rounded hover:bg-white hover:text-blue-700 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
