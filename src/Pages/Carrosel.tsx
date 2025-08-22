import React from 'react';
// Importações do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Importando seu CSS e ícones
import './style/Carrosel.css';
import { FaQuoteLeft } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


// Dados com iniciais para um visual mais profissional
const testimonialsData = [
  {
    quote: "A Myla transformou a forma como nosso filho se comunica. A evolução foi incrível e somos eternamente gratos!",
    author: "Ana S.",
    role: "Mãe do Lucas",
    initials: "AS"
  },
  {
    quote: "Profissional extremamente competente e atenciosa. Cuidou da minha voz e me deu ferramentas para o resto da vida.",
    author: "Carlos V.",
    role: "Professor",
    initials: "CV"
  },
  {
    quote: "Depois do AVC, achei que não falaria como antes. O trabalho da Dra. Myla foi fundamental na minha recuperação.",
    author: "José R.",
    role: "Paciente neurológico",
    initials: "JR"
  },
  {
    quote: "As sessões foram transformadoras para minha autoestima. Hoje me comunico com segurança e clareza.",
    author: "Mariana T.",
    role: "Executiva",
    initials: "MT"
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Depoimentos</span>
          <h2 className="section-title">O que meus pacientes dizem</h2>
          <p className="section-subtitle">Histórias reais de transformação e superação através da comunicação.</p>
        </div>
        
        <div className="testimonials-wrapper">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              el: '.swiper-pagination-custom', // Conecta com nosso div de paginação
              clickable: true,
            }}
            navigation={{
              nextEl: '.testimonial-button-next',
              prevEl: '.testimonial-button-prev',
            }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="testimonials-swiper"
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card">
                  <FaQuoteLeft className="quote-icon" aria-hidden="true" />
                  <blockquote className="quote-text">
                    <p>"{testimonial.quote}"</p>
                  </blockquote>
                  <div className="author-info">
                    <div className="testimonial-avatar">
                      <span>{testimonial.initials}</span>
                    </div>
                    <div className="author-details">
                      <span className="author-name">{testimonial.author}</span>
                      <span className="author-role">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controles de Navegação Personalizados */}
          <div className="testimonial-controls">
            <button className="testimonial-button-prev" aria-label="Depoimento anterior">
              <FiChevronLeft />
            </button>
            <div className="swiper-pagination-custom"></div>
            <button className="testimonial-button-next" aria-label="Próximo depoimento">
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;