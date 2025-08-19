import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style/Carrosel.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonialsData = [
  {
    quote: "A Myla transformou a forma como nosso filho se comunica. A evolução foi incrível e somos eternamente gratos!",
    author: "Ana S.",
    role: "Mãe do Lucas",
    avatar: "👩‍👦"
  },
  {
    quote: "Profissional extremamente competente e atenciosa. Cuidou da minha voz e me deu ferramentas para o resto da vida.",
    author: "Carlos V.",
    role: "Professor",
    avatar: "👨‍🏫"
  },
  {
    quote: "Depois do AVC, achei que não falaria como antes. O trabalho da Dra. Myla foi fundamental na minha recuperação.",
    author: "José R.",
    role: "Paciente neurológico",
    avatar: "🧑‍🦽"
  },
  {
    quote: "As sessões foram transformadoras para minha autoestima. Hoje me comunico com segurança e clareza.",
    author: "Mariana T.",
    role: "Executiva",
    avatar: "👩‍💼"
  },
  {
    quote: "Minha filha tinha dificuldade na escola e hoje está desenvolvendo a fala perfeitamente. Gratidão pelo trabalho!",
    author: "Roberta F.",
    role: "Mãe da Sofia",
    avatar: "👩‍👧"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">O que meus pacientes dizem</h2>
          <p className="section-subtitle">Histórias reais de transformação através da comunicação</p>
        </div>
        
        <div className="testimonials-wrapper">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
              bulletClass: 'swiper-bullet',
              bulletActiveClass: 'swiper-bullet-active',
              renderBullet: (index, className) => {
                return `<span class="${className}" aria-label="Ir para depoimento ${index + 1}"></span>`;
              }
            }}
            navigation={{
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev',
              disabledClass: 'swiper-button-disabled'
            }}
            loop={true}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            className="testimonials-swiper"
            a11y={{
              prevSlideMessage: 'Depoimento anterior',
              nextSlideMessage: 'Próximo depoimento',
              paginationBulletMessage: 'Ir para depoimento {{index}}'
            }}
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card">
                  <div className="testimonial-avatar" aria-hidden="true">
                    {testimonial.avatar}
                  </div>
                  <div className="quote-container">
                    <FaQuoteLeft className="quote-icon start" aria-hidden="true" />
                    <blockquote className="quote">
                      <p>{testimonial.quote}</p>
                    </blockquote>
                    <FaQuoteRight className="quote-icon end" aria-hidden="true" />
                  </div>
                  <div className="author-info">
                    <div className="author-details">
                      <span className="author-name">{testimonial.author}</span>
                      <span className="author-role">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="testimonial-nav">
            <button className="testimonial-prev" aria-label="Depoimento anterior">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="swiper-pagination" aria-label="Navegação por depoimentos"></div>
            <button className="testimonial-next" aria-label="Próximo depoimento">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;