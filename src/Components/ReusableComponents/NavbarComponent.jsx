import React, { useEffect, useState } from "react";
import HeaderLogo from "../assets/Logo.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";

const NavbarComp = () => {
  const navMenuList = [
    { page: "HOME", path: "/" },
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

  useEffect(() => {
    const user = localStorage.getItem("token");
    setIsUserLoggedIn(!!user)
  },[])

  return (
    // <div className="w-full fixed top-0 z-20  ">
    //   <nav className="max-sm:py-5 max-sm:gap-1  bg-white w-full min-h-14 flex flex-row gap-4 flex-wrap justify-between items-center shadow-sm shadow-black border-b border-black ">
    //     <div className="w-[120px] max-sm:w-[100px] ">
    //       <Link to={"/"}>
    //         <img
    //           src={HeaderLogo}
    //           alt="logo"
    //           className="w-[120px] px-5 h-[60px] max-sm:w-[100px] cursor-pointer"
    //         />
    //       </Link>
    //     </div>
    //     <button
    //       className="block 2xl:hidden xl:hidden max-sm:flex p-2 max-xl:  text-white bg-blue-600 rounded-md focus:outline-none hover:bg-blue-700 md:hidden max-md:mr-3" 
    //       onClick={() => setIsMenuOpen(!isMenuOpen)}
    //     >
    //       {isMenuOpen ? "✖" : "☰"}
    //     </button>
    //     <div className="w-[900px] hidden  font-medium h-full 2xl:flex xl:flex flex-row flex-wrap  justify-center items-center gap-5">
    //       {navMenuList.map((value, index) => (
    //         <Link key={index} to={value.path}>
    //           <span
    //             className={`px-2 py-1.5 ${
    //               value.path === location.pathname
    //                 ? "rounded-md bg-gradient-to-r from-[#058CA6] to-[#0E4257] text-white border-b-[3px] border-b-[#0E4257]"
    //                 : " text-[#0E4257]"
    //             }
    //           text-black font-bold hover:border hover:px-2 hover:py-1.5 hover:border-b-[3px] border-b-[#0E4257] hover:bg-gradient-to-r from-blue-500 to-blue-600 hover:text-white hover:rounded-md `}
    //           >
    //             {value.page}
    //           </span>
    //         </Link>
    //       ))}
    //     </div>
    //     <div className="hidden md:flex space-x-4 p-3">
    //       <Link to={"/profile"}>
    //         <button className="h-10 w-10 text-white  bg-blue-500 rounded-full hover:bg-white hover:text-blue-700 border hover:border-blue-500 ">
    //           <img src={HeaderLogo} className="w-8 flex items-center " alt="" />
    //         </button>
    //       </Link>
    //       <Link to={"/login"}>
    //         <button onClick={handleLogout} className="px-4 py-2 text-blue-600 bg-white rounded hover:bg-blue-600 hover:text-white border border-blue-500">
    //           Logout
    //         </button>
    //       </Link>
    //     </div>

    //     {isMenuOpen && (
    //       <div className="absolute top-20 left-0 w-full bg-blue-400 shadow-lg z-10 2xl:hidden xl:hidden flex flex-col gap-4 p-4">
    //         {navMenuList.map((value, index) => (
    //           <Link
    //             key={index}
    //             to={value.path}
    //             className="px-4 py-2 text-white font-bold rounded hover:bg-blue-600"
    //             onClick={() => setIsMenuOpen(false)}
    //           >
    //             {value.page}
    //           </Link>
    //         ))}
    //         <div className="mt-4 flex flex-col gap-2">
    //           <Link to={"/profile"}>
    //             <button className="w-10 h-10 text-white bg-blue-800 rounded-full hover:bg-white hover:text-blue-700">
                  
    //             </button>
    //           </Link>
    //           <Link to={"/login"}>
    //             <button onClick={handleLogout} className="w-full px-4 py-2 text-blue-600 bg-white rounded hover:bg-blue-600 hover:text-white">
    //               Logout
    //             </button>
    //           </Link>
    //         </div>
    //       </div>
    //     )}
    //   </nav>
    // </div>
    <div className="w-full fixed top-0 z-20 ">
  <nav className="bg-blue-50 w-full min-h-14 flex flex-row flex-wrap justify-between items-center gap-4 shadow-sm border-b border-blue-500">
    {/* Logo Section */}
    <div className="w-[120px] max-sm:w-[100px]">
      <Link to={"/"}>
        <img
          src={HeaderLogo}
          alt="logo"
          className="w-[120px] px-5 h-[60px] max-sm:w-[100px] cursor-pointer"
        />
      </Link>
    </div>

    {/* Hamburger Menu Button */}
    <button
      className="block 2xl:hidden xl:hidden max-sm:flex p-2 text-white bg-blue-600 rounded-md focus:outline-none hover:bg-blue-700"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      {isMenuOpen ? "✖" : "☰"}
    </button>

    {/* Full Navigation Menu */}
    <div className="w-[900px] hidden 2xl:flex xl:flex flex-row flex-wrap justify-center items-center gap-5 font-medium">
      {navMenuList.map((value, index) => (
        <Link key={index} to={value.path}>
          <span
            className={`px-2 py-1.5 ${
              value.path === location.pathname
                ? "rounded-md bg-gradient-to-r from-blue-500 to-blue-700 text-white border-b-[3px] border-b-blue-700"
                : "text-blue-800"
            } hover:border-b-[3px] hover:border-blue-700 hover:bg-gradient-to-r from-blue-500 to-blue-600 hover:text-white hover:rounded-md`}
          >
            {value.page}
          </span>
        </Link>
      ))}
    </div>

    {/* Profile and Logout Section */}
    <div className="hidden md:flex space-x-4 p-3">
      

      {isUserLoggedIn ? (
        <>
        <NavLink to={"/profile"}>
        <IoPersonCircle className="text-gray-700 text-4xl cursor-pointer hover:text-blue-700 transition-all" title="Profile"/>
        </NavLink>
        <button
          onClick={handleLogout}
           className="py-2 font-bold px-2 text-black border-2 border-blue-400 rounded hover:bg-gradient-to-r from-blue-500 to-blue-600 hover:text-white hover:border-white transition-all duration-150"
        >
          Logout
        </button>
        </>
      ) : (
        <NavLink to={"/login"}>
          <span className="py-2 font-bold px-2 text-black border-2 border-blue-400 rounded hover:bg-gradient-to-r from-blue-500 to-blue-600 hover:text-white hover:border-white transition-all duration-150">
                Register / Login
              </span>
           </NavLink>
      )}
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="absolute top-20 left-0 w-full bg-blue-100 shadow-lg z-10 flex flex-col gap-4 p-4">
        {navMenuList.map((value, index) => (
          <Link
            key={index}
            to={value.path}
            className="px-4 py-2 text-blue-800 font-bold rounded hover:bg-blue-600 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            {value.page}
          </Link>
        ))}
        <div className="mt-4 flex flex-col gap-2">
          <Link to={"/profile"}>
            <button className="w-10 h-10 text-white bg-blue-800 rounded-full hover:bg-white hover:text-blue-700">
              <img src={HeaderLogo} alt="Profile" />
            </button>
          </Link>
          <Link to={"/login"}>
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-blue-600 bg-white rounded hover:bg-blue-600 hover:text-white"
            >
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
