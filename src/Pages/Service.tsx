import React from 'react';
import { FaChild, FaMicrophoneAlt, FaBrain, FaRegCommentDots } from 'react-icons/fa';
import './style/Service.css';

// Lista de volta com os 4 serviços originais
const servicesData = [
  {
    icon: <FaChild className="card-icon" />,
    title: 'Terapia de Fala Infantil',
    description: 'Abordagens lúdicas e eficazes para o desenvolvimento da linguagem e articulação em crianças.',
  },
  {
    icon: <FaMicrophoneAlt className="card-icon" />,
    title: 'Terapia de Voz',
    description: 'Cuidados, treinamento e reabilitação da saúde vocal para profissionais, cantores e público geral.',
  },
  {
    icon: <FaBrain className="card-icon" />,
    title: 'Motricidade Orofacial',
    description: 'Tratamento de funções como sucção, mastigação, deglutição e respiração.',
  },
  {
    icon: <FaRegCommentDots className="card-icon" />,
    title: 'Linguagem Adulto/Idoso',
    description: 'Reabilitação da comunicação após AVC, TCE e em doenças neurodegenerativas.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Especialidades</span>
          <h2 className="section-title">Como posso te ajudar?</h2>
          <p className="section-subtitle">
            Ofereço uma gama de serviços especializados para atender às necessidades individuais de cada paciente, promovendo uma comunicação mais clara e eficaz.
          </p>
        </div>
        
        <div className="cards-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="card-icon-container">
                {service.icon}
              </div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
              <div className="card-footer">
                <span>Saiba Mais</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;