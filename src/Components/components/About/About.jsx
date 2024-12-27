import React from 'react';
import AboutCard from './AboutCard';
import Aboutnav from "./Aboutnav";
import CtaApp from '../NavComponent/CtaApp';



const About = () => {
  return (
    <div>
      <Aboutnav/>
    <div className="w-full max-w-7xl p-8 mt-10 mb-8 sm:w-11/12 sm:h-auto bg-white shadow-xl border rounded-lg mx-auto ">
      {/* <div>
        <Aboutnav/>
      </div> */}
       <div>
          <h1 className='font-bold text-2xl p-5 underline  text-center'>About the Firm</h1>
          <p className='text-justify p-3 pl-5 indent-10 '>A lawyer or attorney is a person who practices law, as an advocate, 
            attorney, attorney at law, barrister, barrister-at-law, bar-at-law, 
            civil law notary, counsel, counselor, counselor, counselor at law, 
            solicitor, chartered legal executive, or public servant preparing, 
            interpreting and applying law, but not as a paralegal or charter 
            executive secretary. Working as a lawyer involves the practical 
            application of abstract legal theories and knowledge to solve 
            specific individualized problems, or to advance the interests of 
            those who hire lawyers to perform legal services. A lawyer or 
            attorney is a person who practices law, as an advocate, attorney, 
            attorney at law, barrister, barrister-at-law, bar-at-law, civil law notary, 
            counsel, counselor, counselor, counselor at law, solicitor, chartered legal 
            executive, or public servant preparing, interpreting and applying law, but not 
            as a paralegal or charter executive secretary.</p> <br/>

            <p className='text-justify p-3 pl-5'>Your queries could be related to various fields of law such as civil law, criminal law,
               cyber law, corporate law, family law, banking law, and so on. Not every lawyer you catch 
               hold of will be able to help you with every category of case</p> <br/>

            <h1 className='font-bold text-2xl p-5 underline text-center'>How do we work</h1> <br/>
            <span className='font-semibold p-5 text-justify'>1. Listen to your Issue.</span> <br/>
            <p className='text-justify p-3 pl-5'>We understand that it sometimes seems hard to even get a lawyer to listen to your case. 
              VakilSir is ever ready to welcome your queries regarding legal matters. You can post your questions here, 
              and we guarantee you a quick solution.</p> <br/>

            <span className='font-semibold p-5  text-justify'>2.Analyze and Offer a Solution</span> <br/>
            <p className='text-justify p-3 pl-5'>Our panel of advocates and technical experts have a wealth of knowledge and experience. They read and analyze 
              your problem and offer relevant legal advice. You can send details of your issue with documents for a quick analysis 
              to yourvakil@vakilsir.in We shall revert to you and provide you with an expert to give you practical solutions.</p> <br/>

            <span className='font-semibold p-5  text-justify'>3.Connect to a Lawyer</span> <br/>
            <p className='text-justify p-3 pl-5'>In the event of your issues needing to go to court or any forum for litigation, we recommend you an expert lawyer based on your subject
               and region in Kerala.</p> <br/>

            <span className='font-semibold p-5 underline'>Your cases may be related to various branches of law</span> <br/>
            <p className='text-justify p-3 pl-5'>Civil Law <br/>
            Criminal Law <br/>
            Family Law <br/>
            Corporate Law <br/>
            Banking Law <br/>
            Service Law <br/>
            RealState Law <br/>
            Immigration Law <br/>
            </p> 

            <h1 className='font-semibold p-5'>Call us right away at +91 1234567890  We are listening!</h1>
        </div>
        <div>
          <h1 className='font-bold text-3xl ml-5 text-center underline'>Our Expert Team</h1> <br/>
          <AboutCard/>
        </div>
        <CtaApp/>
    </div>
    </div>
  )
};

export default About;


