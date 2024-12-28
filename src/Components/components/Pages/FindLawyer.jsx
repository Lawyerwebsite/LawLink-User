import React from "react";
import NavbarComp from "../../ReusableComponents/NavbarComponent";
// import Lawyer from "../FindLawyer/Lawyer";
import Footer from "../Footer";
import LawyerAppointments from "../Lawyer/LawyerAppointment";

const FindLawyerPage = () => {
  return (
    <div className="mt-[80px] w-full">
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

export default FindLawyerPage;
