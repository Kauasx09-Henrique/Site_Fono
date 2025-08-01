import React from 'react';
import './style/About.css';

const professionalPhoto = "https://cdn.pixabay.com/photo/2025/07/24/09/18/therapy-9732379_1280.png";

const About: React.FC = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="image-frame">
              <img 
                src={professionalPhoto} 
                alt="Fonoaudióloga Myla Kelly" 
                className="professional-photo"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="experience-badge">
              <span>+10 anos</span>
              <small>de experiência</small>
            </div>
          </div>
          
          <div className="about-content">
            <h2 className="section-title">
              <span className="title-highlight">Prazer, sou</span>
              <span className="title-name">Myla Kelly</span>
            </h2>
            
            <div className="about-text">
              <p>
                Minha missão é criar um ambiente seguro e acolhedor onde cada paciente, 
                seja criança ou adulto, se sinta à vontade para desenvolver seu máximo 
                potencial de comunicação.
              </p>
              <p>
                Acredito em uma terapia humanizada, baseada em evidências científicas 
                e, acima de tudo, no poder da conexão.
              </p>
            </div>
            
            <div className="professional-info">
              <div className="info-item">
                <span className="info-label">Formação:</span>
                <span className="info-value">Universidade Federal</span>
              </div>
              <div className="info-item">
                <span className="info-label">Especializações:</span>
                <span className="info-value">Voz, Motricidade Orofacial</span>
              </div>
              <div className="info-item">
                <span className="info-label">CRFa:</span>
                <span className="info-value">1-12345</span>
              </div>
            </div>
            
            <div className="cta-buttons">
              <a href="#contato" className="btn btn-primary">
                Vamos conversar?
                <span className="btn-icon">→</span>
              </a>
              <a href="#servicos" className="btn btn-secondary">
                Conheça meus serviços
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;