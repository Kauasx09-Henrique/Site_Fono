import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Importado para a rolagem suave
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

  const closeMenu = () => {
    setMobileMenuOpen(false);
  }

  // Opções para a rolagem suave
  const scrollOptions = {
    spy: true,
    smooth: true,
    offset: -70, // Ajuste para que o título da seção não fique colado no header
    duration: 500,
  };

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="inicio" {...scrollOptions} className="logo">
            <span className="logo-name">Myla Kelly</span>
            <span className="logo-profession">Fonoaudióloga</span>
          </Link>

          {/* Menu Desktop */}
          <nav className="desktop-nav">
            <ul>
              <li><Link to="inicio" {...scrollOptions} activeClass="active">Início</Link></li>
              <li><Link to="sobre" {...scrollOptions} activeClass="active">Sobre</Link></li>
              <li><Link to="servicos" {...scrollOptions} activeClass="active">Serviços</Link></li>
              <li><Link to="depoimentos" {...scrollOptions} activeClass="active">Depoimentos</Link></li>
              <li><Link to="contato" {...scrollOptions} activeClass="active">Contato</Link></li>
            </ul>
          </nav>

          {/* Botão de agendamento */}
          <div className="cta-button">
            <Link to="contato" {...scrollOptions} className="btn-agendar">Agendar Consulta</Link>
          </div>

          {/* Ícone do Menu Mobile */}
          <button className="mobile-menu-icon" onClick={toggleMenu} aria-label="Abrir menu">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link onClick={closeMenu} to="inicio" {...scrollOptions}>Início</Link></li>
          <li><Link onClick={closeMenu} to="sobre" {...scrollOptions}>Sobre</Link></li>
          <li><Link onClick={closeMenu} to="servicos" {...scrollOptions}>Serviços</Link></li>
          <li><Link onClick={closeMenu} to="depoimentos" {...scrollOptions}>Depoimentos</Link></li>
          <li><Link onClick={closeMenu} to="contato" {...scrollOptions}>Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;