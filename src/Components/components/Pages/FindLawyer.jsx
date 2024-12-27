import React from "react";
import NavbarComp from "../../ReusableComponents/NavbarComponent";
import Lawyer from "../FindLawyer/Lawyer";
import Footer from "../Footer";
import LawyerAppointments from "../Lawyer/LawyerAppointment";

const FindLawyer = () => {
  return (
    <div className="mt-[100px] w-full">
      <header>
        <NavbarComp />
      </header>
      <section>
        <LawyerAppointments/>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default FindLawyer;
