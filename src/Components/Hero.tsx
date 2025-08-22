import React from 'react';
import { Link } from 'react-scroll'; // Importado para a rolagem suave
import { FaArrowRight, FaCalendarAlt, FaChild, FaMicrophone, FaBrain, FaHeart, FaSmile, FaUsers } from 'react-icons/fa';
import './style/Hero.css';

const Hero = () => {
    // Opções para a rolagem suave
    const scrollOptions = {
        spy: true,
        smooth: true,
        offset: -70,
        duration: 500,
    };

    return (
        <section id="inicio" className="hero-section">
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
                            <div className="stat-icon"><FaUsers /></div>
                            <div className="stat-content">
                                <span className="stat-number">500+</span>
                                <span className="stat-label">Pacientes Atendidos</span>
                            </div>
                        </div>
                        <div className="stat">
                            <div className="stat-icon"><FaHeart /></div>
                            <div className="stat-content">
                                <span className="stat-number">15+</span>
                                <span className="stat-label">Anos de Experiência</span>
                            </div>
                        </div>
                        <div className="stat">
                            <div className="stat-icon"><FaSmile /></div>
                            <div className="stat-content">
                                <span className="stat-number">98%</span>
                                <span className="stat-label">Satisfação</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="hero-cta">
                        {/* BOTÃO ATUALIZADO COM <Link> */}
                        <Link to="contato" {...scrollOptions} className="btn btn-primary">
                            <FaCalendarAlt className="btn-icon" />
                            Agendar Avaliação
                            <FaArrowRight className="btn-arrow" />
                        </Link>
                        
                        {/* BOTÃO ATUALIZADO COM <Link> */}
                        <Link to="servicos" {...scrollOptions} className="btn btn-outline">
                            Conhecer Serviços
                        </Link>
                    </div>
                </div>
                
                <div className="hero-visual">
                    <div className="main-visual">
                        {/* Você pode colocar uma <img> aqui dentro */}
                        <div className="image-placeholder">
                            <div className="circle-shape"></div>
                        </div>
                    </div>
                    
                    <div className="hero-features">
                        <div className="feature-card">
                            <div className="feature-icon"><FaChild /></div>
                            <h3>Infantil</h3>
                            <p>Terapia lúdica para crianças</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-icon"><FaMicrophone /></div>
                            <h3>Voz</h3>
                            <p>Cuidados vocais profissionais</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-icon"><FaBrain /></div>
                            <h3>Neurológico</h3>
                            <p>Reabilitação pós-AVC</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;