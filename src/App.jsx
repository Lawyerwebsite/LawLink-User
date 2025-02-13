import { Route, Routes } from "react-router-dom";
import Loader from "./Components/ReusableComponents/Loader";
import Signup from "./Components/components/Auth/Signup";
import LawLink from "./Components/Home/LawLink";
// import Lawyer from "./components/components/FindLawyer/Lawyer";
// import LawyerProfile from "./components/components/Lawyer/LawyerInfo/LawyerProfile";
import LawyerDesktopUI from "./Components/components/Lawyer/Appointment";
import CtaApp from "./Components/components/NavComponent/CtaApp";
import BankingLawyer from "./Components/components/Lawyer/Banking";
import CivilLawyer from "./Components/components/Lawyer/Civil";
import CriminalLawyer from "./Components/components/Lawyer/Criminal";
import FamilyLawyer from "./Components/components/Lawyer/Family";
import CorporateLawyer from "./Components/components/Lawyer/Corporate";
import ServiceLawyer from "./Components/components/Lawyer/Service";
import BusinessLaw from "./Components/components/Law/Business";
import ImmigrationLawyer from "./Components/components/Lawyer/Immigration";
import Privacypolicy from "./Components/components/Footer/Privacypolicy.";
import FAQ from "./Components/components/Footer/Terms";
import ReviewForm from "./Components/ReusableComponents/ReviewComp";
import FindLawyerPage from "./Components/components/Pages/FindLawyer";
import Business from "./Components/components/Blog/Business";
import AboutLaw from "./Components/components/Blog/AboutLaw";
import Appeal from "./Components/components/Blog/Appeal";
import Tips from "./Components/components/Blog/Tips";
import Beg from "./Components/components/Blog/Beg";
import Spouse from "./Components/components/Blog/Spouse";
import Will from "./Components/components/Blog/Will";
import Nrc from "./Components/components/Blog/Nrc";
import Penal from "./Components/components/Blog/Penal";
import Details from "./Components/components/Blog/Details";
import Contact from "./Components/ReusableComponents/Contact";
import ErrorPage from "./Components/ReusableComponents/404-Error";
import Confirmation from "./Components/components/NavComponent/Confirmation";
import EditProfile from "./Components/ReusableComponents/Profile";
import Heavy from "./Components/components/Blog/servicesexp/First";
import Casecategories from "./Components/components/Blog/servicesexp/Civilhero";
import FamilyLawsHero from "./Components/components/Blog/servicesexp/Familyhero";
import BankingLawSection from "./Components/components/Blog/servicesexp/Bankinghero";
import CorporateHero from "./Components/components/Blog/servicesexp/Corparatehero";
import ServiceHero from "./Components/components/Blog/servicesexp/ServicesHero";
import BusinessLawsHero from "./Components/components/Blog/servicesexp/BusinessHero";
import ImmigrationLawsHero from "./Components/components/Blog/servicesexp/ImmigrationHero";
import AboutPage from "./Components/components/Pages/AboutPage";
import BlogPage from "./Components/components/Pages/BlogPage";
import Signin from "./Components/components/Auth/Signin";
import ForgotPassword from "./Components/components/Auth/Forgot"


const RouteComp = () => {
  return (
    <Routes>
      <Route path="/loader" element={<Loader />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/" element={<Signin />} />
      <Route path="/forgotpassword" element={<ForgotPassword/>} />
      <Route path="*" element={<ErrorPage/>}/>

      <Route path="/home" element={<LawLink />} />
      
      {/* <Route path="findlawyer" element={<FindLawyer />} /> */}
      {/* <Route path="/lawyerbycategory" element={<Lawyer />} /> */}
      {/* <Route path="findlawyer/lawyers" element={<Lawyer />} /> */}
      {/* <Route path="/findlawyer/lawyer/:id" element={<LawyerProfile />} /> */}
      <Route path="/confirmation/:_id" element={<Confirmation/>}/>
      <Route path="/lawyer" element={<FindLawyerPage/>} />
      <Route path="/card/:_id" element={<LawyerDesktopUI/>} />
      <Route path="/booking/:_id" element={<CtaApp/>} />
      <Route path="/bankinglaw" element={<BankingLawyer/>} />
      <Route path="/civillaw" element={<CivilLawyer/>} />
      <Route path="/criminallaw" element={<CriminalLawyer/>} />
      <Route path="/familylaw" element={<FamilyLawyer/>} />
      <Route path="/corporatelaw" element={<CorporateLawyer/>} />
      <Route path="/servicelaw" element={<ServiceLawyer/>} />
      <Route path="/businesslaw" element={<BusinessLaw/>} />
      <Route path="/immigrationlaw" element={<ImmigrationLawyer/>} />

      <Route path="/policy" element={<Privacypolicy/>} />
      <Route path="/terms" element={<FAQ/>} />

      <Route path="/review" element={<ReviewForm/>} />
      <Route path="/profile" element={<EditProfile/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/contact" element={<Contact/>} />

      <Route path="/blog" element={<BlogPage/>} />
      <Route path="/business" element={<Business/>} />
      <Route path="/aboutlaw" element={<AboutLaw/>}/>
      <Route path="/appeal" element={<Appeal/>}/>
      <Route path="/tips" element={<Tips/>}/>
      <Route path="/beg" element={<Beg/>}/>
      <Route path="/spouse" element={<Spouse/>}/>
      <Route path="/will" element={<Will/>}/>
      <Route path="/nrc" element={<Nrc/>}/>
      <Route path="/penal" element={<Penal/>}/>
      <Route path="/details" element={<Details/>}/>
      <Route path="/main" element={<Heavy/>}/>
      <Route path="/main2" element={<Casecategories/>}/>
      <Route path="/main3" element={<FamilyLawsHero/>}/>
      <Route path="/main4" element={<BankingLawSection/>}/>
      <Route path="/main5" element={<CorporateHero/>}/>
      <Route path="/main6" element={<ServiceHero/>}/>
      <Route path="/main7" element={<BusinessLawsHero/>}/>
      <Route path="/main8" element={<ImmigrationLawsHero/>}/>
      
      

     
      


    </Routes>
  );
};

export default RouteComp;