import React from 'react';
import Button from './Button'; 

const KeyFeatures = () => {
  const keyList = [
    {
      id: 1,
      title: "CIVIL LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/3248/3248677.png", 
      slogan: "Your Legal Journey, Our Guiding Hand.",
      path: "/civillaw"
    },
    {
      id: 2,
      title: "CRIMINAL LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/3248/3248678.png",
      slogan: "From Victim to Victory",
      path: "/criminallaw"
    },
    {
      id: 3,
      title: "FAMILY LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/3248/3248680.png", 
      slogan: "Turning Complexity Into Clarity",
      path: "/familylaw"
    },
    {
      id: 4,
      title: "BANKING LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/3248/3248681.png", 
      slogan: "Smart Banking for the Good Life",
      path: "/bankinglaw"
    },
    {
      id: 5,
      title: "CORPORATE LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/3248/3248682.png", 
      slogan: "Legal Excellence, Personalized Service",
      path: "/corporatelaw"
    },
    {
      id: 6,
      title: "SERVICE LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/3248/3248683.png", 
      slogan: "Legal services can transform lives",
      path: "/servicelaw"
    },
    {
      id: 7,
      title: "BUSINESS LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/3248/3248684.png", 
      slogan: "Your Legal Journey, Our Guiding Hand.",
      path: "/businesslaw"
    },
    {
      id: 8,
      title: "IMMIGRATION LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/3248/3248685.png", 
      slogan: "Turning Complexity Into Clarity",
      path: "/immigrationlaw"
    }
  ];

  const KeyStyle = ({ title, logo, slogan, path }) => {
    return (
      <div className='p-4 h-30 flex flex-col justify-between items-center gap-4 border rounded-xl shadow-lg bg-white hover:bg-blue-500 hover:scale-110 hover:shadow-xl transition-transform duration-300'>
        <div className='font-bold text-xl text-center text-gray-800 hover:text-white'>{title}</div>
        <img src={logo} alt={title} className='w-[80px]' />
        <p className='font-medium text-md text-center text-gray-600 hover:text-white'>{slogan}</p>
        <Button btnName={"Know More"} path={path} />
      </div>
    );
  };

  return (
    <div className='bg-gray-100 text-gray-800 py-12'>
      <p className='text-4xl font-extrabold mb-8 text-center'>Our Services</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10'>
        {keyList.map((value) => (
          <KeyStyle
            key={value.id}
            title={value.title}
            logo={value.Logo}
            slogan={value.slogan}
            path={value.path}
          />
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
