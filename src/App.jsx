import { Route, Routes } from "react-router-dom";
import Loader from "./Components/ReusableComponents/Loader";
import Signup from "./Components/components/Auth/Signup";
import Signin from "./components/components/Auth/Signin";
import Forgot from "./components/components/Auth/Forgot";
import LawLink from "./Components/Home/LawLink";
// import FindLawyer from "./components/components/Lawyer";
import Lawyer from "./components/components/FindLawyer/Lawyer";
import LawyerProfile from "./components/components/Lawyer/LawyerInfo/LawyerProfile";
import FindLawyer from "./Components/components/Lawyer/LawyerAppointment";
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
import About from "./Components/components/About/About";
import Blog from "./Components/components/Blog/Blog";
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

const RouteComp = () => {
  return (
    <Routes>
      <Route path="/loader" element={<Loader />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/forgotpassword" element={<Forgot />} />
      <Route path="*" element={<ErrorPage/>}/>

      <Route path="/" element={<LawLink />} />
      
      {/* <Route path="findlawyer" element={<FindLawyer />} /> */}
      <Route path="/lawyerbycategory" element={<Lawyer />} />
      <Route path="findlawyer/lawyers" element={<Lawyer />} />
      <Route path="/findlawyer/lawyer/:id" element={<LawyerProfile />} />
      <Route path="/confirmation/:_id" element={<Confirmation/>}/>

      <Route path="/abdul" element={<LawyerProfile/>} />

    
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
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />

      <Route path="/blog" element={<Blog/>} />
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

     
      


    </Routes>
  );
};

export default RouteComp;