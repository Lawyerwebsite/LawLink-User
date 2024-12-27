import React from "react";

const CategoryCard = ({ category, icon, onClick }) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg transition hover:shadow-xl cursor-pointer bg-gradient-to-t from-gray-100 to-white"
      onClick={() => onClick(category)}
    >
      <div className="flex flex-col items-center justify-center p-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
