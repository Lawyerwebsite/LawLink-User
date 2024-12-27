import React from "react";
import NavbarComp from "../../ReusableComponents/NavbarComponent";
import Hero from "../../ReusableComponents/Hero";

import KeyFeatures from "../Law/KeyFeatures";
import Testimonial from "../Testimonals";
import Footer from "../Footer";
import Categories from "../FindLawyer/Caterogy";

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
        <Testimonial />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
