import React from 'react';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import './style/Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content container">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">Desenvolvendo a comunicação,</span>
            <span className="title-line highlight">transformando futuros.</span>
          </h1>
          
          <p className="hero-subtitle">
            Tratamentos especializados em fonoaudiologia com abordagem humanizada para crianças, adolescentes e adultos.
          </p>
          
          <div className="hero-cta">
            <a href="#contato" className="btn btn-primary">
              <FaCalendarAlt className="btn-icon" />
              Agendar Avaliação
              <FaArrowRight className="btn-arrow" />
            </a>
            
            <a href="#servicos" className="btn btn-outline">
              Conhecer Serviços
            </a>
          </div>
        </div>
        
        <div className="hero-features">
          <div className="feature-card">
            <div className="feature-icon">🧒</div>
            <h3>Infantil</h3>
            <p>Terapia lúdica para crianças</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎤</div>
            <h3>Voz</h3>
            <p>Cuidados vocais profissionais</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>Neurológico</h3>
            <p>Reabilitação pós-AVC</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;