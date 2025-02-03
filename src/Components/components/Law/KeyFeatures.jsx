import React from "react";

const KeyFeatures = () => {
  const services = [
    {
      id: 1,
      title: "CIVIL LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/3115/3115546.png",
      slogan: "Your Legal Journey, Our Guiding Hand.",
      path: "/main",
    },
    {
      id: 2,
      title: "CRIMINAL LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/13338/13338285.png",
      slogan: "From Victim to Victory",
      path: "/main2",
    },
    {
      id: 3,
      title: "FAMILY LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/10295/10295735.png",
      slogan: "Turning Complexity Into Clarity",
      path: "/main3",
    },
    {
      id: 4,
      title: "BANKING LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/12199/12199617.png",
      slogan: "Smart Banking for the Good Life",
      path: "/main4",
    },
    {
      id: 5,
      title: "CORPORATE LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/9235/9235055.png",
      slogan: "Legal Excellence, Personalized Service",
      path: "/main5",
    },
    {
      id: 6,
      title: "SERVICE LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/17048/17048323.png",
      slogan: "Legal services can transform lives",
      path: "/main6",
    },
    {
      id: 7,
      title: "BUSINESS LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/11526/11526934.png",
      slogan: "Your Legal Journey, Our Guiding Hand.",
      path: "/main7",
    },
    {
      id: 8,
      title: "IMMIGRATION LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/9655/9655487.png",
      slogan: "Turning Complexity Into Clarity",
      path: "/main8",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Legal Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col items-center text-center p-8 rounded-xl shadow-lg bg-white hover:bg-blue-200 from-blue-100 to-purple-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Centered Image Container */}
              <div className="flex justify-center items-center mb-6 transform transition-transform duration-300 group-hover:scale-110">
                <img
                  src={service.Logo}
                  alt={service.title}
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-6">{service.slogan}</p>
              {service.path && (
                <a
                  href={service.path}
                  className="bg-gradient-to-r from-blue-600 to-blue-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-blue-300 transition-all duration-300"
                >
                  Explore Now
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;