import React from 'react'
import NavbarComp from '../ReusableComponents/NavbarComponent'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Hero from '../ReusableComponents/Hero'
import Categories from '../components/FindLawyer/Caterogy'
import KeyFeatures from '../components/Law/KeyFeatures'
import Testimonial from '../components/Testimonals'

const LawLink = () => {
  return (
    <>
    <header>
        <NavbarComp/>
    </header>
    <main>
        <Hero/>
        <Categories/>
        <KeyFeatures/>
        <Testimonial/>
    </main>
    <footer>
        <Footer/>
    </footer>
    </>
  )
}

export default LawLink