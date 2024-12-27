import React from "react";


const LawyerCategories = () => {
  const categories = [
    { name: "Banking", icon: "💰" },
    { name: "Civil", icon: "⚖️" },
    { name: "Corporate", icon: "🏢" },
    { name: "Criminal", icon: "🔒" },
    { name: "Family", icon: "👪" },
    { name: "Immigration", icon: "✈️" },
    { name: "Real Estate", icon: "🏡" },
    { name: "Service", icon: "🛠️" },
    { name: "Others", icon: "❓" },
  ];

  const handleCategoryClick = (category) => {
    console.log(`Selected Category: ${category}`);
    // Add your logic for filtering lawyers based on category
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Lawyer Categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <LawyerCategories
            key={cat.name}
            category={cat.name}
            icon={cat.icon}
            onClick={handleCategoryClick}
          />
        ))}
      </div>
    </div>
  );
};

export default LawyerCategories;
