import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Services from '../Pages/Service';
 import About from '../Pages/About';
import Testimonials from '../Pages/Carrosel';
import Footer from '../Components/Footer';

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <Hero />
        {/* Seções comentadas para implementação futura */}
        <Services /> 
         <About /> 
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;