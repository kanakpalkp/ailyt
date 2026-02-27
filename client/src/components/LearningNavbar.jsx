import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LearningNavbar.css';
import logo from '../assets/images/AILYTLOGOPNG.png';

const LearningNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const toggleSubmenu = (key) => {
    setOpenSubmenu(openSubmenu === key ? null : key);
  };

  return (
    <>
      <nav className="learning-navbar">
        <div className="learning-navbar-container">
          <Link to="/" className="learning-logo">
            <img src={logo} alt="AILYT Logo" className="learning-logo-img" />
          </Link>

          <ul className="learning-nav-menu">
            <li className="learning-nav-item">
              <Link to="/learning">Home</Link>
            </li>

            <li
              className="learning-nav-item dropdown"
              onMouseEnter={() => toggleDropdown('courses')}
              onMouseLeave={() => { toggleDropdown('courses'); setOpenSubmenu(null); }}
            >
              <button className="learning-link-btn">Courses ▾</button>
              {openDropdown === 'courses' && (
                <div className="learning-dropdown-menu">
                  <div className="learning-submenu-group">
                    <button 
                      className="learning-submenu-btn"
                      onMouseEnter={() => setOpenSubmenu('english')}
                    >
                      English Speaking ▸
                    </button>
                    {openSubmenu === 'english' && (
                      <div className="learning-submenu">
                        <Link to="/learning/courses#spoken-english">Spoken English</Link>
                        <Link to="/learning/courses#confidence">Confidence Building</Link>
                        <Link to="/learning/courses#interview">Interview Skills</Link>
                      </div>
                    )}
                  </div>

                  <div className="learning-submenu-group">
                    <button 
                      className="learning-submenu-btn"
                      onMouseEnter={() => setOpenSubmenu('computer')}
                    >
                      Computer Courses ▸
                    </button>
                    {openSubmenu === 'computer' && (
                      <div className="learning-submenu">
                        <Link to="/learning/courses#ccc">CCC</Link>
                        <Link to="/learning/courses#olevel">O-Level</Link>
                        <Link to="/learning/courses#basic-computers">Basic Computers</Link>
                      </div>
                    )}
                  </div>

                  <div className="learning-submenu-group">
                    <button 
                      className="learning-submenu-btn"
                      onMouseEnter={() => setOpenSubmenu('data')}
                    >
                      Data & Tech ▸
                    </button>
                    {openSubmenu === 'data' && (
                      <div className="learning-submenu">
                        <Link to="/learning/courses#excel">Excel</Link>
                        <Link to="/learning/courses#python">Python</Link>
                        <Link to="/learning/courses#data-analytics">Data Analytics</Link>
                        <Link to="/learning/courses#tableau">Tableau</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </li>

            <li
              className="learning-nav-item dropdown"
              onMouseEnter={() => toggleDropdown('internships')}
              onMouseLeave={() => toggleDropdown('internships')}
            >
              <button className="learning-link-btn">Internship Programs ▾</button>
              {openDropdown === 'internships' && (
                <div className="learning-dropdown-menu">
                  <Link to="/learning/internship-programs#6month">6-Month Internship Model</Link>
                  <Link to="/learning/internship-programs#tech-tracks">Tech Tracks</Link>
                  <Link to="/learning/internship-programs#tools">Tools & Workflow</Link>
                </div>
              )}
            </li>

            <li
              className="learning-nav-item dropdown"
              onMouseEnter={() => toggleDropdown('about')}
              onMouseLeave={() => toggleDropdown('about')}
            >
              <button className="learning-link-btn">About Learning Centre ▾</button>
              {openDropdown === 'about' && (
                <div className="learning-dropdown-menu">
                  <Link to="/learning/about#methodology">Teaching Methodology</Link>
                  <Link to="/learning/about#infrastructure">Infrastructure (Smart Board, Hybrid)</Link>
                </div>
              )}
            </li>

            <li className="learning-nav-item">
              <Link to="/learning/contact">Contact / Enquiry</Link>
            </li>

            <li className="learning-nav-item">
              <Link to="/learning/enquiries">Company Enquiries</Link>
            </li>
          </ul>
        </div>
      </nav>

      <a
        href="https://wa.me/8630611232?text=Hi%20AILYT%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
        target="_blank"
        rel="noopener noreferrer"
        className="hero-whatsapp-btn"
        title="Chat with us on WhatsApp"
      >
        💬
      </a>
    </>
  );
};

export default LearningNavbar;
