import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LearningCourses.css';

const courseHighlights = [
  {
    title: 'Job-Ready Roadmap',
    description: 'Start from fundamentals and graduate into advanced, real-world AI workflows.'
  },
  {
    title: 'Project-Based Learning',
    description: 'Build capstone projects that demonstrate your data and AI skills.'
  },
  {
    title: 'Industry Tooling',
    description: 'Work with Python, SQL, ML frameworks, and modern data stacks.'
  },
  {
    title: 'Mentor Guidance',
    description: 'Weekly mentor reviews to keep you aligned with outcomes.'
  },
  {
    title: 'Career Support',
    description: 'Portfolio reviews, mock interviews, and placement guidance.'
  },
  {
    title: 'Flexible Learning',
    description: 'Choose between classroom, online, or hybrid mode.'
  }
];

const curriculumModules = [
  {
    title: 'Module 1: Data Foundations',
    duration: '2 Weeks',
    topics: [
      'Python essentials and data handling',
      'SQL for analytics and reporting',
      'Data cleaning and preprocessing',
      'Exploratory data analysis'
    ]
  },
  {
    title: 'Module 2: Machine Learning Core',
    duration: '3 Weeks',
    topics: [
      'Supervised vs unsupervised learning',
      'Model training and evaluation',
      'Feature engineering and selection',
      'ML pipelines and best practices'
    ]
  },
  {
    title: 'Module 3: Deep Learning & NLP',
    duration: '3 Weeks',
    topics: [
      'Neural networks and optimization',
      'Computer vision fundamentals',
      'NLP workflows and embeddings',
      'Model fine-tuning strategies'
    ]
  },
  {
    title: 'Module 4: Agentic AI Systems',
    duration: '2 Weeks',
    topics: [
      'Agents, tools, and orchestration',
      'Prompt engineering for workflows',
      'Multi-step reasoning pipelines',
      'Responsible AI considerations'
    ]
  },
  {
    title: 'Module 5: Capstone & Deployment',
    duration: '2 Weeks',
    topics: [
      'End-to-end project build',
      'Model deployment basics',
      'Dashboards and reporting',
      'Career portfolio checklist'
    ]
  }
];

const trainerProfile = {
  name: 'Lead Mentor: AILYT Data Science Faculty',
  experience: '10+ years in analytics, ML, and AI product delivery',
  specialties: ['Machine Learning', 'Agentic AI', 'Data Engineering', 'Model Deployment'],
  description:
    'Your mentor guides you from fundamentals to advanced AI workflows with structured checkpoints, real datasets, and portfolio feedback.'
};

const courseFormats = [
  {
    title: 'Duration',
    detail: '12 Weeks (Weekend + Weekday Batches)'
  },
  {
    title: 'Mode',
    detail: 'Online | Offline | Hybrid'
  },
  {
    title: 'Batch Size',
    detail: 'Small groups for personalized feedback'
  }
];

const certificationBenefits = [
  'Industry-recognized course completion certificate',
  'Capstone project showcase and portfolio review',
  'Interview preparation and mock sessions',
  'Resume refinement and career guidance',
  'Access to internship and placement support'
];

const faqs = [
  {
    question: 'Who can join this course?',
    answer:
      'This course is designed for graduates, working professionals, and career switchers who want structured training in data science and AI.'
  },
  {
    question: 'Do I need prior coding experience?',
    answer:
      'Basic familiarity with computers is helpful, but we start from core Python and data foundations.'
  },
  {
    question: 'Will I get placement assistance?',
    answer:
      'Yes. We include resume reviews, mock interviews, and guidance for internships and job opportunities.'
  },
  {
    question: 'Can I attend online?',
    answer:
      'Absolutely. You can choose online, classroom, or hybrid sessions based on your schedule.'
  }
];

const AccordionItem = ({ id, title, subtitle, isOpen, onToggle, children }) => (
  <div className={`accordion-item ${isOpen ? 'is-open' : ''}`}>
    <button
      type="button"
      className="accordion-trigger"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={id}
    >
      <span>
        {title}
        {subtitle && <em>{subtitle}</em>}
      </span>
      <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
    </button>
    <div id={id} className="accordion-panel" role="region" aria-hidden={!isOpen}>
      <div className="accordion-content">{children}</div>
    </div>
  </div>
);

const LearningCourses = () => {
  const [openModule, setOpenModule] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="learning-course-page">
      <header className="learning-course-hero">
        <div className="learning-course-container learning-course-hero-grid">
          <div className="learning-course-hero-text">
            <p className="course-kicker">AILYT Learning / Advanced Programs</p>
            <h1>Full Stack Data Science & Agentic AI</h1>
            <p className="course-summary">
              Build production-ready data science skills with structured modules, mentor feedback,
              and real project delivery. Learn the complete stack from data foundations to
              AI-driven automation.
            </p>
            <div className="learning-course-hero-actions">
              <Link to="/learning/contact" className="cta-primary">
                Enroll Now
              </Link>
              <a href="#curriculum" className="cta-secondary">
                View Curriculum
              </a>
            </div>
          </div>
          <aside className="learning-course-hero-card">
            <h3>Course Snapshot</h3>
            <ul>
              <li>
                <span>Next Batch</span>
                <strong>April 2026</strong>
              </li>
              <li>
                <span>Level</span>
                <strong>Beginner → Advanced</strong>
              </li>
              <li>
                <span>Projects</span>
                <strong>6 Portfolio Projects</strong>
              </li>
              <li>
                <span>Mentorship</span>
                <strong>Weekly Live Reviews</strong>
              </li>
            </ul>
            <Link to="/learning/contact" className="cta-secondary">
              Talk to an Advisor
            </Link>
          </aside>
        </div>
      </header>

      <section className="learning-course-section">
        <div className="learning-course-container">
          <div className="section-header">
            <h2>Course Highlights</h2>
            <p>Everything you need to become confident in data science and AI delivery.</p>
          </div>
          <div className="learning-course-grid">
            {courseHighlights.map((item) => (
              <article key={item.title} className="learning-course-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="curriculum" className="learning-course-section learning-course-curriculum">
        <div className="learning-course-container">
          <div className="section-header">
            <h2>Curriculum & Syllabus</h2>
            <p>Expandable modules that map to real-world outcomes and tools.</p>
          </div>
          <div className="accordion">
            {curriculumModules.map((module, index) => (
              <AccordionItem
                key={module.title}
                id={`module-${index}`}
                title={module.title}
                subtitle={module.duration}
                isOpen={openModule === index}
                onToggle={() => setOpenModule(openModule === index ? -1 : index)}
              >
                <ul>
                  {module.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      <section className="learning-course-section">
        <div className="learning-course-container learning-course-mentor">
          <div className="mentor-card">
            <div className="mentor-avatar">
              <span>AI</span>
            </div>
            <div>
              <h2>{trainerProfile.name}</h2>
              <p className="mentor-experience">{trainerProfile.experience}</p>
              <p>{trainerProfile.description}</p>
              <div className="mentor-tags">
                {trainerProfile.specialties.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="learning-course-section learning-course-format">
        <div className="learning-course-container">
          <div className="section-header">
            <h2>Duration & Mode</h2>
            <p>Pick the learning format that fits your schedule.</p>
          </div>
          <div className="learning-course-grid">
            {courseFormats.map((format) => (
              <article key={format.title} className="learning-course-card">
                <h3>{format.title}</h3>
                <p>{format.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="learning-course-section">
        <div className="learning-course-container">
          <div className="section-header">
            <h2>Certification & Benefits</h2>
            <p>Recognized credentials plus career-ready outcomes.</p>
          </div>
          <div className="benefits-grid">
            {certificationBenefits.map((benefit) => (
              <article key={benefit} className="learning-course-card">
                <p>{benefit}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="learning-course-section learning-course-faq">
        <div className="learning-course-container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Clear answers before you enroll.</p>
          </div>
          <div className="accordion">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                id={`faq-${index}`}
                title={faq.question}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                <p>{faq.answer}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      <section className="learning-course-section learning-course-cta">
        <div className="learning-course-container">
          <div className="cta-card">
            <div>
              <h2>Ready to start your AI journey?</h2>
              <p>Talk to our advisors and secure your seat in the next batch.</p>
            </div>
            <div className="cta-actions">
              <Link to="/learning/contact" className="cta-primary">
                Enroll Today
              </Link>
              <Link to="/learning/contact" className="cta-secondary">
                Request a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LearningCourses;
