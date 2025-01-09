import React from "react";

const KeyFeatures = () => {
  const services = [
    {
      id: 1,
      title: "CIVIL LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/3115/3115546.png",
      slogan: "Your Legal Journey, Our Guiding Hand.",
      path: "/civillaw",
    },
    {
      id: 2,
      title: "CRIMINAL LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/13338/13338285.png",
      slogan: "From Victim to Victory",
      path: "/criminallaw",
    },
    {
      id: 3,
      title: "FAMILY LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/10295/10295735.png",
      slogan: "Turning Complexity Into Clarity",
      path: "/familylaw",
    },
    {
      id: 4,
      title: "BANKING LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/12199/12199617.png",
      slogan: "Smart Banking for the Good Life",
      path: "/bankinglaw",
    },
    {
      id: 5,
      title: "CORPORATE LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/9235/9235055.png",
      slogan: "Legal Excellence, Personalized Service",
      path: "/corporatelaw",
    },
    {
      id: 6,
      title: "SERVICE LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/17048/17048323.png",
      slogan: "Legal services can transform lives",
      path: "/servicelaw",
    },
    {
      id: 7,
      title: "BUSINESS LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/11526/11526934.png",
      slogan: "Your Legal Journey, Our Guiding Hand.",
      path: "/businesslaw",
    },
    {
      id: 8,
      title: "IMMIGRATION LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/9655/9655487.png",
      slogan: "Turning Complexity Into Clarity",
      path: "/immigrationlaw",
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col items-center text-center p-6 rounded-lg shadow-md bg-white hover:bg-blue-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="transform transition-transform duration-300 group-hover:scale-110">
                <img
                  src={service.Logo}
                  alt={service.title}
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-lg font-bold text-gray-800">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">{service.slogan}</p>
              {service.path && (
                <a
                  href={service.path}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
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