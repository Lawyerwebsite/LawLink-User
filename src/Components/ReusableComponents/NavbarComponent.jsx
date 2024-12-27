import React, { useState } from "react";
import HeaderLogo from "../assets/Logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavbarComp = () => {
  const navMenuList = [
    { page: "HOME", path: "/" },
    { page: "LAWYER", path: "/lawyer" },
    // { page: "ABOUT", path: "/about" },
    // { page: "BLOG", path: "/blog" },
    // { page: "CONTACT", path: "/contact" },
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

  return (
    <div className="w-full fixed top-0 z-20  ">
      <nav className="max-sm:py-5 max-sm:gap-1  bg-white w-full min-h-14 flex flex-row gap-4 flex-wrap justify-between items-center shadow-sm shadow-black">
        <div className="w-[120px] max-sm:w-[100px] ">
          <Link to={"/"}>
            <img
              src={HeaderLogo}
              alt="logo"
              className="w-[120px] px-5 h-[60px] max-sm:w-[100px] cursor-pointer"
            />
          </Link>
        </div>
        <button
          className="block 2xl:hidden xl:hidden max-sm:flex p-2 max-xl:  text-white bg-blue-600 rounded-md focus:outline-none hover:bg-blue-700
        "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
        <div className="w-[900px] hidden  font-medium h-full 2xl:flex xl:flex flex-row flex-wrap  justify-center items-center gap-5">
          {navMenuList.map((value, index) => (
            <Link key={index} to={value.path}>
              <span
                className={`px-2 py-1.5 ${
                  value.path === location.pathname
                    ? "rounded-md bg-gradient-to-r from-[#058CA6] to-[#0E4257] text-white border-b-[3px] border-b-[#0E4257]"
                    : " text-[#0E4257]"
                }
              text-black font-bold hover:border hover:px-2 hover:py-1.5 hover:border-b-[3px] border-b-[#0E4257] hover:bg-gradient-to-r from-blue-500 to-blue-600 hover:text-white hover:rounded-md `}
              >
                {value.page}
              </span>
            </Link>
          ))}
        </div>
        <div className="hidden md:flex space-x-4 p-3">
          <Link to={"/cta"}>
            <button className="h-10 w-10 text-white  bg-blue-500 rounded-full hover:bg-white hover:text-blue-700 border hover:border-blue-500 ">
              <img src={HeaderLogo} className="w-8 flex items-center " alt="" />
            </button>
          </Link>
          <Link to={"/signin"}>
            <button onClick={handleLogout} className="px-4 py-2 text-blue-600 bg-white rounded hover:bg-blue-600 hover:text-white border border-blue-500">
              Logout
            </button>
          </Link>
        </div>

        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-blue-400 shadow-lg z-10 2xl:hidden xl:hidden flex flex-col gap-4 p-4">
            {navMenuList.map((value, index) => (
              <Link
                key={index}
                to={value.path}
                className="px-4 py-2 text-white font-bold rounded hover:bg-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {value.page}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Link to={"/cta"}>
                <button className="w-10 h-10 text-white bg-blue-800 rounded-full hover:bg-white hover:text-blue-700">
                  
                </button>
              </Link>
              <Link to={"/"}>
                <button onClick={handleLogout} className="w-full px-4 py-2 text-blue-600 bg-white rounded hover:bg-blue-600 hover:text-white">
                  Logout
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
export default NavbarComp;
