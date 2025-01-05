import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FindLawyer from "./Pages/FindLawyer";
import AboutPage from "./Pages/AboutPage";
import CivilLawyer from "./Lawyer/Civil";
import CtaApp from "./NavComponent/CtaApp";
import BlogPage from "./Pages/BlogPage";
import BankingLawyer from "./Lawyer/Banking";
import CriminalLawyer from "./Lawyer/Criminal";
import CorporateLawyer from "./Lawyer/Corporate";
import FamilyLawyer from "./Lawyer/Family";
import ImmigrationLawyer from "./Lawyer/Immigration";
import RealestateLawyer from "./Lawyer/Realestate";
import ServiceLawyer from "./Lawyer/Service";
import BankingLaw from "./Law/Banking";
import BusinessLaw from "./Law/Business";
import Civil from "./Law/Civil";
import Corporate from "./Law/Corporate";
import CriminalLaw from "./Law/Criminal";
import Family from "./Law/Family";
import ImmigrationLaw from "./Law/Immigration";
import Service from "./Law/Service";
import FAQ from "./Footer/Terms";
import Privacypolicy from "./Footer/Privacypolicy.";
import Edit from "./Editprofile";
import Signup from "./Auth/Signup";
import Signin from "./Auth/Signin";
import Forgot from "./Auth/Forgot";
import ContactPage from "./Pages/ContactPage";
import Business from "./Blog/Business";
import AboutLaw from "./Blog/AboutLaw";
import Appeal from "./Blog/Appeal";
import Tips from "./Blog/Tips";
import Beg from "./Blog/Beg";
import Spouse from "./Blog/Spouse";
import Will from "./Blog/Will";
import Nrc from "./Blog/Nrc";
import Penal from "./Blog/Penal";
import Details from "./Blog/Details";
import LawyerAppointments from "./Lawyer/LawyerAppointment";
import LawyerDesktopUI from "./Lawyer/Appointment";
import LawyerCategories from "./FindLawyer/LawyerCategories";
import Categories from "./FindLawyer/Caterogy";
import ReviewForm from "./Lawyer/ReviewForm";
import LawyerProfile from "./Lawyer/LawyerInfo/LawyerProfile";
import Detials from "./Lawyer/LawyerInfo/Detials";


const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="lawyer" element={<FindLawyer />} />
      <Route path="/civil" element={<CivilLawyer />} />
      <Route path="/banking" element={<BankingLawyer />} />
      <Route path="/crinimal" element={<CriminalLawyer />} />
      <Route path="/corporate" element={<CorporateLawyer />} />
      <Route path="/family" element={<FamilyLawyer />} />
      <Route path="/immigration" element={<ImmigrationLawyer />} />
      <Route path="/realestate" element={<RealestateLawyer />} />
      <Route path="/service" element={<ServiceLawyer />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/civil" element={<CivilLawyer />} />
      <Route path="/cta" element={<CtaApp />} />

      <Route path="/bankinglaw" element={<BankingLaw />} />
      <Route path="/businesslaw" element={<BusinessLaw />} />
      <Route path="/civillaw" element={<Civil />} />
      <Route path="/corporatelaw" element={<Corporate />} />
      <Route path="/criminallaw" element={<CriminalLaw />} />
      <Route path="/familylaw" element={<Family />} />
      <Route path="/immigrationlaw" element={<ImmigrationLaw />} />
      <Route path="/servicelaw" element={<Service />} />

      <Route path="/terms" element={<FAQ />} />
      <Route path="/policy" element={<Privacypolicy />} />
      <Route path="/edit" element={<Edit/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/forgot" element={<Forgot/>}/>
      <Route path="/contact" element={<ContactPage/>}/>

      <Route path="/business" element={<Business/>}/>
      <Route path="/aboutlaw" element={<AboutLaw/>}/>
      <Route path="/appeal" element={<Appeal/>}/>
      <Route path="/tips" element={<Tips/>}/>
      <Route path="/beg" element={<Beg/>}/>
      <Route path="/spouse" element={<Spouse/>}/>
      <Route path="/will" element={<Will/>}/>
      <Route path="/nrc" element={<Nrc/>}/>
      <Route path="/penal" element={<Penal/>}/>
      <Route path="/details" element={<Details/>}/>
      <Route path="/law" element={<LawyerAppointments/>}/>
      <Route path="/card" element={<LawyerDesktopUI/>}/>
      <Route path="/show" element={<LawyerCategories/>}/>
      <Route path="/cards" element={<Categories/>}/>
      <Route path="/review" element={<ReviewForm/>}/>
      <Route path="/abdul" element={<LawyerProfile/>}/>
      <Route path="/abdul1" element={<Detials/>}/>
     
    </Routes>
  );
};

export default RouteComponent;
