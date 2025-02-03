import React from 'react';




import Footer1 from './Footer';

import Google from './GoogleIntegration';
import Hero from './HeroSection';
import ContactS from './ContactSection';

function Heavy() {
  return (
    <div className="font-sans">
      <Hero />
   
      <Google />
      <ContactS />
      <Footer1 />
    </div>
  );
}

export default Heavy;