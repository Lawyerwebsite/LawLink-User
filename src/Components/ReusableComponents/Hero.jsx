import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const images = [
    "https://agh-attorneys.com/wp-content/uploads/2020/05/shutterstock_1378199774.jpg",
    "https://img.freepik.com/premium-photo/lawsuit-justice-concept-lawyer-working-with-partner-law_265022-11337.jpg",
    "https://www.halt.org/wp-content/uploads/2020/02/Criminal-Lawyer.jpg",
    "https://blog.ipleaders.in/wp-content/uploads/2020/12/female-attorney-talking-and-gesturing-in-legal-trial-courtroom-713774785-5b4fc86f46e0fb005b551eca-696x464.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full h-[95vh] bg-gray-100  max-sm:h-[500px] flex justify-center items-center">
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="absolute inset-0 w-auto h-auto bg-cover bg-center bg-no-repeat sm:bg-fixed max-sm:bg-top max-sm:bg-cover transition-all duration-500"
        style={{
          backgroundImage: `url(${images[currentIndex]})`, // Fixed syntax for dynamic URL
        }}
      ></div>

      <div className="w-full h-full bg-black absolute top-0 bg-opacity-15 flex flex-col justify-center text-center items-center px-20 max-sm:px-5">
        <h1 className="text-2xl font-extrabold sm:text-5xl text-white">
        Justice for Everyone 
          <br />
          <strong className="mt-4 font-extrabold text-white sm:block">
          Stop RACISM!
          </strong>
        </h1>
        <Link>
          <span
            href="#"
            className="block w-full rounded bg-blue-500 mt-8 px-8 py-3  font-semibold text-white shadow focus:outline-none focus:ring sm:w-auto hover:bg-blue-700 transition"
          >
         Get Started 
          </span>
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-400" : "bg-white"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Hero;
