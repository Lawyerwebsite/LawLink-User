import React from "react";
// import { Link } from 'react-router-dom';

const Button = ({ btnName }) => {
  return (
    <button className="py-2 px-2 rounded border-2 border-black hover:bg-blue-600 hover:text-white hover:border-none">
      {btnName}
    </button>
  );
};

export default Button;
