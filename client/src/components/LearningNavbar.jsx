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
              <Link to="/learning" className="learning-home-link">
                <svg
                  className="learning-home-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3l9-8z"
                    fill="currentColor"
                  />
                </svg> 
              </Link>
            </li>

            <li
              className="learning-nav-item dropdown"
              onMouseEnter={() => toggleDropdown('courses')}
              onMouseLeave={() => { toggleDropdown('courses'); setOpenSubmenu(null); }}
            >
              <button className="learning-link-btn">All Courses ▾</button>
              {openDropdown === 'courses' && (
                <div className="learning-dropdown-menu">
                  {/* <Link to="/learning/all-courses">All Courses</Link> */}
                  <div className="learning-submenu-group">
                    <button
                      className="learning-submenu-btn"
                      onMouseEnter={() => setOpenSubmenu('ongoing')}
                    >
                      Full Stack Courses ▸
                    </button>
                    {openSubmenu === 'ongoing' && (
                      <div className="learning-submenu">
                       
                        <Link to="/learning/all-courses/python">Python</Link>
                        <Link to="/learning/all-courses/data-science">Data Science with Agentic AI</Link>
                        <Link to="/learning/all-courses/web-development">Web Development</Link>
                      </div>
                    )}
                  </div>
                  {/* <div className="learning-submenu-group">
                    <button 
                      className="learning-submenu-btn"
                      onMouseEnter={() => setOpenSubmenu('english')}
                    >
                      Ongoing courses ▸
                    </button>
                    {openSubmenu === 'english' && (
                      <div className="learning-submenu">
                        <Link to="/learning/courses#spoken-english">Data Science with agentic AI</Link>
                        <Link to="/learning/courses#confidence">web & app developmenmt</Link>
                        <Link to="/learning/courses#interview">Interview Skill</Link>
                      </div>
                    )}
                  </div> */}

                  <div className="learning-submenu-group">
                    <button 
                      className="learning-submenu-btn"
                      onMouseEnter={() => setOpenSubmenu('computer')}
                    >
                      Trending Courses ▸
                    </button>
                    {openSubmenu === 'computer' && (
                      <div className="learning-submenu">
                        <Link to="/learning/all-courses/basic-computer">Basic Computer</Link>
                        <Link to="/learning/courses#ccc">CCC</Link>
                        <Link to="/learning/courses#olevel">O-Level</Link>
                         
                        
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
              <button className="learning-link-btn">Internship▾</button>
              {openDropdown === 'internships' && (
                <div className="learning-dropdown-menu">
                  <Link to="/learning/internship-programs#6month">Real-Time Project</Link>
                  <Link to="/learning/internship-programs#tech-tracks">Weekend Training</Link>
                  <Link to="/learning/internship-programs#tools">Internship</Link>
                </div>
              )}
            </li>

            {/* <li
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
            </li> */}

            <li className="learning-nav-item">
              <Link to="/learning/contact">Contact</Link>
            </li>

            {/* <li className="learning-nav-item">
              <Link to="/learning/enquiries">Company Enquiries</Link>
            </li> */}
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
