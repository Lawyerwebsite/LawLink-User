import React from 'react';
import { IoMdHome } from "react-icons/io";


const AboutNav = () => {
  return (
    <div>
       <div className='flex h-20 w-full bg-gray-700 text-white justify-between items-center '>
        <h1 className='font-bold text-3xl ml-5 '>About Us</h1>
        <IoMdHome className='text-3xl mr-5' />
        </div>
    </div>
  )
}

export default AboutNav;
