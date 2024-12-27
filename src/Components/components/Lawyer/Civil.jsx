import React from 'react'
import NavbarComp from '../../ReusableComponents/NavbarComponent';
import Footer from '../Footer';



const CivilLawyer = () => {
    return (
        <div>
            <NavbarComp/>
            <div className="w-full max-w-7xl p-8 mt-[100px] border mb-8 sm:w-11/12 sm:h-auto bg-white shadow-xl rounded-lg mx-auto flex justify-evenly">
            <div >
                <h1 className='font-bold text-3xl'>Abigail M. Cohen</h1>
                <h2 className='font-bold text-1xl'>Cohen & Blostein, P.A.</h2>
                <span className='text-lg'>Recognized since 2008 Fort Lauderdale, Florida</span><br/> <br/>
                <h2 className='font-bold text-1xl'>Practice Areas</h2>
                <p className='text-lg'>Medical Malpractice Law - Plaintiffs Personal <br/>Injury Litigation - Plaintiffs</p> <br/>
                <p>Florida attorney, Jay Cohen represents individuals and families who suffer due to the negligence of others.
                    His experience and professionalism have earned him membership in the American Board of Trial Advocates, where he earned
                    the distinction of “Lawyer of The Year,” as well as peer recognition from Florida Trend Magazine’s Legal Elite, Florida Super Lawyers,
                    and The Best Lawyers in America©. Jay was a finalist two years running for the Daily Business Review’s Best Medical Malpractice Lawyer.
                    He is also the recipient of America’s Top 100 Attorneys® Lifetime Achievement Award, and the Broward County Bar Association’s Professionalism Award.
                    Jay is AV Preeminent® rated by Martindale-Hubbell®. Recently, Jay was named Florida Trend Legal Elite Notable – Managing Partner (2024).</p> <br />

                <p>Jay has won large jury verdicts in medical malpractice, other personal injury and complex commercial cases in Florida. He is involved in numerous bar association
                    activities and was elected to serve as a member of The Florida Bar Board of Governors for 9 years. He was an adjunct professor of law at Nova Law School and St. Thomas University.</p> <br />

                <p>Jay completed his undergraduate studies at the University of Florida, graduating cum laude in 1975. He received his J.D. at South Texas College of Law.
                    He was admitted to the Texas Bar in 1978 and to the Florida Bar in 1980 and is licensed to practice in all state and federal courts in Florida.</p>
            </div>
            <div className='w-full m-4'>
                <img  className="rounded-2xl" src="https://img.freepik.com/premium-photo/professional-female-lawyer-reviewing-legal-documents-law-office-with-scales-justice-busine_1293074-222437.jpg"/>
            </div>
        </div>
        <Footer/>
        </div>
    )
};
export default CivilLawyer;










