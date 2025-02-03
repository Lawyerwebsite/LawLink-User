import React from "react";
import Hero from "../ReusableComponents/Hero";
import KeyFeatures from "../components/Law/KeyFeatures";
import Categories from "../components/FindLawyer/Caterogy";
import TestimonialSlider from "../ReusableComponents/Review";


const Home = () => {
  return (
    <div className="relative main min-h-screen">
      <section>
        <div className="hero">
          <Hero />
        </div>
      </section>
      <section className="w-full">
        <div className="mx-20 max-[425px]:mx-5 max-md:mx-12 max-lg:mx-14 max-xl:mx-16 mb-4">
          <KeyFeatures />
        </div>
      </section>
      <section className="w-full">
        <div className="mx-20 max-[425]:mx-5 max-md:mx-12 max-lg:mx-14 max-xl:mx-16">
          <Categories />
        </div>
      </section>
      <section className="w-full">
        <div className="mx-20 max-[425]:mx-5 max-md:mx-12 max-lg:mx-14 max-xl:mx-16">
          <TestimonialSlider/>
        </div>
      </section>
    </div>
  );
};

export default Home;
