import React from "react";
import { CiFacebook } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";
import { FaTwitter } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="px-4 divide-y dark:bg-gray-300 dark:text-gray-800 bg-blue-200">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0 ">
        {/* Logo and Quote Section */}
        <div className="lg:w-1/3">
          <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
              <img src={logo} alt="JusticeHub Logo" className="w-8 h-8" />
            </div>
            <span className="self-center text-2xl font-semibold">Law Link</span>
          </a>
          <h1 className="text-sm font-semibold mt-4">
            A lawyer with a briefcase <br />
            can steal more than <br /> a thousand with guns
          </h1>
          <div className="flex justify-start space-x-4 text-2xl mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-800 hover:scale-125 transition-transform">
              <CiFacebook />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-800 hover:scale-125 transition-transform">
              <SlSocialInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-800 hover:scale-125 transition-transform">
              <FaTwitter />
            </a>
            <a href="#" aria-label="WhatsApp" className="hover:text-blue-800 hover:scale-125 transition-transform">
              <SiWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-900">Quick Links</h3>
            <ul className="space-y-1">
              {[
                { label: "Home", to: "/" },
                { label: "Find Lawyer", to: "/lawyer" },
                { label: "About Us", to: "/about" },
                { label: "Blog", to: "/blog" },
                { label: "Contact Us", to: "/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.to} className="hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Policies Section */}
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-900">Legal Policies</h3>
            <ul className="space-y-1">
              {[
                { label: "Terms & Services", to: "/terms" },
                { label: "Privacy Policy", to: "/policy" },
              ].map((policy, idx) => (
                <li key={idx}>
                  <Link to={policy.to} className="hover:underline">
                    {policy.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-900">Contact Us</h3>
            <p>Contact us directly at:</p>
            <p className="font-semibold cursor-pointer hover:underline">9876543210</p>
            <p className="font-semibold cursor-pointer hover:underline">lawlink@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-6 text-sm text-center dark:text-gray-600">© 2024 Law Link. All rights reserved.</div>
    </footer>
  );
};

export default Footer;