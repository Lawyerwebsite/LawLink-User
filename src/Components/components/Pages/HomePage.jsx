import React from "react";
import NavbarComp from "../../ReusableComponents/NavbarComponent";
import Hero from "../../ReusableComponents/Hero";

import KeyFeatures from "../Law/KeyFeatures";
import Testimonial from "../Testimonals";
import Footer from "../Footer";
import Categories from "../FindLawyer/Caterogy";
import TestimonialSlider from "../../ReusableComponents/Review";

const HomePage = () => {
  return (
    <div className="mt-[60px] w-full">
      <header>
        <NavbarComp />
      </header>
      <section>
        <Hero />
      </section>
      <section>
        <KeyFeatures />
      </section>
      <section>
      <Categories/>
      </section>
      
      <section>
        <TestimonialSlider />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
