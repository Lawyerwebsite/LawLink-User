import React from 'react'
import NavbarComp from '../../ReusableComponents/NavbarComponent'
import Contact from '../Contact'
import Footer from '../Footer'

const ContactPage = () => {
  return (
    <div >
        <header>
            <NavbarComp/>
        </header>
        <section className='mt-16'>
            <Contact/>
        </section>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default ContactPage