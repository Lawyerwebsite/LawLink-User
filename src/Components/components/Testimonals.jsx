import React, { useState, useEffect } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "vicky",
      position: "CEO of Company Co.",
      image:
        "https://i.pinimg.com/736x/73/ce/04/73ce0487a47cadd6b8d044d77a0ed57a.jpg",
      review:
        '"Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia!"',
      rating: 5,
    },
    {
      id: 2,
      name: "ganesh",
      position: "Founder of Startup Inc.",
      image:
        "https://i.pinimg.com/236x/56/40/db/5640db4eb11ea60d7a0c6a565cb9aa0f.jpg",
      review:
        '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fuga!"',
      rating: 4,
    },
    {
      id: 3,
      name: "hari krishnna",
      position: "CTO of Tech Co.",
      image:
        "https://3.bp.blogspot.com/-5SS7iHxrXqA/VstNSiWY7bI/AAAAAAAAGCg/0l1pPlhsETk/s1600/IMG_0789%2B%2B01.jpg",
      review:
        '"Consequuntur dolorum facere quaerat. Possimus expedita assumenda velit temporibus."',
      rating: 3,
    },
    {
      id: 4,
      name: "hari krishnna",
      position: "CTO of Tech Co.",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.oEhrPXrjJwCpR9HAEjq1JAHaJd&pid=Api&P=0&h=2203",
      review:
        '"Consequuntur dolorum facere quaerat. Possimus expedita assumenda velit temporibus."',
      rating: 5,
    },
    {
      id: 5,
      name: "hari krishnna",
      position: "CTO of Tech Co.",
      image:
        "https://i.pinimg.com/236x/4c/cd/08/4ccd086a8b7970c7a1ab4961e9bfcafc.jpg",
      review:
        '"Consequuntur dolorum facere quaerat. Possimus expedita assumenda velit temporibus."',
      rating: 2,
    },
    {
      id: 6,
      name: "hari krishnna",
      position: "CTO of Tech Co.",
      image:
        "https://1.bp.blogspot.com/-j-ERWuBRTuA/YTY_6WB8QZI/AAAAAAAADig/BGAaNkvSSrESO6039J0YxMC_IfgohWZIwCLcBGAsYHQ/s570/Shazim%2Buddin%2Bpp%2Bimage%2Bwith%2Bstroke.jpg",
      review:
        '"Consequuntur dolorum facere quaerat. Possimus expedita assumenda velit temporibus."',
      rating: 1,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="p-6 bg-gray-100 mb-10">
      <div className="container mx-auto">
        <div className="relative">
          {/* Slides */}
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`flex flex-col items-center space-y-6 ${
                index === currentIndex ? "block" : "hidden"
              }`}
            >
              {/* Profile Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg"
              />
              {/* Name and Review */}
              <div className="text-center space-y-2">
                <p className="text-lg sm:text-xl font-semibold text-gray-800">
                  {testimonial.name}
                </p>
                <p className="text-sm sm:text-base text-gray-600">
                  {testimonial.position}
                </p>
                <blockquote className="text-base sm:text-lg italic font-medium text-gray-500">
                  {testimonial.review}
                </blockquote>
              </div>
              {/* Star Rating */}
              <div className="flex justify-center space-x-1 text-yellow-500">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
          ))}

          {/* Navigation */}
          <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 w-full px-4">
            <button
              onClick={prevSlide}
              className="text-xl font-bold text-gray-700 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
            >
              <GoChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="text-xl font-bold text-gray-700 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
            >
              <GoChevronRight />
            </button>
          </div>

          {/* Pagination Dots */}
          {/* <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex
                    ? "bg-gray-800"
                    : "bg-gray-400 hover:bg-gray-600"
                }`}
              ></button>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
