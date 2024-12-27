import React from 'react'
import NavbarComp from '../../ReusableComponents/NavbarComponent';
import Footer from '../Footer';



const CriminalLawyer = () => {
    return (
       <div>
        <NavbarComp/>
         <div className="w-full max-w-7xl p-8 mt-[100px] border mb-8 sm:w-11/12 sm:h-auto bg-white shadow-xl rounded-lg mx-auto flex justify-evenly">
            <div >
                <h1 className='font-bold text-3xl'>Andrew Needle</h1>
                <h2 className='font-bold text-1xl'>Needle & Ellenberg, P.A.</h2>
                <span className='text-lg'>Recognized since 2007 Miami, Florida</span><br/> <br/>
                <h2 className='font-bold text-1xl'>Practice Areas</h2>
                <p className='text-lg'>Medical Malpractice Law - Plaintiffs<br/>Personal Injury Litigation - Plaintiffs</p> <br/>
                <p>Andrew Needle is Board Certified in Civil Trial Law by the Florida Bar. Following graduation from Cornell University in 1974 
                    and the University of Miami, cum laude, in 1977, he began practicing law with one of the premier personal injury and medical malpractice firms in Florida.
                     Since then he has distinguished himself professionally both in and out of the courtroom as a trial lawyer, author, and lecturer.</p> <br />

                <p>He is a charter member of the Miami chapter of the American Board of Trial Advocates, a trial lawyer organization dedicated to the preservation of the civil justice
                     system and for which admission is solely by peer recognition and experience. Mr. Needle's courtroom victories include multi-million dollar verdicts in cases that have often 
                     pushed the outer boundaries of existing legal precedent.</p> <br />

                <p>Andrew Needle is Board Certified in Civil Trial Law by the Florida Bar. Following graduation from Cornell University in 1974 and the University of Miami, cum laude, in 1977</p>
            </div>
            <div className='w-full m-4'>
                <img  className="rounded-2xl" src="https://img.freepik.com/premium-photo/young-indian-girl-as-lawyer-court-room_437792-171.jpg"/>
            </div>
        </div>
        <Footer/>
       </div>
    )
};
export default CriminalLawyer;










