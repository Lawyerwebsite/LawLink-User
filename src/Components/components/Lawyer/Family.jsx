import React from 'react'
import NavbarComp from '../../ReusableComponents/NavbarComponent';
import Footer from '../Footer';



const FamilyLawyer = () => {
    return (
        <div>
        <NavbarComp/>
        <div className="w-full max-w-7xl p-8 mt-[100px] border mb-8 sm:w-11/12 sm:h-auto bg-white shadow-xl rounded-lg mx-auto flex justify-evenly">
            <div >
                <h1 className='font-bold text-3xl'>Jay Cohen</h1>
                <h2 className='font-bold text-1xl'>Gladstone, Weissman, Hirschberg & Schneider, P.A.</h2>
                <span className='text-lg'>Recognized since 2024 Boca Raton, Florida</span><br/> <br/>
                <h2 className='font-bold text-1xl'>Practice Areas</h2>
                <p className='text-lg'>Collaborative Law: Family Law<br/>Family Law </p> <br/>
                <p>Abigail M. Cohen is a Senior Associate at Gladstone, Weissman, Hirschberg & Schneider, P.A.
                     She is Board Certified in Marital and Family Law by the Florida Bar (2023). Ms. Cohen 
                     earned her J.D. (magna cum laude) from Nova Southeastern University in Fort Lauderdale, Florida, 
                     where she was ranked 7 out of 238 in her graduating class. She received her Bachelor of Arts degree from the University of Florida.</p> <br />

                <p>Since her admission to the Florida Bar in 1993, Ms. Cohen has represented clients in litigation matters and in trial in both state and federal court. 
                    Since 2012, Ms. Cohen's practice is exclusive to marital and family law, including prenuptial and postnuptial agreements, dissolution of marriage, paternity, 
                    modification and contempt matters.</p> <br />

                <p>Ms. Cohen is a member of the Family Law Section of the Florida Bar. She is trained in Collaborative Law and is a member of Choose Collaborative, a South Palm Beach 
                    County Collaborative Law Group. Ms. Cohen has been rated AV Preeminent in Martindale Hubbell by her peers.</p> <br/>

                <h2 className='font-bold text-1xl'>Areas Of Practice</h2>
                <span className='text-lg'>Divorce <br/>Family Law</span><br/> <br/>
                <h2 className='font-bold text-1xl'>Certified Legal Specialties</h2>
                <span className='text-lg'>Divorce <br/>The Florida Bar Board Certified in Marital and Family Law, 2023</span><br/> <br/>
                <h2 className='font-bold text-1xl'>Education</h2>
                <span className='text-lg'>Nova Southeastern Law University, Fort Lauderdale, Florida<br/>Honors: magna cum laude <br/>Honors: Ranked 7th in her class</span><br/> <br/>
                <h2 className='font-bold text-1xl'>Honors and Awards</h2>
                <span className='text-lg'>Best Lawyer by Best Lawyers in America: 2024 and 2025<br/>
                Top Lawyers (Boca Observer): 2024 <br/>
                Florida Trend’s Legal Elite NOTABLE – Women Leaders in Law</span><br/> <br/>

                
            </div>
            <div className='w-full m-4'>
                <img  className="rounded-2xl" src="https://onlinelegalquery.com/uploads/custom-images/lawyer-2024-07-05-02-43-17-5687.png"/>
            </div>
        </div>
            <Footer/>
        </div>
    )
};
export default FamilyLawyer;










