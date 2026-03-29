import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/AILYTLOGOPNG.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const languages = [
    { code: 'IN', label: 'India - English', value: 'en-IN', emoji: '🇮🇳' },
    { code: 'US', label: 'United States - English', value: 'en-US', emoji: '🇺🇸' },
    { code: 'GB', label: 'United Kingdom - English', value: 'en-GB', emoji: '🇬🇧' },
    { code: 'CA', label: 'Canada - English', value: 'en-CA', emoji: '🇨🇦' },
    { code: 'DE', label: 'Deutschland - Deutsch', value: 'de-DE', emoji: '🇩🇪' },
    { code: 'FR', label: 'France - Français', value: 'fr-FR', emoji: '🇫🇷' },
    { code: 'ES', label: 'España - Español', value: 'es-ES', emoji: '🇪🇸' },
    { code: 'CN', label: '中国 - 中文', value: 'zh-CN', emoji: '🇨🇳' },
    { code: 'JP', label: '日本 - 日本語', value: 'ja-JP', emoji: '🇯🇵' },
    { code: 'BR', label: 'Brasil - Português', value: 'pt-BR', emoji: '🇧🇷' }
  ];

  const [selectedLang, setSelectedLang] = useState(() => {
    try {
      const saved = localStorage.getItem('ailyt_language');
      return saved ? JSON.parse(saved) : languages[0];
    } catch (e) {
      return languages[0];
    }
  });
  const [langOpen, setLangOpen] = useState(false);

  const toggleLang = () => setLangOpen(!langOpen);

  const selectLanguage = (lang) => {
    setSelectedLang(lang);
    setLangOpen(false);
    try {
      localStorage.setItem('ailyt_language', JSON.stringify(lang));
    } catch (e) {}
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="AILYT Logo" className="logo-img" />
        </Link>

        {/* Hamburger Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        {/* Navigation Menu */}
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li 
            className="nav-item dropdown"
            onMouseEnter={() => toggleDropdown('what-we-do')}
            onMouseLeave={() => toggleDropdown('what-we-do')}
          >
            <button
              className="nav-links dropdown-btn"
              onClick={() => toggleDropdown('what-we-do')}
            >
              What we do
              <span className={`chevron ${openDropdown === 'what-we-do' ? 'open' : ''}`}>
                ▼
              </span>
            </button>
            {openDropdown === 'what-we-do' && (
              <div className="dropdown-menu">
                <Link to="/learning" onClick={closeMenu}>Learning</Link>
                <Link to="/it-services" onClick={closeMenu}>IT Services</Link>
                <Link to="/community" onClick={closeMenu}>Community</Link>
              </div>
            )}
          </li>


          <li 
            className="nav-item dropdown"
            onMouseEnter={() => toggleDropdown('who-we-are')}
            onMouseLeave={() => toggleDropdown('who-we-are')}
          >
            <button
              className="nav-links dropdown-btn"
              onClick={() => toggleDropdown('who-we-are')}
            >
              Who we are
              <span className={`chevron ${openDropdown === 'who-we-are' ? 'open' : ''}`}>
                ▼
              </span>
            </button>
            {openDropdown === 'who-we-are' && (
              <div className="dropdown-menu">
                <Link to="/our-story" onClick={closeMenu}>Our Story</Link>
                <a href="#">Team</a>
                <a href="#">Brand Values</a>
              </div>
            )}
          </li>

        </ul>

        {/* Right Side Icons */}
        <div className="nav-right" onBlur={() => { if (langOpen) setLangOpen(false); }}>
          <div className="language-wrapper">
            <button className="language-btn" onClick={toggleLang} aria-haspopup="true" aria-expanded={langOpen}>
              <span className="lang-emoji">{selectedLang.emoji}</span>
              <span className="lang-label">{selectedLang.label.split(' - ')[0]}</span>
              <span className={`chevron ${langOpen ? 'open' : ''}`}>▼</span>
            </button>

            {langOpen && (
              <div className="lang-menu">
                {languages.map((lang) => (
                  <button key={lang.code} className="lang-item" onClick={() => selectLanguage(lang)}>
                    <span className="lang-emoji">{lang.emoji}</span>
                    <span className="lang-text">{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
