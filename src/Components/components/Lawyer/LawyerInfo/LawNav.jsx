import React from 'react'
import { IoMenu } from 'react-icons/io5';
import { Link, useLocation, useParams } from 'react-router-dom'

const LawNav = () => {
    const location = useLocation();
    const { _id } = useParams();
    const navItem = [
        { name:"Detials", path:`/findlawyer/lawyers/${_id}`},
        { name:"Reviews", path:`/findlawyer/lawyers/${_id}/reviews`},
        { name:"Add Reviews", path: `/findlawyer/lawyers/${_id}/addreviews` },
    ]
  return (
    <nav className={`w-full h-auto shadow-md px-5 py-4 shadow-gray-300 flex flex-row flex-wrap justify-around items-center`}>
       <div className='flex w-full flex-wrap justify-around max-lg:hidden'>
        {navItem.map((item, index) => (
            <Link to={item.path} key={index}>
                <span className={`py-2 font-bold px-2 ${
                    item.path === location.pathname 
                    ? `bg-gradient-to-r from-blue-700 to-blue-400 text-white hover:border-none rounded`
                    : `bg-white text-black`
                } hover:border-b-[3px] transition-all duration-150 border-blue-400 `}>
                    {item.name}
                </span>
            </Link>
        ))}
       </div>
       <IoMenu className='text-2xl cursor-pointer lg:hidden'/>
    </nav>
  )
}

export default LawNav