import React from "react";
import NavbarComp from "../../ReusableComponents/NavbarComponent";
import About from "../About/About";
import Footer from "../Footer";

const AboutPage = () => {
  return (
    <div className="mt-[80px] w-full">
      <section>
        <NavbarComp />
      </section>
      <section>
        <About />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AboutPage;
