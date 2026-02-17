import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/OurStory.css';

const storyPhases = [
  {
    year: '2019',
    title: 'The First Spark',
    description:
      'AILYT started with one clear observation: talent is everywhere, but practical opportunities are not. We began by mentoring small batches and testing what actually helps learners become job-ready.'
  },
  {
    year: '2021',
    title: 'Learning With Outcomes',
    description:
      'We shaped our training into a hands-on model with projects, internship workflows, and confidence building. The focus shifted from just completing courses to building real capability.'
  },
  {
    year: '2023',
    title: 'From Learning to Delivery',
    description:
      'The journey expanded into IT services. Alongside training, we started delivering web, mobile, data, and integration solutions, connecting education with real industry execution.'
  },
  {
    year: 'Today',
    title: 'One Ecosystem',
    description:
      'AILYT now runs as one ecosystem where learning, internships, and client projects reinforce each other. Students gain exposure, businesses get quality delivery, and communities grow together.'
  }
];

const storyPillars = [
  {
    heading: 'Learn by Doing',
    copy: 'Real tasks, real projects, and practical workflows over passive theory.'
  },
  {
    heading: 'Build for Impact',
    copy: 'Every product, class, and initiative is designed to solve meaningful problems.'
  },
  {
    heading: 'Grow Together',
    copy: 'Students, mentors, teams, and partners move forward as one network.'
  }
];

const impactStats = [
  { label: 'Learners Trained', value: '1000+' },
  { label: 'Projects Delivered', value: '120+' },
  { label: 'Interns Mentored', value: '300+' },
  { label: 'Industry Collaborations', value: '40+' }
];

const OurStory = () => {
  const navigate = useNavigate();

  return (
    <main className="our-story-page">
      <section className="our-story-hero">
        <div className="our-story-container">
          <div className="our-story-header-top">
            <button className="our-story-back-btn" onClick={() => navigate('/')}>
              <span>&larr;</span> Back to Home
            </button>
          </div>

          <div className="our-story-hero-content">
            <p className="our-story-kicker">Who We Are</p>
            <h1>Our Story</h1>
            <p className="our-story-intro">
              AILYT was built to bridge the gap between learning and real execution. What
              began as a focused mentoring effort has grown into a complete ecosystem of
              education, internships, and IT services.
            </p>
          </div>
        </div>
      </section>

      <section className="our-story-timeline">
        <div className="our-story-container">
          <h2>Journey So Far</h2>
          <div className="our-story-grid">
            {storyPhases.map((phase) => (
              <article key={phase.year} className="our-story-card">
                <span className="our-story-year">{phase.year}</span>
                <h3>{phase.title}</h3>
                <p>{phase.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="our-story-pillars">
        <div className="our-story-container">
          <h2>What Defines Us</h2>
          <div className="our-story-pillar-grid">
            {storyPillars.map((pillar) => (
              <article key={pillar.heading} className="our-story-pillar-card">
                <h3>{pillar.heading}</h3>
                <p>{pillar.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="our-story-impact">
        <div className="our-story-container">
          <h2>Growing With Purpose</h2>
          <div className="our-story-stats-grid">
            {impactStats.map((stat) => (
              <article key={stat.label} className="our-story-stat-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="our-story-cta">
        <div className="our-story-container">
          <h2>The Next Chapter Starts With You</h2>
          <p>
            Whether you want to learn, collaborate, or build your product with us, we are
            ready to work together.
          </p>
          <button className="our-story-cta-btn" onClick={() => navigate('/contact')}>
            Connect With AILYT
          </button>
        </div>
      </section>

      <a
        href="https://wa.me/8630611232?text=Hi%20AILYT%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
        target="_blank"
        rel="noopener noreferrer"
        className="hero-whatsapp-btn"
        title="Chat with us on WhatsApp"
      >
        💬
      </a>
    </main>
  );
};

export default OurStory;
