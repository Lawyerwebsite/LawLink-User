import React from 'react'
import NavbarComp from '../../ReusableComponents/NavbarComponent';
import Footer from '../Footer';



const BankingLawyer = () => {
    return (
        <div>
            <NavbarComp/>
        <div className="w-full max-w-7xl p-8 mt-[100px] border mb-8 sm:w-11/12 sm:h-auto bg-white shadow-xl rounded-lg mx-auto flex justify-evenly">
            <div >
                <h1 className='font-bold text-3xl'>Cindy Ebenfeld</h1>
                <h2 className='font-bold text-1xl'>Hicks, Porter, Ebenfeld & Stein, P.A.</h2>
                <span className='text-lg'>Recognized since 2008 Fort Lauderdale, Florida</span><br/> <br/>
                <h2 className='font-bold text-1xl'>Practice Areas</h2>
                <p className='text-lg'>Insurance Law <br/>Litigation - Insurance</p> <br/>
                <p>Cindy Ebenfeld a name partner, joined the firm in 1992 after a distinguished academic career.
                     She received her law degree in 1989 from the University of Miami, where she graduated summa cum laude,
                      number four in her class, and number one in her section. Ms. Porter attended law school as a Dean's Merit scholar, 
                      and while there received eight American Jurisprudence Book Awards, was named in Who's Who Among American Law Students,
                       and won Oral Argument and the Best Brief Awards in First Year Moot Court Competition. She also served as a student tutor, 
                       attended a year-long intensive litigation and trial course, participated in the optional trial competition, and upon graduation 
                       was awarded the prestigious Order of the Coif.</p> <br />

                <p>Ms. Cindy Ebenfeldwas selected to appear in Best Lawyers in America in the area of insurance and is routinely recognized by local publications as
                     one of Florida's leading attorneys in the area of insurance coverage.</p> <br />

                <p>Ms.Cindy Ebenfeld has extensive experience and knowledge in the areas of insurance coverage, bad faith, appellate advocacy and trial support..</p> <br/>
                <h2 className='font-bold text-1xl'>Areas of Practice</h2> <br/>
                <span className='text-lg'>Insurance Coverage <br/>
                Bad Faith <br/>
                Commercial Litigation<br/>
                Trial Support</span><br/> <br/>

            </div>
            <div className='w-full m-4'>
                <img  className="rounded-2xl" src="https://images.avvo.com/avvo/ugc/images/head_shot/standard/lawyer_jacquelyn_codd_5097811_1691009966.jpg"/>
            </div>
        </div>
        <Footer/>
        </div>
    )
};
export default BankingLawyer;










