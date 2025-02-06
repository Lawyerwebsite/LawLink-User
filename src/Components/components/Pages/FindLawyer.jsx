import React from "react";
import NavbarComp from "../../ReusableComponents/NavbarComponent";
import LawyerAppointments from "../Lawyer/LawyerAppointment";
import Footer from "../Footer";

const FindLawyerPage = () => {
  return (
    <div className="flex flex-col">
      <header className="fixed top-0 w-full z-50">
        <NavbarComp />
      </header>
      <main className="flex-grow mt-[80px]">
        <section className="w-full fixed">
          <LawyerAppointments />
        </section>
      </main>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default FindLawyerPage;
