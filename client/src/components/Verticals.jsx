import React, { useRef, useState } from 'react';
import './Verticals.css';
import { Link } from 'react-router-dom';

const Verticals = () => {
  const doorsRef = useRef(null);
  const [doorsOpen, setDoorsOpen] = useState(false);

  const handleMouseEnter = () => setDoorsOpen(true);
  const handleMouseLeave = () => setDoorsOpen(false);

  return (
    <section className="verticals-section" id="verticals">
      <div className="verticals-container">
        <h2>Our Verticals</h2>
        <div
          className="verticals-stage"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className={`doors ${doorsOpen ? 'open' : ''}`} 
            ref={doorsRef}
          >
            <div className="door door-left">
              <div className="door-text">our</div>
            </div>
            <div className="door door-right">
              <div className="door-text">verticals</div>
            </div>
          </div>

          <div className="verticals-content">
            <div className="vertical-card" tabIndex={0}>
              <div>
                <h3>AILYT Learning Centre</h3>
                <p>Structured courses, mentorship, and projects to help you become job-ready.</p>
              </div>

              <div className="more-info" aria-hidden="true">
                <ul>
                  <li>Project-based curriculum with real-world deliverables</li>
                  <li>Weekly mentor sessions and code reviews</li>
                  <li>Interview preparation and placement support</li>
                </ul>
              </div>

              <Link to="/learning" className="cta">Explore Learning Centre</Link>
            </div>

            <div className="vertical-card" tabIndex={0}>
              <div>
                <h3>AILYT IT Services</h3>
                <p>Product and project delivery services by our trained teams for businesses.</p>
              </div>

              <div className="more-info" aria-hidden="true">
                <ul>
                  <li>Dedicated teams for web & cloud delivery</li>
                  <li>Transparent SLAs and milestone-based billing</li>
                  <li>Support for onboarding client teams and handover</li>
                </ul>
              </div>

              <Link to="/it-services" className="cta">Explore IT Services</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verticals;
