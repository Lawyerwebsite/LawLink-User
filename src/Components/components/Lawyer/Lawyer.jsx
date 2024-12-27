import React, { useEffect, useState } from "react";
import Button from "../../ReusableComponents/Button";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

const Lawyer = () => {
  const [lawyers, setLawyers] = useState([]);

  const getLawyers = async () => {
    try {
      await axios
        .get("http://localhost:7000/admin/lawyers/")
        .then((res) => {
          setLawyers(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLawyers();
  }, []);

  const CardStyle = ({ title, img, content, path }) => {
    return (
      <div className="relative border p-4 rounded-lg h-50 flex flex-col justify-between gap-4 shadow-md shadow-gray-300">
        <div className="font-bold text-xl text-blue-600 text-center">
          {title}
        </div>
        <img
          src={`http://localhost:7000/upload/${img}`}
          alt={title}
          className="w-full h-80 transition-transform duration-200 hover:translate-z-10 hover:scale-105 hover:z-10"
        />
        <p className="font-bold text-lg text-center">{content}</p>
        <Link to={path} className="text-center">
          <Button btnName={"View More"} />
        </Link>
      </div>
    );
  };

  return (
    <div className="">
      <Outlet />
      <p className="text-3xl font-bold mb-4 text-center mt-10 ">
        Choose Our Expert
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 m-8">
        {lawyers.map((value) => (
          <CardStyle
            key={value.id}
            title={value.title}
            img={value.fileName}
            content={value.content}
            path={value.path}
          />
        ))}
      </div>
      <Link to={"/lawyer"} className="w-full flex justify-center mt-10">
        <Button btnName={"View More"} />
      </Link>
      <hr className="border-gray-400 w-full  my-4" />
    </div>
  );
};

export default Lawyer;
