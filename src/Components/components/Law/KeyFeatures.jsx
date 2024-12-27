import React from 'react';
import Button from './Button';

const KeyFeatures = () => {
  const keyList = [
    {
      id: 1,
      title: "CIVIL LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/3115/3115546.png",
      slogan: "Your Legal Journey, Our Guiding Hand.",
      path: "/civillaw"
    },
    {
      id: 2,
      title: "CRIMINAL LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/13338/13338285.png",
      slogan: "From Victim to Victory",
      path: "/criminallaw"
    },
    {
      id: 3,
      title: "FAMILY LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/10295/10295735.png",
      slogan: "Turning Complexity Into Clarity",
      path: "/familylaw"
    },
    {
      id: 4,
      title: "BANKING LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/12199/12199617.png",
      slogan: "Smart Banking for the Good Life",
      path: "/bankinglaw"
    },
    {
      id: 5,
      title: "CORPORATE LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/9235/9235055.png",
      slogan: "Legal Excellence, Personalized Service",
      path: "/corporatelaw"
    },
    {
      id: 6,
      title: "SERVICE LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/17048/17048323.png",
      slogan: "Legal services can transform lives",
      path: "/servicelaw"
    },
    {
      id: 7,
      title: "BUSINESS LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/11526/11526934.png",
      slogan: "Your Legal Journey, Our Guiding Hand.",
      path: "/businesslaw"
    },
    {
      id: 8,
      title: "IMMIGRATION LAWS",
      Logo: "https://cdn-icons-png.flaticon.com/128/9655/9655487.png",
      slogan: "Turning Complexity Into Clarity",
      path: "/immigrationlaw"
    }
  ];

  const KeyStyle = ({ title, logo, slogan, path }) => {
    return (
      <div className='p-4 h-30 flex flex-col justify-between items-center gap-6 border rounded-lg shadow-md shadow-gray-300 py-10'>
        <div className='font-medium text-xl text-blue-600 text-center'>{title}</div>
        <img src={logo} alt={title} className='w-[70px] hover:scale-125' />
        <p className='font-medium text-lg text-start'>{slogan}</p>
        <Button btnName={"Know More"} path={path} />
      </div>
    );
  };

  return (
    <div>
      <p className='text-3xl font-bold mb-4 text-center mt-10 '>Our Services</p>
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 m-8'>
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
