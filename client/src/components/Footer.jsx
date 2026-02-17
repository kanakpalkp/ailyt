import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-section">
            <h4>About Ailyt</h4>
            <p>Ailyt is a premier online learning platform offering world-class coding and soft skills courses with industry-leading instructors and practical project-based learning.</p>
            <div className="social-links">
              <a href="https://www.facebook.com/Ailytlearning/" aria-label="Facebook">f</a>
              
              <a href="https://www.linkedin.com/company/ailyt-learning-center" aria-label="LinkedIn">in</a>
              <a href="https://www.instagram.com/ailyt_learning_center" aria-label="Instagram">📷</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/Learning">Learning</Link></li>
              <li><Link to="/it-services">IT Services</Link></li>
              <li><Link to="/Community">Community</Link></li>
              {/* <li><Link to="/Blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/blog">Blog</Link></li> */}
            </ul>
          </div>

          {/* <div className="footer-section">
            <h4>Courses</h4>
            <ul>
              <li><a href="#courses">Web Development</a></li>
              <li><a href="#courses">Mobile App Dev</a></li>
              <li><a href="#courses">Data Science</a></li>
              <li><a href="#courses">Spoken English</a></li>
              <li><a href="#courses">AI & ML</a></li>
            </ul>
          </div> */}

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>📧 info@ailyt.com</li>
              <li>📞 +91 8360611232</li>
              <li>📍 6-Karanpur, Dehradun</li>
              <li className="newsletter-form">
                <input type="email" placeholder="Your email" />
                <button>Subscribe</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Ailyt. All rights reserved.</p>
        <p className="developer-info">Developed by kanakpalkp</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookies">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
