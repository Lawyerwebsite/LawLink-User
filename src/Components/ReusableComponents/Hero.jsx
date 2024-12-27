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
    <section className="relative ">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 sm:w-full"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 sm:max-w-full">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right p-18">
          <h1 className="text-4xl font-extrabold sm:text-5xl text-white md: flex items-center justify-center flex-col">
            Justice for Everyone
            <br />
            <strong className="font-extrabold text-cyan-200 sm:block pt-3">
              Stop RACISM!
            </strong>
          </h1>

          <div className="mt-4 flex flex-wrap justify-center gap-4 text-center">
            <Link to={"/cta"}>
              <button className="w-full rounded bg-blue-900 px-12 py-3 text-sm font-medium cursor-pointer text-white shadow focus:outline-none focus:ring active:bg-gray-950 sm:w-auto">
                Get Started
              </button>
            </Link>

            <Link to={"/lawyer"}>
              <button className=" w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-900 shadow focus:outline-none focus:ring active:text-zinc-950 sm:w-auto">
                Explore Service
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-white"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
