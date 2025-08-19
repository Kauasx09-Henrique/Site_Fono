import React from 'react';
import { FaArrowRight, FaCalendarAlt, FaChild, FaMicrophone, FaBrain } from 'react-icons/fa';
import './style/Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay">
          <div className="hero-pattern"></div>
        </div>
      </div>
      
      <div className="hero-content container">
        <div className="hero-text">
          <div className="badge">
            <span>Especialista em Comunicação Humana</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-line">Desenvolvendo a</span>
            <span className="title-line">comunicação,</span>
            <span className="title-line highlight">transformando futuros</span>
          </h1>
          
          <p className="hero-subtitle">
            Tratamentos especializados em fonoaudiologia com abordagem humanizada para crianças, adolescentes e adultos.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Pacientes Atendidos</span>
            </div>
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Anos de Experiência</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Satisfação</span>
            </div>
          </div>
          
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
        
        <div className="hero-visual">
          <div className="main-visual">
            <div className="image-placeholder">
              <div className="circle-shape"></div>
            </div>
          </div>
          
          <div className="hero-features">
            <div className="feature-card">
              <div className="feature-icon">
                <FaChild />
              </div>
              <h3>Infantil</h3>
              <p>Terapia lúdica para crianças</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaMicrophone />
              </div>
              <h3>Voz</h3>
              <p>Cuidados vocais profissionais</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaBrain />
              </div>
              <h3>Neurológico</h3>
              <p>Reabilitação pós-AVC</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll para explorar</span>
      </div>
    </section>
  );
};

export default Hero;