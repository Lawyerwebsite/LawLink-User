import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import NavbarComp from "../../ReusableComponents/NavbarComponent";
import Footer from "../Footer";
import Booking from "../../assets/Booking.png";
import { useNavigate, useParams } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  number: "",
  address: "",
  date: "",
  time: "",
  discribe: "",
};

const CtaApp = () => {
  const { _id } = useParams();
  const {id} = localStorage.getItem(userId);
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [lawyer, setLawyerInfo] = useState({});
  console.log(lawyer);
  

  const getByUpdate = () => {
    const authToken = localStorage.getItem("Token");

    try {
      // await
      axios
        .get(`http://localhost:7000/admin/lawyerforuser/?_id=${_id}`)
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const paymentData = {
      amount: 499,
      currency: "INR",
      name: formData.name,
      email: formData.email,
      number: formData.number,
      address: formData.address,
      date: formData.date,
      time: formData.time,
      discribe: formData.discribe,
      lawyerName:lawyer.name,
    };

    try {
      // Step 1: Create a payment order
      const orderResponse = await axios.post(
        "http://localhost:7000/payment/create-order",
        paymentData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      if (orderResponse.data.success) {
        const { orderId, paymentOptions } = orderResponse.data;

        
        const options = {
          key: "rzp_test_gCYmeAnNeGnMBl", 
          amount: paymentOptions.amount,
          currency: paymentOptions.currency,
          name: "Appointment Booking",
          description: "Book an appointment with a lawyer",
          order_id: orderId,
          handler: async function (response) {
            const paymentDetails = {
              ...paymentData,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            };

            try {
              const verifyResponse = await axios.post(
                "http://localhost:7000/payment/verify-payment",
                paymentDetails,
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                  },
                }
              );

              if (verifyResponse.data.success) {
                // Step 4: Save appointment details if payment is successful
                const appointmentData = {
                  name: formData.name,
                  email: formData.email,
                  number: formData.number,
                  address: formData.address,
                  date: formData.date,
                  time: formData.time,
                  category: lawyer.category,
                  discribe: formData.discribe,
                  lawyerName:lawyer.name,
                  lawyerId:lawyer._id,
                  paymentStatus: "success",
                };

                await axios.post(
                  "http://localhost:7000/appointment/add",
                  appointmentData,
                  {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                  }
                );

                toast.success("Appointment booked successfully!");
                navigate(`/confirmation/${id}`); 
              } else {
                toast.error("Payment failed. Please try again.");
              }
            } catch (error) {
              console.error("Error in payment verification:", error);
              toast.error("Payment verification failed. Please try again.");
            }
          },
          prefill: {
            name: formData.name,
            email: formData.email,
            number: formData.number,
          },
          theme: {
            primaryColor: "#3399ff",
          },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {
        toast.error("Error creating payment order. Please try again.");
      }
    } catch (error) {
      toast.error("Error occurred while creating payment order.");
      console.log(error);
    }
  };

  return (
    <div>
      <NavbarComp />
      <div className="flex flex-col md:flex-row items-center justify-center mt-16 bg-blue-400 text-white h-full ">
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col items-center justify-center p-10 text-center">
          <h1 className="text-4xl font-bold font-poppins ">
            Book Your Legal Consultation Now!
          </h1>
          <img src={Booking} alt="Booking" />
        </div>

        {/* Right Section (Form) */}
        <div className="bg-white bg-opacity-90 text-gray-800 shadow-lg rounded-lg p-10 mt-10 mb-10 ">
          <h2 className="text-2xl font-bold text-center mb-5">Create an Appointment</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
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
                <label className="block text-gray-700 font-medium">Email</label>
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
                <label className="block text-gray-700 font-medium">Phone No</label>
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
                <label className="block text-gray-700 font-medium">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Your Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Select Time</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  <option value="">Select</option>
                  <option value="8:00 AM">8:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                </select>
              </div>
            </div>
            {/* <div className="mt-4">
              <label className="block text-gray-700 font-medium">Law Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="">Select Category</option>
                <option value="banking">Banking</option>
                <option value="civil">Civil</option>
                <option value="corporate">Corporate</option>
                <option value="criminal">Criminal</option>
                <option value="family">Family</option>
                <option value="immigration">Immigration</option>
                <option value="realestate">Real Estate</option>
                <option value="service">Service</option>
                <option value="others">Others</option>
              </select>
            </div> */}
            <div className="mt-4">
              <label className="block text-gray-700 font-medium">How can we help you?</label>
              <textarea
                name="discribe"
                placeholder="Describe your issue"
                value={formData.discribe}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 focus:outline-none"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CtaApp;

