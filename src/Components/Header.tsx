import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './style/Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Header principal */}
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo">
              <a href="#">
                <span className="logo-name">Mila Kelly</span>
                <span className="logo-profession">Fonoaudióloga</span>
              </a>
            </div>

            {/* Menu Desktop */}
            <nav className="desktop-nav">
              <ul>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </nav>

            {/* Botão de agendamento */}
            <div className="cta-button">
              <a href="#contato" className="btn-agendar">Agendar Consulta</a>
            </div>

            {/* Menu Mobile - Hamburger Icon */}
            <button
              className="mobile-menu-button"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#inicio" onClick={toggleMenu}>Início</a></li>
            <li><a href="#sobre" onClick={toggleMenu}>Sobre</a></li>
            <li><a href="#servicos" onClick={toggleMenu}>Serviços</a></li>
            <li><a href="#depoimentos" onClick={toggleMenu}>Depoimentos</a></li>
            <li><a href="#contato" onClick={toggleMenu}>Contato</a></li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;