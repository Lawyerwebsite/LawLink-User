import React, { useEffect, useState } from "react";
import HeaderLogo from "../assets/Logo.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";

const NavbarComp = () => {
  const navMenuList = [
    { page: "HOME", path: "/home" },
    { page: "LAWYER", path: "/lawyer" },
    { page: "ABOUT", path: "/about" },
    { page: "BLOG", path: "/blog" },
    { page: "CONTACT", path: "/contact" },
  ];
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsUserLoggedIn(false);
    navigate("/");
  };
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const userId = localStorage.getItem("userId");
  console.log(userId);
  
  useEffect(() => {
    const user = localStorage.getItem("token");
    setIsUserLoggedIn(!!user);
  }, []);

  return (
    <div className="w-full fixed top-0 z-20 bg-white shadow-md">
      <nav className=" w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo Section */}
        <div className="">
          <Link to={"/"}>
            <img
              src={HeaderLogo}
              alt="logo"
              className="h-12 w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden p-2 text-blue-600 hover:text-blue-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Full Navigation Menu */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          {navMenuList.map((value, index) => (
            <NavLink
              key={index}
              to={value.path}
              className={`px-3 py-2 rounded-md text-base font-bold ${
                value.path === location.pathname
                  ? "bg-blue-600 text-white"
                  : "text-blue-600 hover:bg-blue-100"
              }`}
            >
              {value.page}
            </NavLink>
          ))}
        </div>

        {/* Profile and Logout Section */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          {isUserLoggedIn ? (
            <>
              <NavLink to={"/profile"}>
                <IoPersonCircle className="text-blue-600 text-3xl cursor-pointer hover:text-blue-700" title="Profile" />
              </NavLink>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink to={"/login"}>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                Register / Login
              </button>
            </NavLink>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navMenuList.map((value, index) => (
                <NavLink
                  key={index}
                  to={value.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    value.path === location.pathname
                      ? "bg-blue-600 text-white"
                      : "text-blue-600 hover:bg-blue-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {value.page}
                </NavLink>
              ))}
            </div>
            <div className="px-2 pt-2 pb-4 border-t border-gray-200">
              {isUserLoggedIn ? (
                <>
                  <NavLink to={"/profile"}>
                    <button className="w-full px-3 py-2 text-left text-blue-600 hover:bg-blue-100 rounded-md">
                      Profile
                    </button>
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="w-full px-3 py-2 text-left text-blue-600 hover:bg-blue-100 rounded-md"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <NavLink to={"/login"}>
                  <button className="w-full px-3 py-2 text-left text-blue-600 hover:bg-blue-100 rounded-md">
                    Register / Login
                  </button>
                </NavLink>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavbarComp;