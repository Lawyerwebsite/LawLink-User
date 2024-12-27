import React from 'react'
import NavbarComp from '../../ReusableComponents/NavbarComponent';
import Footer from '../Footer';



const CorporateLawyer = () => {
    return (
        <div>
            <NavbarComp/>
            <div className="w-full max-w-7xl p-8 mt-[100px] border mb-8 sm:w-11/12 sm:h-auto bg-white shadow-xl rounded-lg mx-auto flex justify-evenly">
            <div >
                <h1 className='font-bold text-3xl'>Bonie S. Montalvo</h1>
                <h2 className='font-bold text-1xl'>Cummings & Lockwood LLC</h2>
                <span className='text-lg'>Recognized since 2021 Bonita Springs, Florida</span><br/> <br/>
                <h2 className='font-bold text-1xl'>Practice Areas</h2>
                <p className='text-lg'>Tax Law Trusts</p> <br/>
                <p>Bonie guides clients throughout the estate planning process and works closely with them to create comprehensive
                     estate plans tailored to meet their personal objectives in a tax efficient manner.  Bonie drafts sophisticated estate 
                     plans for her clients, including, but not limited to, Revocable Trusts, Last Will and Testaments, Powers of Attorney, Advance Medical Directives, 
                     Living Wills and various types of Irrevocable Trusts. She also advises clients on a variety of trust and estate matters, including estate and gift tax planning, 
                     generational estate planning, planning for blended families, trustee requirements and beneficiary rights. </p> <br />

                <p>Bonie also works closely with clients in the estate administration process.  She continuously represents clients in these matters and guides them in all aspects of Florida’s probate 
                    and trust administration process.</p> <br />

                <p>Bonie S. Montalvo is an associate in Cummings & Lockwood’s Private Clients Group and is based in the Bonita Springs office.  Bonie focuses her practice on estate planning, tax planning and estate and
                     trust administration.</p> <br/>
                
                <h2 className='font-bold text-1xl'>Areas Of Practice</h2>
                <span className='text-lg'>Wills, Trusts and Estate Planning<br/>Private Clients Group</span><br/> <br/>
                <h2 className='font-bold text-1xl'>Certified Legal Specialties</h2>
                <span className='text-lg'>Divorce <br/>The Florida Bar Board Certified in Marital and Family Law, 2023</span><br/> <br/>
                <h2 className='font-bold text-1xl'>Education</h2>
                <span className='text-lg'>University of Florida, Levin College of Law (LL.M. in Taxation, cum laude, 2017)<br/>
                University of Florida, Levin College of Law (J.D., cum laude, 2016)<br/>
                Florida Gulf Coast University (B.A in Political Science and B.S. in Legal Studies, magna cum laude, 2013)</span><br/> <br/>
                <h2 className='font-bold text-1xl'>Honors and Awards</h2>
                <span className='text-lg'>Florida Bar Association, Member<br/>
                Collier County Bar Association, Trusts & Estates Section, Young Lawyers Section, Member <br/>
                Florida Gulf Coast University Alumni Association, Board Member</span><br/> <br/>

            </div>
            <div className='w-full m-4'>
                <img  className="rounded-2xl" src="https://www.kellylegalgroup.com/wp-content/uploads/2022/03/The-Top-9-Things-You-Should-Know.jpg"/>
            </div>
        </div>
        <Footer/>
        </div>
    )
};
export default CorporateLawyer;










