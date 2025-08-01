import React from 'react';
import { FaChild, FaMicrophoneAlt, FaBrain, FaRegCommentDots } from 'react-icons/fa';
import './style/Service.css';

const servicesData = [
  {
    icon: <FaChild className="card-icon" />,
    title: 'Terapia de Fala Infantil',
    description: 'Abordagens lúdicas e eficazes para o desenvolvimento da linguagem e articulação em crianças.',
    color: '#4CAF50'
  },
  {
    icon: <FaMicrophoneAlt className="card-icon" />,
    title: 'Terapia de Voz',
    description: 'Cuidados, treinamento e reabilitação da saúde vocal para profissionais, cantores e público geral.',
    color: '#2196F3'
  },
  {
    icon: <FaBrain className="card-icon" />,
    title: 'Motricidade Orofacial',
    description: 'Tratamento de funções como sucção, mastigação, deglutição e respiração.',
    color: '#FF9800'
  },
  {
    icon: <FaRegCommentDots className="card-icon" />,
    title: 'Linguagem Adulto/Idoso',
    description: 'Reabilitação da comunicação e cognição em pacientes com sequelas de AVC e outras condições neurológicas.',
    color: '#9C27B0'
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Como posso te ajudar?</h2>
          <p className="section-subtitle">Serviços especializados em fonoaudiologia</p>
        </div>
        
        <div className="cards-grid">
          {servicesData.map((service, index) => (
            <div 
              className="service-card" 
              key={index}
              style={{ '--card-color': service.color } as React.CSSProperties}
            >
              <div className="card-icon-container">
                {service.icon}
              </div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
              <div className="card-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;