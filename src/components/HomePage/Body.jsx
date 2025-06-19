import React from 'react';
import Hero from './Hero';
import AboutUs from './Aboutus';
import CallToAction from './CallToAction';
import Footer from './Footer';
import useHome from './useHome';

const Body = () => {
  const { heroVariant, handleContact } = useHome();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      <Hero variant={heroVariant} />
      <AboutUs />
      <CallToAction onContact={handleContact} />
      <Footer />
    </div>
  );
};

export default Body;