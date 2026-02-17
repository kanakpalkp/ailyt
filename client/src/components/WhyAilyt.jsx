import React from 'react';
import './WhyAilyt.css';

const WhyAilyt = () => {
  const cards = [
    {title: 'Practical Curriculum', body: 'Project-focused courses that mirror real-world problems.'},
    {title: 'Experienced Mentors', body: 'Industry professionals guide students.'},
    {title: 'Placement Support', body: 'Resume reviews and mock interviews.'}
  ];

  return (
    <section className="why-ailyt" id="why">
      <div className="container">
        <h2>Why AILYT</h2>
        <div className="why-grid">
          {cards.map((c, i) => (
            <div
              key={i}
              className="why-card"
              style={{ ['--r']: Math.random(), ['--i']: i }}
              tabIndex={0}
            >
              <div className="why-card-inner">
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
              <div className="why-extra" aria-hidden="true">
                <p>Learn more about {c.title.toLowerCase()} through our courses and projects.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAilyt;
