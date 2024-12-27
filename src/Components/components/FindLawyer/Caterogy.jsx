import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBalanceScale } from "react-icons/fa";

const Categories = () => {
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: 1, name: "Banking", link: "/lawyer", image: "https://taxguru.in/wp-content/uploads/2023/06/Banking-Laws-in-India.jpg" },
    { id: 2, name: "Civil", link: "/lawyer", image: "https://jurorcalling.com/wp-content/uploads/2018/06/civil-law.png" },
    { id: 3, name: "Corporate", link: "/lawyer", image: "https://th.bing.com/th/id/OIP.0aYVWaoWA62zsqtbtURXQwHaE6?rs=1&pid=ImgDetMain" },
    { id: 4, name: "Criminal", link: "/lawyer", image: "https://th.bing.com/th/id/OIP.ytxLULifIBI60PjdIWUynQHaE7?rs=1&pid=ImgDetMain" },
    { id: 5, name: "Family", link: "/lawyer", image: "https://watermark.lovepik.com/photo/50087/7076.jpg_wh1200.jpg" },
    { id: 6, name: "Immigration", link: "/lawyer", image: "https://www.lawyersgeek.com/wp-content/uploads/2024/02/Immigration-Laws.png" },
    { id: 7, name: "RealEstate ", link: "/lawyer", image: "https://www.lawofficesofdurant.com/wp-content/uploads/2020/07/real-estate-images-png-png-collections-real-estate-png-1410_647-768x352.png" },
    { id: 8, name: "Services", link: "/lawyer", image: "https://pix4free.org/assets/library/2021-01-21/originals/legal_advice.jpg" }, 
  ];

  const visibleCategories = showAll ? categories : categories.slice(0, 6);

  const cardDesign = () =>{
    return(
      <div></div>
    )
  }

  return (
    <div className=" mx-auto px-8 py-6 ">
      {/* Categories Header */}
      <div className="flex flex-col justify-center items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 ">Lawyers</h2>
        <p className="text-center mt-3">Access to experienced lawyers, effective strategies, and reliable legal support right here.</p>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 hover:underline text-lg"
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        {visibleCategories.map((category) => (
          <Link
            key={category.id}
            to={`${category.link}?category=${category.name}`}
            className="flex flex-col justify-center items-center p-6 bg-blue-100 shadow-lg rounded-lg hover:shadow-xl transition h-60"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-20 object-cover rounded-lg mb-4"
            />
            <FaBalanceScale className="text-6xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700">{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
