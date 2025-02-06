import React from "react";
import TestimonialSlider from "../../ReusableComponents/Review";

const About = () => {
  return (
    <>
      <div className=" w-full h-[50vh] bg-[url('https://img.freepik.com/free-photo/ancient-books-adorn-library-carefully-arranged-with-classics-rare-gems_157027-2488.jpg?t=st=1738608055~exp=1738611655~hmac=b356cb2d952e662e0acd65f946dc6977ea1485ccd267c8f26e42b9f869492d84&w=1060')] bg-no-repeat bg-center bg-cover">
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <h1 className="text-4xl font-bold text-white">About</h1>
        </div>
      </div>
      <section className="bg-white py-16 px-6 md:px-20 container mx-auto">
        <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-20 items-center mt-10">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About Just Law
            </h2>
            <div className="w-20 h-1 bg-blue-600 mt-2 mb-6 mx-auto md:mx-0"></div>
            <p className="text-gray-600 leading-relaxed text-justify">
              Just Law is committed to delivering expert legal solutions with
              integrity and professionalism. Our team of experienced attorneys
              provides personalized guidance to ensure the best outcomes for our
              clients. With a strong reputation for excellence, we handle cases
              with precision and dedication. Trust us to protect your rights and
              advocate for justice.
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-6">
              <div className="bg-white shadow-md p-6 text-center rounded-lg w-36">
                <p className="text-3xl font-bold text-blue-600">250</p>
                <p className="text-gray-700 text-sm">Happy Clients</p>
              </div>
              <div className="bg-white shadow-md p-6 text-center rounded-lg w-36">
                <p className="text-3xl font-bold text-blue-600">920</p>
                <p className="text-gray-700 text-sm">Winning Cases</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative mt-10 md:mt-0 flex justify-center">
            <div className="w-full max-w-xs md:max-w-md">
              <img
                src="https://themewagon.github.io/justlaw/assets/img/about/about-low-front.jpg"
                alt="Lawyer"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full min-h-screen bg-[url('https://img.freepik.com/free-photo/view-3d-gavel-lawyer-s-day_23-2151023395.jpg?t=st=1738659735~exp=1738663335~hmac=0bf3151b312f1b4c95bf3422560d8cde476e6514a00802744cc6dc372459ab37&w=996')] bg-no-repeat bg-cover bg-center">
        <div className="w-full min-h-screen bg-black bg-opacity-50 flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
                Trusted by Our Clients
              </h2>
              <p className="mt-4 text-white text-lg sm:text-xl md:text- xl  leading-relaxed">
                At Just Law, trust is the foundation of our success. Our clients
                rely on us for expert legal guidance and unwavering support.
                With a proven track record of success, we prioritize integrity
                and excellence in every case. Join hundreds of satisfied clients
                who have placed their confidence in our expertise.
              </p>
            </div>
            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg shadow-md">
                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  100
                </dd>
                <dt className="mt-2 text-lg font-medium text-white">
                  Total Clients
                </dt>
              </div>
              <div className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg shadow-md">
                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  50
                </dd>
                <dt className="mt-2 text-lg font-medium text-white">
                  Total Cases
                </dt>
              </div>
              <div className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg shadow-md">
                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  48
                </dd>
                <dt className="mt-2 text-lg font-medium text-white">
                  Total Appointments
                </dt>
              </div>
              <div className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg shadow-md">
                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  50
                </dd>
                <dt className="mt-2 text-lg font-medium text-white">
                  Total Reviews
                </dt>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <section >
        <TestimonialSlider/>
      </section>
    </>
  );
};

export default About;
