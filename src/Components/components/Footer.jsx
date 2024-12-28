import React from "react";
import { CiFacebook } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";
import { FaTwitter } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    // <div className="bg-white text-black border-t-2 border-slate-400 shadow-inner ">
    //   <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 p-8 text-center">
    //     <div>
    //       <img src={logo} alt="JusticeHub Logo" className="w-32 mb-4  " />
    //       <h1 className="text-sm font-semibold mb-5 text-start">
    //         A lawyer with a briefcase <br />
    //         can steal more than <br /> a thousand with guns
    //       </h1>
    //       <div className="flex space-x-4 text-2xl">
    //         <CiFacebook className="hover:text-black hover:scale-125 transition-transform" />
    //         <SlSocialInstagram className="hover:text-black hover:scale-125 transition-transform" />
    //         <FaTwitter className="hover:text-black hover:scale-125 transition-transform" />
    //         <SiWhatsapp className="hover:text-black hover:scale-125 transition-transform" />
    //       </div>
    //     </div>

    //     <div>
    //       <h2 className="text-xl font-bold mb-4">Quick Links</h2>
    //       <ul className="space-y-2">
    //         <li>
    //           <Link to="/" className="hover:underline">
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/lawyer" className="hover:underline">
    //             Find Lawyer
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/about" className="hover:underline">
    //             About Us
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/blog" className="hover:underline">
    //             Blog
    //           </Link>
    //         </li>

    //         <li>
    //           <Link to="/contact" className="hover:underline">
    //             Contact Us
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>

    //     <div>
    //       <h2 className="text-xl font-bold mb-4">Legal Policies</h2>
    //       <ul className="space-y-2">
    //         <li>
    //           <Link to="/terms" className="hover:underline">
    //             Terms & Services
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/policy" className="hover:underline">
    //             Privacy Policy
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>

    //     <div>
    //       <h2 className="text-xl font-bold mb-4">Contact Us</h2>
    //       <p>Contact us directly at:</p>
    //       <p className="font-semibold cursor-pointer">9876543210</p>
    //       <p className="font-semibold cursor-pointer">lawlink@gmail.com</p>
    //     </div>
    //   </div>

    //   <div className=" py-4 text-center">
    //     <h1 className="text-lg font-semibold">© 2024 Law Link</h1>
    //   </div>
    // </div>
    <div className="bg-blue-50 text-blue-900 border-t-4 border-blue-500 shadow-inner">
  {/* Grid Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8 text-center">
    {/* Logo and Quote Section */}
    <div>
      <img src={logo} alt="JusticeHub Logo" className="w-32 mb-4 mx-auto" />
      <h1 className="text-sm font-semibold mb-5 text-start">
        A lawyer with a briefcase <br />
        can steal more than <br /> a thousand with guns
      </h1>
      <div className="flex justify-center space-x-4 text-2xl text-blue-600">
        <a
          href="#"
          aria-label="Facebook"
          className="hover:text-blue-800 hover:scale-125 transition-transform"
        >
          <CiFacebook />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="hover:text-blue-800 hover:scale-125 transition-transform"
        >
          <SlSocialInstagram />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="hover:text-blue-800 hover:scale-125 transition-transform"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          aria-label="WhatsApp"
          className="hover:text-blue-800 hover:scale-125 transition-transform"
        >
          <SiWhatsapp />
        </a>
      </div>
    </div>

    {/* Quick Links Section */}
    <div>
      <h2 className="text-xl font-bold mb-4 text-blue-700">Quick Links</h2>
      <ul className="space-y-2">
        {[
          { label: "Home", to: "/" },
          { label: "Find Lawyer", to: "/lawyer" },
          { label: "About Us", to: "/about" },
          { label: "Blog", to: "/blog" },
          { label: "Contact Us", to: "/contact" },
        ].map((link, idx) => (
          <li key={idx}>
            <Link to={link.to} className="hover:underline hover:text-blue-800">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Legal Policies Section */}
    <div>
      <h2 className="text-xl font-bold mb-4 text-blue-700">Legal Policies</h2>
      <ul className="space-y-2">
        {[
          { label: "Terms & Services", to: "/terms" },
          { label: "Privacy Policy", to: "/policy" },
        ].map((policy, idx) => (
          <li key={idx}>
            <Link to={policy.to} className="hover:underline hover:text-blue-800">
              {policy.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Contact Us Section */}
    <div>
      <h2 className="text-xl font-bold mb-4 text-blue-700">Contact Us</h2>
      <p>Contact us directly at:</p>
      <p className="font-semibold cursor-pointer hover:underline hover:text-blue-800">
        9876543210
      </p>
      <p className="font-semibold cursor-pointer hover:underline hover:text-blue-800">
        lawlink@gmail.com
      </p>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="py-4 text-center border-t border-blue-300">
    <h1 className="text-lg font-semibold text-blue-700">© 2024 Law Link</h1>
  </div>
</div>

  );
};

export default Footer;
