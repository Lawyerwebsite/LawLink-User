import React from "react";
import { CiFacebook } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";
import { FaTwitter } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <div className="bg-white text-black border-t-2 border-slate-400 shadow-inner ">
      <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 p-8 text-center">
        <div>
          <img src={logo} alt="JusticeHub Logo" className="w-32 mb-4  " />
          <h1 className="text-sm font-semibold mb-5 text-start">
            A lawyer with a briefcase <br />
            can steal more than <br /> a thousand with guns
          </h1>
          <div className="flex space-x-4 text-2xl">
            <CiFacebook className="hover:text-black hover:scale-125 transition-transform" />
            <SlSocialInstagram className="hover:text-black hover:scale-125 transition-transform" />
            <FaTwitter className="hover:text-black hover:scale-125 transition-transform" />
            <SiWhatsapp className="hover:text-black hover:scale-125 transition-transform" />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/home" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/lawyer" className="hover:underline">
                Find Lawyer
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:underline">
                Blog
              </Link>
            </li>

            <li>
              <Link to="/contact-us" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Legal Policies</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/terms" className="hover:underline">
                Terms & Services
              </Link>
            </li>
            <li>
              <Link to="/policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p>Contact us directly at:</p>
          <p className="font-semibold cursor-pointer">9876543210</p>
          <p className="font-semibold cursor-pointer">lawlink@gmail.com</p>
        </div>
      </div>

      <div className=" py-4 text-center">
        <h1 className="text-lg font-semibold">© 2024 Law Link</h1>
      </div>
    </div>
  );
};

export default Footer;
